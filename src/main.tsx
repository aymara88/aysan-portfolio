import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.scss'; // Import your global styles
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
