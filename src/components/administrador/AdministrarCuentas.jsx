import React from 'react';
import './../../Styles/admi/Formulario.css';

const AdministrarCuentas = () => {
  return (
    <div className="form-container">
      <h2>Administrar Cuentas</h2>
      <div className="form-group">
        <label htmlFor="idCuenta">ID de Usuario</label>
        <input type="text" id="idCuenta" />
      </div>
      <button className="btn-primary">Eliminar Cuenta</button>
      <br />
      <button className="btn-primary">Desactivar Cuenta</button>
    </div>
  );
};

export default AdministrarCuentas;