import React, { useState } from "react";
import "./../../Styles/ContactarAdministrador.css"; 

const ContactarAdministrador = () => {
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = (e) => {
    e.preventDefault();
    if (mensaje.trim()) {
      setEnviado(true);
      setMensaje("");
    }
  };

  return (
    <div className="contactar-admin">
      <h2 className="titulo">Contactar con el Administrador</h2>
      {enviado ? (
        <p className="mensaje-enviado">Mensaje enviado con éxito ✅</p>
      ) : (
        <form onSubmit={handleEnviar} className="formulario-contacto">
          <textarea
            className="textarea"
            placeholder="Escribe tu mensaje..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
          <button type="submit" className="boton-enviar">
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactarAdministrador;
