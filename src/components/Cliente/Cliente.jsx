// src/components/Cliente/Cliente.jsx
import React from 'react';
import Proyecto from './../../assets/imagenes/proyect.png'; // Usa tu imagen de bienvenida
import './../../Styles/cliente/Cliente.css';

const Cliente = () => {
  return (
    <div className="cliente-bienvenida">
      <div className="cliente-info">
        <h2>🎉 Bienvenido, Cliente</h2>
        <p>
          Nos alegra tenerte con nosotros. Aquí podrás realizar tus pedidos, hacer reservas
          y ponerte en contacto con la empresa de manera rápida y sencilla.
        </p>
        <p>Utiliza el menú lateral para comenzar.</p>
      </div>
      <div className="cliente-imagen">
        <img src={Proyecto} alt="Proyecto Cliente" />
      </div>
    </div>
  );
};

export default Cliente;
