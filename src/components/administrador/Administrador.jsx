// src/components/administrador/AdminInicio.jsx
import React from 'react';
import Proyecto from '../../assets/imagenes/proyect.png';
import '../../Styles/admi.css';

const AdminInicio = () => {
  return (
    <div className="admin-inicio-container">
      <div className="bienvenida">
        <h1>Bienvenido, Administrador 👋</h1>
        <p>Nos alegra verte nuevamente. Desde aquí puedes gestionar todo tu sistema: insumos, pedidos, reservas y más.</p>
        <p>Explora el panel lateral para acceder a las diferentes funciones disponibles.</p>
      </div>

      <div className="imagen-panel">
        <img src={Proyecto} alt="Sistema de Gestión" />
      </div>
    </div>
  );
};

export default AdminInicio;
