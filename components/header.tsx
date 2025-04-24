"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Support Us", href: "/support" },
  { name: "Media & Impact", href: "/media" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg"
          : "bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative overflow-hidden rounded-full p-1 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
              <Image
                src="/images/logo.png"
                alt="Gbawe Basketball Foundation"
                width={60}
                height={60}
                className="w-12 md:w-14 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="hidden md:inline-flex font-serif font-bold text-lg bg-gradient-to-r from-blue-400 via-white to-orange-400 text-transparent bg-clip-text">
              Gbawe Basketball Foundation
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-all duration-300 relative py-2 group
                ${pathname === item.href ? "text-white" : "text-gray-300 hover:text-white"}
              `}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 
                  ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-blue-500 to-orange-500 scale-x-100"
                      : "bg-gradient-to-r from-blue-500 to-orange-500 group-hover:scale-x-100"
                  }
                `}
              />
            </Link>
          ))}
          <Button
            asChild
            className="btn-gradient text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
          >
            <Link href="/support">Donate</Link>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="border-none text-white hover:bg-gray-800/50">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gradient-to-b from-gray-900 to-gray-800 text-white border-gray-700">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-medium transition-colors relative group
                    ${pathname === item.href ? "text-white font-semibold" : "text-gray-300 hover:text-white"}
                  `}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-300 
                      ${pathname === item.href ? "w-full" : "group-hover:w-full"}
                    `}
                  />
                </Link>
              ))}
              <Button asChild className="mt-6 btn-gradient text-white">
                <Link href="/support" onClick={() => setOpen(false)}>
                  Donate
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
