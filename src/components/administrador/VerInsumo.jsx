import React from 'react';
import './../../Styles/admi/Formulario.css';

const VerInsumo = () => {
  return (
    <div className="form-container">
      <h2>Ver Insumo</h2>
      <div className="form-group">
        <label htmlFor="idInsumo">ID del Insumo</label>
        <input type="text" id="idInsumo" />
      </div>
      <button className="btn-primary">Buscar</button>
    </div>
  );
};

export default VerInsumo;