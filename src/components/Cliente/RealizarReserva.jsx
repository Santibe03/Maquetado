import React, { useState } from 'react';
import { useReserva } from '../../context/ReservaContext';
import { useNavigate } from 'react-router-dom';
import './../../Styles/Cliente/RealizarReserva.css';

const RealizarReserva = () => {
  const navigate = useNavigate();
  const { agregarReserva } = useReserva();

  const [nombreCliente, setNombreCliente] = useState('');
  const [fechaEvento, setFechaEvento] = useState('');
  const [horaReserva, setHoraReserva] = useState('');
  const [personas, setPersonas] = useState('');
  const [mesa, setMesa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaReserva = {
      id: Date.now(),
      nombreCliente,
      fechaReserva: new Date().toISOString().split('T')[0], // Fecha actual automática
      fechaEvento,
      horaReserva, // Hora elegida por el cliente
      personas: parseInt(personas),
      mesa,
      estado: 'Pendiente',
    };

    agregarReserva(nuevaReserva);
    navigate('/reservadetalle', { state: { reserva: nuevaReserva } });
  };

  return (
    <div className="reserva-form-container">
      <h2>Realizar Reserva</h2>
      <form onSubmit={handleSubmit} className="reserva-form">
        <div className="form-group">
          <label htmlFor="nombreCliente">Nombre del Cliente:</label>
          <input
            type="text"
            id="nombreCliente"
            value={nombreCliente}
            onChange={(e) => setNombreCliente(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaEvento">Fecha del Evento:</label>
        <input
          type="date"
          id="fechaEvento"
          value={fechaEvento}
          onChange={(e) => setFechaEvento(e.target.value)}
          required
          min={new Date().toISOString().split('T')[0]} // ← ¡Aquí está la clave!
        />

        </div>

        <div className="form-group">
          <label htmlFor="horaReserva">Hora de la Reserva:</label>
          <input
            type="time"
            id="horaReserva"
            value={horaReserva}
            onChange={(e) => setHoraReserva(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="personas">Número de Personas:</label>
          <input
            type="number"
            id="personas"
            value={personas}
            onChange={(e) => setPersonas(e.target.value)}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mesa">Mesa:</label>
          <input
            type="text"
            id="mesa"
            value={mesa}
            onChange={(e) => setMesa(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">Reservar</button>
      </form>
    </div>
  );
};

export default RealizarReserva;
