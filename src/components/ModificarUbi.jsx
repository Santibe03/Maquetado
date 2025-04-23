import React, { useState } from "react";
import "./ModificarUbi.css";

const ModificarUbi = () => {
  const [nuevaUbicacion, setNuevaUbicacion] = useState("");
  const [ubicacionActual, setUbicacionActual] = useState("Restaurante Central, Calle 123");
  const [mensaje, setMensaje] = useState("");

  const manejarCambio = (e) => setNuevaUbicacion(e.target.value);

  const guardarUbicacion = () => {
    if (nuevaUbicacion.trim() !== "") {
      setUbicacionActual(nuevaUbicacion);
      setMensaje("✅ Ubicación modificada con éxito.");
      setNuevaUbicacion("");
    } else {
      setMensaje("❌ Por favor ingresa una nueva ubicación.");
    }
  };

  return (
    <div className="ubicacion-contenedor">
      <h2>Modificar Ubicación</h2>

      <div className="ubicacion-info">
        <p><strong>Ubicación actual:</strong> {ubicacionActual}</p>
        <input
          type="text"
          placeholder="Nueva ubicación"
          value={nuevaUbicacion}
          onChange={manejarCambio}
        />
        <button className="btn guardar" onClick={guardarUbicacion}>
          Guardar nueva ubicación
        </button>
      </div>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
};

export default ModificarUbi;
