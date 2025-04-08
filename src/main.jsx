import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Busqueda from './components/Header'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Busqueda/>
  </StrictMode>
)
