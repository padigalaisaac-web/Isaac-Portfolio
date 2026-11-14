# Padigala Isaac — Personal Developer Portfolio

> **Software Engineer | Full Stack Developer | AI/ML Enthusiast**  
> Hyderabad, India • [padigalaisaac@gmail.com](mailto:padigalaisaac@gmail.com) • +91 9441909774  
> Production-ready single-page developer portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Configured for zero-config static deployment on **Render**.

---

## 🌟 Overview

This portfolio is engineered to present Padigala Isaac's technical projects, computer science education (B.Tech CSE - AI & ML, 8.11 CGPA), core engineering competencies, and professional credentials to technical recruiters and hiring managers.

### 🎯 Target Opportunities
- Software Engineer Intern
- Full Stack Developer Intern
- Frontend Developer Intern
- Python Backend Developer Intern
- AI Application Developer Intern
- Generative AI Intern

---

## ✨ Key Features & Architecture

- **Single-Page Architecture with Smooth Anchors:** Frictionless navigation with live section spying (`#hero`, `#about`, `#skills`, `#projects`, `#education`, `#certifications`, `#contact`).
- **Premium Light Theme Visual Aesthetic:**
  - Crisp white background (`#FFFFFF`) and soft slate secondary contrast (`#F7F9FC`).
  - High-contrast typography (`#111827` headings, `#64748B` body) utilizing Google Font `Inter`.
  - Blue accent brand styling (`#2563EB`).
  - Soft card elevations, modern borders (`#E5E7EB`), and hover micro-interactions.
- **Hero Developer Dashboard:**
  - "Open to Internship Opportunities" live pulsing indicator.
  - Interactive multi-tab developer card (`profile.ts`, `stack.json`, `status.sh`) with one-click clipboard copy for email.
  - Action buttons for instant project exploration, resume downloading, and direct contact.
- **Categorized Technical Skills Showcase:**
  - Categorized under: *Programming Languages*, *Frontend Engineering*, *Backend & APIs*, *Databases & Storage*, *Tools & DevOps*, and *Core Competencies*.
  - Category filter tabs for easy inspection by hiring managers.
  - Zero fake percentage bars — capabilities are verified by project implementations.
- **Interactive Project Showcase:**
  - Complete project cards for 5 core applications:
    1. **DeepGuard AI**: AI-Powered Deepfake Detection Web Application (React, TypeScript, Python, FastAPI, OpenCV, Docker).
    2. **BusGoo**: Full Stack Bus Booking Application (React, TypeScript, Vite, Supabase, Tailwind CSS).
    3. **Library Management System**: Full Stack MERN Portal (React, Node.js, Express.js, MongoDB).
    4. **Online Bus Booking System**: Relational Database-Driven Ticketing System (HTML, CSS, PHP, MySQL).
    5. **AI Social Media Video Automation**: Workflow Automation Pipeline (n8n, Social Media APIs, Instagram & YouTube publishing).
  - Modal interaction (`View Details`) providing in-depth architectural breakdown, features list, and technology badges.
  - Safe, graceful handling of missing or private repository/demo links.
- **Academic Timeline & Certifications:**
  - B.Tech CSE (AI & ML) — 8.11 CGPA (Expected 2028).
  - Intermediate — 88.4% (2024).
  - SSC — 9.2 GPA (2022).
  - Infosys Springboard Programming Fundamentals, Web Development Workshop, and Database Management Workshop.
- **Production Contact Form & Direct Channels:**
  - Real Formspree endpoint integration via `VITE_FORMSPREE_ENDPOINT`.
  - Real validation, submission feedback states (loading spinner, success notice, error message).
  - Clear on-screen instructions when the endpoint is unconfigured.
  - Multiple direct resume download links in Navbar, Hero, and Contact section (`/resume.pdf`).
- **SEO & Performance Optimization:**
  - Open Graph (`og:title`, `og:description`, `og:image`) and Twitter card meta tags.
  - Clean semantic HTML5 landmarks (`header`, `main`, `section`, `article`, `footer`).
  - Code-split vendor chunks (`react`, `framer-motion`, `lucide-react`).
  - Reduced-motion support (`prefers-reduced-motion`) and accessible keyboard navigation.

