import React from 'react';
import './../../Styles/Cliente/PedidoDetalle.css';
import { usePedido } from './../../context/PedidoContext';

const PedidoSencillo = () => {
    const { pedido } = usePedido();

    if (!pedido) {
        return <p className="pedido-cuadrado">No hay pedido registrado.</p>;
    }

    return (
        <div className="pedido-cuadrado">
            <h3>Detalles del Pedido</h3>
            <p><strong>Producto:</strong> {pedido.nombreProducto}</p>
            <p><strong>Cantidad:</strong> {pedido.cantidad}</p>
            <p><strong>Descripción:</strong> {pedido.descripcion}</p>
            <p><strong>Método de Pago:</strong> {pedido.metodoPago}</p>
            <p><strong>Dirección:</strong> {pedido.direccionEnvio}</p>
        </div>
    );
};

export default PedidoSencillo;

