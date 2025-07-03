import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useReserva } from '../../context/ReservaContext';
import './../../Styles/Cliente/RealizarReserva.css';

function RealizarReserva() {
  const navigate = useNavigate();
  const { agregarReserva } = useReserva();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaReserva = {
      nombreCliente: document.getElementById('nombreCliente').value,
      fechaReserva: document.getElementById('fechaReserva').value,
      fechaEvento: document.getElementById('fechaEvento').value,
      personas: parseInt(document.getElementById('personas').value),
      mesa: document.getElementById('mesa').value
    };

    agregarReserva(nuevaReserva);
    navigate('/reservadetalle'); // O redirige a donde quieras
  };

  return (
    <div>
      <form className="reserva-form" onSubmit={handleSubmit}>
        <h2>Realizar Reserva</h2>

        <div className="form-group">
          <label htmlFor="nombreCliente">Nombre del Cliente:</label>
          <input type="text" id="nombreCliente" name="nombreCliente" required />
        </div>

        <div className="form-group">
          <label htmlFor="fechaReserva">Fecha de Registro de Reserva:</label>
          <input type="date" id="fechaReserva" name="fechaReserva" required />
        </div>

        <div className="form-group">
          <label htmlFor="fechaEvento">Fecha del Evento:</label>
          <input type="date" id="fechaEvento" name="fechaEvento" required />
        </div>

        <div className="form-group">
          <label htmlFor="personas">Número de Personas:</label>
          <input type="number" id="personas" name="personas" min="1" required />
        </div>

        <div className="form-group">
          <label htmlFor="mesa">Número o Nombre de la Mesa:</label>
          <input type="text" id="mesa" name="mesa" required />
        </div>

        <button type="submit" className="submit-button">Reservar</button>
      </form>
    </div>
  );
}

export default RealizarReserva;
