# En Casa — Marketing Website

The marketing website for [encasasoftware.com](https://encasasoftware.com). Built with Next.js 14, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
# From the monorepo root
npm install
npm run dev --workspace=apps/encasa-website

# Or from this directory
cd apps/encasa-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Images

All images live in `public/images/` and are referenced via `next/image`. Unsplash remote images are also supported via `next.config.js` remote patterns.

## Deploying to Vercel

1. Go to [vercel.com](https://vercel.com) and import this repository
2. Set the **Root Directory** to `apps/encasa-website`
3. Vercel will auto-detect Next.js — no additional config needed
4. Click **Deploy**

### Connecting encasasoftware.com

1. In Vercel project settings → **Domains**
2. Add `encasasoftware.com`
3. Add the DNS records Vercel provides to your domain registrar:
   - `A` record → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`

## Environment Variables

None required for the static marketing site.

To connect the early access form to a backend, add:
- `NEXT_PUBLIC_FORM_ENDPOINT` — URL for form submissions (e.g., Formspree, Supabase function)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Playfair Display + Inter + DM Mono (Google Fonts)
- **Icons**: Lucide React

## Site Structure

| Route | Page |
|---|---|
| `/` | Homepage — full cinematic scroll experience |
| `/operators` | For Operators |
| `/guests` | For Guests |
| `/use-cases` | Who It's For |
| `/about` | Story |
| `/early-access` | Waitlist form |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
