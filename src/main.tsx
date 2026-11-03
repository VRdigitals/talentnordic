import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const container = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// The production build ships prerendered HTML (see scripts/prerender.mjs),
// so hydrate it; in dev the root is empty and we render from scratch.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app)
} else {
  ReactDOM.createRoot(container).render(app)
}
