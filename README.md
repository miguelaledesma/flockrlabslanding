# Flockr Labs Landing Page

A modern, FAANG-inspired landing page for Flockr Labs LLC, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional design inspired by FAANG companies
- **Three Pages**: 
  - Landing page with hero section and features
  - About page with company information
  - Contact page with email form
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations using Framer Motion
- **Contact Form**: Email functionality using Resend
- **Dark Mode**: Full dark mode support with theme toggle

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Resend API key:
```
RESEND_API_KEY=re_your_api_key_here
```

Get your API key from https://resend.com/api-keys

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## Email Configuration

The contact form uses Resend to send emails. To set it up:

1. Sign up at https://resend.com (free tier: 3,000 emails/month)
2. Get your API key from https://resend.com/api-keys
3. Add it to your `.env.local` file:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

For production (Railway, Vercel, etc.), add `RESEND_API_KEY` as an environment variable in your hosting platform's settings.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Email API endpoint
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Landing page
├── components/
│   ├── navigation.tsx          # Navigation component
│   └── ui/
│       └── button.tsx          # Button component
└── lib/
    └── utils.ts                # Utility functions
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Resend**: Email sending service
- **next-themes**: Dark mode theme management
- **Lucide React**: Icon library

## License

© 2024 Flockr Labs LLC. All rights reserved.
