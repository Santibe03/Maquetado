import React from 'react';
import './../../Styles/admi/Formulario.css';

const EliminarInsumo = () => {
  return (
    <div className="form-container">
      <h2>Eliminar Insumo</h2>
      <div className="form-group">
        <label htmlFor="idInsumo">ID del Insumo</label>
        <input type="text" id="idInsumo" />
      </div>
      <button className="btn-primary">Eliminar</button>
    </div>
  );
};

export default EliminarInsumo;