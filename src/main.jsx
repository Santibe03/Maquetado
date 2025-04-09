import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from './components/Body'
import Administrador from './components/Administrador'
import MiCuenta from './components/MiCuenta'
import Carrito from './components/Carrito'
import Empleados from './components/Empleados'
import Cliente from './components/Cliente'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/cuenta" element={<MiCuenta />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/administrador" element={<Administrador />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/home" element={<Body />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
