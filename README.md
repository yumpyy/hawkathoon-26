# Hawkathoon 2026 Website

This is a **static, canvas-based website** built for Hawkathoon 2026. It uses Next.js App Router but functions primarily as a drag-and-drop digital collage.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000).

## 🛠 Project Structure

- **`app/`**: Contains the pages (`home/`, `about/`, etc.) and the global layout.
    - **`app/home/elements.ts`**: The "database" file where Home page content is defined.
- **`components/`**: React components.
    - **`Canvas.tsx`**: The main area that renders elements.
    - **`Draggable.tsx`**: Wraps content to enable drag-and-drop.
    - **`Navbar.tsx`**: The top navigation bar.
- **`public/`**: Static assets.
    - **`images/`**: Place all images here.
    - **`videos/`**: Place background video here.

## 📖 Customization

See [GUIDE.md](./GUIDE.md) for detailed instructions on how to add, move, and rotate text and images.

## 🏗 Build & Deploy

This project is configured for **Static Export**.

```bash
npm run build
```

This will generate an `out/` folder containing pure HTML/CSS/JS that can be hosted anywhere (GitHub Pages, Vercel, Netlify).
