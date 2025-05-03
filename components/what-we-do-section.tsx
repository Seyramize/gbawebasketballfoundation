"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award, Video } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function WhatWeDoSection() {
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
    <section>
      <motion.h2
        className="text-3xl font-bold text-center mb-12 font-serif"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        What We Do:
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={item}>
          <Card className="card-hover border-t-4 border-t-blue-600 h-full">
            <CardHeader className="space-y-1">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="font-serif">Scholarship Programs</CardTitle>
              <CardDescription>Helping youth access quality education through sports</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Providing opportunities for talented young athletes to pursue education alongside their basketball
              development.
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="card-hover border-t-4 border-t-orange-600 h-full">
            <CardHeader className="space-y-1">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle className="font-serif">Community Outreach</CardTitle>
              <CardDescription>Inspiring hope in underserved communities</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Bringing basketball clinics, mentorship, and resources directly to neighborhoods that need it most.
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="card-hover border-t-4 border-t-yellow-600 h-full">
            <CardHeader className="space-y-1">
              <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle className="font-serif">Training Camps & Clinics</CardTitle>
              <CardDescription>Free and sponsored events across regions</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Professional training opportunities that develop basketball skills while instilling discipline and
              teamwork.
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="card-hover border-t-4 border-t-red-600 h-full">
            <CardHeader className="space-y-1">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-2">
                <Video className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="font-serif">Cultural Empowerment</CardTitle>
              <CardDescription>Sharing the story of Gbawe, the hunter's spirit, and African excellence</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Celebrating heritage and identity, inspiring youth to take pride in their roots while building their
              future.
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
