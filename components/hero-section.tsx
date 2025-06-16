"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />
        <Image src="/donation3.jpg" alt="Basketball court" fill className="object-cover" priority />
      </div>

      <div className="relative z-20 pt-24 pb-20 md:pt-32 md:pb-32 container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tighter font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Own Your Dreams.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl max-w-[700px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Changing lives through basketball, education, and cultural pride — one dream at a time.
          </motion.p>

          <motion.div
            className="space-y-4 pt-4 w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="w-full btn-gradient">
              <Link href="/support">Support a Dream</Link>
            </Button>

            <div className="grid grid-cols-2 gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white border-none transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1"
              >
                <Link href="/media">See Our Impact</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white border-2 border-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/30 hover:-translate-y-1 hover:border-opacity-80"
              >
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>

            {/* Free Training Registration CTA */}
            <motion.div
              className="pt-4 border-t border-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white border-2 border-green-400 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-600/30 hover:-translate-y-1"
              >
                <Link href="/training-registration">🏀 Join Free Training Session</Link>
              </Button>
              <p className="text-xs text-gray-300 mt-2">Register now • All skill levels welcome</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  )
}
