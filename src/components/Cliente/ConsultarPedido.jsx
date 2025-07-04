import { useLocation } from 'react-router-dom';
import { useProductos } from './../../context/ProductoContext';
import './../../Styles/Cliente/PedidoDetalle.css';

const PedidoSencillo = () => {
  const location = useLocation();
  const pedido = location.state?.pedido;
  const { productos } = useProductos();

  if (!pedido) return <p>No hay detalles para mostrar.</p>;

  // Buscar el producto para obtener su precio
  const producto = productos.find(p => p.nombre === pedido.nombreProducto);
  const precioUnitario = producto ? producto.precio : 0;
  const total = precioUnitario * pedido.cantidad;

  return (
    <div className="pedido-cuadrado">
      <h3>Detalles del Pedido</h3>
      <p><strong>Producto:</strong> {pedido.nombreProducto}</p>
      <p><strong>Cantidad:</strong> {pedido.cantidad}</p>
      <p><strong>Descripción:</strong> {pedido.descripcion}</p>
      <p><strong>Método de Pago:</strong> {pedido.metodoPago}</p>
      <p><strong>Dirección:</strong> {pedido.direccionEnvio}</p>
      <p><strong>Estado:</strong> {pedido.estado}</p>
      <p><strong>Total:</strong> ${total.toLocaleString('es-CO')}</p>
    </div>
  );
};

export default PedidoSencillo;

