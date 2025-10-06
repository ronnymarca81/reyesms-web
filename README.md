# 🧼 Reyes Maintenance Service Inc – Quote Request App

Reyes Maintenance Service Inc is a modern, responsive web application designed to streamline service inquiries for commercial cleaning and maintenance. Built with React, TypeScript, Vite, and Tailwind CSS, the app delivers a seamless user experience and professional polish that reflects the high standards of Reyes Maintenance Service Inc.

This application empowers potential clients to request quotes quickly and confidently, while reinforcing the company’s reputation for reliability, eco-conscious practices, and exceptional service. It features a dynamic, step-by-step form with live validation, branded email auto-replies, and scalable architecture for future service expansion.

Whether accessed from desktop or mobile, the app ensures that every interaction feels clean, intuitive, and trustworthy—just like the spaces Reyes Maintenance Service Inc maintains.

---

##🚀 Features

- Step-by-step quote request flow with animated transitions and dynamic titles
- Responsive design optimized for desktop, tablet, and mobile
- Live field validation for email, phone number, and message length
- Dynamic form fields including service selection, textarea, and conditional rendering
- Branded auto-reply emails with company logo, header, and footer
- Centralized validation logic for maintainability and scalability
- Type-safe service label mapping using discriminated unions and reusable utilities
- Frontend-only email delivery via EmailJS with secure public key integration
- Environment variable support for deployment flexibility across platforms
- Scalable project structure with modular components and centralized config
- GitHub collaboration workflows including branch protection and code review enforcement
- Customizable service offerings including:
  - Office & commercial cleaning
  - Floor stripping and waxing
  - Carpet care and allergen removal
  - Spring/deep cleaning for seasonal or post-construction refresh
  - Minor renovations and non-structural demolitions
  - Light maintenance and bulb replacement
  - Eco-conscious messaging and professional polish to reflect brand values
  - Client testimonials and satisfaction metrics to build trust and credibility

---

## 🛠️ Tech Stack

| Layer      | Tools Used                            |
| ---------- | ------------------------------------- |
| Frontend   | React, TypeScript, Vite, Tailwind CSS |
| Validation | Custom hooks, TypeScript utilities    |
| Email      | EmailJS (public key only)             |
| Deployment | Vercel / Netlify (recommended)        |

---

## 📁 Project Structure

src/
├── components/ # Reusable UI components
├── pages/ # Quote form and landing page
├── utils/ # Validation and mapping logic
├── assets/ # Logo and branding
├── types/ # Centralized TypeScript definitions
└── config/ # Service labels, email templates

---

## 🧪 Validation Highlights

- Email format and phone number checks
- Character limits for message textarea
- Real-time feedback and error handling
- Type-safe service label mapping

---

## 🧼 Code Quality & Collaboration

- ESLint with type-aware rules via @typescript-eslint
- React-specific linting via eslint-plugin-react-x and eslint-plugin-react-dom
- Prettier for consistent formatting
- Optional Git hooks via Husky and lint-staged
- Conventional commit linting with Commitlint

---

## 📦 Setup

---

## 🧭 Onboarding Guide

Follow these steps to get the project running locally:

### 1. Clone the repo

```bash
git clone https://github.com/your-username/reyes-maintenance
cd reyes-maintenance

### 1. Clone the repo

```bash
npm install

### 3. Set up environment variables

Create a .env.local file in the root directory and add your EmailJS keys:

```bash 
VITE_EMAIL_PUBLIC_KEY=your_key
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id

### 4. Start the dev server

```bash 
npm run dev

### 5. Ready to deploy

Use Vercel, Netlify, or Firebase Hosting. Make sure to set your environment variables in the platform dashboard.






---
