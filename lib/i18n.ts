export const locales = ['en', 'cs'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const translations = {
  en: {
    nav: {
      services: 'Services',
      industries: 'Industries',
      about: 'About',
      contact: 'Contact',
      bookConsultation: 'Book Free Consultation',
    },
    home: {
      hero: {
        title: 'AI-first digital agency that makes your business',
        titleHighlight: 'grow',
        description: 'We optimize your internal processes, automate workflows and build digital ecosystems that scale. Fast delivery. Real impact.',
        cta1: 'Book a Free Consultation',
        cta2: 'Explore Services',
      },
      whatWeDo: {
        title: 'What We Do',
        subtitle: 'End-to-end digital transformation services',
        services: [
          {
            title: 'Process Optimization',
            description: 'Streamline operations and eliminate bottlenecks for maximum efficiency',
          },
          {
            title: 'Automation & AI Integration',
            description: 'Implement intelligent automation to reduce manual work and errors',
          },
          {
            title: 'Digital Infrastructure',
            description: 'Build robust, scalable systems that grow with your business',
          },
          {
            title: 'Custom Applications',
            description: 'Develop tailored solutions that fit your unique business needs',
          },
          {
            title: 'Data Intelligence',
            description: 'Turn raw data into actionable insights with advanced analytics',
          },
        ],
      },
      industries: {
        title: 'Industries We Serve',
        subtitle: 'Specialized solutions across multiple sectors',
        viewAll: 'View All Industries',
        industries: [
          'Manufacturing',
          'Logistics & Warehousing',
          'Retail & E-commerce',
          'Healthcare',
          'Professional Services',
          'Construction',
        ],
      },
      why: {
        title: 'Why GrowByte',
        subtitle: 'What sets us apart from the competition',
        values: [
          {
            title: 'AI-First Approach',
            description: 'We leverage cutting-edge AI technology in every solution we build',
          },
          {
            title: 'Fast Delivery',
            description: 'Rapid implementation without compromising on quality or security',
          },
          {
            title: 'Deep Process Expertise',
            description: 'Years of experience optimizing complex business operations',
          },
          {
            title: 'Connected Ecosystems',
            description: 'Build integrated systems that work seamlessly together',
          },
        ],
      },
      caseStudy: {
        label: 'Case Study',
        title: 'Manufacturing Efficiency',
        before: 'Before',
        after: 'After',
        beforeValue: '45% downtime',
        afterValue: '8% downtime',
        description: 'Reduced production downtime by 82% through AI-powered predictive maintenance and process automation.',
      },
      cta: {
        title: 'Ready to Transform Your Business?',
        description: "Let's discuss how we can optimize your processes and accelerate your growth",
        cta1: 'Book a Free Consultation',
        cta2: 'View Our Services',
      },
    },
    services: {
      hero: {
        title: 'Everything you need to optimize, automate and scale your business',
        description: 'Comprehensive digital transformation services designed to give you a competitive edge',
      },
      cta: {
        title: 'Ready to Get Started?',
        description: "Book a free consultation and let's discuss how we can help transform your business",
        button: 'Book Free Consultation',
      },
      requestAudit: 'Request Audit',
      whatsIncluded: "What's Included",
      keyBenefits: 'Key Benefits',
    },
    industries: {
      hero: {
        title: 'We build fast, automated and intelligent operations across industries',
        description: 'Deep expertise in optimizing processes for diverse business sectors',
      },
      ourSolutions: 'Our Solutions',
      cta: {
        title: "Don't See Your Industry?",
        description: "We work with businesses across all sectors. Let's discuss your specific needs and how we can help.",
        button: 'Get in Touch',
      },
    },
    about: {
      hero: {
        title: 'We build the digital backbone of modern companies',
        description: 'GrowByte is an AI-first digital agency dedicated to transforming how businesses operate. We combine cutting-edge technology with deep process expertise to deliver solutions that actually work.',
      },
      mission: {
        title: 'Our Mission',
        description: 'To empower businesses with AI-driven digital solutions that eliminate inefficiencies, accelerate growth, and create lasting competitive advantages. We believe every company deserves access to enterprise-grade technology and expertise.',
      },
      values: {
        title: 'Our Values',
        subtitle: 'The principles that guide everything we do',
        items: [
          {
            title: 'AI-First',
            description: 'We leverage artificial intelligence in every solution, ensuring you stay ahead of the curve',
          },
          {
            title: 'Speed',
            description: 'Fast delivery without compromising quality. We understand that time is your most valuable resource',
          },
          {
            title: 'Partnership',
            description: "We're not just vendors - we're your proactive partners in growth and transformation",
          },
          {
            title: 'Results',
            description: 'We measure success by your ROI. Every solution is designed to deliver measurable impact',
          },
        ],
      },
      approach: {
        title: 'Our Approach',
        subtitle: 'How we deliver transformative results',
        steps: [
          {
            title: 'Discovery & Audit',
            description: 'We analyze your current processes, identify bottlenecks, and uncover opportunities for improvement',
          },
          {
            title: 'Strategy & Design',
            description: 'We create a comprehensive roadmap with clear milestones, ROI projections, and implementation plans',
          },
          {
            title: 'Implementation',
            description: 'Our team builds and deploys your solution with minimal disruption to your operations',
          },
          {
            title: 'Optimization & Support',
            description: 'We continuously monitor performance, gather feedback, and optimize for even better results',
          },
        ],
      },
      cta: {
        title: "Let's Work Together",
        description: "Ready to transform your business? Book a free consultation and discover what's possible.",
        button: 'Book Free Consultation',
      },
    },
    contact: {
      hero: {
        title: "Let's Build Something Amazing Together",
        description: "Ready to transform your business? Get in touch and let's discuss how we can help.",
      },
      form: {
        title: 'Send Us a Message',
        name: 'Name',
        email: 'Email',
        company: 'Company',
        message: 'Message',
        send: 'Send Message',
        placeholders: {
          name: 'John Doe',
          email: 'john@company.com',
          company: 'Your Company',
          message: 'Tell us about your project...',
        },
      },
      info: {
        title: 'Get in Touch',
        email: 'Email',
        phone: 'Phone',
        office: 'Office',
        location: 'Prague, Czech Republic',
      },
      consultation: {
        title: 'Book a Free Consultation',
        description: 'Schedule a 30-minute call to discuss your project',
        button: 'Schedule Meeting',
      },
    },
    footer: {
      description: 'AI-first digital agency that makes your business grow.',
      services: 'Services',
      industries: 'Industries',
      company: 'Company',
      aboutUs: 'About Us',
      contact: 'Contact',
      copyright: 'All rights reserved.',
    },
  },
  cs: {
    nav: {
      services: 'Služby',
      industries: 'Odvětví',
      about: 'O nás',
      contact: 'Kontakt',
      bookConsultation: 'Objednat konzultaci',
    },
    home: {
      hero: {
        title: 'AI-first digitální agentura, která rozvíjí váš',
        titleHighlight: 'podnik',
        description: 'Optimalizujeme vaše interní procesy, automatizujeme pracovní postupy a budujeme digitální ekosystémy, které škálují. Rychlé dodání. Skutečný dopad.',
        cta1: 'Objednat konzultaci',
        cta2: 'Prozkoumat služby',
      },
      whatWeDo: {
        title: 'Co děláme',
        subtitle: 'Komplexní služby digitální transformace',
        services: [
          {
            title: 'Optimalizace procesů',
            description: 'Zefektivněte operace a eliminujte úzká místa pro maximální efektivitu',
          },
          {
            title: 'Automatizace a integrace AI',
            description: 'Implementujte inteligentní automatizaci pro snížení manuální práce a chyb',
          },
          {
            title: 'Digitální infrastruktura',
            description: 'Vytvářejte robustní, škálovatelné systémy, které rostou s vaším podnikem',
          },
          {
            title: 'Vlastní aplikace',
            description: 'Vytvářejte řešení šitá na míru vašim jedinečným obchodním potřebám',
          },
          {
            title: 'Datová inteligence',
            description: 'Převeďte surová data na akční poznatky pomocí pokročilé analýzy',
          },
        ],
      },
      industries: {
        title: 'Odvětví, kterým sloužíme',
        subtitle: 'Specializovaná řešení napříč různými sektory',
        viewAll: 'Zobrazit všechna odvětví',
        industries: [
          'Výroba',
          'Logistika a skladování',
          'Retail a e-commerce',
          'Zdravotnictví',
          'Profesionální služby',
          'Stavebnictví',
        ],
      },
      why: {
        title: 'Proč GrowByte',
        subtitle: 'Co nás odlišuje od konkurence',
        values: [
          {
            title: 'AI-First přístup',
            description: 'Využíváme nejmodernější AI technologii v každém řešení, které vytváříme',
          },
          {
            title: 'Rychlé dodání',
            description: 'Rychlá implementace bez kompromisů v kvalitě nebo bezpečnosti',
          },
          {
            title: 'Hluboká odbornost v procesech',
            description: 'Roky zkušeností s optimalizací složitých obchodních operací',
          },
          {
            title: 'Propojené ekosystémy',
            description: 'Vytvářejte integrované systémy, které bezproblémově spolupracují',
          },
        ],
      },
      caseStudy: {
        label: 'Případová studie',
        title: 'Efektivita výroby',
        before: 'Před',
        after: 'Po',
        beforeValue: '45% prostoje',
        afterValue: '8% prostoje',
        description: 'Snížili jsme prostoje ve výrobě o 82% pomocí AI-poháněné prediktivní údržby a automatizace procesů.',
      },
      cta: {
        title: 'Připraveni transformovat váš podnik?',
        description: 'Pojďme diskutovat o tom, jak můžeme optimalizovat vaše procesy a urychlit váš růst',
        cta1: 'Objednat konzultaci',
        cta2: 'Zobrazit naše služby',
      },
    },
    services: {
      hero: {
        title: 'Vše, co potřebujete k optimalizaci, automatizaci a škálování vašeho podniku',
        description: 'Komplexní služby digitální transformace navržené tak, aby vám poskytly konkurenční výhodu',
      },
      cta: {
        title: 'Připraveni začít?',
        description: 'Objednejte si bezplatnou konzultaci a pojďme diskutovat o tom, jak můžeme pomoci transformovat váš podnik',
        button: 'Objednat konzultaci',
      },
      requestAudit: 'Požádat o audit',
      whatsIncluded: 'Co je zahrnuto',
      keyBenefits: 'Klíčové výhody',
    },
    industries: {
      hero: {
        title: 'Vytváříme rychlé, automatizované a inteligentní operace napříč odvětvími',
        description: 'Hluboká odbornost v optimalizaci procesů pro různorodé obchodní sektory',
      },
      ourSolutions: 'Naše řešení',
      cta: {
        title: 'Nevidíte vaše odvětví?',
        description: 'Pracujeme s podniky napříč všemi sektory. Pojďme diskutovat o vašich specifických potřebách a jak můžeme pomoci.',
        button: 'Kontaktovat',
      },
    },
    about: {
      hero: {
        title: 'Vytváříme digitální páteř moderních společností',
        description: 'GrowByte je AI-first digitální agentura zaměřená na transformaci způsobu, jakým podniky fungují. Kombinujeme nejmodernější technologii s hlubokou odborností v procesech, abychom dodali řešení, která skutečně fungují.',
      },
      mission: {
        title: 'Naše mise',
        description: 'Posílit podniky pomocí AI-poháněných digitálních řešení, která eliminují neefektivity, urychlují růst a vytvářejí trvalé konkurenční výhody. Věříme, že každá společnost si zaslouží přístup k technologii a odbornosti podnikové úrovně.',
      },
      values: {
        title: 'Naše hodnoty',
        subtitle: 'Principy, které řídí vše, co děláme',
        items: [
          {
            title: 'AI-First',
            description: 'Využíváme umělou inteligenci v každém řešení, což zajišťuje, že zůstanete vpředu',
          },
          {
            title: 'Rychlost',
            description: 'Rychlé dodání bez kompromisů v kvalitě. Chápeme, že čas je váš nejcennější zdroj',
          },
          {
            title: 'Partnerství',
            description: 'Nejsme jen dodavatelé - jsme vaši proaktivní partneři v růstu a transformaci',
          },
          {
            title: 'Výsledky',
            description: 'Měříme úspěch podle vašeho ROI. Každé řešení je navrženo tak, aby přineslo měřitelný dopad',
          },
        ],
      },
      approach: {
        title: 'Náš přístup',
        subtitle: 'Jak dodáváme transformační výsledky',
        steps: [
          {
            title: 'Objevování a audit',
            description: 'Analyzujeme vaše současné procesy, identifikujeme úzká místa a odhalíme příležitosti ke zlepšení',
          },
          {
            title: 'Strategie a design',
            description: 'Vytváříme komplexní roadmapu s jasnými milníky, projekcemi ROI a plány implementace',
          },
          {
            title: 'Implementace',
            description: 'Náš tým vytváří a nasazuje vaše řešení s minimálním narušením vašich operací',
          },
          {
            title: 'Optimalizace a podpora',
            description: 'Průběžně monitorujeme výkon, shromažďujeme zpětnou vazbu a optimalizujeme pro ještě lepší výsledky',
          },
        ],
      },
      cta: {
        title: 'Pojďme spolupracovat',
        description: 'Připraveni transformovat váš podnik? Objednejte si bezplatnou konzultaci a objevte, co je možné.',
        button: 'Objednat konzultaci',
      },
    },
    contact: {
      hero: {
        title: 'Pojďme společně vytvořit něco úžasného',
        description: 'Připraveni transformovat váš podnik? Kontaktujte nás a pojďme diskutovat o tom, jak můžeme pomoci.',
      },
      form: {
        title: 'Pošlete nám zprávu',
        name: 'Jméno',
        email: 'Email',
        company: 'Společnost',
        message: 'Zpráva',
        send: 'Odeslat zprávu',
        placeholders: {
          name: 'Jan Novák',
          email: 'jan@spolecnost.cz',
          company: 'Vaše společnost',
          message: 'Řekněte nám o vašem projektu...',
        },
      },
      info: {
        title: 'Kontaktujte nás',
        email: 'Email',
        phone: 'Telefon',
        office: 'Kancelář',
        location: 'Praha, Česká republika',
      },
      consultation: {
        title: 'Objednat bezplatnou konzultaci',
        description: 'Naplánujte 30minutový hovor k diskusi o vašem projektu',
        button: 'Naplánovat schůzku',
      },
    },
    footer: {
      description: 'AI-first digitální agentura, která rozvíjí váš podnik.',
      services: 'Služby',
      industries: 'Odvětví',
      company: 'Společnost',
      aboutUs: 'O nás',
      contact: 'Kontakt',
      copyright: 'Všechna práva vyhrazena.',
    },
  },
} as const

export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale]
}
