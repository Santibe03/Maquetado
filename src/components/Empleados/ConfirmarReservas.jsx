import React, { useState } from "react";
import "./../../Styles/confirmarReservas.css"; 

const ConfirmarReservas = () => {
  const [reservas, setReservas] = useState([
    { id: 1, cliente: "Juan Pérez - Mesa 1", confirmado: false },
    { id: 2, cliente: "María López - Mesa 2", confirmado: false },
    { id: 3, cliente: "Carlos García - Mesa 3", confirmado: false },
    { id: 4, cliente: "Ana Martínez - Mesa 4", confirmado: false },
    { id: 5, cliente: "Luis Fernández - Mesa 5", confirmado: false },
    { id: 6, cliente: "Laura Sánchez - Mesa 6", confirmado: false },
    { id: 7, cliente: "Pedro Gómez - Mesa 7", confirmado: false },
    { id: 8, cliente: "Sofía Torres - Mesa 8", confirmado: false },
  ]);

  const confirmarReservas = (id) => {
    setReservas(
      reservas.map((reserva) =>
        reserva.id === id ? { ...reserva, confirmado: true } : reserva
      )
    );
  };

  return (
    <div className="confirmar-reservas">
      <h2 className="titulo">Confirmar Reservas</h2>
      <ul className="lista-reservas">
        {reservas.map((reserva) => (
          <li key={reserva.id} className="reserva">
            <span className="nombre">
              {reserva.cliente} -{" "}
              {reserva.confirmado ? (
                <span className="confirmado">Confirmado</span>
              ) : (
                <span className="pendiente">Pendiente</span>
              )}
            </span>
            {!reserva.confirmado && (
              <button
                onClick={() => confirmarReservas(reserva.id)}
                className="boton-confirmar"
              >
                Confirmar
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConfirmarReservas;
