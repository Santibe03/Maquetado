import React, { useState } from "react";
import "./ConfirmarReservas.css";

const ConfirmarReservas = () => {
  const [estado, setEstado] = useState("");

  const reserva = {
    nombre: "Juan Pérez",
    fecha: "2025-05-01",
    hora: "4:30",
    personas: 5,
    lugar: "Nombre del lugar  ",
  };

  const confirmar = () => setEstado("confirmado");
  const cancelar = () => setEstado("cancelado");

  return (
    <div className="reserva-contenedor">
      <h2>Confirmación de Reserva</h2>
      <div className="info-reserva">
        <p><strong>Nombre:</strong> {reserva.nombre}</p>
        <p><strong>Fecha:</strong> {reserva.fecha}</p>
        <p><strong>Hora:</strong> {reserva.hora}</p>
        <p><strong>Personas:</strong> {reserva.personas}</p>
        <p><strong>Lugar:</strong> {reserva.lugar}</p>
      </div>

      <div className="botones">
        <button className="btn confirmar" onClick={confirmar}>Confirmar</button>
        <button className="btn cancelar" onClick={cancelar}>Cancelar</button>
      </div>

      {estado === "confirmado" && <p className="mensaje exito">✅ ¡Reserva confirmada con éxito!</p>}
      {estado === "cancelado" && <p className="mensaje error">❌ Reserva cancelada.</p>}
    </div>
  );
};

export default ConfirmarReservas;
