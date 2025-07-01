import React, { useEffect, useState } from 'react';
import './../../Styles/Cliente/HistorialPedidos.css';
import { useNavigate } from 'react-router-dom';
import { usePedido } from './../../context/PedidoContext';

function HistorialPedidos() {
  const [historial, setHistorial] = useState([]);
  const { setPedido } = usePedido();
  const navigate = useNavigate();

  useEffect(() => {
    const pedidosGuardados = JSON.parse(localStorage.getItem('historialPedidos')) || [];
    setHistorial(pedidosGuardados);
  }, []);

  const handleVerDetalles = (pedido) => {
    setPedido(pedido);
    navigate('/consultarpedido');
  };

  return (
    <div className="historial-pedidos-container">
      <h2>Historial de Pedidos</h2>
      {historial.length === 0 ? (
        <p>No hay pedidos en tu historial.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {historial.map((pedido) => (
              <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>{pedido.nombreProducto}</td>
                <td>{pedido.cantidad}</td>
                <td>{pedido.fecha}</td>
                <td>{pedido.estado}</td>
                <td>
                  <button
                    className="ver-detalles-button"
                    onClick={() => handleVerDetalles(pedido)}
                  >
                    Ver Detalles
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default HistorialPedidos;
