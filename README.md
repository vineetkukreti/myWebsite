# Vineet Kukreti — AI Systems Engineer & Researcher

[![Live Site](https://img.shields.io/badge/Live%20Site-vineetkukreti.in-0ea5e9?style=flat-square&logo=googlechrome&logoColor=white)](https://vineetkukreti.in)
[![Kaggle](https://img.shields.io/badge/Kaggle-3x%20Expert-20BEFF?style=flat-square&logo=kaggle&logoColor=white)](https://kaggle.com)
[![Patents](https://img.shields.io/badge/Intellectual%20Property-3%20Patents%20Filed-10b981?style=flat-square)](https://vineetkukreti.in/#experience)
[![IEEE](https://img.shields.io/badge/Publications-2%20IEEE%20Papers-blue?style=flat-square)](https://vineetkukreti.in/#experience)
[![License](https://img.shields.io/badge/License-MIT-gray?style=flat-square)](LICENSE)

A production-grade, zero-framework portfolio built for high performance, accessibility, and clean visual hierarchy. Designed with a **Minimalist AI Lab** aesthetic featuring interactive terminal elements, real-time engineering metrics, and privacy-first event telemetry.

---

## ⚡ Key Highlights

* **Pure Web Standards**: Zero npm bloat, zero heavy framework runtimes. Built with semantic HTML5, modern CSS3 custom properties, and vanilla ES6+ JavaScript.
* **Instant Load (<0.3s)**: Zero-bundle compilation. First Contentful Paint under 300ms on global CDNs.
* **Privacy-First Observability**: Integrated with Google Analytics 4 (`G-3G64TBSX28`) using custom event beacons (`resume_download`, `project_open`, `section_view`, `scroll_depth`). All metrics remain 100% private to the dashboard owner with zero client-side exposure.
* **Responsive & Accessible**: Strict WCAG contrast compliance, responsive breakpoint system, reduced-motion awareness, and clean touch-first targets.

---

## 📂 Repository Architecture

```text
myWebsite/
├── css/
│   └── style.css            # Design tokens, Minimalist AI Lab styling & animations
├── js/
│   └── main.js              # State management, DOM population & silent GA4 event tracking
├── images/
│   └── profile.jpg          # Headshot image asset
├── assets/
│   ├── medicare_demo.webm   # Project demo video
│   └── vineet_kukreti_resume.pdf  # Authoritative downloadable CV
├── index.html               # Semantic single-page structure with SEO & Open Graph meta
├── CNAME                    # Apex & subdomain DNS mapping for vineetkukreti.in
├── manifest.json            # PWA web application manifest
├── robots.txt               # Search engine crawler directives
├── sitemap.xml              # XML index sitemap
├── README.md                # Engineering documentation
└── .gitignore               # Excludes OS artifacts, IDEs, and local agent logs
```

---

## 🛠️ Tech Stack & Philosophy

| Layer | Implementation | Design Rationale |
|---|---|---|
| **Markup** | HTML5 Semantic Elements | Enhanced SEO, screen reader accessibility, and structured JSON-LD data. |
| **Styling** | Vanilla CSS3 Custom Properties | Instant render without CSS-in-JS runtime overhead; dynamic theme tokens. |
| **Logic** | Vanilla ES6+ (Native DOM & APIs) | Utilizes `IntersectionObserver` for scroll triggers and delegated click handlers. |
| **Form Pipeline** | EmailJS REST Integration | Serverless client-side email delivery with real-time field validation. |
| **Analytics** | GA4 Custom Event Pipeline | Custom interaction funnel tracking directly to a private Google property. |

---

## 🚀 Local Development

No package installation or build step is required. Run any static HTTP file server from the root directory:

```bash
# Using Python 3
python3 -m http.server 8000

# Or using Node (npx)
npx serve .
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🌐 Deployment

The site is served automatically via **GitHub Pages** with DNS routing configured through GoDaddy:
* **Apex Domain**: `vineetkukreti.in` (`A` records pointed to GitHub Pages IP pool: `185.199.108-111.153`)
* **Subdomain**: `www.vineetkukreti.in` (`CNAME` mapped to `vineetkukreti.github.io`)
* **SSL/TLS**: Enforced HTTPS with automated certificate renewal.

---

## 📬 Contact & Links

* **Website**: [vineetkukreti.in](https://vineetkukreti.in)
* **LinkedIn**: [linkedin.com/in/vineetkukreti](https://linkedin.com/in/vineetkukreti)
* **GitHub**: [github.com/vineetkukreti](https://github.com/vineetkukreti)
* **Email**: [vineetkukreti34@gmail.com](mailto:vineetkukreti34@gmail.com)
