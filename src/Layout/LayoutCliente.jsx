import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import HeaderCliente from './../components/Cliente/HeaderCliente';
import FooterCliente from './../components/Cliente/FooterCliente';
import './../Styles/Cliente/layoutCliente.css';

const LayoutCliente = () => {
  return (
    <>
      <HeaderCliente />
      <div className="layout-cliente">
        <aside className="sidebar-cliente">
          <h2>Cliente</h2>
          <ul>
            <li><Link to="/cliente">Inicio</Link></li>
            <li><Link to="/cliente/realizarpedido">Realizar pedido</Link></li>
            <li><Link to="/cliente/consultarpedido">Consultar pedido</Link></li>
            <li><Link to="/cliente/verhistorial">Historial pedidos</Link></li>
            <li><Link to="/cliente/realizarreserva">Reservar</Link></li>
            <li><Link to="/cliente/historialreservas">Historial reservas</Link></li>
            <li><Link to="/cliente/contactar">Contactar empresa</Link></li>
            <li><Link to="/">Cerrar sesión</Link></li>
          </ul>
        </aside>
        <main className="contenido-cliente">
          <Outlet />
        </main>
      </div>
      <FooterCliente />
    </>
  );
};

export default LayoutCliente;
