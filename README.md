# Evsane

Evsane – "Evi arayanların efsane adresi."  
An online real estate platform connecting buyers, renters, and sellers with verified property listings, interactive tools, and personalized search features.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

Evsane is a Next.js-powered real estate platform with Tailwind CSS for styling, Prisma ORM, and Supabase for the backend. It offers property search, listing submission, an MDX-powered blog, and user authentication.

## Features

- **Homepage:** Search bar, featured listings carousel, infographics, testimonials  
- **Listings:** Filter by type, location, price, size; map integration; sort options  
- **Property Detail:** High-res image gallery, features table, nearby amenities map, contact form  
- **Blog:** MDX-based posts with categories, SEO-optimized  
- **User Dashboard:** Submit & manage listings, view favorites, message inquiries  
- **Contact:** Contact form with Netlify Forms or Formspree, embedded map  
- **Admin Panel (stretch):** Approve listings, manage users, view metrics  

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS  
- **Forms & Validation:** React Hook Form  
- **Mapping:** Leaflet.js  
- **Backend & DB:** Node.js, Next.js API routes, PostgreSQL on Supabase, Prisma ORM  
- **Authentication:** NextAuth.js  
- **Blog CMS:** MDX files in `/content`  
- **Deployment:** Vercel (frontend), Supabase (database & auth)  
- **CI/CD:** GitHub Actions, ESLint, Prettier  

## Prerequisites

- Node.js v18+ & npm  
- Git  
- Supabase CLI  
- (Optional) Vercel CLI  
- PostgreSQL (if running locally)  

## Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/<your-username>/evsane.git
   cd evsane

2. Copy environment variables:
    ```bash
    cp .env.example .env.local

3. Install dependencies:
    ```bash
    nmp install
4. Run database migrations:
    ```bash
    npx prisma migrate dev --name init

## Environment Variables

| Key                 | Description                     |
| ------------------- | ------------------------------- |
| `DATABASE_URL`      | PostgreSQL connection string    |
| `NEXTAUTH_SECRET`   | Secret for NextAuth.js sessions |
| `SUPABASE_URL`      | Your Supabase project URL       |
| `SUPABASE_ANON_KEY` | Supabase public anon key        |

## Run locally

    npm run dev

Visit http://localhost:3000.


