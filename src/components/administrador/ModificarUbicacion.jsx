import React from 'react';
import './../../Styles/admi/ModificarContacto.css';

const ModificarUbicacion = () => {
  return (
    <div className="form-container">
      <h2>📍 Modificar Ubicación</h2>
      <form className="form">
        <label>Dirección:</label>
        <input type="text" placeholder="Ej: Calle 123, Ciudad" />

        <label>Ciudad:</label>
        <input type="text" placeholder="Ej: Bogotá" />

        <label>País:</label>
        <input type="text" placeholder="Ej: Colombia" />

        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default ModificarUbicacion;
