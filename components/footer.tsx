"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Alert, AlertDescription } from "@/components/ui/alert"

type SubscriptionStatus = "idle" | "submitting" | "success" | "error"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<SubscriptionStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [touched, setTouched] = useState(false)

  // Basic email validation
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isEmailValid = !email || isValidEmail(email)
  const showEmailError = touched && !isEmailValid

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email before submission
    if (!email || !isValidEmail(email)) {
      setTouched(true)
      return
    }

    setStatus("submitting")
    setErrorMessage("")

    try {
      // Real API call to the subscribe endpoint
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus("success")
        setEmail("")
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus("idle")
        }, 5000)
      } else {
        setStatus("error")
        setErrorMessage(data.message || "Failed to subscribe. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Gbawe Basketball Foundation" width={80} height={80} />
            </Link>
            <p className="text-gray-400">
              Empowering the next generation through basketball, education, and cultural pride.
            </p>
            <div className="flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://facebook.com"
                      className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform inline-block"
                    >
                      <Facebook size={20} />
                      <span className="sr-only">Facebook</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://twitter.com"
                      className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform inline-block"
                    >
                      <Twitter size={20} />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://instagram.com"
                      className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform inline-block"
                    >
                      <Instagram size={20} />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://youtube.com"
                      className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform inline-block"
                    >
                      <Youtube size={20} />
                      <span className="sr-only">YouTube</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Watch us on YouTube</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/impact"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform"
                >
                  Impact & Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform"
                >
                  Media & Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform"
                >
                  Support Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-partners"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform"
                >
                  Contact & Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/impact#school-dreams"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform"
                >
                  Scholarships
                </Link>
              </li>
              <li>
                <Link
                  href="/impact#court-community"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform"
                >
                  Community Outreach
                </Link>
              </li>
              <li>
                <Link
                  href="/impact#leadership"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform"
                >
                  Leadership Fellowship
                </Link>
              </li>
              <li>
                <Link
                  href="/impact#culture"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform"
                >
                  Kingdom of Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Connect</h3>
            <p className="text-gray-400 mb-4">Sign up for updates on our programs and impact.</p>

            {status === "success" ? (
              <Alert className="bg-green-900/20 border-green-800 text-green-400">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>Thank you for subscribing! Check your email for confirmation.</AlertDescription>
              </Alert>
            ) : status === "error" ? (
              <Alert className="bg-red-900/20 border-red-800 text-red-400">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            ) : (
              <form className="space-y-2" onSubmit={handleSubscribe} noValidate>
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className={`w-full px-3 py-2 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 ${
                      showEmailError ? "border-red-500" : "border-gray-700 hover:border-gray-500"
                    }`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setTouched(true)
                    }}
                    onBlur={() => setTouched(true)}
                    aria-label="Email for newsletter"
                    aria-invalid={showEmailError}
                    aria-describedby={showEmailError ? "email-error" : undefined}
                    required
                  />
                  {showEmailError && (
                    <p id="email-error" className="text-red-500 text-xs mt-1">
                      Please enter a valid email address
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full btn-gradient"
                  disabled={status === "submitting" || showEmailError}
                  aria-busy={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
                <p className="text-xs text-gray-500 mt-1">We respect your privacy and will never share your email.</p>
              </form>
            )}

            <div className="mt-4">
              <p className="text-gray-400">foundation@gbawebasketball.org</p>
              <p className="text-gray-400">Accra, Ghana</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Gbawe Basketball Foundation. All rights reserved.
          </p>
          <p className="text-gray-400 mt-4 md:mt-0">
            Developed by <a href="https://saysey.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Sarxt Tech</a>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition-colors hover:underline text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-400 hover:text-white transition-colors hover:underline text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
