# OBOMOCARE CBO

> Empowering Communities, Restoring Dignity.

OBOMOCARE is a community-based organization (CBO) website built to support grassroots humanitarian programs in Kisii and Nyamira counties, Kenya. It provides a modern, mobile-first platform for showcasing programs, sharing stories, managing media, and engaging the Kenyan diaspora community.

**Live Motto:** *"From Our Roots to Our Future -- Let's Keep Talking."*

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Routing | React Router DOM v7 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion (motion) |
| Charts | Recharts |
| Icons | Lucide React |
| Build Tool | Vite 6 |
| PWA | vite-plugin-pwa (Workbox) |
| Image CDN | Cloudinary |
| Database | Firebase Firestore |
| Hosting | AWS Amplify |
| Language | TypeScript 5.8 |

---

## Features

- **20+ pages** covering programs, impact, stories, team, gallery, and community engagement
- **Responsive design** -- mobile-first with desktop breakpoints
- **PWA support** -- installable with offline caching for Cloudinary images
- **Admin panel** -- photo upload/replace via Cloudinary with real-time Firestore sync
- **Image management** -- Cloudinary-backed with automatic format/quality optimization (`f_auto`, `dpr_auto`, `q_auto`)
- **Fallback system** -- branded gradient placeholders when images fail to load
- **SEO** -- React Helmet Async for meta tags per page
- **Analytics** -- Google Analytics integration (optional via env var)
- **Community Engagement page** -- showcasing meetings with Huldah Momanyi, MN District 38A State Representative
- **Animated UI** -- Framer Motion entrance animations, scroll-triggered reveals, and infinite marquee banners

---

## Project Structure

```
obomocarev1-main/
  src/
    components/          # Shared UI components
      Layout.tsx         # Site-wide header, nav, footer
      PlaceholderImage.tsx  # Image component with Cloudinary optimization + fallback
      ImageProvider.tsx   # Firestore real-time image override context
      CTA.tsx            # Reusable call-to-action section
      Logo.tsx           # SVG logo component
      SEO.tsx            # Helmet-based meta tags
      ErrorBoundary.tsx  # React error boundary
      Loader.tsx         # Preloader component
      AdminLayout.tsx    # Admin panel shell
      CloudinaryUpload.tsx  # Upload utility (used by admin)
    pages/               # Route-level page components
      Home.tsx           # Landing page with hero, stats, programs
      About.tsx          # Mission, vision, founder story
      Team.tsx           # Leadership profiles + team grid
      CommunityEngagement.tsx  # Huldah Momanyi meeting photos
      Programs.tsx       # Program overview
      ProgramDetail.tsx  # Generic program detail template
      FoodSupport.tsx    # Food Support program page
      ElderlySupport.tsx # Elderly Support program page
      HouseholdCare.tsx  # Household Care program page
      VolunteerCorps.tsx # Volunteer Corps program page
      Impact.tsx         # Impact statistics + stories
      Stories.tsx        # Community stories listing
      StoryDetail.tsx    # Individual story view
      Gallery.tsx        # Photo gallery grid
      News.tsx           # News/updates listing
      Partners.tsx       # Partner organizations
      Volunteer.tsx      # Volunteer information
      GetInvolved.tsx    # Donation/get involved CTA
      Contact.tsx        # Contact form/info
      Transparency.tsx   # Financial transparency
      FAQ.tsx            # Frequently asked questions
      AdminLogin.tsx     # Admin authentication
      AdminDashboard.tsx # Photo management dashboard
      AdminMedia.tsx     # Media library
    lib/                 # Utilities and configuration
      images.ts          # Default Cloudinary image URLs (28 scalar + 2 arrays)
      siteImages.ts      # Firestore CRUD for image overrides
      firebase.ts        # Firebase/Firestore initialization
      cloudinary.ts      # Cloudinary upload + URL optimization
      analytics.ts       # Google Analytics component
      utils.ts           # cn() helper (clsx + tailwind-merge)
    App.tsx              # Router + providers
    main.tsx             # Entry point
    index.css            # Tailwind directives + custom theme
  public/                # Static assets (favicons, PWA icons)
  .env                   # Environment variables (not committed)
  .env.example           # Environment variable template
  vite.config.ts         # Vite configuration
  vitePWA.config.ts      # PWA configuration
  amplify.yml            # AWS Amplify deployment config
  tsconfig.json          # TypeScript configuration
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- A Cloudinary account (for image hosting)
- A Firebase project (for Firestore image overrides)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd obomocarev1-main

# Install dependencies
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Required variables:

| Variable | Description |
|----------|-------------|
| `VITE_CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name |
| `VITE_CLOUDINARY_UPLOAD_PRESET` | Unsigned upload preset |
| `VITE_CLOUDINARY_API_KEY` | Cloudinary API key |
| `VITE_FIREBASE_API_KEY` | Firebase Web API key |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase app ID |
| `VITE_FIREBASE_MEASUREMENT_ID` | Google Analytics measurement ID (optional) |

