import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Gbawe Basketball Foundation" width={80} height={80} />
            </Link>
            <p className="text-gray-400">
              Empowering the next generation through basketball, education, and cultural pride.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-gray-400 hover:text-white transition-colors">
                  Media & Impact
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                  Support Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs#scholarships" className="text-gray-400 hover:text-white transition-colors">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/programs#community" className="text-gray-400 hover:text-white transition-colors">
                  Community Outreach
                </Link>
              </li>
              <li>
                <Link href="/programs#leadership" className="text-gray-400 hover:text-white transition-colors">
                  Leadership Fellowship
                </Link>
              </li>
              <li>
                <Link href="/programs#culture" className="text-gray-400 hover:text-white transition-colors">
                  Kingdom of Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Connect</h3>
            <p className="text-gray-400 mb-4">Sign up for updates on our programs and impact.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <Button type="submit" className="w-full btn-gradient">
                Subscribe
              </Button>
            </form>
            <div className="mt-4">
              <p className="text-gray-400">foundation@gbawebasketball.org</p>
              <p className="text-gray-400">Accra, Ghana</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Gbawe Basketball Foundation. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
