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
- **`simple-portfolio.js`** — All JavaScript logic: data definitions, DOM population, UI interactions
- **`simple-portfolio.css`** — All styles with CSS custom properties for theming

### JavaScript Structure (`simple-portfolio.js`)

Portfolio content is defined in a single `portfolioData` object (~lines 60-161) containing `experiences`, `skills`, `projects`, `patents` arrays. Functions like `populateSkills()`, `populateProjects()`, `populateExperience()`, `populatePatents()` read from this object and inject HTML into the DOM.

Key UI features: typewriter effect on hero subtitle, infinite marquee skill carousel, Intersection Observer fade-in animations, mobile hamburger menu, EmailJS-powered contact form.

### CSS Design Tokens (`simple-portfolio.css`)

Theme colors and spacing are controlled via CSS custom properties in `:root` (~lines 5-49):
- `--primary: #2563eb` (blue), `--accent: #0ea5e9` (sky blue)
- Light theme only
- Mobile breakpoint at 768px

### External Services

- **EmailJS** — Contact form (service/template/key IDs hardcoded in JS ~line 334)
- **Google Analytics 4** — Tracking ID `G-QF4DN36K3G` in index.html
- **CDNs** — Font Awesome 6.4.0, Google Fonts (Inter), EmailJS SDK 3.x

## Conventions

- **CSS classes:** kebab-case (`.project-card`, `.nav-link`)
- **JS functions:** camelCase (`populateProjects`, `setupMobileMenu`)
- **CSS variables:** kebab-case with semantic prefix (`--text-main`, `--bg-alt`)
- Functional style — no classes except `Particle` (unused canvas animation)

## Common Edits

- **Update content:** Edit `portfolioData` in `simple-portfolio.js`
- **Change colors/theme:** Modify CSS variables in `:root` block of `simple-portfolio.css`
- **Update images:** Replace files in `/images/` directory
- **Modify sections:** Edit HTML structure in `index.html`
