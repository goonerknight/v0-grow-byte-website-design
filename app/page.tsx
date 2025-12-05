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
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
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
              <div className="inline-block">
                <span className="text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-full">
                  AI-First Digital Agency
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                AI-first digital agency that makes your business{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">grow</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We optimize your internal processes, automate workflows and build digital ecosystems that scale. Fast
                delivery. Real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg" asChild>
                  <Link href="/contact">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg bg-transparent" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative float-animation">
                <Image
                  src="/mascot.png"
                  alt="GrowByte Mascot"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground">End-to-end digital transformation services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Process Optimization",
                description: "Streamline operations and eliminate bottlenecks for maximum efficiency",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Automation & AI Integration",
                description: "Implement intelligent automation to reduce manual work and errors",
              },
              {
                icon: <Network className="h-8 w-8" />,
                title: "Digital Infrastructure",
                description: "Build robust, scalable systems that grow with your business",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Custom Applications",
                description: "Develop tailored solutions that fit your unique business needs",
              },
              {
                icon: <CheckCircle2 className="h-8 w-8" />,
                title: "Data Intelligence",
                description: "Turn raw data into actionable insights with advanced analytics",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground">Specialized solutions across multiple sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Factory className="h-6 w-6" />, title: "Manufacturing" },
              { icon: <Truck className="h-6 w-6" />, title: "Logistics & Warehousing" },
              { icon: <ShoppingCart className="h-6 w-6" />, title: "Retail & E-commerce" },
              { icon: <HeartPulse className="h-6 w-6" />, title: "Healthcare" },
              { icon: <Briefcase className="h-6 w-6" />, title: "Professional Services" },
              { icon: <HardHat className="h-6 w-6" />, title: "Construction" },
            ].map((industry, index) => (
              <Card key={index} className="group hover:border-secondary/50 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{industry.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/industries">
                View All Industries
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why GrowByte</h2>
            <p className="text-xl text-muted-foreground">What sets us apart from the competition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI-First Approach",
                description: "We leverage cutting-edge AI technology in every solution we build",
              },
              {
                title: "Fast Delivery",
                description: "Rapid implementation without compromising on quality or security",
              },
              {
                title: "Deep Process Expertise",
                description: "Years of experience optimizing complex business operations",
              },
              {
                title: "Connected Ecosystems",
                description: "Build integrated systems that work seamlessly together",
              },
            ].map((value, index) => (
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
                  <span className="text-sm font-mono text-primary">Case Study</span>
                  <h3 className="text-3xl font-bold">Manufacturing Efficiency</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Before</div>
                      <div className="text-2xl font-bold text-destructive">45% downtime</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">After</div>
                      <div className="text-2xl font-bold text-primary">8% downtime</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Reduced production downtime by 82% through AI-powered predictive maintenance and process automation.
                  </p>
                </div>
                <div className="p-12 flex items-center justify-center bg-card">
                  <Image
                    src="/mascot.png"
                    alt="Success"
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
              <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Business?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how we can optimize your processes and accelerate your growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg" asChild>
                  <Link href="/contact">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg bg-transparent" asChild>
                  <Link href="/services">View Our Services</Link>
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
