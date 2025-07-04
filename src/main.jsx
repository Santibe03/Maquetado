import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// CONTEXTOS
import { PedidoProvider } from './context/PedidoContext'
import { ReservaProvider } from './context/ReservaContext'
import { InsumoProvider } from './context/InsumoContext'
import { ProductoProvider } from './context/ProductoContext';



// componentes...
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import MiCuenta from './components/MiCuenta'
import Administrador from './components/administrador/Administrador.jsx'
import Empleados from './components/Empleados/Empleados.jsx'
import Cliente from './components/Cliente/Cliente.jsx'
import Registro from './components/Registro'
import IngresoInsumo from './components/administrador/IngresoInsumo.jsx'
import RealizarPedido from './components/Cliente/RealizarPedido.jsx'
import ConsultarPedido from './components/Cliente/ConsultarPedido.jsx'
import HistorialPedidos from './components/Cliente/HistorialPedidos.jsx'
import ContactarEmpresa from './components/Cliente/ContactarEmpresa.jsx'
import Productos from './components/Productos'
import ContactarAdministrador from './components/Empleados/ContactarAdministrador.jsx'
import EliminarInsumo from './components/administrador/EliminarInsumo'
import CrearCuenta from './components/administrador/CrearCuenta'
import AdministrarCuentas from './components/administrador/AdministrarCuentas'
import BuzonSugerencias from './components/administrador/BuzonSugerencias'
import RealizarReserva from './components/Cliente/RealizarReserva.jsx'
import ReservaSencilla from './components/Cliente/ReservaSencilla';
import HistorialReservas from './components/Cliente/HistorialReservas';
import GestionarPedidos from './components/Empleados/GestionarPedidos';
import GestionarReservas from './components/Empleados/GestionarReservas';
import InventarioInsumos from './components/administrador/InventarioInsumos';
import VerInsumo from './components/Empleados/VerInsumo';
import VerProductos from './components/Empleados/VerProductos';
import InsumosAdmin from './components/administrador/InsumosAdmin';
import PedidosAdmin from './components/administrador/PedidosAdmin';
import ConfirmarPedidos from "./components/administrador/ConfirmarPedidos";
import ConsultarPedidos from "./components/administrador/ConsultarPedidos";













createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PedidoProvider>
      <InsumoProvider>
      <ReservaProvider>
        <ProductoProvider>
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
          <Route path="/verhistorial" element={<HistorialPedidos />} />
          <Route path="/contactar" element={<ContactarEmpresa />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/ContactarAdministrador" element={<ContactarAdministrador />} />
          <Route path="/eliminarinsumo" element={<EliminarInsumo />} />
          <Route path="/crearcuenta" element={<CrearCuenta />} />
          <Route path="/administrarcuentas" element={<AdministrarCuentas />} />
          <Route path="/buzonsugerencias" element={<BuzonSugerencias />} />
          <Route path="/realizarreserva" element={<RealizarReserva />} />
          <Route path="/reservadetalle" element={<ReservaSencilla />} />
          <Route path="/historialreservas" element={<HistorialReservas />} />
          <Route path="/gestionarpedidos" element={<GestionarPedidos />} />
          <Route path="/gestionareservas" element={<GestionarReservas />} />
          <Route path="/inventario" element={<InventarioInsumos />} />
          <Route path="/verinsumo" element={<VerInsumo />} />
          <Route path="/verproductos" element={<VerProductos />} />
          <Route path="/insumoadmin" element={<InsumosAdmin />} />
          <Route path="/pedidosadmin" element={<PedidosAdmin />} />
          <Route path="/confirmarpedidos" element={<ConfirmarPedidos />} />
          <Route path="/consultarpedidos" element={<ConsultarPedidos />} />




        </Routes>
      </BrowserRouter>
      <Footer />
        </ProductoProvider>
      </ReservaProvider>
      </InsumoProvider>
    </PedidoProvider>
  </StrictMode>
)
