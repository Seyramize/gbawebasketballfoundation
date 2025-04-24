"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"
import { CheckCircle, Handshake, Building, Globe, Award } from "lucide-react"

export default function PartnersPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
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
          <h1 className="text-3xl font-bold font-serif">Partnership Request Received!</h1>
          <p className="text-gray-700">
            Thank you for your interest in partnering with the Gbawe Basketball Foundation. Our partnerships team will
            review your information and reach out to discuss next steps.
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
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-serif">Partner With Us</h1>
          <p className="text-xl text-gray-700 max-w-[700px] mx-auto">
            Join forces with the Gbawe Basketball Foundation to create greater impact. We welcome partnerships with
            brands, NGOs, businesses, and individuals who share our vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Partnership Opportunities</CardTitle>
                <CardDescription>Explore ways to collaborate with us</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Handshake className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Joint Community Initiatives</h3>
                    <p className="text-gray-700">
                      Collaborate on community outreach programs, clinics, and events that align with both our missions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Building className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Corporate Social Responsibility</h3>
                    <p className="text-gray-700">
                      Fulfill your CSR objectives through impactful programs that support youth development and
                      education.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Co-Branded Events & Activations</h3>
                    <p className="text-gray-700">
                      Create meaningful brand experiences through basketball tournaments, camps, and cultural events.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Scholarship & Educational Support</h3>
                    <p className="text-gray-700">
                      Help talented youth access quality education through joint scholarship programs.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6">
                <p className="text-sm text-gray-500">
                  We're open to creative partnership ideas that align with our mission of empowering youth through
                  basketball, education, and cultural pride.
                </p>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Partnership Inquiry</CardTitle>
                <CardDescription>Tell us about your organization and partnership interests</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Contact Name</Label>
                        <Input id="contact-name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organization-name">Organization Name</Label>
                        <Input id="organization-name" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization-type">Organization Type</Label>
                      <Select>
                        <SelectTrigger id="organization-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="business">Business/Corporation</SelectItem>
                          <SelectItem value="ngo">NGO/Non-profit</SelectItem>
                          <SelectItem value="school">School/Educational Institution</SelectItem>
                          <SelectItem value="government">Government Agency</SelectItem>
                          <SelectItem value="sports">Sports Organization</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Partnership Interests (Select all that apply)</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="community" />
                          <Label htmlFor="community" className="font-normal">
                            Community Initiatives
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="csr" />
                          <Label htmlFor="csr" className="font-normal">
                            CSR Programs
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="events" />
                          <Label htmlFor="events" className="font-normal">
                            Co-Branded Events
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="scholarships" />
                          <Label htmlFor="scholarships" className="font-normal">
                            Scholarship Support
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="equipment" />
                          <Label htmlFor="equipment" className="font-normal">
                            Equipment Donation
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="other" />
                          <Label htmlFor="other" className="font-normal">
                            Other
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="proposal">Partnership Proposal</Label>
                      <Textarea
                        id="proposal"
                        placeholder="Describe your partnership idea and how it aligns with our mission"
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full btn-gradient">
                    Submit Partnership Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-serif">Our Current Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 h-24 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Partner Logo</p>
            </div>
            <div className="bg-gray-50 h-24 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Partner Logo</p>
            </div>
            <div className="bg-gray-50 h-24 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Partner Logo</p>
            </div>
            <div className="bg-gray-50 h-24 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Partner Logo</p>
            </div>
          </div>
          <p className="text-gray-700">
            Join these organizations in supporting our mission to empower youth through basketball.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
