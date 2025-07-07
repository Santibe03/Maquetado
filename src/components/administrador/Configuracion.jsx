import React from 'react';
import { Link } from 'react-router-dom';
import './../../Styles/admi/Configuracion.css'; 
const Configuracion = () => {
  return (
    <div className="config-container">
      <h2 className="config-title">⚙️ Configuración</h2>
      <p className="config-subtitle">Selecciona una opción para modificar:</p>

      <div className="config-buttons">
        <Link to="/modificar-contacto" className="config-button">Modificar Contacto</Link>
        <Link to="/modificar-ubicacion" className="config-button">Modificar Ubicación</Link>
      </div>
    </div>
  );
};

export default Configuracion;