---

## 🛠️ Technologies Used

| Domain | Technology / Tool |
|---|---|
| **Framework & Language** | React 18, TypeScript 5, Vite 6 |
| **Styling** | Tailwind CSS 3, Custom CSS Variables |
| **Icons & Motion** | Lucide React, Framer Motion |
| **Build & Tooling** | PostCSS, Autoprefixer, Rollup Wasm |
| **Hosting Platform** | Render Static Site |
| **Version Control** | Git, GitHub |
| **Contact Service** | Formspree |

---

## 📂 Project Directory Structure

```text
Portfolio/
├── .env.example               # Environment template for Formspree
├── .gitignore                 # Standard git exclusions (node_modules, dist, etc.)
├── index.html                 # Production entrypoint with SEO meta & fonts
├── package.json               # Dependencies, scripts, and build definitions
├── postcss.config.js          # PostCSS configuration for Tailwind
├── tailwind.config.js         # Custom light theme palette, typography, and shadows
├── tsconfig.json              # TypeScript compilation rules
├── vite.config.ts             # Vite build & chunking configuration
├── render.yaml                # Render Static Site Blueprint specification
├── README.md                  # Comprehensive documentation
│
├── public/
│   ├── favicon.svg            # Custom modern monogram favicon
│   ├── resume.pdf             # Actual downloadable developer resume PDF
│   └── images/
│       ├── og-preview.svg     # Social preview graphic
│       └── projects/          # Vector SVG architectural project mockups
│           ├── deepguard.svg
│           ├── busgoo.svg
│           ├── library.svg
│           ├── onlinebus.svg
│           └── automation.svg
│
└── src/
    ├── main.tsx               # React application entrypoint
    ├── App.tsx                # Layout shell & scroll-spy integration
    ├── index.css              # Global styles, scrollbar, reduced motion overrides
    ├── vite-env.d.ts          # Vite client and env typing definitions
    │
    ├── components/
    │   ├── Navbar.tsx         # Responsive navbar with mobile drawer & resume CTA
    │   ├── Hero.tsx           # Hero section with interactive terminal & metrics
    │   ├── About.tsx          # Professional background, CGPA, and career goals
    │   ├── Skills.tsx         # Categorized skills matrix with filter tabs
    │   ├── Projects.tsx       # Featured projects showcase with category filters
    │   ├── ProjectCard.tsx    # Card component with preview, tags, and links
    │   ├── ProjectModal.tsx   # Detailed project architecture modal dialog
    │   ├── Education.tsx      # Formal education progression and coursework
    │   ├── Certifications.tsx # Professional certifications and workshops
    │   ├── Contact.tsx        # Direct contact info and Formspree contact form
    │   └── Footer.tsx         # Branding, navigation links, and back-to-top button
    │
    ├── data/
    │   ├── personal.ts        # Personal details, bio, contact, and target roles
    │   ├── skills.ts          # Structured skills catalog by domain
    │   ├── projects.ts        # Configurable project metadata, stacks, and links
    │   ├── education.ts       # Degree timelines, institutions, and scores
    │   └── certifications.ts  # Verification credentials and training records
    │
    └── hooks/
        ├── useScrollSpy.ts     # Active section detector based on scroll offset
        └── useReducedMotion.ts # Media query listener for accessibility preference
```

---

## 🚀 Local Development Setup

### 1. Prerequisites
- **Node.js** v18+ (tested on Node v22.23.4)
- **npm** v9+ (or pnpm / yarn)

### 2. Clone and Install
```bash
# Clone the repository
git clone https://github.com/padigalaisaac-web/Isaac-Portfolio.git
cd Isaac-Portfolio

# Install dependencies cleanly
npm install
```

