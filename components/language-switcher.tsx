"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { locales, type Locale } from "@/lib/i18n"

const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  cs: "🇨🇿",
}

const localeNames: Record<Locale, string> = {
  en: "English",
  cs: "Čeština",
}

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [currentLocale, setCurrentLocale] = useState<Locale>("en")

  useEffect(() => {
    // Extract current locale from pathname
    const pathLocale = pathname.split("/")[1] as Locale
    const validLocale = locales.includes(pathLocale) ? pathLocale : "en"
    setCurrentLocale(validLocale)
  }, [pathname])

  // Get path without locale
  const pathWithoutLocale = pathname.replace(/^\/[^/]+/, "") || "/"

  const switchLocale = (locale: Locale) => {
    // Set cookie
    document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`
    
    // Navigate to new locale path
    const newPath = `/${locale}${pathWithoutLocale}`
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <span className="text-lg">{localeFlags[currentLocale]}</span>
          <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLocale(locale)}
            className="gap-2 cursor-pointer"
          >
            <span className="text-lg">{localeFlags[locale]}</span>
            <span>{localeNames[locale]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

