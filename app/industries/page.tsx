import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Factory, Truck, ShoppingCart, HeartPulse, Briefcase, HardHat, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function IndustriesPage() {
  const industries = [
    {
      id: "manufacturing",
      icon: <Factory className="h-12 w-12" />,
      title: "Manufacturing",
      description:
        "Optimize production lines with AI-powered predictive maintenance, quality control automation, and real-time monitoring. Reduce downtime and increase output.",
      solutions: [
        "Predictive maintenance",
        "Quality control AI",
        "Production optimization",
        "Supply chain integration",
      ],
    },
    {
      id: "logistics",
      icon: <Truck className="h-12 w-12" />,
      title: "Logistics & Warehousing",
      description:
        "Streamline operations with intelligent routing, automated inventory management, and real-time tracking systems. Maximize efficiency and minimize costs.",
      solutions: ["Route optimization", "Warehouse automation", "Inventory management", "Fleet tracking"],
    },
    {
      id: "retail",
      icon: <ShoppingCart className="h-12 w-12" />,
      title: "Retail & E-commerce",
      description:
        "Enhance customer experience with personalized recommendations, automated inventory, and omnichannel integration. Boost sales and customer satisfaction.",
      solutions: ["E-commerce platforms", "Inventory automation", "Customer analytics", "Omnichannel systems"],
    },
    {
      id: "healthcare",
      icon: <HeartPulse className="h-12 w-12" />,
      title: "Healthcare",
      description:
        "Improve patient care with automated appointment systems, electronic health records, and AI-powered diagnostics support. Ensure compliance and efficiency.",
      solutions: ["Patient management", "EHR systems", "Appointment automation", "Compliance tools"],
    },
    {
      id: "professional",
      icon: <Briefcase className="h-12 w-12" />,
      title: "Professional Services",
      description:
        "Automate client management, project tracking, and billing processes. Focus on delivering value while we handle the operations.",
      solutions: ["CRM systems", "Project management", "Automated billing", "Document automation"],
    },
    {
      id: "construction",
      icon: <HardHat className="h-12 w-12" />,
      title: "Construction",
      description:
        "Manage projects with real-time collaboration tools, resource planning, and safety compliance systems. Stay on schedule and under budget.",
      solutions: ["Project planning", "Resource management", "Safety compliance", "Progress tracking"],
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
            We build fast, automated and intelligent operations across industries
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep expertise in optimizing processes for diverse business sectors
          </p>
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
                    <h4 className="font-semibold mb-3">Our Solutions</h4>
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
              <h2 className="text-4xl font-bold">Don't See Your Industry?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We work with businesses across all sectors. Let's discuss your specific needs and how we can help.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">
                  Get in Touch
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
