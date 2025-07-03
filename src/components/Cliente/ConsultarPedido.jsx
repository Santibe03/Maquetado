import { useLocation } from 'react-router-dom';
import './../../Styles/Cliente/PedidoDetalle.css'; 

const PedidoSencillo = () => {
  const location = useLocation();
  const pedido = location.state?.pedido;

  if (!pedido) return <p>No hay detalles para mostrar.</p>;

  return (
    <div className="pedido-cuadrado">
      <h3>Detalles del Pedido</h3>
      <p><strong>Producto:</strong> {pedido.nombreProducto}</p>
      <p><strong>Cantidad:</strong> {pedido.cantidad}</p>
      <p><strong>Descripción:</strong> {pedido.descripcion}</p>
      <p><strong>Método de Pago:</strong> {pedido.metodoPago}</p>
      <p><strong>Dirección:</strong> {pedido.direccionEnvio}</p>
      <p><strong>Estado:</strong> {pedido.estado}</p>
    <p><strong>Precio: $$$</strong></p>
      
    </div>
  );
};
export default PedidoSencillo;
