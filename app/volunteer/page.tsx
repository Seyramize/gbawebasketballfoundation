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
import { CheckCircle, Clock, Calendar, MapPin } from "lucide-react"

export default function VolunteerPage() {
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
          <h1 className="text-3xl font-bold font-serif">Thank You for Volunteering!</h1>
          <p className="text-gray-700">
            We've received your volunteer application. Our team will review your information and contact you about
            upcoming volunteer opportunities that match your skills and availability.
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
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-serif">Join Our Mission</h1>
          <p className="text-xl text-gray-700 max-w-[700px] mx-auto">
            Volunteer your time and talents to help us empower youth through basketball, education, and cultural pride.
            We need passionate individuals like you to make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Volunteer Opportunities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Coaching & Mentoring</h3>
                    <p className="text-sm text-gray-700">
                      Share your basketball knowledge and life skills with eager young athletes.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Event Support</h3>
                    <p className="text-sm text-gray-700">
                      Help organize and run tournaments, camps, and community events.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Medical Support</h3>
                    <p className="text-sm text-gray-700">
                      Provide medical assistance during events (for qualified medical professionals).
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Media & Content Creation</h3>
                    <p className="text-sm text-gray-700">
                      Help document our impact through photography, videography, and storytelling.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Administrative Support</h3>
                    <p className="text-sm text-gray-700">
                      Assist with organization, planning, and day-to-day operations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Volunteer Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Time Commitment</p>
                      <p className="text-sm text-gray-700">
                        Flexible opportunities available from one-time events to regular weekly commitments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Upcoming Events</p>
                      <p className="text-sm text-gray-700">
                        Summer camps (June-August), weekend clinics, and after-school programs during the school year.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Locations</p>
                      <p className="text-sm text-gray-700">
                        Various locations throughout Accra, with occasional opportunities in other regions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Volunteer Application</CardTitle>
                <CardDescription>Share your information and interests</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      <Label htmlFor="volunteer-role">Primary Interest</Label>
                      <Select>
                        <SelectTrigger id="volunteer-role">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="coaching">Coaching & Mentoring</SelectItem>
                          <SelectItem value="event">Event Support</SelectItem>
                          <SelectItem value="medical">Medical Support</SelectItem>
                          <SelectItem value="media">Media & Content Creation</SelectItem>
                          <SelectItem value="admin">Administrative Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Availability (Select all that apply)</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="weekday-mornings" />
                          <Label htmlFor="weekday-mornings" className="font-normal">
                            Weekday Mornings
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="weekday-afternoons" />
                          <Label htmlFor="weekday-afternoons" className="font-normal">
                            Weekday Afternoons
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="weekday-evenings" />
                          <Label htmlFor="weekday-evenings" className="font-normal">
                            Weekday Evenings
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="saturday" />
                          <Label htmlFor="saturday" className="font-normal">
                            Saturdays
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="sunday" />
                          <Label htmlFor="sunday" className="font-normal">
                            Sundays
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="school-holidays" />
                          <Label htmlFor="school-holidays" className="font-normal">
                            School Holidays
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="commitment">Time Commitment</Label>
                      <Select>
                        <SelectTrigger id="commitment">
                          <SelectValue placeholder="Select commitment" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="one-time">One-time event</SelectItem>
                          <SelectItem value="occasional">Occasional (monthly)</SelectItem>
                          <SelectItem value="regular">Regular (weekly)</SelectItem>
                          <SelectItem value="intensive">Intensive (multiple times per week)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="skills">Relevant Skills & Experience</Label>
                      <Textarea
                        id="skills"
                        placeholder="Tell us about your skills, experience, and why you want to volunteer"
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full btn-gradient">
                    Submit Volunteer Application
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="border-t pt-6 text-center text-sm text-gray-500">
                After submitting, we'll contact you about upcoming volunteer opportunities that match your interests and
                availability.
              </CardFooter>
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
          <h2 className="text-3xl font-bold font-serif">Thank You to Our Volunteers</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Our volunteers are the heart of our organization. Their dedication and passion make our mission possible.
            Join our team of changemakers today!
          </p>
        </motion.div>
      </div>
    </div>
  )
}
