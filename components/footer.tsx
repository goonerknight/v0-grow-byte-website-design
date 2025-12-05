"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"
import { usePathname } from "next/navigation"
import { getTranslations } from "@/lib/i18n"
import { Locale } from "@/lib/i18n"

export function Footer() {
  const pathname = usePathname()
  const locale = (pathname.split("/")[1] as Locale) || "en"
  const t = getTranslations(locale)
  const basePath = `/${locale}`

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.services}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`${basePath}/services#optimization`} className="hover:text-foreground transition-colors">
                  {locale === 'cs' ? 'Optimalizace procesů' : 'Process Optimization'}
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/services#automation`} className="hover:text-foreground transition-colors">
                  {locale === 'cs' ? 'Automatizace a AI' : 'Automation & AI'}
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/services#infrastructure`} className="hover:text-foreground transition-colors">
                  {locale === 'cs' ? 'Digitální infrastruktura' : 'Digital Infrastructure'}
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/services#apps`} className="hover:text-foreground transition-colors">
                  {locale === 'cs' ? 'Vlastní aplikace' : 'Custom Applications'}
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/services#data`} className="hover:text-foreground transition-colors">
                  {locale === 'cs' ? 'Datová inteligence' : 'Data Intelligence'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.industries}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`${basePath}/industries#manufacturing`} className="hover:text-foreground transition-colors">
                  {locale === 'cs' ? 'Výroba' : 'Manufacturing'}
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/industries#logistics`} className="hover:text-foreground transition-colors">
                  {locale === 'cs' ? 'Logistika' : 'Logistics'}
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/industries#retail`} className="hover:text-foreground transition-colors">
                  {locale === 'cs' ? 'Retail a e-commerce' : 'Retail & E-commerce'}
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/industries#healthcare`} className="hover:text-foreground transition-colors">
                  {locale === 'cs' ? 'Zdravotnictví' : 'Healthcare'}
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/industries#professional`} className="hover:text-foreground transition-colors">
                  {locale === 'cs' ? 'Profesionální služby' : 'Professional Services'}
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/industries#construction`} className="hover:text-foreground transition-colors">
                  {locale === 'cs' ? 'Stavebnictví' : 'Construction'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`${basePath}/about`} className="hover:text-foreground transition-colors">
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/contact`} className="hover:text-foreground transition-colors">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GrowByte. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
