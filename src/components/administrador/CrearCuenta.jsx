import React from 'react';
import './../../Styles/admi/Formulario.css';

const CrearCuenta = () => {
  return (
    <div className="form-container">
      <h2>Crear Cuenta</h2>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />
      </div>
      <div className="form-group">
        <label htmlFor="correo">Correo electrónico</label>
        <input type="email" id="correo" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" />
      </div>
      <button className="btn-primary">Crear cuenta</button>
    </div>
  );
};

export default CrearCuenta;