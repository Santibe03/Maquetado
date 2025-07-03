import React, { useState } from 'react';
import { usePedido } from '../../context/PedidoContext';
import './../../Styles/Cliente/HistorialPedidos.css'; // Reutiliza los estilos
import { useNavigate } from 'react-router-dom';

const GestionarPedidos = () => {
    const navigate = useNavigate();
  const { historialPedidos, confirmarPedido, cancelarPedido } = usePedido();

  const [mostrarModal, setMostrarModal] = useState(false);
  const [pedidoAEliminar, setPedidoAEliminar] = useState(null);

  const abrirModal = (pedido) => {
    setPedidoAEliminar(pedido);
    setMostrarModal(true);
  };

  const confirmarCancelacion = () => {
    cancelarPedido(pedidoAEliminar.id);
    setMostrarModal(false);
    setPedidoAEliminar(null);
  };

  return (
    <div className="historial-pedidos-container">
      <h2>Gestionar Pedidos (Empleado)</h2>

      {historialPedidos.length === 0 ? (
        <p>No hay pedidos registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Descripción</th>
              <th>Método de Pago</th>
              <th>Dirección</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {historialPedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>{pedido.nombreProducto}</td>
                <td>{pedido.cantidad}</td>
                <td>{pedido.descripcion}</td>
                <td>{pedido.metodoPago}</td>
                <td>{pedido.direccionEnvio}</td>
                <td>{pedido.estado}</td>
                <td>
                    <button onClick={() => navigate('/consultarpedido', { state: { pedido } })}>Ver Detalles</button>
                  {pedido.estado === 'Pendiente' ? (
                    <>
                      <button onClick={() => confirmarPedido(pedido.id)}>Confirmar</button>
                      <button onClick={() => abrirModal(pedido)}>Cancelar</button>
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
              ¿Estás seguro de cancelar el pedido{' '}
              <strong>{pedidoAEliminar?.nombreProducto}</strong>?
            </p>
            <button onClick={confirmarCancelacion}>Sí, Cancelar</button>
            <button onClick={() => setMostrarModal(false)}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GestionarPedidos;
