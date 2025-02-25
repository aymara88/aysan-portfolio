import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/App.scss'; // Import your global styles
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
