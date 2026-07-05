# Talen Nordic - Modern Recruitment Platform

A modern recruitment website built with React, TypeScript, Framer Motion, and Tailwind CSS featuring advanced scroll animations.

## Features

- ✨ Smooth scroll animations (fade-in, parallax, staggered)
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🚀 Fast build with Vite
- 🎬 Advanced animations with Framer Motion
- ♿ Accessible components

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Animation Components

### ScrollFadeIn
Fade in elements as they scroll into view.

```tsx
<ScrollFadeIn delay={0.1}>
  <YourContent />
</ScrollFadeIn>
```

### ParallaxSection
Creates parallax scrolling effect where background moves slower than foreground.

```tsx
<ParallaxSection offset={50}>
  <YourContent />
</ParallaxSection>
```

### StaggerContainer
Animate children elements in sequence with staggered timing.

```tsx
<StaggerContainer staggerDelay={0.1}>
  {items.map((item) => <Item key={item.id} />)}
</StaggerContainer>
```

## Project Structure

```
src/
├── components/
│   ├── ScrollFadeIn.tsx
│   ├── ParallaxSection.tsx
│   └── StaggerContainer.tsx
├── pages/
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: "#2563eb",
      secondary: "#1e40af",
    }
  },
}
```

### Animations
Modify animation timing and effects in the component files or create new animation variants using Framer Motion.

## Next Steps

1. Recreate your Lovable design components
2. Add more sections and pages
3. Create custom animation variants
4. Add navigation and routing with React Router
5. Set up CI/CD pipeline

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
