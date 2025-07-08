import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layouts
import LayoutAdministrador from './Layout/LayoutAdministrador.jsx'
import LayoutEmpleado from './Layout/LayoutEmpleado';
import LayoutCliente from './Layout/LayoutCliente.jsx';

// CONTEXTOS
import { PedidoProvider } from './context/PedidoContext'
import { ReservaProvider } from './context/ReservaContext'
import { InsumoProvider } from './context/InsumoContext'
import { ProductoProvider } from './context/ProductoContext'
import { AuthProvider } from './context/AuthContext';


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
import Configuracion from './components/administrador/Configuracion';
import ModificarContacto from './components/administrador/ModificarContacto';
import ModificarUbicacion from './components/administrador/ModificarUbicacion';
import Sugerencias from './components/administrador/Sugerencias';
import RutaProtegida from './components/RutaProtegida';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PedidoProvider>
      <InsumoProvider>
        <ReservaProvider>
          <ProductoProvider>
            <AuthProvider>
              <BrowserRouter>
                <Routes>
                  {/* Rutas públicas */}
                  <Route path="/" element={<Body />} />
                  <Route path="/home" element={<Body />} />
                  <Route path="/registro" element={<Registro />} />
                  <Route path="/cuenta" element={<MiCuenta />} />

                  <Route path="/administrador" element={<LayoutAdministrador />}>
                    <Route index element={<Administrador />} /> {/* Página de bienvenida */}
                    <Route path="insumoadmin" element={<InsumosAdmin />} />
                    <Route path="crearcuenta" element={<CrearCuenta />} />
                    <Route path="pedidosadmin" element={<PedidosAdmin />} />
                    <Route path="gestionareservas" element={<GestionarReservas />} />
                    <Route path="modificarcontacto" element={<Configuracion />} />
                    <Route path="sugerencias" element={<Sugerencias />} />
                    <Route path="confirmarpedidos" element={<ConfirmarPedidos />} />
                    <Route path="consultarpedidos" element={<ConsultarPedidos />} />
                    <Route path="modificar-contacto" element={<ModificarContacto />} />
                    <Route path="modificar-ubicacion" element={<ModificarUbicacion />} />
                    <Route path="buzonsugerencias" element={<BuzonSugerencias />} />
                    <Route path="administrarcuentas" element={<AdministrarCuentas />} />
                    <Route path="inventario" element={<InventarioInsumos />} />
                  </Route>

                  <Route
                    path="/empleados"
                    element={
                      <RutaProtegida rolRequerido="Empleado">
                        <LayoutEmpleado />
                      </RutaProtegida>
                    }
                  >
                    <Route index element={<Empleados />} />
                    <Route path="verproductos" element={<VerProductos />} />
                    <Route path="gestionarpedidos" element={<GestionarPedidos />} />
                    <Route path="gestionareservas" element={<GestionarReservas />} />
                    <Route path="verinsumo" element={<VerInsumo />} />
                    <Route path="contactar" element={<ContactarAdministrador />} />

                  </Route>

                  <Route path="/realizarpedido" element={<RealizarPedido />} />
                  <Route path="/consultarpedido" element={<ConsultarPedido />} />
                  <Route path="/verhistorial" element={<HistorialPedidos />} />
                  <Route path="/contactar" element={<ContactarEmpresa />} />
                  <Route path="/productos" element={<Productos />} />
                  <Route path="/realizarreserva" element={<RealizarReserva />} />
                  <Route path="/reservadetalle" element={<ReservaSencilla />} />
                  <Route path="/historialreservas" element={<HistorialReservas />} />

                  <Route path="/cliente" element={<LayoutCliente />}>
                    <Route index element={<Cliente />} />
                    <Route path="realizarpedido" element={<RealizarPedido />} />
                    <Route path="consultarpedido" element={<ConsultarPedido />} />
                    <Route path="verhistorial" element={<HistorialPedidos />} />
                    <Route path="realizarreserva" element={<RealizarReserva />} />
                    <Route path="historialreservas" element={<HistorialReservas />} />
                    <Route path="contactar" element={<ContactarEmpresa />} />
                  </Route>
                  <Route path="/gestionarpedidos" element={<GestionarPedidos />} />
                  <Route path="/verinsumo" element={<VerInsumo />} />
                  <Route path="/verproductos" element={<VerProductos />} />
                  <Route path="/ContactarAdministrador" element={<ContactarAdministrador />} />
                </Routes>
              </BrowserRouter>

            </AuthProvider>
          </ProductoProvider>
        </ReservaProvider>
      </InsumoProvider>
    </PedidoProvider>
  </StrictMode>
);

