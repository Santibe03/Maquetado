import React, { useState } from 'react';
import './../../Styles/Cliente/HistorialPedidos.css';
import { usePedido } from '../../context/PedidoContext';
import { useNavigate } from 'react-router-dom';
//const navigate = useNavigate();

function HistorialPedidos() {
  const navigate = useNavigate();
  const {
    historialPedidos,
    cancelarPedido,
    modificarPedido,
  } = usePedido();

  const [mostrarModal, setMostrarModal] = useState(false);
  const [pedidoAEliminar, setPedidoAEliminar] = useState(null);

  const [pedidoEditando, setPedidoEditando] = useState(null);

  const abrirModal = (pedido) => {
    setPedidoAEliminar(pedido);
    setMostrarModal(true);
  };

  const confirmarCancelacion = () => {
    cancelarPedido(pedidoAEliminar.id);
    setMostrarModal(false);
    setPedidoAEliminar(null);
  };

  const handleEditarChange = (e, campo) => {
    setPedidoEditando({ ...pedidoEditando, [campo]: e.target.value });
  };

  const guardarCambios = () => {
    modificarPedido(pedidoEditando);
    setPedidoEditando(null);
  };

  return (
    <div className="historial-pedidos-container">
      <h2>Historial de Pedidos</h2>

      {historialPedidos.length === 0 ? (
        <p>No hay pedidos en tu historial.</p>
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

                {pedidoEditando?.id === pedido.id ? (
                  <>
                    <td>
                      <input
                        value={pedidoEditando.nombreProducto}
                        onChange={(e) => handleEditarChange(e, 'nombreProducto')}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={pedidoEditando.cantidad}
                        onChange={(e) => handleEditarChange(e, 'cantidad')}
                      />
                    </td>
                    <td>
                      <input
                        value={pedidoEditando.descripcion}
                        onChange={(e) => handleEditarChange(e, 'descripcion')}
                      />
                    </td>
                    <td>
                      <select
                        value={pedidoEditando.metodoPago}
                        onChange={(e) => handleEditarChange(e, 'metodoPago')}
                      >
                        <option value="efectivo">Efectivo</option>
                        <option value="tarjeta_credito">Tarjeta de Crédito</option>
                        <option value="transferencia">Transferencia Bancaria</option>
                      </select>
                    </td>
                    <td>
                      <input
                        value={pedidoEditando.direccionEnvio}
                        onChange={(e) => handleEditarChange(e, 'direccionEnvio')}
                      />
                    </td>
                    <td>{pedido.estado}</td>
                    <td>
                      <button onClick={guardarCambios}>Guardar</button>
                      <button onClick={() => setPedidoEditando(null)}>Cancelar</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{pedido.nombreProducto}</td>
                    <td>{pedido.cantidad}</td>
                    <td>{pedido.descripcion}</td>
                    <td>{pedido.metodoPago}</td>
                    <td>{pedido.direccionEnvio}</td>
                    <td>{pedido.estado}</td>
                    <td>
                      <button onClick={() => navigate('/consultarpedido', { state: { pedido } })}>Ver Detalles</button>

                      {pedido.estado === 'Pendiente' && (
                        <>
                          <button onClick={() => setPedidoEditando(pedido)}>Modificar</button>
                          <button onClick={() => abrirModal(pedido)}>Cancelar</button>

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

      {/* Modal de confirmación */}
      {mostrarModal && (
        <div className="modal-cancelar">
          <div className="modal-content">
            <p>¿Estás seguro de cancelar el pedido <strong>{pedidoAEliminar?.nombreProducto}</strong>?</p>
            <button onClick={confirmarCancelacion}>Sí, Cancelar</button>
            <button onClick={() => setMostrarModal(false)}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HistorialPedidos;

