"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function SponsorPage() {
  const [submitted, setSubmitted] = useState(false)
  const [sponsorType, setSponsorType] = useState("athlete")

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
          <h1 className="text-3xl font-bold font-serif">Thank You for Becoming a Sponsor!</h1>
          <p className="text-gray-700">
            Your commitment to sponsorship will make a direct impact on the lives of young athletes in our program.
            We'll be in touch shortly with more details about your sponsorship.
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
      <div className="max-w-3xl mx-auto space-y-12">
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-serif">Sponsor a Dream</h1>
          <p className="text-xl text-gray-700 max-w-[700px] mx-auto">
            Make a direct impact by sponsoring an athlete, program, or academy project. Your sponsorship creates a
            personal connection with the youth you're supporting.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Sponsorship Details</CardTitle>
              <CardDescription>Choose what you'd like to sponsor and provide your information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <Label>What would you like to sponsor?</Label>
                  <RadioGroup
                    value={sponsorType}
                    onValueChange={setSponsorType}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <div>
                      <RadioGroupItem value="athlete" id="sponsor-athlete" className="sr-only" />
                      <Label
                        htmlFor="sponsor-athlete"
                        className={`flex h-14 items-center justify-center rounded-md border-2 ${
                          sponsorType === "athlete" ? "border-blue-600 bg-blue-50" : "border-gray-200"
                        } cursor-pointer text-center font-medium transition-colors hover:bg-gray-50`}
                      >
                        Individual Athlete
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="program" id="sponsor-program" className="sr-only" />
                      <Label
                        htmlFor="sponsor-program"
                        className={`flex h-14 items-center justify-center rounded-md border-2 ${
                          sponsorType === "program" ? "border-blue-600 bg-blue-50" : "border-gray-200"
                        } cursor-pointer text-center font-medium transition-colors hover:bg-gray-50`}
                      >
                        Program
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="academy" id="sponsor-academy" className="sr-only" />
                      <Label
                        htmlFor="sponsor-academy"
                        className={`flex h-14 items-center justify-center rounded-md border-2 ${
                          sponsorType === "academy" ? "border-blue-600 bg-blue-50" : "border-gray-200"
                        } cursor-pointer text-center font-medium transition-colors hover:bg-gray-50`}
                      >
                        Academy Project
                      </Label>
                    </div>
                  </RadioGroup>

                  {sponsorType === "athlete" && (
                    <div className="space-y-2">
                      <Label htmlFor="athlete-age">Preferred Age Group</Label>
                      <Select>
                        <SelectTrigger id="athlete-age">
                          <SelectValue placeholder="Select age group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8-12">8-12 years</SelectItem>
                          <SelectItem value="13-16">13-16 years</SelectItem>
                          <SelectItem value="17-20">17-20 years</SelectItem>
                          <SelectItem value="any">Any age</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {sponsorType === "program" && (
                    <div className="space-y-2">
                      <Label htmlFor="program-type">Program Type</Label>
                      <Select>
                        <SelectTrigger id="program-type">
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="scholarship">Scholarship Program</SelectItem>
                          <SelectItem value="community">Community Outreach</SelectItem>
                          <SelectItem value="leadership">Hunter's Leadership Fellowship</SelectItem>
                          <SelectItem value="culture">Kingdom of Us: Culture Program</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {sponsorType === "academy" && (
                    <div className="space-y-2">
                      <Label htmlFor="academy-project">Academy Project</Label>
                      <Select>
                        <SelectTrigger id="academy-project">
                          <SelectValue placeholder="Select project" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="court">Court Renovation</SelectItem>
                          <SelectItem value="equipment">Equipment Drive</SelectItem>
                          <SelectItem value="facility">Training Facility</SelectItem>
                          <SelectItem value="tournament">Tournament Sponsorship</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="sponsorship-duration">Sponsorship Duration</Label>
                    <Select>
                      <SelectTrigger id="sponsorship-duration">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3months">3 months</SelectItem>
                        <SelectItem value="6months">6 months</SelectItem>
                        <SelectItem value="1year">1 year</SelectItem>
                        <SelectItem value="ongoing">Ongoing monthly support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sponsorship-amount">Monthly Sponsorship Amount</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <Input id="sponsorship-amount" type="number" className="pl-8" placeholder="100" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Share why you're interested in sponsoring and any specific preferences"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full btn-gradient">
                  Submit Sponsorship Request
                </Button>
              </form>
            </CardContent>
            <CardFooter className="border-t pt-6 text-center text-sm text-gray-500">
              After submitting, our team will contact you to finalize your sponsorship and set up payment details.
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
