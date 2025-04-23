import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from './components/Body'
import Administrador from './components/Administrador'
import MiCuenta from './components/MiCuenta'
import Empleados from './components/Empleados'
import Cliente from './components/Cliente'
import Registro from './components/Registro'
import Administradorinsumo from './components/AdmiIngresoinsumo'
import RealizarPedido from './components/RealizarPedido'
import ConsultarPedido from './components/ConsultarPedido'
import CancelarPedido from './components/CancelarPedido'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ModificarPedido from './components/ModificarPedido'
import PedidoCancelado from './components/PedidoCancelado'
import HistorialPedidos from './components/HistorialPedidos'
import ContactarEmpresa from './components/ContactarEmpresa'
import Header from './components/Header'
import Footer from './components/Footer'
import Productos from './components/Productos'
import ConfirmarPedidos from './components/ConfirmarPedidos'
import ConfirmarReservas from './components/ConfirmarReservas'
import ConsultarReservas from './components/ConsultarReservas'
import ModificarUbi from './components/ModificarUbi'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Body />} />

        <Route path="/cuenta" element={<MiCuenta />} />

        <Route path="/administrador" element={<Administrador />} />
        <Route path="/cliente" element={<Cliente />} />

        <Route path="/empleados" element={<Empleados />} />

        <Route path="/home" element={<Body />} />

        <Route path="/registro" element={<Registro />} />

        <Route path="/agregarinsumo" element={<Administradorinsumo />} />

        <Route path="/realizarpedido" element={<RealizarPedido />} />

        <Route path="/consultarpedido" element={<ConsultarPedido />} />

        <Route path="/modificarpedido" element={<ModificarPedido />} />

        <Route path="/cancelarpedido" element={<CancelarPedido />} />

        <Route path="/pedidocancelado" element={<PedidoCancelado />} />

        <Route path="/verhistorial" element={<HistorialPedidos />} />

        <Route path="/contactar" element={<ContactarEmpresa />} />

        <Route path="/productos" element={<Productos />}/>

        <Route path="/confirmarpedidos" element={<ConfirmarPedidos/>}/> 

        <Route path="/confirmarreservas" element={<ConfirmarReservas/>}/> 

        <Route path="/consultarreservas" element={<ConsultarReservas/>}/> 

        <Route path="/modificarubi" element={<ModificarUbi/>}/> 


      </Routes>
    </BrowserRouter>
    <Footer/>
  </StrictMode>
)
