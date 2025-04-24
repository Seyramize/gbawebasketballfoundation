"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { motion } from "framer-motion"
import { CheckCircle, Calendar } from "lucide-react"

export default function SchedulePage() {
  const [submitted, setSubmitted] = useState(false)
  const [callType, setCallType] = useState("video")

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
          <h1 className="text-3xl font-bold font-serif">Call Request Received!</h1>
          <p className="text-gray-700">
            Thank you for scheduling a call with us. We'll confirm your appointment via email and provide the necessary
            details for connecting.
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
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-serif">Schedule a Call</h1>
          <p className="text-xl text-gray-700 max-w-[700px] mx-auto">
            Connect with our team to discuss partnerships, sponsorships, or how you can get involved with the Gbawe
            Basketball Foundation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Calendar className="h-8 w-8 text-blue-600" />
                <div>
                  <CardTitle className="text-2xl font-serif">Book Your Appointment</CardTitle>
                  <CardDescription>Select a date and time that works for you</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization (if applicable)</Label>
                      <Input id="organization" />
                    </div>
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
                    <Label htmlFor="call-topic">Call Topic</Label>
                    <Select>
                      <SelectTrigger id="call-topic">
                        <SelectValue placeholder="Select topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="sponsorship">Sponsorship Discussion</SelectItem>
                        <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                        <SelectItem value="donation">Major Donation</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Call Type</Label>
                    <RadioGroup
                      value={callType}
                      onValueChange={setCallType}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div>
                        <RadioGroupItem value="video" id="call-video" className="sr-only" />
                        <Label
                          htmlFor="call-video"
                          className={`flex h-14 items-center justify-center rounded-md border-2 ${
                            callType === "video" ? "border-blue-600 bg-blue-50" : "border-gray-200"
                          } cursor-pointer text-center font-medium transition-colors hover:bg-gray-50`}
                        >
                          Video Call
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="phone" id="call-phone" className="sr-only" />
                        <Label
                          htmlFor="call-phone"
                          className={`flex h-14 items-center justify-center rounded-md border-2 ${
                            callType === "phone" ? "border-blue-600 bg-blue-50" : "border-gray-200"
                          } cursor-pointer text-center font-medium transition-colors hover:bg-gray-50`}
                        >
                          Phone Call
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="in-person" id="call-in-person" className="sr-only" />
                        <Label
                          htmlFor="call-in-person"
                          className={`flex h-14 items-center justify-center rounded-md border-2 ${
                            callType === "in-person" ? "border-blue-600 bg-blue-50" : "border-gray-200"
                          } cursor-pointer text-center font-medium transition-colors hover:bg-gray-50`}
                        >
                          In-Person (Accra)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="preferred-date">Preferred Date</Label>
                      <Input id="preferred-date" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferred-time">Preferred Time</Label>
                      <Select>
                        <SelectTrigger id="preferred-time">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12pm - 3pm)</SelectItem>
                          <SelectItem value="evening">Evening (3pm - 6pm)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="alternate-date">Alternate Date & Time (Optional)</Label>
                    <Input id="alternate-date" placeholder="e.g., June 15th, afternoon" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="call-agenda">Call Agenda</Label>
                    <Textarea
                      id="call-agenda"
                      placeholder="Please share what you'd like to discuss during our call"
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full btn-gradient">
                  Schedule Call
                </Button>
              </form>
            </CardContent>
            <CardFooter className="border-t pt-6 text-center text-sm text-gray-500">
              We'll confirm your appointment via email within 24 hours and provide connection details.
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
