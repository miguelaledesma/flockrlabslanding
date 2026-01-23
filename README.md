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
- **Contact Form**: Email functionality using Nodemailer

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

Edit `.env.local` with your SMTP credentials for the contact form.

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

The contact form requires SMTP credentials to send emails. You have several options:

### Option 1: Gmail (Development)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use your Gmail address as `SMTP_USER` and the App Password as `SMTP_PASSWORD`

### Option 2: Resend (Recommended for Production)
1. Sign up at https://resend.com
2. Get your API key
3. Update the contact API route to use Resend instead of Nodemailer

### Option 3: SendGrid or AWS SES
Similar setup, just update the SMTP configuration in `.env.local`

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
- **Nodemailer**: Email sending
- **Lucide React**: Icon library

## License

© 2024 Flockr Labs LLC. All rights reserved.
