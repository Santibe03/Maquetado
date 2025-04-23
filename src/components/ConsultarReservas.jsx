import React, { useState } from "react";
import "./ConsultarReservas.css";

const ConsultarReservas = () => {
  const [estado, setEstado] = useState("");

  const reserva = {
    nombre: "Ana Gómez",
    fecha: "2025-05-05",
    hora: "20:00",
    personas: 3,
    lugar: "Nombre del lugar",
  };

  const consultar = () => setEstado("consultado");

  return (
    <div className="consulta-contenedor">
      <h2>Consultar Reserva</h2>

      <div className="info-reserva">
        <p><strong>Nombre:</strong> {reserva.nombre}</p>
        <p><strong>Fecha:</strong> {reserva.fecha}</p>
        <p><strong>Hora:</strong> {reserva.hora}</p>
        <p><strong>Personas:</strong> {reserva.personas}</p>
        <p><strong>Lugar:</strong> {reserva.lugar}</p>
      </div>

      <div className="botones">
        <button className="btn consultar" onClick={consultar}>Consultar Reserva</button>
      </div>

      {estado === "consultado" && (
        <p className="mensaje exito">✅ Reserva consultada con éxito.</p>
      )}
    </div>
  );
};

export default ConsultarReservas;
