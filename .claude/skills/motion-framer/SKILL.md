# Motion & Framer Motion Skill Definition

## Core Overview

Motion is described as "a production-ready animation library for React and JavaScript that enables declarative, performant animations with minimal code." It provides motion-wrapped components with animation capabilities including gesture recognition and advanced features like layout and exit animations.

## Primary Use Cases

The skill applies when:
- Creating interactive UI component animations (buttons, cards, menus)
- Building micro-interactions and hover effects
- Implementing page transitions and route animations
- Adding scroll-based animations and parallax effects
- Animating layout changes and shared element transitions
- Developing drag-and-drop interfaces
- Orchestrating complex animation sequences with state management

## Key Technical Foundation

**Core Components:**
- Motion components wrap HTML/SVG elements with animation superpowers
- The `animate` prop defines target animation states with automatic interpolation
- `initial` prop establishes pre-animation states
- `transition` prop controls animation timing (tween, spring, or inertia types)

**Gesture System:**
Motion includes declarative gesture handlers: `whileHover`, `whileTap`, `whileFocus`, `whileDrag`, and `whileInView` for responsive interactions without manual event management.

**Advanced Features:**
- Variants enable organized animation states with automatic child propagation
- AnimatePresence handles exit animations for removed elements
- Layout animations smoothly transition position and size changes
- Spring physics provide natural, bouncy motion characteristics

## Integration Strengths

The library integrates well with React 18+, Next.js, Vite, and Remix. It supports TypeScript and works alongside GSAP for complex timelines and React Three Fiber for 3D animations. Form libraries benefit from animated validation state feedback.

## Performance Considerations

Hardware acceleration comes from transform properties (x, y, scale, rotate). Layout animations require optimization through selective application, and reduced motion preferences should be respected via `useReducedMotion` hook for accessibility compliance.
