# Lovable to Claude Migration Guide

This guide walks you through migrating your Lovable website design to the modern React + Framer Motion setup.

## Step 1: Export Your Design from Lovable

### Option A: Export HTML (Recommended)
1. In Lovable, click the **Export** button
2. Choose **Export as HTML**
3. This gives you the full HTML structure, CSS, and JavaScript
4. Save it as `lovable-export.html` in your project root

### Option B: Screenshot & Manual Recreation
If HTML export isn't available:
1. Take screenshots of each section
2. Reference them while rebuilding components
3. Usually faster for major redesigns

## Step 2: Extract Components from Your Export

If you exported HTML, you can extract valuable pieces:

```bash
# The structure typically follows:
# - HTML markup (convert to JSX)
# - Inline CSS (convert to Tailwind classes)
# - Animations (adapt to Framer Motion)
```

## Step 3: Convert Lovable Components to React

### Example: Converting a Hero Section

**Lovable HTML:**
```html
<section class="hero">
  <h1>Your Title</h1>
  <p>Your description</p>
  <button>CTA</button>
</section>

<style>
  .hero { ... }
  .hero h1 { animation: fadeIn 0.8s; }
</style>
```

**Converted to React with Framer Motion:**
```tsx
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Your Title
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Your description
      </motion.p>
    </section>
  )
}
```

## Step 4: Migrate Animations

### CSS Animations → Framer Motion

**Before (Lovable):**
```css
@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.element { animation: slideIn 0.5s ease-out; }
```

**After (Framer Motion):**
```tsx
<motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
/>
```

### Scroll-Triggered Animations

**Use ScrollFadeIn component:**
```tsx
import { ScrollFadeIn } from './components/ScrollFadeIn'

export function YourSection() {
  return (
    <ScrollFadeIn>
      <div>This will fade in when scrolled into view</div>
    </ScrollFadeIn>
  )
}
```

## Step 5: Recreate Your Pages

1. **Extract each page section** from your Lovable design
2. **Create a component** for each section in `src/components/`
3. **Use the animation components** for scroll effects
4. **Combine in App.tsx** or create separate page files

### File Organization Suggestion:

```
src/
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   ├── ScrollFadeIn.tsx
│   ├── ParallaxSection.tsx
│   └── StaggerContainer.tsx
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Step 6: Color & Branding

### Update Your Brand Colors

Edit `tailwind.config.js`:

```js
export default {
  content: [...],
  theme: {
    extend: {
      colors: {
        primary: "#YOUR_PRIMARY_COLOR",
        secondary: "#YOUR_SECONDARY_COLOR",
      }
    },
  },
}
```

Then use in components:
```tsx
<button className="bg-primary hover:bg-primary-dark">
  Click me
</button>
```

## Step 7: Add Advanced Animations

### Parallax Scrolling
```tsx
<ParallaxSection offset={50}>
  <img src="background.jpg" alt="parallax" />
</ParallaxSection>
```

### Staggered List Animations
```tsx
<StaggerContainer staggerDelay={0.1}>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</StaggerContainer>
```

### Morphing Shapes
```tsx
<motion.div
  animate={{ borderRadius: ["0%", "50%", "0%"] }}
  transition={{ duration: 3, repeat: Infinity }}
/>
```

## Step 8: Test & Deploy

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Common Patterns from Lovable

### Navigation
Use React state or a library like React Router for multi-page navigation:

```tsx
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  // Your nav code
}
```

### Forms
Handle with React state or libraries like React Hook Form:

```tsx
import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({})
  // Form handling
}
```

### Responsive Design
Tailwind handles this with responsive classes:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* auto-responsive grid */}
</div>
```

## Tips for Success

1. **Start with one section** - Get comfortable with the workflow
2. **Reference the example App.tsx** - It shows all animation types
3. **Use Tailwind's responsive classes** - No need for media queries
4. **Test on mobile** - Use `npm run dev` and visit from phone
5. **Keep animations subtle** - Not every element needs animation
6. **Check accessibility** - Ensure animations don't break keyboard nav

## Resources

- [Framer Motion Examples](https://www.framer.com/motion/)
- [Tailwind Component Examples](https://tailwindui.com/)
- [React Patterns](https://react.dev/learn)

## Need Help?

1. Check `src/App.tsx` for working examples
2. Review component files for how animations work
3. Test in browser with `npm run dev`
4. Use React DevTools to debug components
