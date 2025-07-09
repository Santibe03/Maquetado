// src/components/cliente/HeaderCliente.jsx
import React from 'react';
import './../../Styles/cliente/HeaderCliente.css';


const HeaderCliente = () => {
  return (
    <header className="cliente-header">
      <div className="cliente-header-content">
        <h1>🛒 Inventorying and Counting</h1>
        <span className="cliente-usuario">👤 Cliente</span>
      </div>
    </header>
  );
};

export default HeaderCliente;