### Development

```bash
# Start dev server on port 3000
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type-check
npm run lint
```

---

## Image Management

OBOMOCARE uses a two-layer image system:

### Layer 1: Hardcoded Defaults (`src/lib/images.ts`)

All images are served from Cloudinary under the `obomocare` folder. The `IMAGES` object contains:
- **28 scalar keys** (hero banners, program images, story images)
- **1 gallery array** (18 entries)
- **1 team array** (7 entries: 5 team members + 2 community engagement slots)

### Layer 2: Firestore Real-Time Overrides (`src/components/ImageProvider.tsx`)

The `ImageProvider` subscribes to a Firestore collection called `siteImages`. Any document in this collection overrides the corresponding default:
- Document ID `homeHero` overrides the home page hero
- Document ID `team_5` overrides `IMAGES.team[5]`
- Document ID `gallery_3` overrides `IMAGES.gallery[3]`

### Upload Pipeline

```
Admin Dashboard -> Cloudinary API -> Firestore siteImages collection
                                           |
                                    ImageProvider (real-time)
                                           |
                                    Page Components (useImages hook)
```

### Admin Panel

Access at `/admin/login`. The dashboard provides:
- **23 photo slots** across 4 sections: Team (5), Community Engagement (2), Page Heroes (6), Programs (10)
- One-click upload/replace with instant live updates
- Media library for managing all uploaded images

---

## Routes

### Public Pages

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About Us |
| `/programs` | Programs Overview |
| `/programs/food-support` | Food Support |
| `/programs/elderly-support` | Elderly Support |
| `/programs/household-care` | Household Care |
| `/programs/volunteer-corps` | Volunteer Corps |
| `/programs/maternal-health` | Maternal Health |
| `/impact` | Our Impact |
| `/stories` | Community Stories |
| `/stories/:id` | Story Detail |
| `/gallery` | Photo Gallery |
| `/news` | News & Updates |
| `/team` | Meet the Team |
| `/community-engagement` | Community Engagement |
| `/volunteer` | Volunteer |
| `/partners` | Partners |
| `/get-involved` | Get Involved / Donate |
| `/contact` | Contact Us |
| `/transparency` | Transparency |
| `/faq` | FAQ |

### Admin Pages

| Path | Page |
|------|------|
| `/admin/login` | Admin Login |
| `/admin/dashboard` | Photo Management Dashboard |
| `/admin/media` | Media Library |

---

## Deployment

The project is configured for **AWS Amplify** deployment via `amplify.yml`:

```yaml
service: obomocare-web
frontend:
  phases:
    preBuild: npm ci
    build: npm run lint && npm run build
  artifacts:
    baseDirectory: dist
```

Push to the connected repository to trigger automatic builds and deployments.

---

## Key Architecture Decisions

1. **Cloudinary for images** -- Automatic format conversion, responsive resizing, and CDN caching. No need to manage image files locally.
2. **Firestore for overrides** -- Enables non-technical admins to swap images via the dashboard without code changes or redeployment.
3. **PlaceholderImage component** -- Unified image handling across all pages with consistent fallback behavior (branded gradients + SVG placeholders).
4. **Vite + React 19** -- Fast HMR during development, optimized production builds with manual chunk splitting (react, vendor).
5. **Tailwind CSS v4** -- Utility-first styling with custom theme tokens for consistent design language.

---

## License

This project is private to OBOMOCARE CBO. All rights reserved.
