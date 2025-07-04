import React, { useState } from 'react';
import { useReserva } from '../../context/ReservaContext';
import './../../Styles/Cliente/HistorialPedidos.css'; // Usa el mismo CSS que pedidos
import { useNavigate } from 'react-router-dom';

const HistorialReservas = () => {
    const navigate = useNavigate();
  const { reservas, cancelarReserva, modificarReserva } = useReserva();

  const [mostrarModal, setMostrarModal] = useState(false);
  const [reservaAEliminar, setReservaAEliminar] = useState(null);
  const [reservaEditando, setReservaEditando] = useState(null);

  const abrirModal = (reserva) => {
    setReservaAEliminar(reserva);
    setMostrarModal(true);
  };

  const confirmarCancelacion = () => {
    cancelarReserva(reservaAEliminar.id);
    setMostrarModal(false);
    setReservaAEliminar(null);
  };

  const handleEditarChange = (e, campo) => {
    setReservaEditando({ ...reservaEditando, [campo]: e.target.value });
  };

  const guardarCambios = () => {
    modificarReserva(reservaEditando);
    setReservaEditando(null);
  };

  return (
    <div className="historial-pedidos-container">
      <h2>Historial de Reservas</h2>

      {reservas.length === 0 ? (
        <p>No hay reservas en tu historial.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Fecha de Registro</th>
              <th>Fecha del Evento</th>
              <th>Hora de Reserva</th>
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

                {reservaEditando?.id === reserva.id ? (
                  <>
                    <td>
                      <input
                        value={reservaEditando.nombreCliente}
                        onChange={(e) => handleEditarChange(e, 'nombreCliente')}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={reservaEditando.fechaReserva}
                        onChange={(e) => handleEditarChange(e, 'fechaReserva')}
                        disabled = {true}
                      />
                    </td>
                    <td>
                    <input
                      type="date"
                      value={reservaEditando.fechaEvento}
                      onChange={(e) => handleEditarChange(e, 'fechaEvento')}
                      min={new Date().toISOString().split('T')[0]} // ← fecha mínima = hoy
                    />
                    </td>
                    <td>
                      <input
                        type="time"
                        value={reservaEditando.horaReserva}
                        onChange={(e) => handleEditarChange(e, 'horaReserva')}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={reservaEditando.personas}
                        onChange={(e) => handleEditarChange(e, 'personas')}
                      />
                    </td>
                    <td>
                      <input
                        value={reservaEditando.mesa}
                        onChange={(e) => handleEditarChange(e, 'mesa')}
                      />
                    </td>
                    <td>{reserva.estado}</td>
                    <td>
                      <button onClick={guardarCambios}>Guardar</button>
                      <button onClick={() => setReservaEditando(null)}>Cancelar</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{reserva.nombreCliente}</td>
                    <td>{reserva.fechaReserva}</td>
                    <td>{reserva.fechaEvento}</td>
                    <td>{reserva.horaReserva}</td>
                    <td>{reserva.personas}</td>
                    <td>{reserva.mesa}</td>
                    <td>{reserva.estado}</td>
                    <td>
                        <button onClick={() => navigate('/reservadetalle', { state: { reserva } })}>Ver Detalles</button>
                      {reserva.estado === 'Pendiente' && (
                        <>
                          <button onClick={() => setReservaEditando(reserva)}>Modificar</button>
                          <button onClick={() => abrirModal(reserva)}>Cancelar</button>
                        </>
                      )}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {mostrarModal && (
        <div className="modal-cancelar">
          <div className="modal-content">
            <p>
              ¿Estás seguro de cancelar la reserva de <strong>{reservaAEliminar?.nombreCliente}</strong>?
            </p>
            <button onClick={confirmarCancelacion}>Sí, Cancelar</button>
            <button onClick={() => setMostrarModal(false)}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistorialReservas;
