// src/components/administrador/HeaderAdmin.jsx
import React from 'react';
import './../../Styles/admi/HeaderAdmin.css'; // crea este archivo para estilos

const HeaderAdmin = () => {
  return (
    <header className="admin-header">
      <div className="admin-header-content">
        <h2>Inventorying and Counting</h2>
        <span className="admin-usuario">👤 Administrador</span>
      </div>
    </header>
  );
};

export default HeaderAdmin;
