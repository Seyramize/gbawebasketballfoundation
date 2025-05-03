import { NextResponse } from "next/server"

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY
const PAYSTACK_API_URL = "https://api.paystack.co/transaction/initialize"
const CALLBACK_URL = process.env.NEXT_PUBLIC_APP_URL || "https://gbawebasketball.org"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, amount, reference, metadata } = body

    // Validate required fields
    if (!email || !amount) {
      return NextResponse.json({ success: false, message: "Email and amount are required" }, { status: 400 })
    }

    // Initialize payment with Paystack
    const response = await fetch(PAYSTACK_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount,
        reference,
        callback_url: `${CALLBACK_URL}/donate?status=success`,
        metadata,
      }),
    })

    const data = await response.json()

    if (data.status) {
      return NextResponse.json({
        success: true,
        data: data.data,
      })
    } else {
      return NextResponse.json({ success: false, message: data.message }, { status: 400 })
    }
  } catch (error) {
    console.error("Paystack initialization error:", error)
    return NextResponse.json({ success: false, message: "Failed to initialize payment" }, { status: 500 })
  }
}
