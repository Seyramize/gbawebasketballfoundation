"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CheckCircle, Mail, MapPin, Phone, Loader2 } from "lucide-react"

export default function ContactPartnersPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Form state
  const [name, setName] = useState("")
  const [organization, setOrganization] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [reason, setReason] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          organization,
          email,
          phone,
          reason,
          message,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
      } else {
        setError(data.message || "Failed to send message")
      }
    } catch (err) {
      console.error("Contact form error:", err)
      setError("An error occurred while sending your message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

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
          <h1 className="text-3xl font-bold font-serif">Message Sent!</h1>
          <p className="text-gray-700">
            Thank you for reaching out to the Gbawe Basketball Foundation. We've received your message and will get back
            to you shortly.
          </p>
          <Button asChild className="mt-4">
            <a href="/">Return to Homepage</a>
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container px-4 md:px-6 py-16 md:py-32">
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-serif">
            Let's Build Something Bigger Than Us.
          </h1>
          <p className="text-xl text-gray-700 max-w-[700px] mx-auto">
            Want to support, volunteer, or bring the Foundation to your school or region? We'd love to connect with
            dreamers, givers, and leaders across the world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization (if any)</Label>
                      <Input
                        id="organization"
                        placeholder="Your organization"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        placeholder="Your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Contact</Label>
                    <Select onValueChange={(value) => setReason(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="donation">I want to make a donation</SelectItem>
                        <SelectItem value="volunteer">I want to volunteer</SelectItem>
                        <SelectItem value="partnership">I want to discuss a partnership</SelectItem>
                        <SelectItem value="question">I have a question</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="min-h-[120px]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full btn-gradient" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Get in Touch"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 font-serif">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-700">foundation@gbawebasketball.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-700">+233 XX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-700">
                        Gbawe Basketball Foundation
                        <br />
                        Accra, Ghana
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold font-serif">Partner With Us:</h3>
                <p className="text-gray-700">We're open to collaborations in:</p>
                <ul className="space-y-2">
                  <li className="bg-gray-50 p-3 rounded-lg text-center">Education</li>
                  <li className="bg-gray-50 p-3 rounded-lg text-center">Sports</li>
                  <li className="bg-gray-50 p-3 rounded-lg text-center">Media</li>
                  <li className="bg-gray-50 p-3 rounded-lg text-center">Cultural initiatives</li>
                  <li className="bg-gray-50 p-3 rounded-lg text-center">Philanthropy</li>
                </ul>
                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/propose">Propose a Project</Link>
                  </Button>
                  <Button asChild className="w-full btn-gradient">
                    <Link href="/schedule">Schedule a Call</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl font-medium font-serif">Alone, we grow. Together, we build legacy.</p>
        </motion.div>
      </div>
    </div>
  )
}
