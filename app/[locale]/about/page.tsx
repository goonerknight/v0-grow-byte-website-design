import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Target, Users, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Mascot } from "@/components/mascot"
import { getTranslations } from "@/lib/i18n"
import { Locale } from "@/lib/i18n"

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getTranslations(locale)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-balance">
                {t.about.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t.about.hero.description}
              </p>
            </div>
            <div className="flex justify-center">
              <Mascot
                variant="pointing-right"
                width={400}
                height={400}
                className="w-full max-w-md float-animation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.about.team.title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.about.team.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.about.team.members.map((member, index) => (
              <Card key={index} className="text-center group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto flex items-center justify-center text-3xl font-bold text-primary-foreground mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">{t.about.mission.title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.about.mission.description}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.about.values.title}</h2>
            <p className="text-xl text-muted-foreground">{t.about.values.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.values.items.map((value, index) => {
              const icons = [
                <Zap className="h-8 w-8" />,
                <Target className="h-8 w-8" />,
                <Users className="h-8 w-8" />,
                <TrendingUp className="h-8 w-8" />,
              ]
              return (
                <Card key={index} className="text-center group hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto group-hover:scale-110 transition-transform">
                      {icons[index]}
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.about.approach.title}</h2>
            <p className="text-xl text-muted-foreground">{t.about.approach.subtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {t.about.approach.steps.map((phase, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    <div className="md:col-span-2 bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-8">
                      <span className="text-4xl font-bold text-primary-foreground">{index + 1}</span>
                    </div>
                    <div className="md:col-span-10 p-8">
                      <h3 className="text-2xl font-semibold mb-3">{phase.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="border-primary/20">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl font-bold">{t.about.cta.title}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.about.cta.description}
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href={`/${locale}/contact`}>
                  {t.about.cta.button}
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
