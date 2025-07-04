import React from 'react';
import { Link } from 'react-router-dom';
import './../../Styles/admi/PedidosAdmin.css'; // Asegúrate de tener este CSS

const PedidosAdmin = () => {
  return (
    <div className="contenedor-pedidos">
      <h2>Gestión de Pedidos</h2>
      <table className="tabla-acciones">
        <thead>
          <tr>
            <th>Acción</th>
            <th>Ir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Confirmar Pedido</td>
            <td><Link to="/confirmarpedidos">Ir</Link></td>
          </tr>
          <tr>
            <td>Consultar Pedido</td>
            <td><Link to="/consultarpedidos">Ir</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PedidosAdmin;
