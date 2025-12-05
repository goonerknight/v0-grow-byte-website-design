import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Factory, Truck, ShoppingCart, HeartPulse, Briefcase, HardHat, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Mascot } from "@/components/mascot"
import { getTranslations } from "@/lib/i18n"
import { Locale } from "@/lib/i18n"

export default async function IndustriesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getTranslations(locale)

  const industries = [
    {
      id: "manufacturing",
      icon: <Factory className="h-12 w-12" />,
      title: locale === 'cs' ? 'Výroba' : 'Manufacturing',
      description: locale === 'cs'
        ? 'Optimalizujte výrobní linky pomocí AI-poháněné prediktivní údržby, automatizace kontroly kvality a monitorování v reálném čase. Snižte prostoje a zvyšte výstup.'
        : 'Optimize production lines with AI-powered predictive maintenance, quality control automation, and real-time monitoring. Reduce downtime and increase output.',
      solutions: locale === 'cs'
        ? ['Prediktivní údržba', 'AI kontrola kvality', 'Optimalizace výroby', 'Integrace dodavatelského řetězce']
        : ['Predictive maintenance', 'Quality control AI', 'Production optimization', 'Supply chain integration'],
    },
    {
      id: "logistics",
      icon: <Truck className="h-12 w-12" />,
      title: locale === 'cs' ? 'Logistika a skladování' : 'Logistics & Warehousing',
      description: locale === 'cs'
        ? 'Zefektivněte operace pomocí inteligentního směrování, automatizovaného řízení zásob a systémů sledování v reálném čase. Maximalizujte efektivitu a minimalizujte náklady.'
        : 'Streamline operations with intelligent routing, automated inventory management, and real-time tracking systems. Maximize efficiency and minimize costs.',
      solutions: locale === 'cs'
        ? ['Optimalizace tras', 'Automatizace skladu', 'Řízení zásob', 'Sledování vozového parku']
        : ['Route optimization', 'Warehouse automation', 'Inventory management', 'Fleet tracking'],
    },
    {
      id: "retail",
      icon: <ShoppingCart className="h-12 w-12" />,
      title: locale === 'cs' ? 'Retail a e-commerce' : 'Retail & E-commerce',
      description: locale === 'cs'
        ? 'Zlepšete zákaznickou zkušenost pomocí personalizovaných doporučení, automatizovaných zásob a omnichannel integrace. Zvyšte prodeje a spokojenost zákazníků.'
        : 'Enhance customer experience with personalized recommendations, automated inventory, and omnichannel integration. Boost sales and customer satisfaction.',
      solutions: locale === 'cs'
        ? ['E-commerce platformy', 'Automatizace zásob', 'Zákaznická analýza', 'Omnichannel systémy']
        : ['E-commerce platforms', 'Inventory automation', 'Customer analytics', 'Omnichannel systems'],
    },
    {
      id: "healthcare",
      icon: <HeartPulse className="h-12 w-12" />,
      title: locale === 'cs' ? 'Zdravotnictví' : 'Healthcare',
      description: locale === 'cs'
        ? 'Zlepšete péči o pacienty pomocí automatizovaných systémů pro objednávání, elektronických zdravotních záznamů a podpory diagnostiky poháněné AI. Zajistěte soulad a efektivitu.'
        : 'Improve patient care with automated appointment systems, electronic health records, and AI-powered diagnostics support. Ensure compliance and efficiency.',
      solutions: locale === 'cs'
        ? ['Řízení pacientů', 'Systémy EHR', 'Automatizace objednávek', 'Nástroje pro soulad']
        : ['Patient management', 'EHR systems', 'Appointment automation', 'Compliance tools'],
    },
    {
      id: "professional",
      icon: <Briefcase className="h-12 w-12" />,
      title: locale === 'cs' ? 'Profesionální služby' : 'Professional Services',
      description: locale === 'cs'
        ? 'Automatizujte správu klientů, sledování projektů a fakturační procesy. Zaměřte se na poskytování hodnoty, zatímco my se postaráme o operace.'
        : 'Automate client management, project tracking, and billing processes. Focus on delivering value while we handle the operations.',
      solutions: locale === 'cs'
        ? ['CRM systémy', 'Řízení projektů', 'Automatizované fakturace', 'Automatizace dokumentů']
        : ['CRM systems', 'Project management', 'Automated billing', 'Document automation'],
    },
    {
      id: "construction",
      icon: <HardHat className="h-12 w-12" />,
      title: locale === 'cs' ? 'Stavebnictví' : 'Construction',
      description: locale === 'cs'
        ? 'Spravujte projekty pomocí nástrojů pro spolupráci v reálném čase, plánování zdrojů a systémů pro soulad s bezpečností. Zůstaňte v harmonogramu a pod rozpočtem.'
        : 'Manage projects with real-time collaboration tools, resource planning, and safety compliance systems. Stay on schedule and under budget.',
      solutions: locale === 'cs'
        ? ['Plánování projektů', 'Řízení zdrojů', 'Soulad s bezpečností', 'Sledování pokroku']
        : ['Project planning', 'Resource management', 'Safety compliance', 'Progress tracking'],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                {t.industries.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto lg:mx-0">
                {t.industries.hero.description}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Mascot
                variant="thumbs-up"
                width={350}
                height={350}
                className="w-full max-w-sm float-animation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <Card
                key={industry.id}
                id={industry.id}
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 scroll-mt-24"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">{t.industries.ourSolutions}</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.solutions.map((solution, i) => (
                        <span key={i} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {solution}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto">
          <Card className="border-primary/20">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl font-bold">{t.industries.cta.title}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.industries.cta.description}
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href={`/${locale}/contact`}>
                  {t.industries.cta.button}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