### 3. Environment Configuration
Copy `.env.example` to create your local `.env`:
```bash
cp .env.example .env
```
Open `.env` and set your Formspree endpoint (optional for local testing; form shows clear setup guidance if blank):
```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

### 4. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing & Production Build Commands

Run TypeScript verification and compile the static bundle:
```bash
# Type check and build to dist/
npm run build

# Preview the production build locally
npm run preview
```

The production output will be generated inside the `dist/` directory:
- `dist/index.html`
- `dist/assets/` (chunked JS and CSS bundles)
- `dist/resume.pdf`
- `dist/favicon.svg`
- `dist/images/`

---

## 📄 Managing Your Resume PDF

The application serves your resume from:
```text
public/resume.pdf
```
- A fully-formatted valid resume document is included by default.
- To replace it with your newly exported PDF from Google Docs/Word/Canva, simply save your updated file as `resume.pdf` inside the `public/` directory and re-run `npm run build`.
- All three **Download Resume** buttons (Navbar, Hero, and Contact section) point to `/resume.pdf` with the download attribute.

---

## 📬 Setting Up the Formspree Contact Form

1. Sign up for free at [Formspree](https://formspree.io/).
2. Click **Create New Form** and name it `Isaac Portfolio Contact`.
3. Set your notification email to `padigalaisaac@gmail.com`.
4. Copy your form endpoint URL (e.g. `https://formspree.io/f/xanyzkpq`).
5. Add this URL to your `.env` locally or to Render's Environment Variables:
   ```text
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xanyzkpq
   ```

---

## 🌐 Deploying to Render (Static Site)

This project includes a tested `render.yaml` Blueprint file configured specifically for Render Static Sites.

### Option A: Deploy via GitHub + Render Blueprint (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete developer portfolio for Padigala Isaac"
   git remote add origin https://github.com/padigalaisaac-web/Isaac-Portfolio.git
   git push -u origin main
   ```
2. Log into the [Render Dashboard](https://dashboard.render.com/).
3. Click **New +** ➔ **Blueprint**.
4. Select your `Isaac-Portfolio` repository.
5. Render will automatically detect `render.yaml` with the following configuration:
   - **Type:** Static Site
   - **Name:** `isaac-portfolio`
   - **Build Command:** `npm ci && npm run build`
   - **Publish Directory:** `dist`
   - **Auto-Deploy:** Enabled on push to `main`
6. Under **Environment Variables**, add:
   - Key: `VITE_FORMSPREE_ENDPOINT`
   - Value: `https://formspree.io/f/your_form_id`
7. Click **Apply**. Render will run `npm ci && npm run build` and publish your site with a free SSL certificate.

### Option B: Manual Static Site Setup on Render
If configuring manually without Blueprints:
1. Click **New +** ➔ **Static Site**.
2. Connect your GitHub repository `isaac-portfolio`.
3. Fill in the build settings:
   - **Name:** `isaac-portfolio`
   - **Branch:** `main`
   - **Build Command:** `npm ci && npm run build`
   - **Publish Directory:** `dist`
4. Under **Redirects/Rewrites**:
   - **Type:** Rewrite
   - **Source:** `/*`
   - **Destination:** `/index.html`
5. Click **Create Static Site**.

---

## 🔒 Security & Privacy Practices

- **Zero committed secrets:** `.env` and local credentials are protected in `.gitignore`.
- **Sanitized project URLs:** No fake or broken external links; missing repos are cleanly marked as private/evaluated upon request.
- **Accessible & compliant:** Uses standard Web Content Accessibility Guidelines (WCAG) contrast ratios and semantic headings.

---

## 👤 Author & Contact

**Padigala Isaac**  
- Email: [padigalaisaac@gmail.com](mailto:padigalaisaac@gmail.com)  
- Phone: +91 9441909774  
- Location: Hyderabad, India  
- Education: B.Tech CSE (AI & ML) — Expected 2028  
- GitHub: [github.com/padigalaisaac-web](https://github.com/padigalaisaac-web)  
- LinkedIn: [linkedin.com/in/padigalaisaac](https://linkedin.com)
