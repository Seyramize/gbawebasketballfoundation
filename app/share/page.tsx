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
import { CheckCircle, Upload, Camera, X } from "lucide-react"

export default function SharePage() {
  const [submitted, setSubmitted] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])

      // Create previews for images
      newFiles.forEach((file) => {
        if (file.type.startsWith("image/")) {
          const reader = new FileReader()
          reader.onload = (e) => {
            if (e.target?.result) {
              setPreviews((prev) => [...prev, e.target!.result as string])
            }
          }
          reader.readAsDataURL(file)
        }
      })
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
    setPreviews(previews.filter((_, i) => i !== index))
  }

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
          <h1 className="text-3xl font-bold font-serif">Thank You for Sharing!</h1>
          <p className="text-gray-700">
            We've received your submission. Your photos and story will help inspire others and showcase the impact of
            our programs.
          </p>
          <Button asChild className="mt-4">
            <a href="/gallery">Return to Gallery</a>
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
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-serif">Share Your Experience</h1>
          <p className="text-xl text-gray-700 max-w-[700px] mx-auto">
            Have you participated in our programs or events? Share your photos and stories to help us showcase the
            impact of the Gbawe Basketball Foundation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Submit Your Story</CardTitle>
              <CardDescription>Share your photos and experiences with us</CardDescription>
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
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="event-type">Event or Program</Label>
                    <Select>
                      <SelectTrigger id="event-type">
                        <SelectValue placeholder="Select event or program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="camp">Basketball Camp</SelectItem>
                        <SelectItem value="clinic">Community Clinic</SelectItem>
                        <SelectItem value="scholarship">Scholarship Program</SelectItem>
                        <SelectItem value="tournament">Tournament</SelectItem>
                        <SelectItem value="training">Training Session</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="event-date">Date of Event</Label>
                    <Input id="event-date" type="date" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="story">Your Story</Label>
                    <Textarea
                      id="story"
                      placeholder="Share your experience with the Gbawe Basketball Foundation"
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Photos</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <div className="flex flex-col items-center space-y-2">
                        <Camera className="h-8 w-8 text-gray-400" />
                        <p className="text-sm text-gray-500">Drag and drop photos here, or click to select files</p>
                        <p className="text-xs text-gray-400">JPG, PNG or GIF • Max 5 MB each</p>
                        <Input
                          id="photos"
                          type="file"
                          accept="image/*"
                          multiple
                          className="hidden"
                          onChange={handleFileChange}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById("photos")?.click()}
                          className="mt-2"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Select Files
                        </Button>
                      </div>
                    </div>
                  </div>

                  {previews.length > 0 && (
                    <div className="space-y-2">
                      <Label>Selected Photos</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {previews.map((preview, index) => (
                          <div key={index} className="relative aspect-square rounded-md overflow-hidden">
                            <img
                              src={preview || "/placeholder.svg"}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              className="absolute top-1 right-1 h-6 w-6 rounded-full"
                              onClick={() => removeFile(index)}
                            >
                              <X className="h-3 w-3" />
                              <span className="sr-only">Remove</span>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="permission" className="mt-1" required />
                      <Label htmlFor="permission" className="text-sm font-normal">
                        I grant the Gbawe Basketball Foundation permission to use these photos and my story on their
                        website, social media, and other promotional materials.
                      </Label>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full btn-gradient">
                  Submit Your Story
                </Button>
              </form>
            </CardContent>
            <CardFooter className="border-t pt-6 text-center text-sm text-gray-500">
              Thank you for sharing your experience with us. Your story helps inspire others and showcases the impact of
              our programs.
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
