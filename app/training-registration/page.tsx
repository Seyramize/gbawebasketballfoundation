"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"
import { CheckCircle, Calendar, Users, Clock } from "lucide-react"

export default function TrainingRegistrationPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    playerName: "",
    ageGroup: "",
    gender: "",
    school: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    emergencyContact: "",
    trainingDate: "",
    hearAbout: "",
    consent: false,
    timelyArrival: false,
    photoPermission: false,
  })

  // Calculate minimum date (7 days from today)
  const getMinDate = () => {
    const today = new Date()
    const minDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
    return minDate.toISOString().split("T")[0]
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    const requiredFields = [
      "playerName",
      "ageGroup",
      "gender",
      "parentName",
      "parentPhone",
      "parentEmail",
      "trainingDate",
      "hearAbout",
    ]

    const missingFields = requiredFields.filter((field) => !formData[field as keyof typeof formData])

    if (missingFields.length > 0) {
      alert("Please fill in all required fields.")
      return
    }

    if (!formData.consent || !formData.timelyArrival || !formData.photoPermission) {
      alert("Please check all consent boxes to proceed.")
      return
    }

    // Check if date is at least 7 days in advance
    const selectedDate = new Date(formData.trainingDate)
    const minDate = new Date(getMinDate())

    if (selectedDate < minDate) {
      alert("Training date must be at least 7 days in advance.")
      return
    }

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
          <h1 className="text-3xl font-bold font-serif">Registration Successful!</h1>
          <p className="text-gray-700">
            Thank you for registering for our free training session. We'll contact you within 48 hours to confirm your
            spot and provide additional details.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>What's Next?</strong>
              <br />• We'll send a confirmation email
              <br />• You'll receive training location details
              <br />• Bring water, comfortable clothes, and enthusiasm!
            </p>
          </div>
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
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-serif">
              Free Training Session Registration
            </h1>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              🏀 <strong>Welcome to the Gbawe Basketball Foundation!</strong>
              <br />
              Please fill this form to register for our free training session.
              <br />
              All participants must register at least one week in advance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2 justify-center">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span>Register 7 days ahead</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Clock className="h-4 w-4 text-orange-600" />
              <span>2-hour sessions</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Users className="h-4 w-4 text-green-600" />
              <span>All skill levels welcome</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Registration Form</CardTitle>
              <CardDescription>All fields marked with * are required</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Player Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold border-b pb-2">Player Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="player-name">Full Name of Player *</Label>
                    <Input
                      id="player-name"
                      value={formData.playerName}
                      onChange={(e) => handleInputChange("playerName", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Age Group *</Label>
                    <RadioGroup
                      value={formData.ageGroup}
                      onValueChange={(value) => handleInputChange("ageGroup", value)}
                      className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                      {["6–9", "10–13", "14–17", "18+"].map((age) => (
                        <div key={age}>
                          <RadioGroupItem value={age} id={`age-${age}`} className="sr-only" />
                          <Label
                            htmlFor={`age-${age}`}
                            className={`flex h-12 items-center justify-center rounded-md border-2 cursor-pointer text-center font-medium transition-colors hover:bg-gray-50 ${
                              formData.ageGroup === age ? "border-blue-600 bg-blue-50" : "border-gray-200"
                            }`}
                          >
                            {age}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label>Gender *</Label>
                    <RadioGroup
                      value={formData.gender}
                      onValueChange={(value) => handleInputChange("gender", value)}
                      className="grid grid-cols-3 gap-4"
                    >
                      {["Male", "Female", "Other"].map((gender) => (
                        <div key={gender}>
                          <RadioGroupItem value={gender} id={`gender-${gender}`} className="sr-only" />
                          <Label
                            htmlFor={`gender-${gender}`}
                            className={`flex h-12 items-center justify-center rounded-md border-2 cursor-pointer text-center font-medium transition-colors hover:bg-gray-50 ${
                              formData.gender === gender ? "border-blue-600 bg-blue-50" : "border-gray-200"
                            }`}
                          >
                            {gender}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="school">School (if applicable)</Label>
                    <Input
                      id="school"
                      value={formData.school}
                      onChange={(e) => handleInputChange("school", e.target.value)}
                      placeholder="Optional"
                    />
                  </div>
                </div>

                {/* Parent/Guardian Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold border-b pb-2">Parent/Guardian Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="parent-name">Full Name of Parent/Guardian *</Label>
                    <Input
                      id="parent-name"
                      value={formData.parentName}
                      onChange={(e) => handleInputChange("parentName", e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="parent-phone">Parent/Guardian Phone Number *</Label>
                      <Input
                        id="parent-phone"
                        type="tel"
                        value={formData.parentPhone}
                        onChange={(e) => handleInputChange("parentPhone", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parent-email">Parent/Guardian Email Address *</Label>
                      <Input
                        id="parent-email"
                        type="email"
                        value={formData.parentEmail}
                        onChange={(e) => handleInputChange("parentEmail", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergency-contact">Emergency Contact Number (if different)</Label>
                    <Input
                      id="emergency-contact"
                      type="tel"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                      placeholder="Optional"
                    />
                  </div>
                </div>

                {/* Training Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold border-b pb-2">Training Details</h3>

                  <div className="space-y-2">
                    <Label htmlFor="training-date">Preferred Training Date *</Label>
                    <Input
                      id="training-date"
                      type="date"
                      min={getMinDate()}
                      value={formData.trainingDate}
                      onChange={(e) => handleInputChange("trainingDate", e.target.value)}
                      required
                    />
                    <p className="text-xs text-gray-500">Must be at least 7 days from today</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hear-about">How did you hear about us? *</Label>
                    <Select onValueChange={(value) => handleInputChange("hearAbout", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="social-media">Social Media</SelectItem>
                        <SelectItem value="school">School</SelectItem>
                        <SelectItem value="friend">Friend</SelectItem>
                        <SelectItem value="community-event">Community Event</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Consent & Permissions */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold border-b pb-2">Consent & Permissions *</h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                      />
                      <Label htmlFor="consent" className="text-sm leading-relaxed">
                        I give consent for my child to participate in the Gbawe Basketball Foundation's free training
                        session.
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="timely-arrival"
                        checked={formData.timelyArrival}
                        onCheckedChange={(checked) => handleInputChange("timelyArrival", checked as boolean)}
                      />
                      <Label htmlFor="timely-arrival" className="text-sm leading-relaxed">
                        I understand my child must arrive on time and dressed appropriately.
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="photo-permission"
                        checked={formData.photoPermission}
                        onCheckedChange={(checked) => handleInputChange("photoPermission", checked as boolean)}
                      />
                      <Label htmlFor="photo-permission" className="text-sm leading-relaxed">
                        I permit the use of photos/videos taken during the training for promotional use.
                      </Label>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full btn-gradient text-lg py-6">
                  Register for Free Training Session
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
