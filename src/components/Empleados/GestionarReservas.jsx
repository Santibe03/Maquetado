import React, { useState } from 'react';
import { useReserva } from '../../context/ReservaContext';
import './../../Styles/Cliente/HistorialPedidos.css'; // Reutiliza estilos
import { useNavigate } from 'react-router-dom';

const GestionarReservas = () => {
    const navigate = useNavigate();
  const { reservas, confirmarReserva, cancelarReserva } = useReserva();

  const [mostrarModal, setMostrarModal] = useState(false);
  const [reservaAEliminar, setReservaAEliminar] = useState(null);

  const abrirModal = (reserva) => {
    setReservaAEliminar(reserva);
    setMostrarModal(true);
  };

  const confirmarCancelacion = () => {
    cancelarReserva(reservaAEliminar.id);
    setMostrarModal(false);
    setReservaAEliminar(null);
  };

  return (
    <div className="historial-pedidos-container">
      <h2>Gestionar Reservas (Empleado)</h2>

      {reservas.length === 0 ? (
        <p>No hay reservas registradas.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Fecha de Registro</th>
              <th>Fecha del Evento</th>
              <th>Personas</th>
              <th>Mesa</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.id}</td>
                <td>{reserva.nombreCliente}</td>
                <td>{reserva.fechaReserva}</td>
                <td>{reserva.fechaEvento}</td>
                <td>{reserva.personas}</td>
                <td>{reserva.mesa}</td>
                <td>{reserva.estado}</td>
                <td>
                    <button onClick={() => navigate('/reservadetalle', { state: { reserva } })}>Ver Detalles</button>
                  {reserva.estado === 'Pendiente' ? (
                    <>
                      <button onClick={() => confirmarReserva(reserva.id)}>Confirmar</button>
                      <button onClick={() => abrirModal(reserva)}>Cancelar</button>
                    </>
                  ) : (
                    <span>—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal de confirmación de cancelación */}
      {mostrarModal && (
        <div className="modal-cancelar">
          <div className="modal-content">
            <p>
              ¿Estás seguro de cancelar la reserva de{' '}
              <strong>{reservaAEliminar?.nombreCliente}</strong>?
            </p>
            <button onClick={confirmarCancelacion}>Sí, Cancelar</button>
            <button onClick={() => setMostrarModal(false)}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GestionarReservas;
