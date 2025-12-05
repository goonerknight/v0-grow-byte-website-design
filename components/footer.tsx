import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image src="/logo.png" alt="GrowByte" width={150} height={40} className="h-8 w-auto" />
            <p className="text-sm text-muted-foreground">AI-first digital agency that makes your business grow.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services#optimization" className="hover:text-foreground transition-colors">
                  Process Optimization
                </Link>
              </li>
              <li>
                <Link href="/services#automation" className="hover:text-foreground transition-colors">
                  Automation & AI
                </Link>
              </li>
              <li>
                <Link href="/services#infrastructure" className="hover:text-foreground transition-colors">
                  Digital Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services#apps" className="hover:text-foreground transition-colors">
                  Custom Applications
                </Link>
              </li>
              <li>
                <Link href="/services#data" className="hover:text-foreground transition-colors">
                  Data Intelligence
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/industries#manufacturing" className="hover:text-foreground transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/industries#logistics" className="hover:text-foreground transition-colors">
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="/industries#retail" className="hover:text-foreground transition-colors">
                  Retail & E-commerce
                </Link>
              </li>
              <li>
                <Link href="/industries#healthcare" className="hover:text-foreground transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries#professional" className="hover:text-foreground transition-colors">
                  Professional Services
                </Link>
              </li>
              <li>
                <Link href="/industries#construction" className="hover:text-foreground transition-colors">
                  Construction
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GrowByte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
