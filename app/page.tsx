"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import WhatWeDoSection from "@/components/what-we-do-section"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col">
      <HeroSection />

      <section className="py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-16 md:gap-24">
            <motion.div
              className="space-y-6 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter font-serif">
                The Gbawe Basketball Foundation empowers the next generation to dream boldly — and gives them the tools
                to make those dreams real.
              </h2>
              <p className="mx-auto text-gray-700 md:text-xl leading-relaxed">
                From training camps and school outreach to scholarships and community events, we use the spirit of
                basketball to awaken confidence, creativity, and unstoppable purpose in the youth of Ghana and beyond.
              </p>
            </motion.div>

            <WhatWeDoSection />

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold font-serif">Our Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  Since our founding, we've worked tirelessly to create meaningful change in our communities. Through
                  basketball, we've opened doors to education, mentorship, and new opportunities for hundreds of young
                  people.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-blue-600">300+</p>
                    <p className="text-gray-700">Youth Trained</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-orange-600">12+</p>
                    <p className="text-gray-700">Community Clinics</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-yellow-600">100+</p>
                    <p className="text-gray-700">Free Equipment</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-red-600">7</p>
                    <p className="text-gray-700">Scholarship Athletes</p>
                  </div>
                </div>
                <Button asChild className="mt-4 group">
                  <Link href="/media" className="flex items-center gap-2">
                    See Our Impact
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                className="relative h-[400px] rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image src="/placeholder.svg?key=zujiy" alt="Basketball training" fill className="object-cover" />
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col items-center space-y-8 pt-8 bg-gray-50 p-12 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold font-serif text-center">Every Dream Needs a Hunter.</h3>
              <p className="text-center text-gray-700 max-w-2xl">
                Join us in our mission to empower the next generation. Your support can help us expand our programs,
                reach more communities, and create lasting change through basketball and education.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="btn-gradient">
                  <Link href="/support">Donate Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact-partners">Become a Partner</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
