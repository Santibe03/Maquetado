import React from 'react';
import './../../Styles/admi/ModificarContacto.css';

const ModificarContacto = () => {
  return (
    <div className="form-container">
      <h2>📞 Modificar Contacto</h2>
      <form className="form">
        <label>Email:</label>
        <input type="email" placeholder="Ej: contacto@empresa.com" />

        <label>Teléfono:</label>
        <input type="tel" placeholder="Ej: +123 456 789" />

        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default ModificarContacto;


