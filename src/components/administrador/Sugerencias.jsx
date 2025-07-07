import React, { useState } from 'react';
import './../../Styles/admi/sugerencias.css';

const Sugerencias = () => {
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (mensaje.trim() !== '') {

      console.log('Sugerencia enviada:', mensaje);
      setEnviado(true);
      setMensaje('');
    }
  };

  return (
    <div className="sugerencias-container">
      <h2>📬 Buzón de Sugerencias</h2>
      <p>¿Tienes alguna idea, mejora o comentario? ¡Queremos escucharte!</p>

      <form className="sugerencias-form" onSubmit={manejarEnvio}>
        <textarea
          placeholder="Escribe tu sugerencia aquí..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <button type="submit">Enviar Sugerencia</button>
      </form>

      {enviado && <p className="mensaje-exito">✅ ¡Gracias por tu sugerencia!</p>}
    </div>
  );
};

export default Sugerencias;
