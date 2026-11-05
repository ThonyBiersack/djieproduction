export type Language = 'en' | 'id';

export interface ProjectItem {
  serviceCategory: string;
  serviceSubtitle: string;
  projectTitle: string;
  projectBadge: string;
  status: string;
  description: string;
  architectureSpecs: {
    engine: string;
    database: string;
    security: string;
  };
  features: string[];
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
  isComingSoonDemo?: boolean;
  publicRegisterNotice?: string;
  screenshotType: 'taskapp' | 'warungkas' | 'bookshelf' | 'invitation';
}

export interface ServiceCategoryItem {
  icon: 'globe' | 'smartphone' | 'server' | 'mail';
  title: string;
  description: string;
  stack: string[];
}

export interface ServiceCategories {
  tag: string;
  title: string;
  subtitle: string;
  items: ServiceCategoryItem[];
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface Testimonials {
  tag: string;
  title: string;
  subtitle: string;
  items: TestimonialItem[];
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    services: string;
    whyMe: string;
    pipeline: string;
    contact: string;
    cv: string;
  };
  hero: {
    roleStatus: string;
    headlineStart: string;
    headlineHighlight: string;
    headlineEnd: string;
    bio: string;
    exploreBtn: string;
    quoteBtn: string;
    downloadCvBtn: string;
    cvUrl: string;
    cvFileName: string;
    console: {
      windowTitle: string;
      statusBadge: string;
      layer1Title: string;
      layer1Name: string;
      layer1Tag: string;
      gatewayText: string;
      layer2Title: string;
      layer2Name: string;
      layer2Tag: string;
      dbText: string;
      layer3Title: string;
      layer3Name: string;
      layer3Tag: string;
      footerLeft: string;
      footerRight: string;
    };
  };
  metrics: {
    item1: { val: string; title: string; sub: string };
    item2: { val: string; title: string; sub: string };
    item3: { val: string; title: string; sub: string };
    item4: { val: string; title: string; sub: string };
  };
  about: {
    tag: string;
    title: string;
    paragraphs: string[];
    advantages: { title: string; desc: string }[];
    dossier: {
      title: string;
      subtitle: string;
      operatingModelLabel: string;
      operatingModelVal: string;
      founderLabel: string;
      founderVal: string;
      locationLabel: string;
      locationVal: string;
      whatsappLabel: string;
      emailLabel: string;
      availabilityLabel: string;
      availabilityVal: string;
      ctaText: string;
    };
  };
  serviceCategories: ServiceCategories;
  services: {
    tag: string;
    title: string;
    subtitle: string;
    pricingNote: string;
    badgeCount: string;
    highlightsTitle: string;
    labels: {
      specsTitle: string;
      featuresTitle: string;
      techStack: string;
      previewLabel: string;
      detailsToggle: string;
      liveDemo: string;
      sourceCode: string;
      comingSoon: string;
      engineLabel: string;
      dbLabel: string;
      securityLabel: string;
    };
    projects: ProjectItem[];
  };
  testimonials: Testimonials;
  whyMe: {
    tag: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  workflow: {
    tag: string;
    title: string;
    subtitle: string;
    badge: string;
    labels: {
      flow: string;
      pause: string;
      resume: string;
      stage: string;
      clientAction: string;
      deliverable: string;
    };
    stages: {
      id: string;
      title: string;
      subtitle: string;
      detailTitle: string;
      detailDesc: string;
      clientAction: string;
      deliverable: string;
      ariaLabel: string;
    }[];
  };
  contact: {
    tag: string;
    title: string;
    titleHighlight: string;
    description: string;
    channels: {
      whatsappTitle: string;
      whatsappSub: string;
      whatsappCta: string;
      emailTitle: string;
      emailSub: string;
      emailCta: string;
      emailCopy: string;
      emailCopied: string;
      cvTitle: string;
      cvSub: string;
      cvCta: string;
      cvUrl: string;
      linkedinTitle: string;
      linkedinSub: string;
      linkedinCta: string;
      githubTitle: string;
      githubSub: string;
      githubCta: string;
    };
    footerSla: {
      location: string;
      response: string;
    };
  };
  footer: {
    rights: string;
    backToTop: string;
    recruiterLink: string;
  };
}

export const content: Record<Language, SiteContent> = {
  en: {
    meta: {
      title: "Djie Production — Web & Mobile Software Studio by Anthony Djie",
      description: "Independent software studio by Anthony Djie. Custom web applications, company profiles, offline-first POS systems, and REST APIs. Direct consultation without agency overhead."
    },
    nav: {
      about: "About",
      services: "Services",
      whyMe: "Why Us",
      pipeline: "Pipeline",
      contact: "Contact",
      cv: "Download CV"
    },
    hero: {
      roleStatus: "Accepting new projects • Independent studio",
      headlineStart: "Production-Ready Websites & Applications, ",
      headlineHighlight: "from Database",
      headlineEnd: " to Cloud Deploy.",
      bio: "<strong>Djie Production</strong> is an independent software studio founded by <span class=\"text-sky-300 font-medium\">Anthony Djie</span>. We build <strong>company profile websites</strong>, <strong>offline-first cashier POS apps</strong> for small businesses, and <strong>custom full-stack web platforms</strong>. From database design to cloud deployment — no agency middlemen, direct communication, transparent pricing, and resilient systems.",
      exploreBtn: "Explore our services",
      quoteBtn: "Discuss a project",
      downloadCvBtn: "For recruiters: view CV",
      cvUrl: "/en/cv",
      cvFileName: "AnthonySuryadjie-CV-EN.pdf",
      console: {
        windowTitle: "core-stack.sys",
        statusBadge: "Active Stack",
        layer1Title: "Layer 01 • Frontend",
        layer1Name: "Astro (Web) / Flutter (Mobile)",
        layer1Tag: "Frontend",
        gatewayText: "↓ REST API (HTTPS)",
        layer2Title: "Layer 02 • Backend",
        layer2Name: "Node.js + Express.js",
        layer2Tag: "JWT & Zod",
        dbText: "↓ Data Persistence",
        layer3Title: "Layer 03 • Database",
        layer3Name: "MongoDB / SQLite",
        layer3Tag: "Database",
        footerLeft: "Direct Engineering",
        footerRight: "Anthony Djie"
      }
    },
    metrics: {
      item1: {
        val: "4",
        title: "Projects Built",
        sub: "Full-stack systems deployed and publicly accessible"
      },
      item2: {
        val: "<24h",
        title: "Response Time Target",
        sub: "Response on business days via WhatsApp or email"
      },
      item3: {
        val: "100%",
        title: "Direct Communication",
        sub: "No middlemen — you talk directly with the engineer"
      },
      item4: {
        val: "End-to-End",
        title: "Database to Deploy",
        sub: "One developer handling the entire stack"
      }
    },
    about: {
      tag: "ABOUT STUDIO",
      title: "Why Djie Production Operates as an Independent Studio",
      paragraphs: [
        "For certain types of projects, working directly with a single hands-on developer can be more efficient than going through a larger team structure — especially when technical requirements need to be communicated quickly and precisely.",
        "<strong class=\"text-white font-medium\">Djie Production</strong> was founded by <span class=\"text-sky-300 font-medium\">Anthony Djie</span> with this approach. As an independent studio, we focus on clean technical execution: designing structured database schemas, writing validated REST APIs, building clean responsive web interfaces, and shipping offline-first Flutter mobile apps.",
        "The result is practical software built with direct communication, fast iterations, and no added layers in between."
      ],
      advantages: [
        {
          title: "Direct Communication",
          desc: "From initial consultation to final deployment, you collaborate directly with the engineer writing your code."
        },
        {
          title: "Focused on Real Utility",
          desc: "No buzzwords or artificial complexity — only clean, maintainable software built for your actual operational needs."
        }
      ],
      dossier: {
        title: "Studio Profile",
        subtitle: "Djie Production",
        operatingModelLabel: "Operating Model:",
        operatingModelVal: "Independent Developer / Studio",
        founderLabel: "Founder & Developer:",
        founderVal: "Anthony Djie",
        locationLabel: "Base Location:",
        locationVal: "Indonesia (UTC+7)",
        whatsappLabel: "Direct WhatsApp:",
        emailLabel: "Studio Email:",
        availabilityLabel: "Availability:",
        availabilityVal: "Open to projects & discussions",
        ctaText: "Chat via WhatsApp"
      }
    },
    serviceCategories: {
      tag: "OUR SERVICES",
      title: "What We Can Build for You",
      subtitle: "Every service is handled end-to-end — from requirements consultation and architecture design, all the way to deployment and handover.",
      items: [
        {
          icon: "globe",
          title: "Company Profile Website",
          description: "Fast, modern, and SEO-optimized company profiles designed to build credibility and convert visitors into clients.",
          stack: ["Astro", "Tailwind CSS", "Cloudflare CDN"]
        },
        {
          icon: "smartphone",
          title: "Offline-First Mobile POS App",
          description: "Cross-platform cashier application that functions 100% offline. Includes Bluetooth thermal printing and barcode scanning.",
          stack: ["Flutter", "Dart", "SQLite (WAL)"]
        },
        {
          icon: "server",
          title: "REST API & Backend Architecture",
          description: "Secure and scalable API backends featuring JWT auth, Zod input validation, RBAC, and clean layered modular design.",
          stack: ["Node.js", "Express.js", "MongoDB", "Zod"]
        },
        {
          icon: "mail",
          title: "Interactive Digital Invitations",
          description: "Dynamic wedding and event platforms with custom guest URL slugs, real-time RSVP database sync, and zero layout shift.",
          stack: ["Astro", "Cloudflare D1 (SQL)", "Turnstile"]
        }
      ]
    },
    services: {
      tag: "Selected work",
      title: "Projects built for real workflows",
      subtitle: "Explore products and systems built by Djie Production. Each case highlights the need it addresses, with technical details available for a closer look.",
      pricingNote: "Project cost depends on the agreed scope. Discuss your needs to receive an initial estimate before work begins.",
      badgeCount: "4 selected projects",
      highlightsTitle: "Technical Architecture & Security:",
      labels: {
        specsTitle: "System Architecture & Security",
        featuresTitle: "Core Application Features",
        techStack: "Tech Stack",
        previewLabel: "Illustrative interface",
        detailsToggle: "Features and technical details",
        liveDemo: "Live Demo",
        sourceCode: "Source Code",
        comingSoon: "Demo Coming Soon",
        engineLabel: "Runtime & Framework",
        dbLabel: "Database Engine",
        securityLabel: "Security & Auth"
      },
      projects: [
        {
          serviceCategory: "Full-Stack Web Application",
          serviceSubtitle: "Organize team tasks, track progress, and help users plan their work in one platform.",
          projectTitle: "TaskApp — Task Management Platform",
          projectBadge: "Express 5 + MongoDB",
          status: "Live & Open Access",
          description: "Full-stack productivity and task orchestration platform built on Express.js 5 and MongoDB Atlas with production-grade session security.",
          architectureSpecs: {
            engine: "Node.js (ESM) + Express.js 5 + EJS Layouts & Bootstrap 5 UI",
            database: "MongoDB Atlas (Mongoose ODM) with compound indexes on userId and task status",
            security: "JWT stored in HTTP-Only Cookies (sameSite: lax, secure flag), bcrypt (12 salt rounds), Zod input schema validation"
          },
          features: [
            "Complete authentication pipeline: secure registration, login, and reset password with cryptographically unique tokens",
            "Role-Based Permission middleware strictly segregating Admin dashboards from standard user views",
            "Full CRUD task management with priority tags, status transitions, and user ownership checks",
            "Google Gemini AI integration (@google/genai) delivering automated task planning assistance",
            "Dynamic visual mindmap generation rendering task hierarchy via Mermaid.js"
          ],
          publicRegisterNotice: "Visitors can freely sign up for a new account to test authentication, cookie sessions, and task workflows live.",
          screenshotType: "taskapp",
          tech: ["Node.js", "Express 5", "MongoDB", "JWT", "bcrypt", "Zod", "Gemini AI", "Bootstrap 5"],
          demoUrl: "https://task.djieproduction.com",
          repoUrl: "https://github.com/ThonyBiersack/taskApp"
        },
        {
          serviceCategory: "Offline-First Mobile POS Application",
          serviceSubtitle: "Record sales, check products, and print receipts even when an internet connection is unavailable.",
          projectTitle: "WarungKas — Cashier & Store POS",
          projectBadge: "Flutter + SQLite WAL",
          status: "Built & Tested",
          description: "Cross-platform mobile point-of-sale application for retail merchants, featuring local ACID transactions and thermal printing.",
          architectureSpecs: {
            engine: "Flutter 3 SDK & Dart for smooth 60fps native mobile execution",
            database: "Local SQLite persistence (sqflite) configured with Write-Ahead Logging (WAL) and ACID transactions",
            security: "Local cryptographic data protection (cryptography & crypto) and secure application sandbox"
          },
          features: [
            "100% offline transaction processing, cart calculation, and inventory lookup without internet connection",
            "Real-time product barcode and QR code camera scanning powered by mobile_scanner",
            "Direct Bluetooth thermal receipt printer integration via ESC/POS protocol (printing package)",
            "Automated PDF invoice generation and transaction receipts shareable via system sheet (pdf package)",
            "Currency formatting with Indonesian Rupiah standard, tax calculations, and daily cash revenue reports (intl)"
          ],
          screenshotType: "warungkas",
          tech: ["Flutter", "Dart", "SQLite (WAL)", "Thermal Print", "Barcode Scanner", "PDF Engine"],
          repoUrl: "https://github.com/ThonyBiersack/warungkas"
        },
        {
          serviceCategory: "RESTful Backend Architecture & Auth API",
          serviceSubtitle: "Manage a book catalog and user access through a structured service that other applications can connect to.",
          projectTitle: "Bookshelf REST API & Auth Engine",
          projectBadge: "Express + Zod + RBAC",
          status: "13 Endpoints Verified",
          description: "Modular REST API architecture isolating administrative controls from standard users with production-ready input validation.",
          architectureSpecs: {
            engine: "Node.js + Express.js modular clean-layer separation (controllers, validators, middleware, models)",
            database: "MongoDB via Mongoose ODM with structured schemas, validations, and user references",
            security: "Strict request payload sanitization via Zod, bcrypt password hashing (12 rounds), stateless JWT auth"
          },
          features: [
            "13 verified RESTful endpoints covering full book catalog CRUD and user credential operations",
            "Industry-standard HTTP status code compliance (200 OK, 201 Created, 400 Bad Request, 401, 403, 404)",
            "Role-Based Access Control (RBAC) middleware enforcing granular authorization for administrative routes",
            "Zod schema validator preventing invalid payloads, injection, or data pollution before database queries",
            "Decoupled token utility module for deterministic JWT signing and claim verification"
          ],
          screenshotType: "bookshelf",
          tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt", "Zod", "REST API"],
          repoUrl: "https://github.com/ThonyBiersack/bookshelfAPI"
        },
        {
          serviceCategory: "Edge-Rendered Web & Event Platform",
          serviceSubtitle: "Personalize event invitations for guests and collect attendance confirmations online.",
          projectTitle: "Digital Invitation Platform",
          projectBadge: "Astro + Cloudflare D1",
          status: "Cloudflare Edge D1",
          description: "Interactive wedding and event platform deployed globally to Cloudflare CDN with edge relational SQL storage.",
          architectureSpecs: {
            engine: "Astro SSG/SSR + Cloudflare Pages / Workers edge runtime",
            database: "Cloudflare D1 Serverless Relational SQL (invitation_db) with indexed guest lookups",
            security: "Cloudflare Turnstile bot protection and server-side IP rate limiting on RSVP forms"
          },
          features: [
            "Dynamic guest personalization: personalized guest names resolved instantly via URL slugs without heavy DB queries",
            "Real-time RSVP submission pipeline persisting attendance status and guest wishes to Cloudflare D1",
            "Server-side IP rate limiting (rsvp_rate_limits table) and Turnstile CAPTCHA preventing spam submissions",
            "Self-hosted local audio asset (MP3) triggered via user gesture on open invitation, paired with floating audio controls without layout shift (CLS 0.00)",
            "Mobile-first responsive presentation optimized for instant loading on cellular networks"
          ],
          screenshotType: "invitation",
          isComingSoonDemo: true,
          tech: ["Astro", "Cloudflare Pages", "Cloudflare D1 (SQL)", "Turnstile", "Tailwind CSS", "HTML5 Audio"]
        }
      ]
    },
    testimonials: {
      tag: "PROJECT TRACK RECORD",
      title: "Built and Shipped",
      subtitle: "A transparent look at what has been built, deployed, and delivered by Djie Production.",
      items: [
        {
          quote: "Invitation platform for a real wedding event — fully deployed on Cloudflare Edge with personalized guest URLs, real-time RSVP database, and self-hosted audio. Accessed by the couple's invited guests on launch day.",
          name: "Wedding Invitation Platform",
          role: "Client Commission • Cloudflare D1"
        },
        {
          quote: "Full-stack task management platform with JWT session security, role-based access control, and Gemini AI integration — publicly accessible for anyone to register and test the live system.",
          name: "TaskApp",
          role: "Independent Project • Live at task.djieproduction.com"
        }
      ]
    },
    whyMe: {
      tag: "The Independent Studio Advantage",
      title: "Why Choose Djie Production?",
      subtitle: "The benefits of working with an independent studio that handles projects hands-on.",
      items: [
        {
          title: "Direct Communication",
          description: "You discuss requirements directly with the developer writing your code — technical needs are communicated without going through intermediaries."
        },
        {
          title: "Fast & Focused Iterations",
          description: "Technical decisions and feature revisions can be tested and implemented right away without waiting for lengthy internal processes."
        },
        {
          title: "Unified Full-Stack Architecture",
          description: "Database schemas, API validation, web interfaces, and mobile apps are designed cohesively by one developer, so every layer connects consistently."
        },
        {
          title: "Cost-Efficient for Small to Mid-Scale",
          description: "For small to mid-scale projects, the independent studio model can be more economical since the budget goes directly toward technical execution."
        }
      ]
    },
    workflow: {
      tag: "How we work",
      title: "A clear path from idea to launch",
      subtitle: "You stay part of the decisions at every stage—from defining what the business needs to reviewing the finished system.",
      badge: "Direct collaboration with Anthony",
      labels: {
        flow: "Project workflow",
        pause: "Pause animation",
        resume: "Resume animation",
        stage: "Stage",
        clientAction: "Your part",
        deliverable: "What you get"
      },
      stages: [
        {
          id: "brief",
          title: "Discuss",
          subtitle: "Needs & estimate",
          detailTitle: "Start with the business need",
          detailDesc: "We discuss the problem, who the system is for, and the essential requirements before work begins.",
          clientAction: "Share your goals, current process, and constraints.",
          deliverable: "An initial scope and cost estimate.",
          ariaLabel: "Discuss: share needs and receive an initial estimate"
        },
        {
          id: "discovery",
          title: "Define",
          subtitle: "Scope & priorities",
          detailTitle: "Agree on what to build",
          detailDesc: "We identify the key user journeys, prioritize features, and clarify what is included in the project.",
          clientAction: "Review priorities and confirm the project scope.",
          deliverable: "A shared project scope and feature priorities.",
          ariaLabel: "Define: review and agree on project scope"
        },
        {
          id: "blueprint",
          title: "Plan",
          subtitle: "Solution design",
          detailTitle: "Plan the right solution",
          detailDesc: "We translate the agreed needs into a system plan and check that it fits the intended workflow.",
          clientAction: "Give feedback on the proposed approach before implementation.",
          deliverable: "A system plan aligned with the agreed needs.",
          ariaLabel: "Plan: review the system approach"
        },
        {
          id: "build",
          title: "Build",
          subtitle: "Development & review",
          detailTitle: "Build and review the product",
          detailDesc: "The system is developed and tested against the agreed scope. You can review the working result and share feedback.",
          clientAction: "Review the working version and share feedback.",
          deliverable: "A tested working version for review.",
          ariaLabel: "Build: review and give feedback on the working version"
        },
        {
          id: "live",
          title: "Launch",
          subtitle: "Release & handover",
          detailTitle: "Launch with a clear handover",
          detailDesc: "After testing, the system is deployed and its handover is completed. Any post-launch support follows the project agreement.",
          clientAction: "Confirm launch readiness and receive the handover.",
          deliverable: "A deployed system and agreed handover materials.",
          ariaLabel: "Launch: approve release and receive the handover"
        }
      ]
    },
    contact: {
      tag: "GET IN TOUCH DIRECTLY",
      title: "Have a Project in Mind?",
      titleHighlight: "Let's Build It Right.",
      description: "Whether you need a company profile website, an offline mobile application, or resilient backend APIs — reach out directly. Pricing is tailored to project requirements with transparent initial consultation.",
      channels: {
        whatsappTitle: "WHATSAPP",
        whatsappSub: "Fastest response for direct inquiries",
        whatsappCta: "Request a Quote",
        emailTitle: "DIRECT EMAIL",
        emailSub: "For project briefs and detailed specs",
        emailCta: "Send Email",
        emailCopy: "(Copy)",
        emailCopied: "(Copied!)",
        cvTitle: "CURRICULUM VITAE",
        cvSub: "Detailed experience & technical skill breakdown",
        cvCta: "Download CV (EN)",
        cvUrl: "/AnthonySuryadjie-CV-EN.pdf",
        linkedinTitle: "LINKEDIN",
        linkedinSub: "Professional background & networking",
        linkedinCta: "View Profile",
        githubTitle: "GITHUB",
        githubSub: "Source code & public repositories",
        githubCta: "View Repositories"
      },
      footerSla: {
        location: "Based in Indonesia (UTC+7) • Monitored daily",
        response: "Business day response target: within 24 hours."
      }
    },
    footer: {
      rights: "Djie Production. Founded by Anthony Djie.",
      backToTop: "Back to Top ↑",
      recruiterLink: "For recruiters: view CV →"
    }
  },
  id: {
    meta: {
      title: "Djie Production — Jasa Pembuatan Website & Aplikasi Bisnis | Anthony Djie",
      description: "Jasa pembuatan website company profile, aplikasi kasir offline (POS), dan software web custom oleh Anthony Djie (Djie Production). Konsultasi langsung tanpa perantara agensi."
    },
    nav: {
      about: "Tentang",
      services: "Layanan",
      whyMe: "Keunggulan",
      pipeline: "Alur Kerja",
      contact: "Kontak",
      cv: "Download CV"
    },
    hero: {
      roleStatus: "Menerima proyek baru • Studio independen aktif",
      headlineStart: "Website & Aplikasi Siap Pakai untuk Bisnis Anda, ",
      headlineHighlight: "dari Database",
      headlineEnd: " sampai Siap Deploy.",
      bio: "<strong>Djie Production</strong> adalah software studio independen yang didirikan oleh <span class=\"text-sky-300 font-medium\">Anthony Djie</span>. Kami membangun <strong>website company profile</strong>, <strong>aplikasi kasir offline</strong> untuk UMKM, dan <strong>sistem web custom full-stack</strong>. Dari perancangan database hingga deployment — tanpa perantara agensi, komunikasi langsung, harga transparan, dan sistem yang andal.",
      exploreBtn: "Lihat layanan kami",
      quoteBtn: "Diskusikan proyek",
      downloadCvBtn: "Untuk perekrut: lihat CV",
      cvUrl: "/cv",
      cvFileName: "AnthonyDJie-CV-ID.pdf",
      console: {
        windowTitle: "core-stack.sys",
        statusBadge: "Stack Aktif",
        layer1Title: "Layer 01 • Frontend",
        layer1Name: "Astro (Web) / Flutter (Mobile)",
        layer1Tag: "Frontend",
        gatewayText: "↓ REST API (HTTPS)",
        layer2Title: "Layer 02 • Backend",
        layer2Name: "Node.js + Express.js",
        layer2Tag: "JWT & Zod",
        dbText: "↓ Penyimpanan Data",
        layer3Title: "Layer 03 • Database",
        layer3Name: "MongoDB / SQLite",
        layer3Tag: "Database",
        footerLeft: "Dikerjakan Langsung",
        footerRight: "Anthony Djie"
      }
    },
    metrics: {
      item1: {
        val: "4",
        title: "Proyek Dibangun",
        sub: "Sistem full-stack yang sudah di-deploy dan bisa diakses"
      },
      item2: {
        val: "<24 Jam",
        title: "Target Waktu Respon",
        sub: "Respon di hari kerja via WhatsApp atau email"
      },
      item3: {
        val: "100%",
        title: "Komunikasi Langsung",
        sub: "Tanpa perantara — diskusi langsung dengan developer"
      },
      item4: {
        val: "End-to-End",
        title: "Database sampai Deploy",
        sub: "Satu developer menangani seluruh lapisan stack"
      }
    },
    about: {
      tag: "TENTANG STUDIO",
      title: "Mengapa Djie Production Hadir sebagai Studio Independen",
      paragraphs: [
        "Untuk beberapa jenis proyek, bekerja dengan satu developer yang menangani langsung bisa lebih efisien dibanding melalui struktur tim yang lebih besar — terutama ketika kebutuhan teknis perlu dikomunikasikan dengan cepat dan tepat.",
        "<strong class=\"text-white font-medium\">Djie Production</strong> didirikan oleh <span class=\"text-sky-300 font-medium\">Anthony Djie</span> dengan pendekatan ini. Sebagai studio independen, fokus kami adalah eksekusi teknis yang bersih: merancang skema database terstruktur, menulis REST API tervalidasi, membangun antarmuka web yang responsif, serta mengembangkan aplikasi mobile Flutter dengan kemampuan offline.",
        "Hasilnya adalah software yang fungsional, iterasi yang cepat, serta komunikasi langsung tanpa lapisan tambahan."
      ],
      advantages: [
        {
          title: "Komunikasi Langsung",
          desc: "Dari konsultasi awal hingga deployment akhir, Anda berdiskusi langsung dengan developer yang menulis kode."
        },
        {
          title: "Fokus pada Solusi Nyata",
          desc: "Tanpa istilah berlebihan atau kompleksitas semu — software dibangun fungsional, bersih, dan sesuai kebutuhan riil operasional Anda."
        }
      ],
      dossier: {
        title: "Profil Studio",
        subtitle: "Djie Production",
        operatingModelLabel: "Model Operasional:",
        operatingModelVal: "Studio Independen / Developer",
        founderLabel: "Founder & Developer:",
        founderVal: "Anthony Djie",
        locationLabel: "Domisili:",
        locationVal: "Indonesia (UTC+7)",
        whatsappLabel: "WhatsApp Langsung:",
        emailLabel: "Email Studio:",
        availabilityLabel: "Ketersediaan:",
        availabilityVal: "Terbuka untuk proyek & diskusi",
        ctaText: "Chat via WhatsApp"
      }
    },
    serviceCategories: {
      tag: "LAYANAN KAMI",
      title: "Apa yang Bisa Kami Bangun untuk Anda",
      subtitle: "Setiap layanan dikerjakan end-to-end — dari konsultasi kebutuhan, perancangan sistem, hingga deployment dan serah terima.",
      items: [
        {
          icon: "globe",
          title: "Website Company Profile",
          description: "Website profesional untuk bisnis dan UMKM. Responsif, cepat, ramah SEO, dan dirancang meningkatkan kredibilitas brand Anda.",
          stack: ["Astro", "Tailwind CSS", "Cloudflare CDN"]
        },
        {
          icon: "smartphone",
          title: "Aplikasi Kasir & POS Offline",
          description: "Aplikasi kasir mobile yang berjalan 100% tanpa internet. Cetak struk printer thermal bluetooth, scan barcode produk, dan kelola laporan otomatis.",
          stack: ["Flutter", "Dart", "SQLite (WAL)"]
        },
        {
          icon: "server",
          title: "REST API & Backend System",
          description: "Arsitektur backend modular dengan autentikasi JWT aman, sanitasi payload Zod, proteksi RBAC, dan struktur database efisien.",
          stack: ["Node.js", "Express.js", "MongoDB", "Zod"]
        },
        {
          icon: "mail",
          title: "Website Undangan Digital Interaktif",
          description: "Platform undangan pernikahan & acara online dengan rute personalisasi nama tamu, RSVP real-time ke database SQL edge, dan musik latar.",
          stack: ["Astro", "Cloudflare D1 (SQL)", "Turnstile"]
        }
      ]
    },
    services: {
      tag: "Karya pilihan",
      title: "Proyek untuk kebutuhan kerja nyata",
      subtitle: "Lihat produk dan sistem yang dibangun oleh Djie Production. Tiap proyek menunjukkan kebutuhan yang dijawab, dengan detail teknis untuk yang ingin mempelajari lebih jauh.",
      pricingNote: "Biaya mengikuti lingkup proyek yang disepakati. Diskusikan kebutuhan Anda untuk mendapat estimasi awal sebelum pengerjaan dimulai.",
      badgeCount: "4 proyek pilihan",
      highlightsTitle: "Spesifikasi Arsitektur & Keamanan:",
      labels: {
        specsTitle: "Spesifikasi Arsitektur & Keamanan",
        featuresTitle: "Fitur Operasional Utama",
        techStack: "Tech Stack",
        previewLabel: "Ilustrasi antarmuka",
        detailsToggle: "Fitur dan detail teknis",
        liveDemo: "Live Demo",
        sourceCode: "Source Code",
        comingSoon: "Demo Segera Hadir",
        engineLabel: "Framework & Runtime",
        dbLabel: "Engine Database",
        securityLabel: "Keamanan & Auth"
      },
      projects: [
        {
          serviceCategory: "Aplikasi Web Full-Stack",
          serviceSubtitle: "Kelola tugas tim, pantau progres, dan bantu pengguna merencanakan pekerjaan dari satu platform.",
          projectTitle: "TaskApp — Platform Manajemen Tugas",
          projectBadge: "Express 5 + MongoDB",
          status: "Live & Akses Terbuka",
          description: "Platform produktivitas dan orkestrasi tugas full-stack berbasis Express.js 5 dan MongoDB Atlas dengan keamanan sesi tingkat produksi.",
          architectureSpecs: {
            engine: "Node.js (ESM) + Express.js 5 + EJS Layouts & UI Bootstrap 5",
            database: "MongoDB Atlas (Mongoose ODM) dengan indexing majemuk pada userId dan status tugas",
            security: "JWT disimpan di HTTP-Only Cookies (sameSite: lax, secure flag), bcrypt (12 salt rounds), sanitasi input via Zod"
          },
          features: [
            "Alur autentikasi lengkap: pendaftaran akun baru, login, dan reset password dengan token kriptografis sekali pakai",
            "Middleware Role-Based Permission yang memisahkan dashboard Admin dari tampilan pengguna biasa secara ketat",
            "Manajemen tugas CRUD penuh dengan tag prioritas, transisi status progres, dan validasi kepemilikan user",
            "Integrasi Google Gemini AI (@google/genai) untuk asistensi perencanaan dan pemecahan langkah tugas",
            "Visualisasi alur tugas dan mindmap otomatis menggunakan diagram Mermaid.js"
          ],
          publicRegisterNotice: "Pengunjung dapat langsung mendaftar akun baru mandiri untuk menguji alur auth, cookie session, dan manajemen tugas secara live.",
          screenshotType: "taskapp",
          tech: ["Node.js", "Express 5", "MongoDB", "JWT", "bcrypt", "Zod", "Gemini AI", "Bootstrap 5"],
          demoUrl: "https://task.djieproduction.com",
          repoUrl: "https://github.com/ThonyBiersack/taskApp"
        },
        {
          serviceCategory: "Aplikasi Mobile POS Mode Offline",
          serviceSubtitle: "Catat transaksi, cek produk, dan cetak struk meski koneksi internet tidak tersedia.",
          projectTitle: "WarungKas — POS Kasir & Manajemen Toko",
          projectBadge: "Flutter + SQLite WAL",
          status: "Dibangun & Diuji",
          description: "Aplikasi kasir mobile cross-platform untuk UMKM dan toko ritel dengan database transaksi lokal berkecepatan tinggi.",
          architectureSpecs: {
            engine: "Flutter 3 SDK & Dart untuk rendering native 60fps yang responsif",
            database: "SQLite lokal (sqflite) dengan Write-Ahead Logging (WAL) dan transaksi ACID",
            security: "Enkripsi data lokal (cryptography & crypto) dan sandbox file system aplikasi yang aman"
          },
          features: [
            "Pemrosesan transaksi kasir, kalkulasi keranjang, dan pencarian produk 100% offline tanpa internet",
            "Pemindaian barcode dan QR code produk secara instan via kamera smartphone (mobile_scanner)",
            "Integrasi printer kasir thermal bluetooth langsung menggunakan protokol ESC/POS (printing package)",
            "Generator struk belanja otomatis dan ekspor invoice laporan penjualan format PDF (pdf package)",
            "Kalkulasi total belanja, diskon, uang kembalian, dan format mata uang Rupiah otomatis (intl)"
          ],
          screenshotType: "warungkas",
          tech: ["Flutter", "Dart", "SQLite (WAL)", "Thermal Print", "Barcode Scanner", "PDF Engine"],
          repoUrl: "https://github.com/ThonyBiersack/warungkas"
        },
        {
          serviceCategory: "RESTful Backend Architecture & Auth API",
          serviceSubtitle: "Kelola katalog buku dan akses pengguna melalui layanan terstruktur yang dapat dihubungkan ke aplikasi lain.",
          projectTitle: "Bookshelf REST API & Auth Engine",
          projectBadge: "Express + Zod + RBAC",
          status: "13 Endpoint Terverifikasi",
          description: "Arsitektur REST API modular yang memisahkan kendali administratif dari pengguna biasa dengan validasi input standar industri.",
          architectureSpecs: {
            engine: "Node.js + Express.js pemisahan layer bersih (controllers, validators, middleware, models)",
            database: "MongoDB via Mongoose ODM dengan skema data tervalidasi dan referensi pengguna",
            security: "Sanitasi payload input via skema Zod, password hashing bcrypt (12 rounds), stateless JWT auth"
          },
          features: [
            "13 endpoint RESTful CRUD teruji mencakup katalog buku dan kredensial pengguna",
            "Kepatuhan standar HTTP response codes (200 OK, 201 Created, 400 Bad Request, 401, 403, 404)",
            "Middleware Role-Based Access Control (RBAC) untuk otorisasi bertingkat rute Admin vs User",
            "Validator skema Zod mencegah serangan injeksi dan inkonsistensi tipe data sebelum query DB",
            "Modul helper token terisolasi untuk penandatanganan dan verifikasi JWT secara konsisten"
          ],
          screenshotType: "bookshelf",
          tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt", "Zod", "REST API"],
          repoUrl: "https://github.com/ThonyBiersack/bookshelfAPI"
        },
        {
          serviceCategory: "Platform Web & Undangan Digital di Edge",
          serviceSubtitle: "Personalisasi undangan acara untuk tamu dan kumpulkan konfirmasi kehadiran secara online.",
          projectTitle: "Digital Invitation Platform",
          projectBadge: "Astro + Cloudflare D1",
          status: "Cloudflare Edge D1",
          description: "Platform acara dan undangan pernikahan interaktif yang di-deploy ke edge Cloudflare dengan database relasional SQL terdistribusi.",
          architectureSpecs: {
            engine: "Astro SSG/SSR + runtime edge Cloudflare Pages / Workers",
            database: "Cloudflare D1 Serverless Relational SQL (invitation_db) dengan index pencarian cepat",
            security: "Proteksi bot via Cloudflare Turnstile CAPTCHA & rate limiting per IP address server-side"
          },
          features: [
            "Personalization routing: nama tamu otomatis tampil personal via URL slug tanpa query database lambat",
            "Pipeline pengiriman RSVP real-time yang langsung tersimpan di tabel SQL Cloudflare D1",
            "Rate limiting IP address (tabel rsvp_rate_limits) dan Turnstile anti-spam pada formulir ucapan",
            "Aset audio lokal mandiri (self-hosted MP3) yang aktif saat tamu klik 'Buka Undangan', dilengkapi floating widget kontrol musik tanpa layout shift (CLS 0.00)",
            "Tata letak responsif mobile-first yang dioptimalkan untuk akses instan di koneksi seluler"
          ],
          screenshotType: "invitation",
          isComingSoonDemo: true,
          tech: ["Astro", "Cloudflare Pages", "Cloudflare D1 (SQL)", "Turnstile", "Tailwind CSS", "HTML5 Audio"]
        }
      ]
    },
    testimonials: {
      tag: "REKAM JEJAK PROYEK",
      title: "Dibangun dan Dirilis",
      subtitle: "Transparansi tentang apa yang telah dibangun, di-deploy, dan dikirimkan oleh Djie Production.",
      items: [
        {
          quote: "Platform undangan untuk acara pernikahan nyata — di-deploy penuh di Cloudflare Edge dengan URL personal per tamu, database RSVP real-time, dan audio mandiri. Diakses oleh tamu undangan pasangan di hari peluncuran.",
          name: "Proyek Undangan Pernikahan",
          role: "Pesanan Klien • Cloudflare D1"
        },
        {
          quote: "Platform manajemen tugas full-stack dengan keamanan sesi JWT, kontrol akses berbasis peran, dan integrasi Gemini AI — dapat diakses publik untuk siapa saja yang ingin mendaftar dan menguji sistem secara live.",
          name: "TaskApp",
          role: "Proyek Independen • Live di task.djieproduction.com"
        }
      ]
    },
    whyMe: {
      tag: "Keunggulan Studio Independen",
      title: "Mengapa Memilih Djie Production?",
      subtitle: "Keuntungan bekerja sama dengan studio independen yang menangani proyek secara langsung.",
      items: [
        {
          title: "Komunikasi Langsung",
          description: "Anda berdiskusi langsung dengan developer yang menulis kode — kebutuhan teknis tersampaikan tanpa melalui perantara."
        },
        {
          title: "Iterasi Cepat & Terfokus",
          description: "Keputusan teknis dan revisi fitur bisa langsung diuji dan diimplementasikan tanpa menunggu proses internal yang panjang."
        },
        {
          title: "Arsitektur Full-Stack yang Kohesif",
          description: "Skema database, validasi API, antarmuka web, dan mobile dirancang terintegrasi oleh satu developer sehingga setiap layer terhubung secara konsisten."
        },
        {
          title: "Biaya Efisien untuk Lingkup Kecil-Menengah",
          description: "Untuk proyek skala kecil hingga menengah, model studio independen bisa lebih hemat karena anggaran dialokasikan langsung untuk pengerjaan teknis."
        }
      ]
    },
    workflow: {
      tag: "Cara kerja",
      title: "Langkah jelas dari ide sampai rilis",
      subtitle: "Anda ikut menentukan arah di setiap tahap—mulai dari kebutuhan bisnis hingga meninjau sistem yang selesai.",
      badge: "Kolaborasi langsung dengan Anthony",
      labels: {
        flow: "Alur pengerjaan proyek",
        pause: "Jeda animasi",
        resume: "Lanjutkan animasi",
        stage: "Tahap",
        clientAction: "Peran Anda",
        deliverable: "Yang Anda terima"
      },
      stages: [
        {
          id: "brief",
          title: "Diskusi",
          subtitle: "Kebutuhan & estimasi",
          detailTitle: "Mulai dari kebutuhan bisnis",
          detailDesc: "Kita membahas masalah, siapa yang akan menggunakan sistem, dan kebutuhan utama sebelum pengerjaan dimulai.",
          clientAction: "Ceritakan tujuan, proses saat ini, dan batasan yang ada.",
          deliverable: "Ruang lingkup awal dan estimasi biaya.",
          ariaLabel: "Diskusi: sampaikan kebutuhan dan dapatkan estimasi awal"
        },
        {
          id: "discovery",
          title: "Tentukan",
          subtitle: "Lingkup & prioritas",
          detailTitle: "Sepakati apa yang dibangun",
          detailDesc: "Kita menentukan alur pengguna utama, memprioritaskan fitur, dan memperjelas apa saja yang termasuk dalam proyek.",
          clientAction: "Tinjau prioritas dan sepakati lingkup proyek.",
          deliverable: "Lingkup proyek dan prioritas fitur yang disepakati.",
          ariaLabel: "Tentukan: tinjau dan sepakati lingkup proyek"
        },
        {
          id: "blueprint",
          title: "Rancang",
          subtitle: "Rancangan solusi",
          detailTitle: "Rancang solusi yang sesuai",
          detailDesc: "Saya menerjemahkan kebutuhan yang disepakati menjadi rencana sistem dan memastikan alurnya sesuai kebutuhan.",
          clientAction: "Berikan masukan pada pendekatan sebelum implementasi.",
          deliverable: "Rencana sistem sesuai kebutuhan yang disepakati.",
          ariaLabel: "Rancang: tinjau pendekatan sistem"
        },
        {
          id: "build",
          title: "Bangun",
          subtitle: "Pengerjaan & tinjauan",
          detailTitle: "Bangun dan tinjau produk",
          detailDesc: "Sistem dikembangkan dan diuji sesuai lingkup yang disepakati. Anda dapat meninjau versi yang sudah berjalan dan memberi masukan.",
          clientAction: "Tinjau versi yang berjalan dan sampaikan masukan.",
          deliverable: "Versi sistem yang telah diuji untuk ditinjau.",
          ariaLabel: "Bangun: tinjau versi sistem dan berikan masukan"
        },
        {
          id: "live",
          title: "Rilis",
          subtitle: "Deploy & serah terima",
          detailTitle: "Rilis dengan serah terima yang jelas",
          detailDesc: "Setelah pengujian, sistem dideploy dan proses serah terima dilakukan. Dukungan setelah rilis mengikuti kesepakatan proyek.",
          clientAction: "Konfirmasi kesiapan rilis dan terima hasil serah terima.",
          deliverable: "Sistem yang sudah dirilis beserta materi serah terima yang disepakati.",
          ariaLabel: "Rilis: setujui peluncuran dan terima hasil serah terima"
        }
      ]
    },
    contact: {
      tag: "HUBUNGI SAYA LANGSUNG",
      title: "Punya Rencana Project?",
      titleHighlight: "Mari Diskusikan.",
      description: "Baik Anda membutuhkan website company profile, aplikasi kasir offline, maupun REST API backend — hubungi kami langsung. Harga disesuaikan dengan kebutuhan project melalui konsultasi awal dan estimasi yang transparan.",
      channels: {
        whatsappTitle: "WHATSAPP",
        whatsappSub: "Respon tercepat untuk diskusi langsung",
        whatsappCta: "Konsultasi & Minta Estimasi",
        emailTitle: "EMAIL LANGSUNG",
        emailSub: "Untuk brief project dan spesifikasi detail",
        emailCta: "Kirim Email",
        emailCopy: "(Salin)",
        emailCopied: "(Tersalin!)",
        cvTitle: "CURRICULUM VITAE",
        cvSub: "Detail pengalaman kerja & keahlian teknis",
        cvCta: "Download CV (ID)",
        cvUrl: "/AnthonyDJie-CV-ID.pdf",
        linkedinTitle: "LINKEDIN",
        linkedinSub: "Profil profesional & pembaruan",
        linkedinCta: "Lihat Profil",
        githubTitle: "GITHUB",
        githubSub: "Source code & repositori publik",
        githubCta: "Lihat Repositori"
      },
      footerSla: {
        location: "Domisili di Indonesia (UTC+7) • Dipantau setiap hari",
        response: "Target respon di hari kerja: dalam 24 jam."
      }
    },
    footer: {
      rights: "Djie Production. Didirikan oleh Anthony Djie.",
      backToTop: "Kembali ke Atas ↑",
      recruiterLink: "Untuk perekrut: lihat CV →"
    }
  }
};
