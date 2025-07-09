// src/components/administrador/LayoutAdministrador.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './../Styles/admi/layoutAdministrador.css';
import HeaderAdmin from './../components/administrador/HeaderAdmin';
import FooterAdmin from './../components/administrador/FooterAdmin';

const LayoutAdministrador = () => {
  return (
  <>
      <HeaderAdmin />
    <div className="layout-admin">
      <aside className="sidebar-admin">
        <h2>Administrador</h2>
        <ul>
          <li><Link to="/administrador">Inicio</Link></li>
          <li><Link to="/administrador/insumoadmin">Insumos</Link></li>
          <li><Link to="/administrador/pedidosadmin">Pedidos</Link></li>
          <li><Link to="/administrador/gestionareservas">Reservas</Link></li>
          <li><Link to="/administrador/crearcuenta">Cuentas</Link></li>
          <li><Link to="/administrador/sugerencias">Sugerencias</Link></li>
          <li><Link to="/administrador/ingresoinsumo"></Link></li>
          <li><Link to="/">Cerrar sesión</Link></li>
        </ul>
      </aside>

      <main className="contenido-admin">
        <Outlet /> 
      </main>
    </div>
    <FooterAdmin />
  </>
  );
};

export default LayoutAdministrador;
