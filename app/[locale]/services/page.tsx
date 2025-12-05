import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Zap, Network, Code, BarChart3, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Mascot } from "@/components/mascot"
import { getTranslations } from "@/lib/i18n"
import { Locale } from "@/lib/i18n"

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getTranslations(locale)

  const services = [
    {
      id: "optimization",
      icon: <Target className="h-10 w-10" />,
      title: locale === 'cs' ? 'Optimalizace procesů' : 'Process Optimization',
      description: locale === 'cs' 
        ? 'Transformujte neefektivní pracovní postupy na zefektivněné operace'
        : 'Transform inefficient workflows into streamlined operations',
      includes: locale === 'cs' 
        ? [
            'Analýza a mapování pracovních postupů',
            'Identifikace úzkých míst',
            'Redesign a implementace procesů',
            'Monitorování výkonu a KPI',
            'Rámce pro kontinuální zlepšování',
          ]
        : [
            'Workflow analysis and mapping',
            'Bottleneck identification',
            'Process redesign and implementation',
            'Performance monitoring and KPIs',
            'Continuous improvement frameworks',
          ],
      benefits: locale === 'cs'
        ? [
            'Až 60% snížení času procesu',
            'Významné úspory nákladů',
            'Zlepšená spokojenost zaměstnanců',
            'Lepší alokace zdrojů',
          ]
        : [
            'Up to 60% reduction in process time',
            'Significant cost savings',
            'Improved employee satisfaction',
            'Better resource allocation',
          ],
    },
    {
      id: "automation",
      icon: <Zap className="h-10 w-10" />,
      title: locale === 'cs' ? 'Automatizace a integrace AI' : 'Automation & AI Integration',
      description: locale === 'cs'
        ? 'Implementujte inteligentní systémy, které pracují 24/7'
        : 'Implement intelligent systems that work 24/7',
      includes: locale === 'cs'
        ? [
            'Robotická automatizace procesů (RPA)',
            'Rozhodování poháněné AI',
            'Automatizace zpracování dokumentů',
            'Orchestrace pracovních postupů',
            'Integrace se stávajícími nástroji',
          ]
        : [
            'Robotic Process Automation (RPA)',
            'AI-powered decision making',
            'Document processing automation',
            'Workflow orchestration',
            'Integration with existing tools',
          ],
      benefits: locale === 'cs'
        ? [
            '90% snížení manuálních úkolů',
            'Téměř nulová míra chyb',
            'Schopnost provozu 24/7',
            'Rychlejší rozhodování',
          ]
        : [
            '90% reduction in manual tasks',
            'Near-zero error rates',
            '24/7 operation capability',
            'Faster decision making',
          ],
    },
    {
      id: "infrastructure",
      icon: <Network className="h-10 w-10" />,
      title: locale === 'cs' ? 'Digitální infrastruktura' : 'Digital Infrastructure',
      description: locale === 'cs'
        ? 'Vytvářejte škálovatelné, bezpečné a spolehlivé systémy'
        : 'Build scalable, secure, and reliable systems',
      includes: locale === 'cs'
        ? [
            'Návrh cloudové architektury',
            'Integrace systémů',
            'Vývoj API',
            'Implementace bezpečnosti',
            'Plánování škálovatelnosti',
          ]
        : [
            'Cloud architecture design',
            'System integration',
            'API development',
            'Security implementation',
            'Scalability planning',
          ],
      benefits: locale === 'cs'
        ? ['99,9% záruka dostupnosti', 'Bezproblémová škálovatelnost', 'Bezpečnost podnikové úrovně', 'Snížené IT náklady']
        : ['99.9% uptime guarantee', 'Seamless scalability', 'Enterprise-grade security', 'Reduced IT overhead'],
    },
    {
      id: "apps",
      icon: <Code className="h-10 w-10" />,
      title: locale === 'cs' ? 'Vlastní aplikace a nástroje' : 'Custom Apps & Tools',
      description: locale === 'cs'
        ? 'Vytvářejte řešení šitá na míru vašim obchodním potřebám'
        : 'Develop solutions tailored to your business needs',
      includes: locale === 'cs'
        ? [
            'Webové a mobilní aplikace',
            'Interní nástroje a dashboardy',
            'Zákaznické portály',
            'E-commerce platformy',
            'Integrační middleware',
          ]
        : [
            'Web and mobile applications',
            'Internal tools and dashboards',
            'Customer portals',
            'E-commerce platforms',
            'Integration middleware',
          ],
      benefits: locale === 'cs'
        ? [
            'Perfektní přizpůsobení vašim potřebám',
            'Konkurenční výhoda',
            'Plné vlastnictví kódu',
            'Zahrnuta průběžná podpora',
          ]
        : [
            'Perfect fit for your needs',
            'Competitive advantage',
            'Full ownership of code',
            'Ongoing support included',
          ],
    },
    {
      id: "data",
      icon: <BarChart3 className="h-10 w-10" />,
      title: locale === 'cs' ? 'Datová inteligence a dashboardy' : 'Data Intelligence & Dashboards',
      description: locale === 'cs'
        ? 'Převeďte data na akční poznatky'
        : 'Turn data into actionable insights',
      includes: locale === 'cs'
        ? [
            'Dashboardy v reálném čase',
            'Prediktivní analýza',
            'Business intelligence',
            'Nastavení datového skladu',
            'Vlastní reportování',
          ]
        : [
            'Real-time dashboards',
            'Predictive analytics',
            'Business intelligence',
            'Data warehouse setup',
            'Custom reporting',
          ],
      benefits: locale === 'cs'
        ? ['Rozhodování založené na datech', 'Včasná detekce problémů', 'Identifikace trendů', 'Sledování ROI']
        : ['Data-driven decisions', 'Early problem detection', 'Trend identification', 'ROI tracking'],
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
                {t.services.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto lg:mx-0">
                {t.services.hero.description}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Mascot
                variant="presenting"
                width={350}
                height={350}
                className="w-full max-w-sm float-animation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto space-y-24">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <Card className="overflow-hidden border-primary/20">
                <CardContent className="p-0">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className={`p-12 space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        {service.icon}
                      </div>
                      <CardHeader className="p-0">
                        <CardTitle className="text-3xl">{service.title}</CardTitle>
                      </CardHeader>
                      <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">{t.services.whatsIncluded}</h4>
                        <ul className="space-y-2">
                          {service.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="bg-primary hover:bg-primary/90" asChild>
                        <Link href={`/${locale}/contact`}>
                          {t.services.requestAudit}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    <div
                      className={`p-12 bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                    >
                      <h4 className="font-semibold text-lg mb-4">{t.services.keyBenefits}</h4>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto">
          <Card className="border-primary/20">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl font-bold">{t.services.cta.title}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.services.cta.description}
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href={`/${locale}/contact`}>
                  {t.services.cta.button}
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
