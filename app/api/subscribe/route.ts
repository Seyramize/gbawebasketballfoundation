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
    const { email } = body

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ success: false, message: "Valid email is required" }, { status: 400 })
    }

    // Store subscriber in database (would be implemented here)
    // For now, we'll just send notification emails

    // Send confirmation to subscriber
    await sendSubscriberConfirmation(email)

    // Send notification to admin
    await sendAdminNotification(email)

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter",
    })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ success: false, message: "Failed to process subscription" }, { status: 500 })
  }
}

// Helper function to validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Function to send confirmation to subscriber
async function sendSubscriberConfirmation(email: string) {
  await transporter.sendMail({
    from: `"Gbawe Basketball Foundation" <${ADMIN_EMAIL}>`,
    to: email,
    subject: "Welcome to Our Newsletter!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e5e5; border-radius: 5px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://gbawebasketball.org/images/logo.png" alt="Gbawe Basketball Foundation" style="max-width: 150px;">
        </div>
        <h2 style="color: #0054a6; text-align: center;">Thank You for Subscribing!</h2>
        <p>You're now subscribed to the Gbawe Basketball Foundation newsletter.</p>
        <p>You'll receive updates about our programs, events, and the impact we're making in communities across Ghana.</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p>If you didn't subscribe to our newsletter, you can safely ignore this email or contact us at ${ADMIN_EMAIL}.</p>
        </div>
        <div style="text-align: center; margin-top: 30px; color: #666; font-size: 14px;">
          <p>Gbawe Basketball Foundation | Accra, Ghana</p>
          <p>Empowering youth to own their dreams</p>
        </div>
      </div>
    `,
  })
}

// Function to send notification to admin
async function sendAdminNotification(email: string) {
  await transporter.sendMail({
    from: `"Gbawe Basketball Foundation" <${ADMIN_EMAIL}>`,
    to: ADMIN_EMAIL,
    subject: "New Newsletter Subscriber",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #0054a6;">New Newsletter Subscriber</h2>
        <p>A new user has subscribed to the newsletter:</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `,
  })
}
