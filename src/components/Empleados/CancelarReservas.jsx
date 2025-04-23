import React, { useState } from "react";
import "./../../Styles/CancelarReservas.css";

const CancelarReservas = () => {
  const [reservas, setReservas] = useState([
    { id: 1, cliente: "Lucía Mendoza", cancelada: false },
    { id: 2, cliente: "Andrés Torres", cancelada: false },
    { id: 3, cliente: "Gabriela Ruiz", cancelada: false },
  ]);

  const cancelarReserva = (id) => {
    setReservas(
      reservas.map((reserva) =>
        reserva.id === id ? { ...reserva, cancelada: true } : reserva
      )
    );
  };

  return (
    <div className="cancelar-reservas">
      <h2 className="titulo">Cancelar Reservas</h2>
      <ul className="lista-reservas">
        {reservas.map((reserva) => (
          <li key={reserva.id} className="reserva">
            <span className="nombre">
              {reserva.cliente} -{" "}
              {reserva.cancelada ? (
                <span className="cancelada">Cancelada</span>
              ) : (
                <span className="activa">Activa</span>
              )}
            </span>
            {!reserva.cancelada && (
              <button
                onClick={() => cancelarReserva(reserva.id)}
                className="boton-cancelar"
              >
                Cancelar
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CancelarReservas;
