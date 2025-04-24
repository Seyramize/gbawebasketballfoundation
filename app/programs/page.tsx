import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProgramsPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">Our Programs</h1>
          <p className="text-xl text-gray-700 max-w-[700px] mx-auto">
            We create pathways to success through a variety of programs designed to inspire and equip the next
            generation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Scholarship Programs</CardTitle>
              <CardDescription>Helping youth access quality education through sports</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                We identify talented young athletes and support their educational journey through scholarships and
                mentoring.
              </p>
              <ul className="ml-6 space-y-1 list-disc text-sm text-gray-700">
                <li>Academic monitoring</li>
                <li>School fee support</li>
                <li>Career guidance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Outreach</CardTitle>
              <CardDescription>Inspiring hope in underserved communities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                We host free basketball and life-skills clinics in underserved areas, giving kids access to coaching,
                role models, and hope.
              </p>
              <ul className="ml-6 space-y-1 list-disc text-sm text-gray-700">
                <li>Hosted in local communities</li>
                <li>Partnered with pro players & coaches</li>
                <li>Free to attend — powered by donors</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hunter's Leadership Fellowship</CardTitle>
              <CardDescription>Developing leaders both on and off the court</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                A year-long mentorship + development track for standout players who want to lead both on and off the
                court.
              </p>
              <ul className="ml-6 space-y-1 list-disc text-sm text-gray-700">
                <li>Monthly mentorship calls</li>
                <li>Community service projects</li>
                <li>Personal growth workshops</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Kingdom of Us: Culture Through Content</CardTitle>
              <CardDescription>Celebrating identity, language, and tradition</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                We share Africa's stories through powerful, visually rich content - celebrating identity, language, and
                tradition. This is how we inspire pride and visibility for our people.
              </p>
              <ul className="ml-6 space-y-1 list-disc text-sm text-gray-700">
                <li>Documentary series</li>
                <li>Podcast & youth interviews</li>
                <li>Local language & cultural challenges</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
