"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Logo } from "@/components/logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { usePathname } from "next/navigation"
import { getTranslations } from "@/lib/i18n"
import { Locale } from "@/lib/i18n"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  
  // Get current locale from pathname
  const locale = (pathname.split("/")[1] as Locale) || "en"
  const t = getTranslations(locale)
  const basePath = `/${locale}`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={basePath}>
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href={`${basePath}/services`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.services}
            </Link>
            <Link
              href={`${basePath}/industries`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.industries}
            </Link>
            <Link
              href={`${basePath}/about`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.about}
            </Link>
            <Link
              href={`${basePath}/contact`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.contact}
            </Link>
            <LanguageSwitcher />
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link href={`${basePath}/contact`}>{t.nav.bookConsultation}</Link>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href={`${basePath}/services`}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.services}
            </Link>
            <Link
              href={`${basePath}/industries`}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.industries}
            </Link>
            <Link
              href={`${basePath}/about`}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.about}
            </Link>
            <Link
              href={`${basePath}/contact`}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.contact}
            </Link>
            <div className="flex items-center justify-between py-2">
              <LanguageSwitcher />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90" asChild>
              <Link href={`${basePath}/contact`}>{t.nav.bookConsultation}</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
