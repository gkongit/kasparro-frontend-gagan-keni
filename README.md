# Kasparro – Frontend Engineering Assignment (V1)

Frontend implementation for **Kasparro**, an AI-native SEO & Brand Intelligence platform built for the AI-first search era (ChatGPT, Gemini, Perplexity).

This project emphasizes **frontend system design**, **clear component boundaries**, and **structured data modeling** to communicate a complex AI product through a scalable UI.

---

## Project Overview

The application represents two core product surfaces:

1. **Public Website**
   Marketing and product narrative to clearly explain Kasparro’s AI-SEO platform.

2. **Product Dashboard (Mocked)**
   An authenticated-style product shell demonstrating how brands interact with Kasparro’s audit system.

No backend or authentication is implemented. All data is **mocked, typed, and structured** to reflect realistic backend contracts.

---

## Tech Stack

### Required

* Next.js (App Router)
* TypeScript
* Tailwind CSS

### Used

* shadcn/ui (customized)
* Zustand (state management)
* Framer Motion (subtle, UX-driven transitions)

---

## Project Structure

```
/src
  /app
    /(public)        # Marketing website (Home, Platform, About)
    /(app)           # Product dashboard application
  /components
    /ui              # Reusable UI primitives (shadcn/ui)
    /marketing       # Public-facing components (Hero, Header, sections)
    /dashboard       # Product components (Sidebar, ScoreCard, Audit views)
  /lib
    /data            # Mock data services (brands, audit reports)
    /store           # Global state management (selected brand, module)
    /types
src/
├── app/
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── platform/page.tsx
│   │   └── about/page.tsx
│   ├── app/
│   │   ├── dashboard/page.tsx
│   │   ├── audit/page.tsx
│   │   └── architecture/page.tsx
│   └── layout.tsx
│
├── components/
│   ├── layout/
│   ├── features/
│   └── ui/
│
├── data/
│   ├── brands.json
│   ├── audit-modules.json
│   └── architecture.json
│
├── store/
│   ├── brand-store.ts
│   └── audit-store.ts
│
├── types/
│   ├── audit.ts
│   ├── brand.ts
│   └── architecture.ts
```

---

## Part A — Public Website

### `/` — Home

**Goal:** Explain what Kasparro does in under 10 seconds.

Includes:

* Clear value proposition
* Why AI-SEO differs from traditional SEO
* Overview of 7 core audit modules
* High-level pipeline explanation
* CTA: *Run AI-SEO Audit* (mocked)

---

### `/platform` — Product Overview

**Goal:** Bridge marketing to product.

Includes:

* Audit pipeline (Input → Modules → Output)
* Data sources Kasparro consumes
* Outputs brands receive
* Comparison with traditional SEO tools

This page is intentionally product-led rather than sales-driven.

---

### `/about`

**Goal:** Establish founder-engineer credibility.

Includes:

* Mission
* Product philosophy
* Vision for AI-first search systems

---

## Part B — Product Dashboard (Mocked)

Route namespace: `/app`
Authentication is assumed.

---

### `/app/dashboard`

**Goal:** High-level brand snapshot.

Features:

* Brand selector (mocked)
* Snapshot metrics:

  * AI Visibility Score
  * Trust / EEAT Score
  * Non-Branded Keyword Coverage
  * Last audit timestamp

All values are driven from typed mock data.

---

### `/app/audit`

**Core product screen**

Layout:

* Left sidebar with 7 audit modules
* Main panel showing selected module details

Each module displays:

* Score
* Key insights
* Issues / flags
* Recommendations

All content is rendered from structured JSON data.
Hard-coded JSX content is avoided.

---

### `/app/architecture`

**Goal:** Demonstrate system understanding.

Displays a frontend representation of:

* InputAssembler
* ContextPack
* Audit modules
* Output surfaces

The emphasis is on clarity of system thinking rather than visual precision.

---

## Architectural Decisions

## Why These Decisions

This assignment evaluates system thinking more than visuals. The following decisions were made to keep the implementation clear, scalable, and aligned with how an AI-native product would realistically evolve.

* **System-first UI design:** Pages are structured around data flow (inputs → context → modules → outputs) instead of isolated screens. This mirrors how AI platforms actually work.

* **Strong data modeling:** All UI content is driven from typed mock data to simulate real backend contracts and avoid fragile, hard-coded views.

* **Minimal but predictable state:** Zustand is used only where global state is required (selected brand, selected audit module), keeping state flow easy to reason about.

* **Clear component boundaries:** Layout, feature logic, and UI primitives are separated to avoid page-level monoliths and to support future scaling.

* **UX clarity over visual polish:** Design choices prioritize readability and hierarchy for dense analytical data rather than heavy animations or styling.

---

## Architectural Decisions

### System-First Design

The UI is modeled around data flow instead of pages:

```
Input → Context → Modules → Insights → Outputs
```

This mirrors how AI-native platforms operate internally.

---

### Data Modeling

* All datasets have explicit TypeScript interfaces
* Consistent schemas across modules
* Mock data mirrors realistic backend responses

---

### State Management

Zustand is used to manage:

* Selected brand
* Selected audit module

Chosen for simplicity, predictability, and minimal boilerplate.

---

### Component Boundaries

Clear separation between:

* Layout components
* Feature components
* UI primitives

Page-level monoliths are intentionally avoided.

---

### UX for Dense Data

Design decisions prioritize:

* Clear information hierarchy
* Readability and spacing
* Purposeful, minimal animations

---

## Tradeoffs & Assumptions

* Authentication is mocked
* No backend or API integration
* Copy prioritizes clarity over marketing polish
* Visual style kept neutral to emphasize system design

---

## Optional Enhancements

* Dark / light mode
* Smooth module switching
* Clean empty and loading states
* Responsive dashboard behavior

---

## Deployment

* Framework: Next.js (App Router)
* Hosting: Vercel
* Static build with mocked data

---

## Final Notes

This project prioritizes:

* System thinking over pixel perfection
* Data modeling over static content
* Clear communication of complex AI products

The goal is to demonstrate how AI-native platforms should be structured and presented through frontend systems.
