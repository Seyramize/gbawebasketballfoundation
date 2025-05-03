import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Initialize Paystack with your secret key
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY
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
    const { amount, email, name, paymentType, reference } = body

    // Verify the payment with Paystack
    const verificationResponse = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    })

    const verificationData = await verificationResponse.json()

    // If payment is successful
    if (verificationData.status && verificationData.data.status === "success") {
      // Send receipt to donor
      await sendDonorReceipt({
        email,
        name,
        amount: amount / 100, // Convert from kobo to GHS/USD
        reference,
        date: new Date().toLocaleDateString(),
        paymentType,
      })

      // Send notification to admin
      await sendAdminNotification({
        email,
        name,
        amount: amount / 100,
        reference,
        date: new Date().toLocaleDateString(),
        paymentType,
      })

      return NextResponse.json({
        success: true,
        message: "Payment successful and receipt sent",
      })
    } else {
      return NextResponse.json({ success: false, message: "Payment verification failed" }, { status: 400 })
    }
  } catch (error) {
    console.error("Payment processing error:", error)
    return NextResponse.json({ success: false, message: "Payment processing failed" }, { status: 500 })
  }
}

// Function to send receipt to donor
async function sendDonorReceipt(data: {
  email: string
  name: string
  amount: number
  reference: string
  date: string
  paymentType: string
}) {
  const { email, name, amount, reference, date, paymentType } = data

  await transporter.sendMail({
    from: `"Gbawe Basketball Foundation" <${ADMIN_EMAIL}>`,
    to: email,
    subject: "Thank You for Your Donation",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e5e5; border-radius: 5px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://gbawebasketball.org/images/logo.png" alt="Gbawe Basketball Foundation" style="max-width: 150px;">
        </div>
        <h2 style="color: #0054a6; text-align: center;">Thank You for Your Donation!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for your generous donation to the Gbawe Basketball Foundation. Your support helps us empower youth through basketball, education, and cultural pride.</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Donation Receipt</h3>
          <p><strong>Amount:</strong> ${amount.toFixed(2)} ${paymentType === "donation" ? "USD" : "GHS"}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Reference:</strong> ${reference}</p>
          <p><strong>Type:</strong> ${paymentType}</p>
        </div>
        <p>This donation is tax-deductible to the extent allowed by law. Please keep this receipt for your tax records.</p>
        <p>If you have any questions about your donation, please contact us at ${ADMIN_EMAIL}.</p>
        <div style="text-align: center; margin-top: 30px; color: #666; font-size: 14px;">
          <p>Gbawe Basketball Foundation | Accra, Ghana</p>
          <p>Empowering youth to own their dreams</p>
        </div>
      </div>
    `,
  })
}

// Function to send notification to admin
async function sendAdminNotification(data: {
  email: string
  name: string
  amount: number
  reference: string
  date: string
  paymentType: string
}) {
  const { email, name, amount, reference, date, paymentType } = data

  await transporter.sendMail({
    from: `"Gbawe Basketball Foundation" <${ADMIN_EMAIL}>`,
    to: ADMIN_EMAIL,
    subject: `New ${paymentType} Received`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #0054a6;">New ${paymentType} Received</h2>
        <p>A new ${paymentType} has been received from ${name}.</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Amount:</strong> ${amount.toFixed(2)} ${paymentType === "donation" ? "USD" : "GHS"}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Reference:</strong> ${reference}</p>
          <p><strong>Type:</strong> ${paymentType}</p>
        </div>
      </div>
    `,
  })
}
