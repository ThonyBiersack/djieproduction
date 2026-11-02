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
      liveDemo: string;
      sourceCode: string;
      comingSoon: string;
      engineLabel: string;
      dbLabel: string;
      securityLabel: string;
    };
    projects: ProjectItem[];
  };
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
    outputLabel: string;
    steps: {
      step: string;
      phase: string;
      title: string;
      description: string;
      chips: string[];
    }[];
    legend: {
      discovery: string;
      architecture: string;
      release: string;
      footer: string;
    };
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
      whyMe: "Why Me",
      pipeline: "Pipeline",
      contact: "Contact",
      cv: "Download CV"
    },
    hero: {
      roleStatus: "Open to full-time & remote roles • Available for select projects",
      headlineStart: "Production-Ready Websites & Applications, ",
      headlineHighlight: "from Database",
      headlineEnd: " to Cloud Deploy.",
      bio: "<strong>Djie Production</strong> is an independent software studio founded by <span class=\"text-sky-300 font-medium\">Anthony Djie</span>. Specializing in company profile websites, offline-first cashier POS apps, and custom full-stack web platforms. Direct engineering without agency middlemen — fast communication, transparent pricing, and resilient systems.",
      exploreBtn: "Explore Systems",
      quoteBtn: "Request a Quote",
      downloadCvBtn: "Download CV (EN)",
      cvUrl: "/AnthonySuryadjie-CV-EN.pdf",
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
        footerLeft: "Direct Development",
        footerRight: "Anthony Djie"
      }
    },
    metrics: {
      item1: {
        val: "Cloudflare",
        title: "Served via Cloudflare CDN",
        sub: "Fast global caching & SSL routing"
      },
      item2: {
        val: "Cloud",
        title: "Cloud-Deployed & HTTPS",
        sub: "PaaS deployment with secure routing"
      },
      item3: {
        val: "Direct",
        title: "Independent Developer",
        sub: "Direct collaboration with the engineer"
      },
      item4: {
        val: "Zod",
        title: "Request Schema Validation",
        sub: "Strict input validation with Zod"
      }
    },
    about: {
      tag: "ABOUT STUDIO",
      title: "Why Djie Production Operates as an Independent Studio",
      paragraphs: [
        "Traditional development agencies often introduce unnecessary layers: technical requirements get passed between sales reps and account managers before finally reaching the developer writing the code.",
        "<strong class=\"text-white font-medium\">Djie Production</strong> was founded by <span class=\"text-sky-300 font-medium\">Anthony Djie</span> to cut out that overhead. As an independent developer, I focus on clean technical execution: designing structured database schemas, writing validated REST APIs, building clean responsive web interfaces, and shipping offline-first Flutter mobile apps.",
        "The result is practical software built with direct communication, agile iterations, and clear focus on your project requirements."
      ],
      advantages: [
        {
          title: "Direct Communication",
          desc: "From the initial consultation to final deployment, you collaborate directly with the engineer writing your code."
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
        emailLabel: "Direct Email:",
        availabilityLabel: "Availability:",
        availabilityVal: "Open to Full-Time, Remote & Projects",
        ctaText: "Chat via WhatsApp"
      }
    },
    services: {
      tag: "Handled Systems & Technical Specifications",
      title: "Production Systems & Engineering Architecture",
      subtitle: "Verified software systems architected, developed, and deployed by Anthony Djie. Inspect the exact technical stack, database engines, and core operational features.",
      pricingNote: "Pricing is tailored to project requirements. Contact me for consultation and transparent estimates.",
      badgeCount: "4 Production Systems",
      highlightsTitle: "Technical Architecture & Security:",
      labels: {
        specsTitle: "System Architecture & Security",
        featuresTitle: "Core Application Features",
        techStack: "Tech Stack",
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
          serviceSubtitle: "Modular cloud task management platform with cookie session security, schema validation, and Gemini AI integration.",
          projectTitle: "TaskApp — Task Management Platform",
          projectBadge: "Express 5 + MongoDB",
          status: "Live Production",
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
          serviceSubtitle: "Native retail cashier and store management app engineered to operate seamlessly with zero internet connectivity.",
          projectTitle: "WarungKas — Cashier & Store POS",
          projectBadge: "Flutter + SQLite WAL",
          status: "Production Ready",
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
          serviceSubtitle: "Modular backend API service featuring strict Zod schema validation, RBAC authorization, and structured routing.",
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
          serviceSubtitle: "High-performance digital invitation platform powered by Cloudflare edge workers and serverless SQL database.",
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
    whyMe: {
      tag: "The Independent Advantage",
      title: "Why Partner Directly with Me?",
      subtitle: "A direct comparison between working with a dedicated independent developer versus traditional agency structures.",
      items: [
        {
          title: "100% Direct Communication",
          description: "No account managers or sales intermediaries. You discuss requirements directly with the engineer writing your code — eliminating lost-in-translation bottlenecks."
        },
        {
          title: "Agile & Focused Iterations",
          description: "No multi-day internal agency meetings. Architectural decisions and feature iterations are made and implemented with minimal turnaround time."
        },
        {
          title: "Unified Full-Stack Architecture",
          description: "Because database schemas, APIs, web frontends, and mobile apps are architected cohesively, every layer connects cleanly without departmental friction."
        },
        {
          title: "Lean Investment, Direct Value",
          description: "Your budget goes directly toward software engineering quality — not toward funding agency overhead, account executives, or sales commissions."
        }
      ]
    },
    workflow: {
      tag: "System Graph",
      title: "Engineering Delivery Pipeline",
      subtitle: "Structured engineering workflow from initial scope discovery and schema design to cloud deployment.",
      badge: "Continuous Pipeline Architecture",
      outputLabel: "Engineered Outputs:",
      steps: [
        {
          step: "01",
          phase: "Discovery",
          title: "Scope Alignment & Initial Estimate",
          description: "We discuss the core problem, essential MVP requirements, and technical constraints. Initial consultation and cost estimation are provided upfront before any development starts.",
          chips: ["Requirements Discussion", "Transparent Scope & Estimate"]
        },
        {
          step: "02",
          phase: "Architecture",
          title: "System Blueprint",
          description: "I map out the technical blueprint: database schemas (MongoDB/SQLite), REST API endpoint contracts, and validation rules before writing application code.",
          chips: ["MongoDB / SQLite Schemas", "REST API & Zod Validation"]
        },
        {
          step: "03",
          phase: "Development",
          title: "Build & Integration",
          description: "Implementation phase: building reliable backend logic with Express.js, securing auth with JWT/bcrypt, and building clean web interfaces or Flutter mobile apps.",
          chips: ["Stateless JWT & Auth", "Express.js & Flutter Mobile"]
        },
        {
          step: "04",
          phase: "Delivery",
          title: "Deploy & Handover",
          description: "Functional testing, cloud deployment with HTTPS and Cloudflare routing, followed by transparent system handover and documentation.",
          chips: ["Cloudflare CDN & HTTPS", "Transparent Handover"]
        }
      ],
      legend: {
        discovery: "Discovery & Estimate",
        architecture: "Architecture & Schemas",
        release: "Cloud Deployment",
        footer: "Direct pipeline execution by Anthony Djie"
      }
    },
    contact: {
      tag: "GET IN TOUCH DIRECTLY",
      title: "Have a Project in Mind?",
      titleHighlight: "Let's Build It Right.",
      description: "Whether you are architecting a new web platform, building an offline mobile application, or designing resilient APIs — reach out via your preferred channel. Pricing is tailored to project requirements with transparent initial consultation.",
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
        response: "Direct response within 24 hours on business days."
      }
    },
    footer: {
      rights: "Djie Production. Built by Anthony Djie.",
      backToTop: "Back to Top ↑"
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
      roleStatus: "Terbuka untuk posisi full-time & remote • Menerima project pilihan",
      headlineStart: "Website & Aplikasi Siap Pakai untuk Bisnis Anda, ",
      headlineHighlight: "dari Database",
      headlineEnd: " sampai Siap Deploy.",
      bio: "<strong>Djie Production</strong> adalah software studio independen yang dirintis oleh <span class=\"text-sky-300 font-medium\">Anthony Djie</span>. Melayani <strong>jasa pembuatan website company profile</strong>, <strong>aplikasi kasir offline</strong> untuk UMKM, hingga sistem web custom. Dibangun langsung dari skema database sampai deployment tanpa perantara sales agensi — komunikasi cepat, harga transparan, dan sistem yang andal.",
      exploreBtn: "Lihat Studi Kasus",
      quoteBtn: "Konsultasi & Estimasi Project",
      downloadCvBtn: "Download CV (ID)",
      cvUrl: "/AnthonyDJie-CV-ID.pdf",
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
        val: "Cloudflare",
        title: "Dilayani lewat Cloudflare CDN",
        sub: "Distribusi global cepat & routing SSL aman"
      },
      item2: {
        val: "Cloud",
        title: "Dideploy di Cloud & HTTPS",
        sub: "Dideploy di cloud dengan HTTPS dan routing via Cloudflare"
      },
      item3: {
        val: "Direct",
        title: "Independent Developer",
        sub: "Diskusi teknis langsung dengan pembuat kode"
      },
      item4: {
        val: "Zod",
        title: "Validasi Skema Request",
        sub: "Validasi skema request dengan Zod"
      }
    },
    about: {
      tag: "TENTANG STUDIO",
      title: "Mengapa Djie Production Hadir sebagai Studio Independen",
      paragraphs: [
        "Banyak klien mengalami hambatan saat bekerja dengan struktur agensi konvensional: kebutuhan teknis harus melewati sales dan account manager sebelum akhirnya sampai ke developer yang menulis kodenya.",
        "<strong class=\"text-white font-medium\">Djie Production</strong> dirintis oleh <span class=\"text-sky-300 font-medium\">Anthony Djie</span> untuk memotong birokrasi tersebut. Sebagai independent developer, fokus saya adalah eksekusi teknis yang bersih: merancang skema database terstruktur, menulis REST API tervalidasi, membangun antarmuka web yang responsif, serta mengembangkan aplikasi mobile Flutter dengan kemampuan offline.",
        "Hasilnya adalah software yang fungsional, iterasi yang cepat, serta komunikasi langsung tanpa miskomunikasi antar divisi."
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
        emailLabel: "Email Langsung:",
        availabilityLabel: "Ketersediaan:",
        availabilityVal: "Terbuka untuk Full-Time, Remote & Project",
        ctaText: "Chat via WhatsApp"
      }
    },
    services: {
      tag: "Sistem & Spesifikasi Teknis",
      title: "Sistem Produksi & Arsitektur Rekayasa",
      subtitle: "Sistem software nyata yang dirancang, dibangun, dan dideploy langsung oleh Anthony Djie. Lihat spesifikasi engine, basis data, dan fitur operasional yang bekerja di balik layar.",
      pricingNote: "Harga disesuaikan dengan kebutuhan project. Hubungi saya untuk konsultasi gratis dan estimasi transparan.",
      badgeCount: "4 Sistem Produksi",
      highlightsTitle: "Spesifikasi Arsitektur & Keamanan:",
      labels: {
        specsTitle: "Spesifikasi Arsitektur & Keamanan",
        featuresTitle: "Fitur Operasional Utama",
        techStack: "Tech Stack",
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
          serviceSubtitle: "Platform manajemen tugas cloud dengan arsitektur autentikasi modular, session cookies aman, dan integrasi Gemini AI.",
          projectTitle: "TaskApp — Platform Manajemen Tugas",
          projectBadge: "Express 5 + MongoDB",
          status: "Aktif di Cloud",
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
          serviceSubtitle: "Aplikasi kasir dan manajemen toko ritel native yang beroperasi mulus 100% tanpa koneksi internet.",
          projectTitle: "WarungKas — POS Kasir & Manajemen Toko",
          projectBadge: "Flutter + SQLite WAL",
          status: "Siap Digunakan",
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
          serviceSubtitle: "Layanan backend API modular dengan validasi skema ketat, otorisasi RBAC, dan struktur data terisolasi.",
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
          serviceSubtitle: "Platform undangan digital interaktif berkecepatan tinggi dengan serverless SQL database di edge CDN.",
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
    whyMe: {
      tag: "Keunggulan Independent Developer",
      title: "Mengapa Bekerja Sama Langsung dengan Saya?",
      subtitle: "Perbandingan jelas antara bekerja sama langsung dengan independent developer versus struktur agensi berlapis.",
      items: [
        {
          title: "100% Komunikasi Langsung",
          description: "Tanpa account manager atau perantara sales. Anda berdiskusi langsung dengan developer yang menulis kode — menghilangkan risiko miskomunikasi teknis."
        },
        {
          title: "Iterasi Cepat & Terfokus",
          description: "Tanpa birokrasi rapat internal agensi yang berhari-hari. Keputusan teknis dan revisi fitur dapat segera diuji dan diimplementasikan."
        },
        {
          title: "Arsitektur Full-Stack yang Kohesif",
          description: "Skema database, validasi API, antarmuka web, dan mobile dirancang terintegrasi sehingga setiap layer terhubung tanpa gesekan antar divisi."
        },
        {
          title: "Investasi Efisien, Nilai Langsung",
          description: "Anggaran Anda dialokasikan langsung untuk kualitas rekayasa software — bukan untuk mendanai sewa kantor agensi atau komisi tim penjualan."
        }
      ]
    },
    workflow: {
      tag: "Diagram Alur",
      title: "Alur Kerja Pengembangan Software",
      subtitle: "Alur kerja terstruktur mulai dari konsultasi awal dan estimasi kebutuhan hingga deployment cloud.",
      badge: "Arsitektur Pipeline Kontinu",
      outputLabel: "Output yang Dihasilkan:",
      steps: [
        {
          step: "01",
          phase: "Konsultasi",
          title: "Konsultasi Awal & Estimasi",
          description: "Kita mendiskusikan inti masalah bisnis, kebutuhan esensial MVP, dan batasan teknis. Konsultasi awal serta estimasi biaya diberikan secara transparan sebelum pengerjaan dimulai.",
          chips: ["Diskusi Kebutuhan", "Lingkup & Estimasi Jelas"]
        },
        {
          step: "02",
          phase: "Arsitektur",
          title: "Perancangan Sistem",
          description: "Perancangan blueprint teknis: skema database (MongoDB/SQLite), kontrak endpoint REST API, dan aturan validasi data sebelum menulis kode aplikasi.",
          chips: ["Skema MongoDB / SQLite", "REST API & Validasi Zod"]
        },
        {
          step: "03",
          phase: "Pengembangan",
          title: "Implementasi & Integrasi",
          description: "Tahap penulisan kode: membangun logika backend dengan Express.js, mengamankan autentikasi dengan JWT/bcrypt, dan membuat antarmuka web responsif atau aplikasi Flutter.",
          chips: ["Autentikasi JWT & bcrypt", "Express.js & Flutter Mobile"]
        },
        {
          step: "04",
          phase: "Deployment",
          title: "Deploy & Serah Terima",
          description: "Pengujian fungsional menyeluruh, deployment cloud dengan HTTPS dan routing Cloudflare, serta serah terima sistem dan dokumentasi yang transparan.",
          chips: ["Cloudflare CDN & HTTPS", "Serah Terima Sistem"]
        }
      ],
      legend: {
        discovery: "Konsultasi & Estimasi",
        architecture: "Arsitektur & Skema",
        release: "Deployment Cloud",
        footer: "Eksekusi alur langsung oleh Anthony Djie"
      }
    },
    contact: {
      tag: "HUBUNGI SAYA LANGSUNG",
      title: "Punya Rencana Project?",
      titleHighlight: "Mari Diskusikan.",
      description: "Baik Anda membutuhkan aplikasi web full-stack, aplikasi mobile offline, maupun REST API backend — hubungi saya langsung. Harga disesuaikan dengan kebutuhan project melalui konsultasi awal dan estimasi yang transparan.",
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
        response: "Respon langsung dalam 24 jam pada hari kerja."
      }
    },
    footer: {
      rights: "Djie Production. Dibuat oleh Anthony Djie.",
      backToTop: "Kembali ke Atas ↑"
    }
  }
};
