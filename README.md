
# Artisan Woodworks Pakistan 🪑

**Artisan Woodworks** is a premium digital showroom and custom furniture inquiry platform tailored for the Pakistani market. It blends traditional craftsmanship from the heart of Gujrat with a modern, high-performance web experience.

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square&logo=vercel)](https://vercel.com)
[![React Version](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

---

## ✨ Features

- 🏛️ **Digital Showroom**: Browse curated collections for Living Room, Bedroom, Office, and Dining.
- 🎨 **Bespoke Design Flow**: A custom inquiry system allowing users to upload reference images (Pinterest/Instagram) and specify materials/dimensions.
- 📱 **WhatsApp Integration**: Seamless lead generation by bridging web inquiries directly to a craftsman's WhatsApp chat.
- ⚡ **Mobile-First Design**: Optimized for the highest performance on mobile devices, common for the local target audience.
- 🪵 **Heritage Focused**: Highlighting premium materials like Sheesham, Walnut, and Mahogany.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) (Utility-first, responsive design)
- **Icons**: [Lucide React](https://lucide.dev)
- **Routing**: [React Router 7](https://reactrouter.com)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org)

---

## 🚀 Deployment to Vercel

To deploy this project from your GitHub repository to Vercel, follow these steps:

1. **Push to GitHub**:
   - Initialize git: `git init`
   - Commit changes: `git add . && git commit -m "Initial commit"`
   - Push to your repo: `git push origin main`

2. **Connect to Vercel**:
   - Visit [Vercel](https://vercel.com) and click **"Add New" > "Project"**.
   - Import your repository.
   - Vercel will auto-detect the configuration. If asked:
     - **Build Command**: `npm run build` (or similar depending on your local tooling).
     - **Output Directory**: `dist` or `build`.
   - Click **"Deploy"**.

3. **Enjoy Auto-Deploys**: Every push to your `main` branch will automatically trigger a production build.

---

## 📁 Project Structure

```text
.
├── pages/              # Main view components
│   ├── Home.tsx        # Hero section & featured categories
│   ├── Categories.tsx  # Product catalog with filters
│   ├── ProductDetail.tsx # Detailed item view
│   ├── CustomOrder.tsx # Bespoke inquiry form with file upload
│   ├── About.tsx       # Company story & values
│   └── Contact.tsx     # Location & contact details
├── constants.ts        # Business data & Product mockups
├── types.ts            # TypeScript interfaces
├── App.tsx             # Routing & Global Layout
├── index.tsx           # React entry point
└── metadata.json       # App metadata & permissions
```

---

## 📜 License

This project is proprietary for **Artisan Woodworks**. All furniture designs and brand assets are protected.

---
*Built with ❤️ for the artisans of Pakistan.*
