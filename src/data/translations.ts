export type Language = 'en' | 'id';

export interface ProjectItem {
  serviceCategory: string;
  serviceSubtitle: string;
  projectTitle: string;
  projectBadge: string;
  status: string;
  description: string;
  highlights: string[];
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
  isComingSoonDemo?: boolean;
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
      title: "Djie Production — Full-Stack Web & Mobile Development by Anthony Djie",
      description: "Independent full-stack developer portfolio and studio by Anthony Djie. Building complete web platforms, cross-platform Flutter apps, and REST APIs with structured validation."
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
      headlineStart: "Engineering Reliable ",
      headlineHighlight: "Full-Stack Web",
      headlineEnd: " & Digital Platforms.",
      bio: "<strong>Djie Production</strong> is an independent software studio founded by <span class=\"text-sky-300 font-medium\">Anthony Djie</span>, a full-stack developer. I architect and build complete web applications, cross-platform Flutter clients, and REST APIs with structured data validation — with direct communication from day one.",
      exploreBtn: "Explore Systems",
      quoteBtn: "Request a Quote",
      downloadCvBtn: "Download CV (EN)",
      cvUrl: "/AnthonySuryadjie-CV-EN.pdf",
      cvFileName: "AnthonySuryadjie-CV-EN.pdf",
      console: {
        windowTitle: "core-stack.sys",
        statusBadge: "Active Stack",
        layer1Title: "Layer 01 • Presentation",
        layer1Name: "Astro Islands + Flutter App",
        layer1Tag: "Responsive UI",
        gatewayText: "↓ HTTPS / REST API (Zod Validation)",
        layer2Title: "Layer 02 • API & Security",
        layer2Name: "Node.js / Express.js",
        layer2Tag: "JWT • bcrypt",
        dbText: "↓ Structured Queries • Local SQLite ACID",
        layer3Title: "Layer 03 • Persistence",
        layer3Name: "MongoDB / SQLite (WAL)",
        layer3Tag: "Indexed Schemas",
        footerLeft: "Direct Communication",
        footerRight: "100% Focused Quality"
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
      tag: "Capabilities & Proof of Work",
      title: "Core Services & Handled Systems",
      subtitle: "Every service is backed by working systems architected, built, and deployed by Anthony Djie.",
      pricingNote: "Pricing is tailored to project requirements. Contact me for consultation and estimates.",
      badgeCount: "4 Handled Systems",
      highlightsTitle: "Engineered Architectural Highlights:",
      projects: [
        {
          serviceCategory: "Full-Stack Web Development",
          serviceSubtitle: "End-to-end web applications built for speed, intuitive user experience, and practical reliability.",
          projectTitle: "TaskApp — Task Management Platform",
          projectBadge: "Full-Stack Web",
          status: "Live in Cloud",
          description: "Cloud-deployed task orchestration platform featuring robust session security and complete CRUD workflows.",
          highlights: [
            "Stateless JWT authentication paired with secure refresh token handling",
            "One-time cryptographically unique token reset flow for secure password recovery",
            "Optimized MongoDB indexing for efficient task and user query resolution",
            "Cloud deployment with HTTPS and Cloudflare DNS routing"
          ],
          tech: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API", "Cloudflare"],
          demoUrl: "https://task.djieproduction.com",
          repoUrl: "https://github.com/ThonyBiersack/taskApp"
        },
        {
          serviceCategory: "Cross-Platform Mobile & Offline POS",
          serviceSubtitle: "Mobile clients engineered to operate reliably under unstable connectivity or complete offline environments.",
          projectTitle: "WarungKas — Cashier & Store POS",
          projectBadge: "Mobile & Offline POS",
          status: "Production Ready",
          description: "Offline-first Android POS application tailored for retail operations and merchant inventory handling.",
          highlights: [
            "Cross-platform mobile client built with Flutter & Dart for smooth native performance",
            "Local SQLite persistence configured with Write-Ahead Logging (WAL) and ACID transactions",
            "Integrated receipt printing engine supporting thermal hardware and PDF generation",
            "Offline sales reports, barcode/QR scanning, and inventory tracking without network reliance"
          ],
          tech: ["Flutter", "Dart", "SQLite", "PDF Engine", "Thermal Printing"],
          repoUrl: "https://github.com/ThonyBiersack/warungkas"
        },
        {
          serviceCategory: "REST APIs & Backend Architecture",
          serviceSubtitle: "Modular backend API services with strict schema validation, structured routing, and secure authentication.",
          projectTitle: "Bookshelf REST API & Auth Architecture",
          projectBadge: "Express.js & Zod",
          status: "13 Endpoints Verified",
          description: "Modular REST API architecture isolating administrative controls from standard user interactions.",
          highlights: [
            "Clean layer separation and route modularity built on the Express.js framework",
            "Strict request payload sanitization and schema validation powered by Zod",
            "Authentication with JWT and password hashing using bcrypt",
            "Role-Based Access Control (RBAC) middleware enforcing granular authorization",
            "MongoDB persistence via Mongoose with structured schemas and indexes"
          ],
          tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt", "Zod", "REST API"],
          repoUrl: "https://github.com/ThonyBiersack/bookshelfAPI"
        },
        {
          serviceCategory: "Web Platforms & Event Applications",
          serviceSubtitle: "Interactive web applications with personalized guest routing and responsive multimedia presentation.",
          projectTitle: "Digital Invitation Platform",
          projectBadge: "Cloudflare CDN",
          status: "Served via CDN",
          description: "Interactive event application featuring audio controls, media galleries, and dynamic guest routing.",
          highlights: [
            "Served globally via Cloudflare CDN for fast initial asset delivery and caching",
            "Dynamic query parameter routing hydrating personalized guest names without database roundtrips",
            "Background audio lifecycle and interactive playback controls without browser layout shifts",
            "Fully responsive layout optimized for seamless engagement across mobile viewports"
          ],
          tech: ["Cloudflare CDN", "JavaScript", "Tailwind CSS", "Audio API"],
          isComingSoonDemo: true
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
      title: "Djie Production — Software Studio & Full-Stack Developer oleh Anthony Djie",
      description: "Portfolio dan software studio independen oleh Anthony Djie. Membangun platform web full-stack, aplikasi mobile Flutter cross-platform, dan REST API dengan validasi terstruktur."
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
      headlineStart: "Membangun Solusi ",
      headlineHighlight: "Full-Stack Web",
      headlineEnd: " & Aplikasi Digital yang Andal.",
      bio: "<strong>Djie Production</strong> adalah studio software independen yang dikembangkan oleh <span class=\"text-sky-300 font-medium\">Anthony Djie</span>, seorang full-stack developer. Saya merancang dan membangun platform web lengkap, aplikasi Flutter cross-platform, dan REST API dengan validasi skema data yang ketat — komunikasi langsung tanpa perantara.",
      exploreBtn: "Lihat Project",
      quoteBtn: "Konsultasi & Minta Estimasi",
      downloadCvBtn: "Download CV (ID)",
      cvUrl: "/AnthonyDJie-CV-ID.pdf",
      cvFileName: "AnthonyDJie-CV-ID.pdf",
      console: {
        windowTitle: "core-stack.sys",
        statusBadge: "Stack Aktif",
        layer1Title: "Layer 01 • Antarmuka",
        layer1Name: "Astro Islands + Flutter App",
        layer1Tag: "UI Responsif",
        gatewayText: "↓ HTTPS / REST API (Validasi Zod)",
        layer2Title: "Layer 02 • API & Keamanan",
        layer2Name: "Node.js / Express.js",
        layer2Tag: "JWT • bcrypt",
        dbText: "↓ Query Terstruktur • SQLite ACID Lokal",
        layer3Title: "Layer 03 • Penyimpanan",
        layer3Name: "MongoDB / SQLite (WAL)",
        layer3Tag: "Skema Terindeks",
        footerLeft: "Komunikasi Langsung",
        footerRight: "Fokus pada Kualitas"
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
      tag: "Kemampuan & Portofolio",
      title: "Layanan Utama & Portofolio Project",
      subtitle: "Setiap layanan didukung oleh sistem nyata yang telah dibangun dan dideploy oleh Anthony Djie.",
      pricingNote: "Harga disesuaikan dengan kebutuhan project. Hubungi saya untuk konsultasi dan estimasi.",
      badgeCount: "4 Project Aktif",
      highlightsTitle: "Highlight Arsitektur yang Dibangun:",
      projects: [
        {
          serviceCategory: "Pengembangan Web Full-Stack",
          serviceSubtitle: "Aplikasi web lengkap yang responsif, intuitif, dan siap digunakan untuk kebutuhan nyata.",
          projectTitle: "TaskApp — Platform Manajemen Tugas",
          projectBadge: "Full-Stack Web",
          status: "Aktif di Cloud",
          description: "Platform orkestrasi tugas berbasis cloud dengan keamanan sesi yang kuat dan alur kerja CRUD lengkap.",
          highlights: [
            "Autentikasi stateless berbasis JWT dengan penanganan token yang aman",
            "Alur pemulihan kata sandi dengan token reset kriptografis sekali pakai",
            "Indexing MongoDB yang dioptimalkan untuk query tugas yang cepat",
            "Dideploy di cloud dengan HTTPS dan routing via Cloudflare"
          ],
          tech: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API", "Cloudflare"],
          demoUrl: "https://task.djieproduction.com",
          repoUrl: "https://github.com/ThonyBiersack/taskApp"
        },
        {
          serviceCategory: "Aplikasi Mobile POS & Mode Offline",
          serviceSubtitle: "Aplikasi mobile yang dirancang andal bekerja saat koneksi tidak stabil maupun kondisi offline total.",
          projectTitle: "WarungKas — POS Kasir & Manajemen Toko",
          projectBadge: "Mobile & Offline POS",
          status: "Siap Digunakan",
          description: "Aplikasi kasir Android berbasis offline-first untuk operasional ritel dan pencatatan inventaris barang.",
          highlights: [
            "Aplikasi mobile cross-platform dibangun dengan Flutter & Dart untuk performa native yang mulus",
            "Penyimpanan lokal SQLite dengan mode WAL (Write-Ahead Logging) dan transaksi ACID",
            "Integrasi cetak struk via thermal printer bluetooth dan pembuatan invoice PDF",
            "Laporan penjualan offline, pemindaian barcode/QR, dan manajemen stok tanpa ketergantungan internet"
          ],
          tech: ["Flutter", "Dart", "SQLite", "PDF Engine", "Thermal Printing"],
          repoUrl: "https://github.com/ThonyBiersack/warungkas"
        },
        {
          serviceCategory: "REST API & Arsitektur Backend",
          serviceSubtitle: "Layanan API backend modular dengan validasi skema ketat, routing rapi, dan sistem autentikasi aman.",
          projectTitle: "Bookshelf REST API & Arsitektur Auth",
          projectBadge: "Express.js & Zod",
          status: "13 Endpoint Terverifikasi",
          description: "Arsitektur REST API modular yang memisahkan kendali administratif dari interaksi pengguna biasa.",
          highlights: [
            "Pemisahan layer bersih dan routing modular dibangun di atas framework Express.js",
            "Validasi skema request dan sanitasi payload input yang ketat menggunakan Zod",
            "Autentikasi menggunakan JWT dan enkripsi kata sandi menggunakan bcrypt",
            "Middleware Role-Based Access Control (RBAC) untuk penegakan otorisasi bertingkat",
            "Penyimpanan MongoDB menggunakan Mongoose dengan skema dan indeks terstruktur"
          ],
          tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt", "Zod", "REST API"],
          repoUrl: "https://github.com/ThonyBiersack/bookshelfAPI"
        },
        {
          serviceCategory: "Platform Web & Undangan Digital",
          serviceSubtitle: "Aplikasi web interaktif dengan routing personalisasi tamu dan presentasi multimedia responsif.",
          projectTitle: "Digital Invitation Platform",
          projectBadge: "Cloudflare CDN",
          status: "Tersedia via CDN",
          description: "Aplikasi acara interaktif dengan kontrol pemutar audio latar, galeri media, dan routing tamu dinamis.",
          highlights: [
            "Dilayani lewat Cloudflare CDN untuk distribusi web yang cepat dan aman",
            "Routing parameter URL dinamis untuk menampilkan nama tamu secara personal tanpa query database",
            "Siklus pemutaran audio latar interaktif tanpa pergeseran layout browser",
            "Tata letak sepenuhnya responsif yang dioptimalkan untuk perangkat mobile"
          ],
          tech: ["Cloudflare CDN", "JavaScript", "Tailwind CSS", "Audio API"],
          isComingSoonDemo: true
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
