"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MediaPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            When Dreams Come True – Our Impact in Action
          </h1>
          <p className="text-xl text-gray-700 max-w-[700px] mx-auto">
            The Media & Stories page is where we showcase the real-world impact of your support. Every image, video, and
            testimony is proof that when we give young people a dream, they chase it with everything. And when they
            chase it — they change the world around them.
          </p>
        </div>

        <Tabs defaultValue="photos" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="photos">Impact in Photos</TabsTrigger>
            <TabsTrigger value="videos">Dreamers in Focus</TabsTrigger>
            <TabsTrigger value="before-after">Before & After</TabsTrigger>
            <TabsTrigger value="gratitude">Gratitude Wall</TabsTrigger>
            <TabsTrigger value="behind">Behind the Scenes</TabsTrigger>
          </TabsList>

          <TabsContent value="photos" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { src: "/donation1.jpg", alt: "Impact photo 1" },
                { src: "/donation2.jpg", alt: "Impact photo 2" },
                { src: "/donation3.jpg", alt: "Impact photo 3" },
                { src: "/donation1.jpg", alt: "Impact photo 4" },
                { src: "/donation2.jpg", alt: "Impact photo 5" },
                { src: "/donation3.jpg", alt: "Impact photo 6" },
              ].map((photo, i) => (
                <div key={i} className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={photo.src} // Use your image paths here
                    alt={photo.alt}
                    fill
                    className="object-contain" // Change from object-cover to object-contain
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-700">
              Clinics, events, and community highlights showcasing our impact.
            </p>
          </TabsContent>

          <TabsContent value="videos" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-video relative overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center"
                >
                  <p className="text-gray-500">Video of kids, parents, and coaches</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-700">
              Short videos highlighting the stories of our program participants.
            </p>
          </TabsContent>

          <TabsContent value="before-after" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-square relative overflow-hidden rounded-lg">
                      <Image
                        src={`/placeholder.svg?key=d6885&height=300&width=300&query=before basketball training Ghana ${i + 1}`}
                        alt={`Before image ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-2 py-1">Before</div>
                    </div>
                    <div className="aspect-square relative overflow-hidden rounded-lg">
                      <Image
                        src={`/placeholder.svg?key=toyzm&height=300&width=300&query=after basketball training Ghana ${i + 1}`}
                        alt={`After image ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-2 py-1">After</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">Visual transformation of sponsored youth in our programs.</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gratitude" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg">
                  <blockquote className="italic text-gray-700">
                    "Thank you for believing in me when no one else would. The Foundation gave me more than basketball
                    skills - it gave me hope for my future."
                  </blockquote>
                  <p className="mt-4 font-medium">- Student Participant {i + 1}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-700">
              Messages to donors, volunteers, and partners from those we've helped.
            </p>
          </TabsContent>

          <TabsContent value="behind" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&query=behind the scenes basketball foundation Ghana ${i + 1}`}
                    alt={`Behind the scenes photo ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-700">The people and planning behind every outreach we conduct.</p>
          </TabsContent>
        </Tabs>

        <div className="text-center space-y-6">
          <p className="text-2xl font-medium">Your support is more than charity — it's a legacy.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/gallery">Explore the Gallery</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/share">Share Your Experience</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
