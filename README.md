# 🧼 Reyes Maintenance Service Inc - Web Site

Reyes Maintenance Service Inc is a modern, responsive web application designed to streamline service inquiries for commercial cleaning and maintenance. Built with React, TypeScript, Vite, and Tailwind CSS, the app delivers a seamless user experience and professional polish that reflects the high standards of Reyes Maintenance Service Inc.

This application empowers potential clients to request quotes quickly and confidently, while reinforcing the company’s reputation for reliability, eco-conscious practices, and exceptional service. It features a dynamic, step-by-step form with live validation, branded email auto-replies, and scalable architecture for future service expansion.

Whether accessed from desktop or mobile, the app ensures that every interaction feels clean, intuitive, and trustworthy—just like the spaces Reyes Maintenance Service Inc maintains.

---

## 🧼 Project Overview

**Reyes Maintenance Service Inc – Quote Request App** empowers potential clients to request service quotes quickly and confidently. It features a dynamic, step-by-step form with live validation, branded auto-reply emails, and scalable architecture for future service expansion.

As a locally owned and operated business serving Ottawa since 2008, Reyes Maintenance Service Inc. understands that a clean workspace is more than just appearance—it’s about creating a healthy, productive environment that leaves a lasting impression. This app reflects that philosophy, combining modern technology with thoughtful design to elevate every client interaction.

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
```text
src/
├── components/ # Reusable UI components
├── pages/ # Quote form and landing page
├── utils/ # Validation and mapping logic
├── assets/ # Logo and branding
├── types/ # Centralized TypeScript definitions
└── config/ # Service labels, email templates
```
---

## 🔐 Environment Variables
Create a .env.local file in the root directory:
```bash
VITE_EMAIL_PUBLIC_KEY=SPvmzo5lI0xSv8BY3
VITE_EMAIL_SERVICE_ID=your_service_id_here
VITE_EMAIL_TEMPLATE_ID=your_template_id_here
```
All variables must be prefixed with VITE_ to be exposed in Vite.
Add .env.local to .gitignore, and include a .env.example for onboarding.

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

## 🧭 Onboarding Guide

Follow these steps to get the project running locally:

### 1. Clone the repo

```bash
git clone https://github.com/your-username/reyes-maintenance
cd reyes-maintenance
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a .env.local file in the root directory and add your EmailJS keys:

```bash 
VITE_EMAIL_PUBLIC_KEY=your_key
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
```

### 4. Start the dev server

```bash 
npm run dev
```

### 5. Ready to deploy

Use Vercel, Netlify, or Firebase Hosting. Make sure to set your environment variables in the platform dashboard.

---

### 📤 Deployment
This app is ready for deployment on platforms like:

Vercel – auto-detects Vite and supports .env variables

Netlify – configure build command npm run build and publish directory dist

Firebase Hosting – optional for static deployment


## 🙌 Contributors

| Name        | Role                          | GitHub Profile                                  | Badge                                      |
|-------------|-------------------------------|--------------------------------------------------|--------------------------------------------|
| Ronny Martinez       | Lead Developer & Architect    | [@ronnymarca81](https://github.com/ronnymarca81)        | ![GitHub](https://img.shields.io/badge/Ronny-Martinez-dev-blue) |
| Reyes Team  | Business Requirements & QA    |[@nklovo84](https://github.com/nklovo84)                                               | ![Team](https://img.shields.io/badge/Nubia-Lovo-QA-green) |
| Reyes Team      | Web Design & Branding         | [@nklovo84](https://github.com/nklovo84)             | ![Design](https://img.shields.io/badge/Marlov-design-orange) |


## ✨ GitHub Contributors

Thanks to everyone who has contributed!

<a href="https://github.com/nklovo84/reyes-maintenance/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=your-username/reyes-maintenance" />
</a>

---
