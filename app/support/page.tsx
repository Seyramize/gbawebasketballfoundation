"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { CheckCircle, Heart, Users, Calendar } from "lucide-react"

export default function SupportPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="container px-4 md:px-6 py-16 md:py-32">
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl font-serif">
            Every Dream Needs a Hunter. Support the Mission.
          </h1>
          <p className="text-xl text-gray-700 max-w-[800px] mx-auto leading-relaxed">
            At the Gbawe Basketball Foundation, we don't just train athletes — we transform futures. Your support helps
            us provide scholarships, build courts, host free clinics, and give youth across Ghana the chance to own
            their dreams.
          </p>
        </motion.div>

        <motion.div className="grid gap-8 md:grid-cols-2" variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Card className="card-hover border-t-4 border-t-blue-600 h-full">
              <CardHeader>
                <div className="mb-2">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-serif">Donate</CardTitle>
                <CardDescription className="text-base">Your financial gift helps cover essential needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Your financial gift helps cover:</p>
                <ul className="ml-6 space-y-2 list-disc text-gray-700">
                  <li>School scholarships</li>
                  <li>Basketball gear for underserved youth</li>
                  <li>Travel and training for tournaments</li>
                  <li>Meals and equipment during camps</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full btn-gradient">
                  <Link href="/donate">Make a Donation</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="card-hover border-t-4 border-t-orange-600 h-full">
              <CardHeader>
                <div className="mb-2">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl font-serif">Sponsor a Dream</CardTitle>
                <CardDescription className="text-base">Make a direct impact on an individual's journey</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Become a sponsor for an individual athlete, a program, or a full academy project. You'll receive
                  updates, letters, and videos showing your impact. Your sponsorship creates a direct connection with
                  the youth you're supporting.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/sponsor">Become a Sponsor</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="card-hover border-t-4 border-t-yellow-600 h-full">
              <CardHeader>
                <div className="mb-2">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl font-serif">Partner With Us</CardTitle>
                <CardDescription className="text-base">Join forces for greater community impact</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We welcome brands, NGOs, and businesses to join the mission through:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-gray-700">
                  <li>Joint community initiatives</li>
                  <li>Co-branded events</li>
                  <li>CSR programs and school activations</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/partners">Start a Partnership</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="card-hover border-t-4 border-t-red-600 h-full">
              <CardHeader>
                <div className="mb-2">
                  <Calendar className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl font-serif">Volunteer or Coach</CardTitle>
                <CardDescription className="text-base">Share your skills and passion</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  If you have a heart for youth, sports, or community work, we'd love your hands and wisdom.
                </p>
                <ul className="ml-6 space-y-2 list-disc text-gray-700">
                  <li>Coaching Mentors</li>
                  <li>Medical Staff</li>
                  <li>Camp Volunteers</li>
                  <li>Media & Content Helpers</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  When you give your time, you become part of a dream bigger than any one player, one coach, or one
                  court.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/volunteer">Sign Up to Volunteer</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-gray-50 p-12 rounded-xl text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-serif">Our Impact So Far</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <p className="text-5xl font-bold text-blue-600">300+</p>
              <p className="text-gray-700">Youth Trained</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold text-orange-600">12+</p>
              <p className="text-gray-700">Community Clinics Hosted</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold text-yellow-600">100+</p>
              <p className="text-gray-700">Kids Given Free Equipment</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold text-red-600">7</p>
              <p className="text-gray-700">Scholarship Athletes in School</p>
            </div>
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Your support doesn't just fund training. It fuels belief, identity, and hope.
          </p>
        </motion.div>

        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-serif">Let's Raise a Generation of Dreamers Who Execute.</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="btn-gradient">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/partners">Partner With Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/volunteer">Join Our Mission</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
