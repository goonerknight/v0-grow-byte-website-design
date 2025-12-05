import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Zap,
  Target,
  Network,
  TrendingUp,
  CheckCircle2,
  Factory,
  Truck,
  ShoppingCart,
  HeartPulse,
  Briefcase,
  HardHat,
} from "lucide-react"
import Link from "next/link"
import { Mascot } from "@/components/mascot"
import { getTranslations } from "@/lib/i18n"
import { Locale } from "@/lib/i18n"

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getTranslations(locale)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                {t.home.hero.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {t.home.hero.titleHighlight}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t.home.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg" asChild>
                  <Link href={`/${locale}/contact`}>
                    {t.home.hero.cta1}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg bg-transparent" asChild>
                  <Link href={`/${locale}/services`}>{t.home.hero.cta2}</Link>
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative float-animation">
                <Mascot
                  variant="pointing-up"
                  width={400}
                  height={400}
                  className="w-full max-w-md"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.home.whatWeDo.title}</h2>
            <p className="text-xl text-muted-foreground">{t.home.whatWeDo.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.home.whatWeDo.services.map((service, index) => {
              const icons = [
                <Target className="h-8 w-8" />,
                <Zap className="h-8 w-8" />,
                <Network className="h-8 w-8" />,
                <TrendingUp className="h-8 w-8" />,
                <CheckCircle2 className="h-8 w-8" />,
              ]
              return (
                <Card
                  key={index}
                  className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      {icons[index]}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.home.industries.title}</h2>
            <p className="text-xl text-muted-foreground">{t.home.industries.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.home.industries.industries.map((industry, index) => {
              const icons = [
                <Factory className="h-6 w-6" />,
                <Truck className="h-6 w-6" />,
                <ShoppingCart className="h-6 w-6" />,
                <HeartPulse className="h-6 w-6" />,
                <Briefcase className="h-6 w-6" />,
                <HardHat className="h-6 w-6" />,
              ]
              return (
                <Card key={index} className="group hover:border-secondary/50 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                      {icons[index]}
                    </div>
                    <h3 className="text-lg font-semibold">{industry}</h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href={`/${locale}/industries`}>
                {t.home.industries.viewAll}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why GrowByte Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.home.why.title}</h2>
            <p className="text-xl text-muted-foreground">{t.home.why.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.home.why.values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="overflow-hidden border-primary/20">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 space-y-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                  <span className="text-sm font-mono text-primary">{t.home.caseStudy.label}</span>
                  <h3 className="text-3xl font-bold">{t.home.caseStudy.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">{t.home.caseStudy.before}</div>
                      <div className="text-2xl font-bold text-destructive">{t.home.caseStudy.beforeValue}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">{t.home.caseStudy.after}</div>
                      <div className="text-2xl font-bold text-primary">{t.home.caseStudy.afterValue}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{t.home.caseStudy.description}</p>
                </div>
                <div className="p-12 flex items-center justify-center bg-card">
                  <Mascot
                    variant="thumbs-up"
                    width={300}
                    height={300}
                    className="w-64 h-64 object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20" />
        <div className="container mx-auto relative z-10">
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">{t.home.cta.title}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.home.cta.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg" asChild>
                  <Link href={`/${locale}/contact`}>
                    {t.home.cta.cta1}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg bg-transparent" asChild>
                  <Link href={`/${locale}/services`}>{t.home.cta.cta2}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
