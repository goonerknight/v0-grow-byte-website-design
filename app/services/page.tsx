import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Zap, Network, Code, BarChart3, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "optimization",
      icon: <Target className="h-10 w-10" />,
      title: "Process Optimization",
      description: "Transform inefficient workflows into streamlined operations",
      includes: [
        "Workflow analysis and mapping",
        "Bottleneck identification",
        "Process redesign and implementation",
        "Performance monitoring and KPIs",
        "Continuous improvement frameworks",
      ],
      benefits: [
        "Up to 60% reduction in process time",
        "Significant cost savings",
        "Improved employee satisfaction",
        "Better resource allocation",
      ],
    },
    {
      id: "automation",
      icon: <Zap className="h-10 w-10" />,
      title: "Automation & AI Integration",
      description: "Implement intelligent systems that work 24/7",
      includes: [
        "Robotic Process Automation (RPA)",
        "AI-powered decision making",
        "Document processing automation",
        "Workflow orchestration",
        "Integration with existing tools",
      ],
      benefits: [
        "90% reduction in manual tasks",
        "Near-zero error rates",
        "24/7 operation capability",
        "Faster decision making",
      ],
    },
    {
      id: "infrastructure",
      icon: <Network className="h-10 w-10" />,
      title: "Digital Infrastructure",
      description: "Build scalable, secure, and reliable systems",
      includes: [
        "Cloud architecture design",
        "System integration",
        "API development",
        "Security implementation",
        "Scalability planning",
      ],
      benefits: ["99.9% uptime guarantee", "Seamless scalability", "Enterprise-grade security", "Reduced IT overhead"],
    },
    {
      id: "apps",
      icon: <Code className="h-10 w-10" />,
      title: "Custom Apps & Tools",
      description: "Develop solutions tailored to your business needs",
      includes: [
        "Web and mobile applications",
        "Internal tools and dashboards",
        "Customer portals",
        "E-commerce platforms",
        "Integration middleware",
      ],
      benefits: [
        "Perfect fit for your needs",
        "Competitive advantage",
        "Full ownership of code",
        "Ongoing support included",
      ],
    },
    {
      id: "data",
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Data Intelligence & Dashboards",
      description: "Turn data into actionable insights",
      includes: [
        "Real-time dashboards",
        "Predictive analytics",
        "Business intelligence",
        "Data warehouse setup",
        "Custom reporting",
      ],
      benefits: ["Data-driven decisions", "Early problem detection", "Trend identification", "ROI tracking"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Everything you need to optimize, automate and scale your business
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital transformation services designed to give you a competitive edge
          </p>
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
                        <h4 className="font-semibold text-lg">What's Included</h4>
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
                        <Link href="/contact">
                          Request Audit
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    <div
                      className={`p-12 bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                    >
                      <h4 className="font-semibold text-lg mb-4">Key Benefits</h4>
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
              <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Book a free consultation and let's discuss how we can help transform your business
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
