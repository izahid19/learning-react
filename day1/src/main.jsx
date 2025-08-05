import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apple from './App.jsx'

createRoot(document.getElementById('fruit')).render(
  <StrictMode>
    <Apple />
  </StrictMode>,
)
