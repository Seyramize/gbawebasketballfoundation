"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

// Sample gallery data
const galleryData = {
  events: Array.from({ length: 12 }).map((_, i) => ({
    id: `event-${i + 1}`,
    title: `Basketball Camp ${i + 1}`,
    description: `Community basketball camp held in Accra, featuring training sessions, games, and mentorship.`,
    date: `${["January", "February", "March", "April", "May", "June"][i % 6]} ${2022 + Math.floor(i / 6)}`,
    image: `/placeholder.svg?height=600&width=800`,
  })),
  training: Array.from({ length: 8 }).map((_, i) => ({
    id: `training-${i + 1}`,
    title: `Training Session ${i + 1}`,
    description: `Professional training session focusing on basketball fundamentals and skill development.`,
    date: `${["March", "April", "May", "June", "July", "August"][i % 6]} ${2022 + Math.floor(i / 6)}`,
    image: `/placeholder.svg?height=600&width=800`,
  })),
  community: Array.from({ length: 10 }).map((_, i) => ({
    id: `community-${i + 1}`,
    title: `Community Outreach ${i + 1}`,
    description: `Outreach program bringing basketball and education to underserved communities.`,
    date: `${["February", "March", "April", "September", "October", "November"][i % 6]} ${2022 + Math.floor(i / 6)}`,
    image: `/placeholder.svg?height=600&width=800`,
  })),
  scholarships: Array.from({ length: 6 }).map((_, i) => ({
    id: `scholarship-${i + 1}`,
    title: `Scholarship Recipient ${i + 1}`,
    description: `Celebrating our scholarship recipients and their academic and athletic achievements.`,
    date: `${["January", "June", "December"][i % 3]} ${2022 + Math.floor(i / 3)}`,
    image: `/placeholder.svg?height=600&width=800`,
  })),
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string
    title: string
    description: string
    date: string
    index: number
    category: string
  }>(null)

  const handleOpenImage = (image: any, index: number, category: string) => {
    setSelectedImage({
      src: image.image,
      title: image.title,
      description: image.description,
      date: image.date,
      index,
      category,
    })
  }

  const handleNext = () => {
    if (!selectedImage) return

    const currentCategory = galleryData[selectedImage.category as keyof typeof galleryData]
    const nextIndex = (selectedImage.index + 1) % currentCategory.length
    const nextImage = currentCategory[nextIndex]

    setSelectedImage({
      src: nextImage.image,
      title: nextImage.title,
      description: nextImage.description,
      date: nextImage.date,
      index: nextIndex,
      category: selectedImage.category,
    })
  }

  const handlePrevious = () => {
    if (!selectedImage) return

    const currentCategory = galleryData[selectedImage.category as keyof typeof galleryData]
    const prevIndex = (selectedImage.index - 1 + currentCategory.length) % currentCategory.length
    const prevImage = currentCategory[prevIndex]

    setSelectedImage({
      src: prevImage.image,
      title: prevImage.title,
      description: prevImage.description,
      date: prevImage.date,
      index: prevIndex,
      category: selectedImage.category,
    })
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-serif">Photo Gallery</h1>
          <p className="text-xl text-gray-700 max-w-[700px] mx-auto">
            Explore our collection of photos showcasing the impact of the Gbawe Basketball Foundation through events,
            training sessions, community outreach, and scholarship programs.
          </p>
        </div>

        <Tabs defaultValue="events" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
          </TabsList>

          <TabsContent value="events">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {galleryData.events.map((image, index) => (
                <motion.div key={image.id} variants={item} className="group">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div
                        className="cursor-pointer overflow-hidden rounded-lg aspect-square relative group"
                        onClick={() => handleOpenImage(image, index, "events")}
                      >
                        <Image
                          src={image.image || "/placeholder.svg"}
                          alt={image.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                          <div className="p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-bold">{image.title}</h3>
                            <p className="text-sm opacity-90">{image.date}</p>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                  </Dialog>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="training">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {galleryData.training.map((image, index) => (
                <motion.div key={image.id} variants={item} className="group">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div
                        className="cursor-pointer overflow-hidden rounded-lg aspect-square relative group"
                        onClick={() => handleOpenImage(image, index, "training")}
                      >
                        <Image
                          src={image.image || "/placeholder.svg"}
                          alt={image.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                          <div className="p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-bold">{image.title}</h3>
                            <p className="text-sm opacity-90">{image.date}</p>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                  </Dialog>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="community">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {galleryData.community.map((image, index) => (
                <motion.div key={image.id} variants={item} className="group">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div
                        className="cursor-pointer overflow-hidden rounded-lg aspect-square relative group"
                        onClick={() => handleOpenImage(image, index, "community")}
                      >
                        <Image
                          src={image.image || "/placeholder.svg"}
                          alt={image.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                          <div className="p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-bold">{image.title}</h3>
                            <p className="text-sm opacity-90">{image.date}</p>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                  </Dialog>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="scholarships">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {galleryData.scholarships.map((image, index) => (
                <motion.div key={image.id} variants={item} className="group">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div
                        className="cursor-pointer overflow-hidden rounded-lg aspect-square relative group"
                        onClick={() => handleOpenImage(image, index, "scholarships")}
                      >
                        <Image
                          src={image.image || "/placeholder.svg"}
                          alt={image.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                          <div className="p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-bold">{image.title}</h3>
                            <p className="text-sm opacity-90">{image.date}</p>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                  </Dialog>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
              <div className="relative bg-white rounded-lg overflow-hidden">
                <DialogHeader className="p-6 pb-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <DialogTitle className="text-xl font-bold">{selectedImage.title}</DialogTitle>
                      <DialogDescription className="text-sm">{selectedImage.date}</DialogDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-4 rounded-full"
                      onClick={() => setSelectedImage(null)}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </div>
                </DialogHeader>
                <div className="relative aspect-video w-full">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{selectedImage.description}</p>
                  <div className="flex justify-between mt-4">
                    <Button variant="outline" size="icon" onClick={handlePrevious}>
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleNext}>
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next</span>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        <div className="text-center space-y-6">
          <p className="text-xl font-medium">Want to share your own photos from our events?</p>
          <Button asChild size="lg" className="btn-gradient">
            <a href="/share">Share Your Experience</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
