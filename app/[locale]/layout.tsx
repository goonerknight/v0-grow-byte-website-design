import type React from "react"
import { locales, type Locale } from "@/lib/i18n"

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const locale = locales.includes(params.locale) ? params.locale : "en"

  return <>{children}</>
}

