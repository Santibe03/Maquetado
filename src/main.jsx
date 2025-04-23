import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Body from './components/Body'
import Administrador from './components/Administrador'
import MiCuenta from './components/MiCuenta'
import Empleados from './components/Empleados/Empleados.jsx'
import Cliente from './components/Cliente/Cliente.jsx'
import Registro from './components/Registro'
import IngresoInsumo from './components/administrador/IngresoInsumo.jsx'
import RealizarPedido from './components/Cliente/RealizarPedido.jsx'
import ConsultarPedido from './components/Cliente/ConsultarPedido.jsx'
import CancelarPedido from './components/Cliente/CancelarPedido'
import ModificarPedido from './components/Cliente/ModificarPedido.jsx'
import PedidoCancelado from './components/Cliente/PedidoCancelado'
import HistorialPedidos from './components/Cliente/HistorialPedidos.jsx'
import ContactarEmpresa from './components/Cliente/ContactarEmpresa.jsx'
import Header from './components/Header'
import Footer from './components/Footer'
import Productos from './components/Productos'
import ConfirmarPedidos from './components/Empleados/ConfirmarPedidos'
import ConfirmarReservas from './components/Empleados/ConfirmarReservas.jsx'
import CancelarReservas from './components/Empleados/CancelarReservas.jsx'
import ContactarAdministrador from './components/Empleados/ContactarAdministrador.jsx'

import EliminarInsumo from './components/administrador/EliminarInsumo'
import VerInsumo from './components/administrador/VerInsumo'
import CrearCuenta from './components/administrador/CrearCuenta'
import AdministrarCuentas from './components/administrador/AdministrarCuentas'
import BuzonSugerencias from './components/administrador/BuzonSugerencias'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/cuenta" element={<MiCuenta />} />
        <Route path="/administrador" element={<Administrador />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/home" element={<Body />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/agregarinsumo" element={<IngresoInsumo />} />
        <Route path="/realizarpedido" element={<RealizarPedido />} />
        <Route path="/consultarpedido" element={<ConsultarPedido />} />
        <Route path="/modificarpedido" element={<ModificarPedido />} />
        <Route path="/cancelarpedido" element={<CancelarPedido />} />
        <Route path="/pedidocancelado" element={<PedidoCancelado />} />
        <Route path="/verhistorial" element={<HistorialPedidos />} />
        <Route path="/contactar" element={<ContactarEmpresa />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/ConfirmarPedidos" element={<ConfirmarPedidos />} />
        <Route path="/ConfirmarReservas" element={<ConfirmarReservas />} />
        <Route path="/CancelarReservas" element={<CancelarReservas />} />
        <Route path="/ContactarAdministrador" element={<ContactarAdministrador />} />
        <Route path="/eliminarinsumo" element={<EliminarInsumo />} />
        <Route path="/verinsumo" element={<VerInsumo />} />
        <Route path="/crearcuenta" element={<CrearCuenta />} />
        <Route path="/administrarcuentas" element={<AdministrarCuentas />} />
        <Route path="/buzonsugerencias" element={<BuzonSugerencias />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </StrictMode>
)