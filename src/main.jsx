import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import BusquedaInc from './components/Busqueda.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <BusquedaInc>
    <App />
  </BusquedaInc>

  
)
