# Techfest 30th Edition — IIT Bombay Landing Page

> **"THE FUTURE IS AN EVENT"**  
> Official 30th Edition landing page and interactive festival control center for **Techfest IIT Bombay** — Asia's largest science and technology festival.

---

## ✨ Overview & Creative Direction

This web application transforms the landing page experience into a dark, editorial, technology magazine interface merged with a live festival control center. It strictly avoids 3D assets and heavy WebGL scenes, relying instead on high-contrast 2D typography, layered parallax, SVG map vector engines, grain overlay textures, and fluid motion physics.

All event information, statistics (180,000+ footfall, 300+ events, 30 editions), competition categories, venue names, and contacts are sourced directly from the official **Techfest IIT Bombay** ecosystem.

---

## 🚀 Key Features

- **Immersive Typographic Opening Sequence**:
  - Full-screen black intro animating `"IIT BOMBAY PRESENTS"` → `"SCIENCE."` → `"TECHNOLOGY."` → `"INNOVATION."` → `"ENERGY."` → `"TECHFEST"` → `"30TH EDITION"`.
- **Hero & Layered Parallax Montage**:
  - Oversized Space Grotesk typography, acid lime accents (`#CCFF00`), parallax background visuals, and quick action triggers.
- **Infinite Live Marquee Ticker**:
  - Continuous ticker broadcasting festival dimensions (*Competitions, Workshops, International Robowars, Technoholix, Ozone, Lectures, Summits, Zonals*).
- **Techfest by Numbers**:
  - Editorial statistics section with animated vertical slide-in counters (`180,000+ Footfall`, `300+ Events`, `30th Edition`, `75+ Countries`).
- **Explore Techfest (10 Interactive Dimensions)**:
  - Full-width horizontal category cards featuring hover image expansions, description slides, and typography shifts.
- **Flagship Competitions**:
  - Filterable competition cards (*Aeromodelling, Blix-a-thon, Voice Agent Hackathon, Roboracers, Ideathon, Meshmerise, Robowotics, Safetronix, SparkX, Panchayati Raj, JFS, IDRL Drone Racing*) with search and full detail modals.
- **International Robowars**:
  - High-dramatics section featuring 8KG, 15KG, 30KG, and 60KG combat bot weight categories, titanium cage specifications (40ft x 40ft bulletproof enclosure), and highlight video triggers.
- **Hands-On Masterclass Workshops**:
  - Bootcamps in AI Agentic Systems, ROS 2 Robotics, High-Scale Web Architecture, Unreal Engine 5, and Quantum Cyber Security.
- **Editorial Technology Museum (Exhibitions)**:
  - Full-bleed hover gallery showcasing Advanced Robotics, AI, Space & Aerospace, Defence, and Future Automotive.
- **Keynote Dialogues & Summits**:
  - Magazine-style speaker cards featuring ISRO Chairman Dr. S. Somanath, Prof. Yann LeCun, Humanoid Robot Sophia, and Dr. A.P.J. Abdul Kalam legacy.
- **Technoholix EDM & Ozone Fun Zone**:
  - Night laser shows, pyrotechnics, EDM stage concerts, gaming lounge, and food village.
- **Pan-India 2D Zonals Vector Map**:
  - Interactive SVG map of India with glowing city nodes (*Mumbai, New Delhi, Bengaluru, Kolkata, Jaipur, Bhopal*), connection arcs, and zonal registration drawers.
- **30-Year Historical Archive Timeline**:
  - Decade milestones (1998 to 2026) celebrating 30 years of technical excellence, paired with a giant typographic "30" media mask.
- **Interactive Festival Schedule**:
  - 3-Day program filterable by category and time, complete with personal `"My Schedule"` bookmarking and a real-time status bar (`● LIVE NOW`).
- **Interactive 2D IIT Bombay Campus Map**:
  - Venue navigator highlighting *OAT, Gymkhana Grounds, Convocation Hall, LHC, SAC, and Main Hockey Ground* with walking directions.
- **Official Delegate Pass Registration Portal**:
  - Modal overlay form issuing instant verified QR delegate passes.
- **Web Audio API Sound Synthesizer**:
  - Synthesized ambient festival hum and UI hover/click feedback with a Navbar Sound ON/OFF toggle.

---

## 🛠 Tech Stack & Architecture

- **Framework**: React 18 + TypeScript + Vite
- **Styling System**: Tailwind CSS v4 + Custom CSS Modules + Glassmorphism + Scanline & Grain Utilities
- **Typography**: Google Fonts — `Space Grotesk` (Headers), `Inter` (Body), `IBM Plex Mono` (Technical Indicators & Timestamps)
- **Animation Engine**: `framer-motion` for spring physics, layout shifts, letter reveals, and modals
- **Icons**: `lucide-react`
- **Map Vector Engines**: Custom 2D SVG Engines (India Zonals Map & IIT Bombay Campus Map)
- **Sound Engine**: Web Audio API Sound Synthesizer (`src/lib/sound.ts`)

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nigamkumar3435-spec/Ideate-Landing-Page-Task-4.git
   cd Ideate-Landing-Page-Task-4
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```
Ideate-Landing-Page-Task-4/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AccommodationSection.tsx
│   │   ├── AftermovieModal.tsx
│   │   ├── CTASection.tsx
│   │   ├── CampusMapSection.tsx
│   │   ├── CompetitionsSection.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── ExhibitionsSection.tsx
│   │   ├── ExploreGrid.tsx
│   │   ├── Footer.tsx
│   │   ├── Giant30Section.tsx
│   │   ├── GlobalReachMap.tsx
│   │   ├── Hero.tsx
│   │   ├── LecturesSection.tsx
│   │   ├── LiveFestivalBar.tsx
│   │   ├── Navbar.tsx
│   │   ├── OpeningSequence.tsx
│   │   ├── OzoneSection.tsx
│   │   ├── RegistrationModal.tsx
│   │   ├── RobowarsSection.tsx
│   │   ├── ScheduleSection.tsx
│   │   ├── SocialWall.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TechnoholixSection.tsx
│   │   ├── Timeline30.tsx
│   │   ├── WhatIsTechfest.tsx
│   │   ├── WorkshopsSection.tsx
│   │   └── ZonalsMap.tsx
│   ├── data/
│   │   └── techfestData.ts
│   ├── lib/
│   │   └── sound.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🏛 Official Contact Details

- **Address**: Techfest Office, Students' Activity Centre (SAC), IIT Bombay, Powai, Mumbai, Maharashtra 400076, India
- **Email**: info@techfest.org
- **Phone**: +91 22 2576 4045 / +91 9136 789 030
- **Website**: [techfest.org](https://techfest.org/)

---

© 1998–2026 Techfest IIT Bombay. All Rights Reserved.