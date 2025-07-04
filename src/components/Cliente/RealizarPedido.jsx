import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePedido } from './../../context/PedidoContext';
import { useProductos } from './../../context/ProductoContext'; 
import './../../Styles/Cliente/RealizarPedidoForm.css';

function RealizarPedidoForm() {
  const navigate = useNavigate();
  const { setPedido } = usePedido();
  const { productos } = useProductos();

  const [advertencia, setAdvertencia] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const nombreProducto = document.getElementById('nombreProducto').value;
    const cantidadSolicitada = parseInt(document.getElementById('cantidad').value);

    // Verifica si el producto existe en el inventario
    const productoSeleccionado = productos.find(p => p.nombre === nombreProducto);

    if (!productoSeleccionado) {
      setAdvertencia('El producto no existe en el inventario.');
      return;
    }

    if (cantidadSolicitada > productoSeleccionado.cantidadDisponible) {
      setAdvertencia(`Solo hay ${productoSeleccionado.cantidadDisponible} unidades disponibles.`);
      return;
    }

    const nuevoPedido = {
      nombreProducto,
      cantidad: cantidadSolicitada,
      descripcion: document.getElementById('descripcion').value,
      metodoPago: document.getElementById('metodoPago').value,
      direccionEnvio: document.getElementById('direccionEnvio').value,
      fecha: new Date().toISOString().split('T')[0],
      estado: 'Pendiente'
    };

    setPedido(nuevoPedido);
    localStorage.setItem('pedido', JSON.stringify(nuevoPedido));

    const historial = JSON.parse(localStorage.getItem('historialPedidos')) || [];
    historial.push({ id: Date.now(), ...nuevoPedido });
    localStorage.setItem('historialPedidos', JSON.stringify(historial));

    // Redirigir
    navigate('/consultarpedido');
  };

  return (
    <div>
      <form className="pedido-form" onSubmit={handleSubmit}>
        <h2>Realizar Pedido</h2>

        {advertencia && <p style={{ color: 'red', fontWeight: 'bold' }}>{advertencia}</p>}
<div className="form-group">
  <label htmlFor="nombreProducto">Nombre del Producto:</label>
  <input
    type="text"
    id="nombreProducto"
    name="nombreProducto"
    list="lista-productos"
    required
  />
  <datalist id="lista-productos">
    {productos.map((p) => (
      <option key={p.id} value={p.nombre}>
        {p.nombre} - ${p.precio}
      </option>
    ))}
  </datalist>
</div>


        <div className="form-group">
          <label htmlFor="cantidad">Cantidad:</label>
          <input type="number" id="cantidad" name="cantidad" min="1" defaultValue="1" required />
        </div>

        <div className="form-group">
          <label htmlFor="descripcion">Descripción (Opcional):</label>
          <textarea id="descripcion" name="descripcion" rows="4"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="metodoPago">Método de Pago:</label>
          <select id="metodoPago" name="metodoPago">
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta_credito">Tarjeta de Crédito</option>
            <option value="transferencia">Transferencia Bancaria</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="direccionEnvio">Dirección de Envío:</label>
          <textarea id="direccionEnvio" name="direccionEnvio" rows="3" required></textarea>
        </div>

        <button type="submit" className="submit-button">Realizar Pedido</button>
      </form>
    </div>
  );
}

export default RealizarPedidoForm;
