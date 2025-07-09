// src/components/Empleados/LayoutEmpleado.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './../Styles/Empleado/layoutEmpleado.css';
import HeaderEmpleado from './../components/Empleados/HeaderEmpleado';
import FooterEmpleado from './../components/Empleados/FooterEmpleado';

const LayoutEmpleado = () => {
  return (
    <>
      <HeaderEmpleado />
      <div className="layout-empleado">
        <aside className="sidebar-empleado">
          <h2>Empleado</h2>
          <ul>
            <li><Link to="/empleados">Inicio</Link></li>
            <li><Link to="/empleados/verproductos">Ver productos</Link></li>
            <li><Link to="/empleados/gestionarpedidos">Confirmar pedidos</Link></li>
            <li><Link to="/empleados/gestionareservas">Confirmar reservas</Link></li>
            <li><Link to="/empleados/verinsumo">Ver insumos</Link></li>
            <li><Link to="/empleados/contactar">Contactar admin</Link></li>
            <li><Link to="/">Cerrar sesión</Link></li>
          </ul>
        </aside>

        <main className="contenido-empleado">
          <Outlet />
        </main>
      </div>
      <FooterEmpleado />
    </>
  );
};

export default LayoutEmpleado;
