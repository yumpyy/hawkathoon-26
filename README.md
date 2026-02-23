# Hawkathoon 2026 Website

This is a **static, canvas-based website** built for Hawkathoon 2026. It uses Next.js App Router but functions primarily as a drag-and-drop digital collage.

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technology Stack

<<<<<<< HEAD
- **Next.js 16.1.6** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **GSAP 3.14.2** - Animation library for drag interactions
- **ESLint** - Code linting
- **React Compiler** - Automatic React optimizations
=======
- **`app/`**: Contains the pages (`home/`, `about/`, etc.) and the global layout.
    - **`app/home/elements.ts`**: The "database" file where Home page content is defined.
- **`components/`**: React components.
    - **`Canvas.tsx`**: The main area that renders elements.
    - **`Draggable.tsx`**: Wraps content to enable drag-and-drop.
    - **`Navbar.tsx`**: The top navigation bar.
- **`public/`**: Static assets.
    - **`images/`**: Place all images here.
    - **`videos/`**: Place background video here.
>>>>>>> c02bf76fc98a268a7779219f0e9c060226120a4d

## Features

- Canvas-based layout with absolute positioning
- Drag-and-drop functionality for interactive elements
- Static export for easy deployment
- Multiple pages with individual content definitions
- Video background support
- Responsive design with custom animations
- Rotatable and positionable elements
- Z-index layering system

## Project Structure

```
hawkathoon-26/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home redirect
│   ├── globals.css          # Global styles
│   ├── 1/                   # Home page
│   │   ├── page.tsx
│   │   ├── canvas.tsx
│   │   ├── elements.ts      # Content definitions
│   │   └── drag.ts          # Drag logic
│   ├── 2/                   # About page
│   ├── 3/                   # Register page
│   ├── 4/                   # Contact page
│   └── 5/                   # Examples page
├── components/
│   ├── Draggable.tsx        # Drag wrapper component
│   ├── StaticElement.tsx    # Non-draggable elements
│   ├── Navbar.tsx           # Navigation bar
│   ├── GSAPProvider.tsx     # GSAP context provider
│   ├── Marquee.tsx          # Scrolling text component
│   ├── Section.tsx          # Page section wrapper
│   ├── VideoBackground.tsx  # Video background component
│   └── StaticBackground.tsx # Static background component
├── public/
│   ├── images/              # Image assets
│   └── videos/              # Video assets
└── package.json             # Dependencies
```

## Pages

The website consists of 5 pages, each with its own content:

1. **Page 1 (Home)** - Main landing page with title and intro
2. **Page 2 (About)** - Information about Hawkathoon
3. **Page 3 (Register)** - Registration details
4. **Page 4 (Contact)** - Contact information
5. **Page 5 (Examples)** - Examples and showcase

Each page has its own `elements.ts` file where all content (text, images, links) is defined with pixel-perfect positioning.

## Customization

### Quick Content Editing

All page content is defined in `elements.ts` files. Each element has:
- **Position** (x, y coordinates)
- **Type** (text, image, or link)
- **Styling** (colors, fonts, rotation, shadows)
- **Interactivity** (draggable, zoomable)

### Adding Images

1. Place image files in `public/images/`
2. Reference as `/images/filename.png` in elements.ts
3. Do not include 'public' in the path

### Adding Videos

Replace `public/videos/bg.mp4` with your background video.

### Detailed Guide

See [GUIDE.md](./GUIDE.md) for comprehensive instructions on:
- Adding and positioning elements
- Rotating and styling content
- Creating custom components
- Managing z-index layers

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Key Components

- **Canvas**: Main rendering area that displays all elements
- **Draggable**: Enables drag-and-drop using GSAP
- **StaticElement**: Renders non-interactive elements
- **GSAPProvider**: Provides GSAP context to child components

## Build & Deploy

This project is configured for **Static Export** via `next.config.ts`.

```bash
npm run build
```

This generates an `out/` folder containing pure HTML/CSS/JS that can be hosted on:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

### Deployment Notes

- No server-side rendering required
- All routes are pre-rendered at build time
- Images are unoptimized for static compatibility
- Video assets are served directly from public folder

## Contributing

1. Make changes to the appropriate `elements.ts` file for content updates
2. Use `npm run lint` to check code quality
3. Test changes with `npm run dev` before building
4. Build and verify with `npm run build`

## License

Private project for Hawkathoon 2025.
