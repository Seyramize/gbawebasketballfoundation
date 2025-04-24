"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function ProposePage() {
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
          <h1 className="text-3xl font-bold font-serif">Project Proposal Received!</h1>
          <p className="text-gray-700">
            Thank you for submitting your project proposal. Our team will review it and contact you to discuss the
            potential collaboration.
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
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-serif">Propose a Project</h1>
          <p className="text-xl text-gray-700 max-w-[700px] mx-auto">
            Have an idea for a collaboration? We're open to innovative projects that align with our mission of
            empowering youth through basketball, education, and cultural pride.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Project Proposal</CardTitle>
              <CardDescription>Share your idea for collaboration</CardDescription>
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
                    <Label htmlFor="project-title">Project Title</Label>
                    <Input id="project-title" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-category">Project Category</Label>
                    <Select>
                      <SelectTrigger id="project-category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basketball">Basketball Program</SelectItem>
                        <SelectItem value="education">Educational Initiative</SelectItem>
                        <SelectItem value="cultural">Cultural Project</SelectItem>
                        <SelectItem value="community">Community Outreach</SelectItem>
                        <SelectItem value="facility">Facility Development</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-description">Project Description</Label>
                    <Textarea
                      id="project-description"
                      placeholder="Describe your project idea in detail"
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-goals">Project Goals & Expected Outcomes</Label>
                    <Textarea
                      id="project-goals"
                      placeholder="What do you hope to achieve with this project?"
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-timeline">Proposed Timeline</Label>
                    <Input id="project-timeline" placeholder="e.g., June - August 2023" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-resources">Resources & Support Needed</Label>
                    <Textarea
                      id="project-resources"
                      placeholder="What resources would you need from the Gbawe Basketball Foundation?"
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-contribution">Your Contribution</Label>
                    <Textarea
                      id="project-contribution"
                      placeholder="What resources, expertise, or support would you bring to this project?"
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full btn-gradient">
                  Submit Project Proposal
                </Button>
              </form>
            </CardContent>
            <CardFooter className="border-t pt-6 text-center text-sm text-gray-500">
              We review all proposals within 2 weeks and will contact you to discuss next steps.
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
