import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Target, Users, TrendingUp, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
                We build the digital backbone of modern companies
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                GrowByte is an AI-first digital agency dedicated to transforming how businesses operate. We combine
                cutting-edge technology with deep process expertise to deliver solutions that actually work.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/mascot.png"
                alt="GrowByte Team"
                width={400}
                height={400}
                className="w-full max-w-md float-animation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To empower businesses with AI-driven digital solutions that eliminate inefficiencies, accelerate growth,
              and create lasting competitive advantages. We believe every company deserves access to enterprise-grade
              technology and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "AI-First",
                description:
                  "We leverage artificial intelligence in every solution, ensuring you stay ahead of the curve",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Speed",
                description:
                  "Fast delivery without compromising quality. We understand that time is your most valuable resource",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Partnership",
                description: "We're not just vendors - we're your proactive partners in growth and transformation",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Results",
                description: "We measure success by your ROI. Every solution is designed to deliver measurable impact",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-muted-foreground">How we deliver transformative results</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Discovery & Audit",
                description:
                  "We analyze your current processes, identify bottlenecks, and uncover opportunities for improvement",
              },
              {
                step: "2",
                title: "Strategy & Design",
                description:
                  "We create a comprehensive roadmap with clear milestones, ROI projections, and implementation plans",
              },
              {
                step: "3",
                title: "Implementation",
                description: "Our team builds and deploys your solution with minimal disruption to your operations",
              },
              {
                step: "4",
                title: "Optimization & Support",
                description:
                  "We continuously monitor performance, gather feedback, and optimize for even better results",
              },
            ].map((phase, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    <div className="md:col-span-2 bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-8">
                      <span className="text-4xl font-bold text-primary-foreground">{phase.step}</span>
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
              <h2 className="text-4xl font-bold">Let's Work Together</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your business? Book a free consultation and discover what's possible.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">
                  Book Free Consultation
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
