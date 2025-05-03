import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ImpactPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">Real Change. Real Dreams. Real Impact.</h1>
          <p className="text-xl text-gray-700 max-w-[700px] mx-auto">
            The Gbawe Basketball Foundation brings transformation to communities through basketball, education, and
            cultural identity. Our projects aren't about moments — they're about movements.
          </p>
        </div>

        <div className="space-y-12">
          <Card id="school-dreams">
            <CardHeader>
              <CardTitle className="text-2xl">1. School Dreams Initiative</CardTitle>
              <CardDescription>
                Providing school supplies, scholarships, and mentorship to students across Gbawe and beyond. Every year,
                we help hundreds of youth stay in school and stay inspired.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="ml-6 space-y-1 list-disc text-sm text-gray-700">
                <li>Scholarship Fund</li>
                <li>Supplies Distribution</li>
                <li>School Visits & Talks</li>
              </ul>
            </CardContent>
          </Card>

          <Card id="court-community">
            <CardHeader>
              <CardTitle className="text-2xl">2. Court to Community Clinics</CardTitle>
              <CardDescription>
                We host free basketball and life-skills clinics in underserved areas, giving kids access to coaching,
                role models, and hope.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="ml-6 space-y-1 list-disc text-sm text-gray-700">
                <li>Hosted in local communities</li>
                <li>Partnered with pro players & coaches</li>
                <li>Free to attend — powered by donors</li>
              </ul>
            </CardContent>
          </Card>

          <Card id="leadership">
            <CardHeader>
              <CardTitle className="text-2xl">3. Hunter's Leadership Fellowship</CardTitle>
              <CardDescription>
                A year-long mentorship + development track for standout players who want to lead both on and off the
                court.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="ml-6 space-y-1 list-disc text-sm text-gray-700">
                <li>Monthly mentorship calls</li>
                <li>Community service projects</li>
                <li>Personal growth workshops</li>
              </ul>
            </CardContent>
          </Card>

          <Card id="after-school">
            <CardHeader>
              <CardTitle className="text-2xl">4. Hunter Scholars After-School Program</CardTitle>
              <CardDescription>
                Helping students build stronger futures through extra learning, mentorship, and life skills.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="ml-6 space-y-1 list-disc text-sm text-gray-700">
                <li>Free after-school classes in reading, writing, math, and leadership</li>
                <li>Focused on underserved youth</li>
                <li>Tutors and mentors from the local community</li>
                <li>Dream Journaling and Personal Goal Setting Workshops</li>
                <li>Cultural pride and personal growth activities</li>
              </ul>
              <p className="mt-4 text-gray-700">
                We don't just teach basketball — we teach life, literacy, leadership, and legacy.
              </p>
            </CardContent>
          </Card>

          <Card id="culture">
            <CardHeader>
              <CardTitle className="text-2xl">5. Kingdom of Us: Culture Through Content</CardTitle>
              <CardDescription>
                We share Africa's stories through powerful, visually rich content — celebrating identity, language, and
                tradition. This is how we inspire pride and visibility for our people.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="ml-6 space-y-1 list-disc text-sm text-gray-700">
                <li>Documentary series</li>
                <li>Podcast & youth interviews</li>
                <li>Local language & cultural challenges</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-y-6 pt-8">
          <p className="text-2xl font-medium">Every Dream Needs a Hunter.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="btn-gradient text-white">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact-partners">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
