import type React from "react"
import { locales, type Locale } from "@/lib/i18n"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const validLocale = locales.includes(locale) ? locale : "en"

  return <>{children}</>
}

