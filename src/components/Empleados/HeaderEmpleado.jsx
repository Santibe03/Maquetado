// src/components/Empleados/HeaderEmpleado.jsx
import React from 'react';
import './../../Styles/empleado/headerEmpleado.css';

const HeaderEmpleado = () => {
  return (
    <header className="admin-header">
      <div className="admin-header-content">
        <h2>Inventorying and Counting</h2>
        <span className="admin-usuario">👷 Empleado</span>
      </div>
    </header>
  );
};

export default HeaderEmpleado;
