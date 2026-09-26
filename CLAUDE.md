# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio website for an AI/ML Engineer (Vineet Kukreti). No build system, no framework, no package manager — meplain HTML/CSS/JavaScript served as-is.

**Live site:** https://vineetkukreti.in/

## Development

```bash
# Local dev server (no build step needed)
python -m http.server 8000
# or
npx http-server
```

There is no test framework, linter, or build pipeline configured.

## Architecture

Three core files make up the entire site:

- **`index.html`** — Single-page HTML with all sections, SEO meta tags, structured data (JSON-LD), and CDN imports (Font Awesome, Google Fonts, EmailJS SDK)
- **`js/main.js`** — All JavaScript logic: data definitions, DOM population, UI interactions, private GA4 telemetry
- **`css/style.css`** — Design system, tokens, and responsive layout styling

### JavaScript Structure (`js/main.js`)

Portfolio content is defined in a single `portfolioData` object containing `experiences`, `skills`, `projects`, `patents` arrays. Functions like `populateSkills()`, `populateProjects()`, `populateExperience()`, `populatePatents()` read from this object and inject HTML into the DOM.

Key UI features: typewriter effect on hero subtitle, infinite marquee skill carousel, Intersection Observer animations, mobile hamburger menu, EmailJS-powered contact form, and silent GA4 event tracking.

### CSS Design Tokens (`css/style.css`)

Theme colors, typography, and spacing are controlled via CSS custom properties in `:root`:
- `--primary`, `--accent` (sky/cyan), `--bg-base`, `--bg-card`
- Dark Minimalist AI Lab aesthetic with high contrast
- Mobile breakpoint at 768px

### External Services

- **EmailJS** — Contact form (service/template/key IDs hardcoded in JS)
- **Google Analytics 4** — Tracking ID `G-3G64TBSX28` in index.html
- **CDNs** — Font Awesome 6.4.0, Google Fonts (Inter, JetBrains Mono), EmailJS SDK 3.x

## Conventions

- **CSS classes:** kebab-case (`.project-card`, `.nav-link`)
- **JS functions:** camelCase (`populateProjects`, `setupMobileMenu`)
- **CSS variables:** kebab-case with semantic prefix (`--text-primary`, `--bg-base`)
- Functional style — no framework overhead

## Common Edits

- **Update content:** Edit `portfolioData` in `js/main.js`
- **Change colors/theme:** Modify CSS variables in `:root` block of `css/style.css`
- **Update images:** Replace files in `/images/` directory
- **Modify sections:** Edit HTML structure in `index.html`

