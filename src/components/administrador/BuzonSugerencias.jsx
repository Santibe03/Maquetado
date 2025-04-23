import React from 'react';
import './../../Styles/admi/Formulario.css';

const BuzonSugerencias = () => {
  return (
    <div className="form-container">
      <h2>Buzón de Sugerencias</h2>
      <div className="form-group">
        <label htmlFor="sugerencia">Ver sugerencias de clientes</label>
        <textarea id="sugerencia" rows="5" disabled value="Aquí se mostrarán las sugerencias..."></textarea>
      </div>
    </div>
  );
};

export default BuzonSugerencias;