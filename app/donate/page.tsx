"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { CheckCircle, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DonatePage() {
  const router = useRouter()
  const [amount, setAmount] = useState<string>("50")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Calculate the actual amount in the smallest currency unit (kobo/cents)
      const donationAmount =
        amount === "custom" ? Number.parseFloat(customAmount) * 100 : Number.parseFloat(amount) * 100

      // Generate a reference
      const reference = `donate_${Date.now()}_${Math.floor(Math.random() * 1000000)}`

      // Initialize Paystack transaction
      const response = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount: donationAmount,
          reference,
          metadata: {
            name: `${firstName} ${lastName}`,
            message,
            type: "donation",
          },
        }),
      })

      const data = await response.json()

      if (data.success && data.data.authorization_url) {
        // Redirect to Paystack payment page
        window.location.href = data.data.authorization_url
      } else {
        setError(data.message || "Failed to initialize payment")
        setIsLoading(false)
      }
    } catch (err) {
      console.error("Payment error:", err)
      setError("An error occurred while processing your donation. Please try again.")
      setIsLoading(false)
    }
  }

  // Check if this is a return from Paystack with successful payment
  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    const reference = query.get("reference")
    const status = query.get("status")

    if (reference && status === "success") {
      // Verify the payment
      const verifyPayment = async () => {
        setIsLoading(true)
        try {
          const response = await fetch("/api/payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              reference,
              email,
              name: `${firstName} ${lastName}`,
              amount: amount === "custom" ? Number.parseFloat(customAmount) * 100 : Number.parseFloat(amount) * 100,
              paymentType: "donation",
            }),
          })

          const data = await response.json()
          if (data.success) {
            setSubmitted(true)
          } else {
            setError(data.message || "Payment verification failed")
          }
        } catch (err) {
          console.error("Verification error:", err)
          setError("An error occurred while verifying your payment")
        } finally {
          setIsLoading(false)
        }
      }

      verifyPayment()
    }
  }, [amount, customAmount, email, firstName, lastName])

  if (submitted) {
    return (
      <div className="container px-4 md:px-6 py-16 md:py-32">
        <motion.div
          className="max-w-md mx-auto text-center space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold font-serif">Thank You for Your Donation!</h1>
          <p className="text-gray-700">
            Your generous contribution will help us continue our mission of empowering youth through basketball,
            education, and cultural pride.
          </p>
          <p className="text-gray-700">We've sent a confirmation email with details of your donation.</p>
          <Button asChild className="mt-4">
            <a href="/">Return to Homepage</a>
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container px-4 md:px-6 py-16 md:py-32">
      <div className="max-w-3xl mx-auto space-y-12">
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-serif">Make a Donation</h1>
          <p className="text-xl text-gray-700 max-w-[700px] mx-auto">
            Your contribution helps us provide opportunities for youth in Ghana through basketball, education, and
            cultural empowerment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Donation Details</CardTitle>
              <CardDescription>Choose an amount and provide your information</CardDescription>
            </CardHeader>
            <CardContent>
              {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md">{error}</div>}
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <Label>Select Donation Amount</Label>
                  <RadioGroup
                    value={amount}
                    onValueChange={(value) => {
                      setAmount(value)
                      if (value !== "custom") setCustomAmount("")
                    }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  >
                    <div>
                      <RadioGroupItem value="25" id="amount-25" className="sr-only" />
                      <Label
                        htmlFor="amount-25"
                        className={`flex h-14 items-center justify-center rounded-md border-2 ${
                          amount === "25" ? "border-blue-600 bg-blue-50" : "border-gray-200"
                        } cursor-pointer text-center font-medium transition-colors hover:bg-gray-50`}
                      >
                        $25
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="50" id="amount-50" className="sr-only" />
                      <Label
                        htmlFor="amount-50"
                        className={`flex h-14 items-center justify-center rounded-md border-2 ${
                          amount === "50" ? "border-blue-600 bg-blue-50" : "border-gray-200"
                        } cursor-pointer text-center font-medium transition-colors hover:bg-gray-50`}
                      >
                        $50
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="100" id="amount-100" className="sr-only" />
                      <Label
                        htmlFor="amount-100"
                        className={`flex h-14 items-center justify-center rounded-md border-2 ${
                          amount === "100" ? "border-blue-600 bg-blue-50" : "border-gray-200"
                        } cursor-pointer text-center font-medium transition-colors hover:bg-gray-50`}
                      >
                        $100
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
                      <Label
                        htmlFor="amount-custom"
                        className={`flex h-14 items-center justify-center rounded-md border-2 ${
                          amount === "custom" ? "border-blue-600 bg-blue-50" : "border-gray-200"
                        } cursor-pointer text-center font-medium transition-colors hover:bg-gray-50`}
                      >
                        Custom
                      </Label>
                    </div>
                  </RadioGroup>

                  {amount === "custom" && (
                    <div className="space-y-2">
                      <Label htmlFor="custom-amount">Enter Amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="Enter amount"
                          className="pl-8"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          required={amount === "custom"}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Share why you're supporting our mission"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full btn-gradient" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Complete Donation"
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="border-t pt-6 text-center text-sm text-gray-500">
              Your donation is tax-deductible. You will receive a receipt via email.
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
