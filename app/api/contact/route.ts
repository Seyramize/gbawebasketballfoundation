import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "foundation@gbawebasketball.org"

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.example.com",
  port: Number.parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASSWORD || "",
  },
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, organization, phone, reason, message } = body

    // Send notification to admin
    await transporter.sendMail({
      from: `"Gbawe Basketball Foundation" <${ADMIN_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${reason}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0054a6;">New Contact Form Submission</h2>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Organization:</strong> ${organization || "N/A"}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Reason:</strong> ${reason}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
          </div>
        </div>
      `,
      headers: {
        "X-Contact-Type": reason,
        "X-Priority": getPriorityLevel(reason),
      },
    })

    // Send confirmation to user
    await transporter.sendMail({
      from: `"Gbawe Basketball Foundation" <${ADMIN_EMAIL}>`,
      to: email,
      subject: "We've Received Your Message",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e5e5; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://gbawebasketball.org/images/logo.png" alt="Gbawe Basketball Foundation" style="max-width: 150px;">
          </div>
          <h2 style="color: #0054a6; text-align: center;">We've Received Your Message</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to the Gbawe Basketball Foundation. We've received your message regarding "${reason}" and will get back to you shortly.</p>
          <p>If you have any urgent matters, please feel free to call us at +233 XX XXX XXXX.</p>
          <div style="text-align: center; margin-top: 30px; color: #666; font-size: 14px;">
            <p>Gbawe Basketball Foundation | Accra, Ghana</p>
            <p>Empowering youth to own their dreams</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    })
  } catch (error) {
    console.error("Contact form submission error:", error)
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}

// Helper function to determine email priority based on contact reason
function getPriorityLevel(reason: string): string {
  switch (reason) {
    case "donation":
    case "partnership":
      return "1" // High priority
    case "volunteer":
      return "2" // Medium priority
    default:
      return "3" // Normal priority
  }
}
