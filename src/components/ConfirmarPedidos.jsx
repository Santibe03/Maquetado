import React, { useState } from "react";
import "./ComfirmarPedidos.css";

const ConfirmarPedidos = () => {
  const [confirmado, setConfirmado] = useState(false);
  const [cancelado, setCancelado] = useState(false);

  const pedido = {
    productos: [
      { nombre: "Nombre del producto  ", cantidad: 10, precio: 5000},
      { nombre: "Otro producto ", cantidad: 2, precio: 30000 },
    ],
    metodoPago: "Transferencia Bancaria ",
    direccion: "Calle 123 #4-5 ",
  };

  const total = pedido.productos.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const confirmarPedido = () => {
    setConfirmado(true);
    setCancelado(false);
  };

  const cancelarPedido = () => {
    setCancelado(true);
    setConfirmado(false);
  };

  return (
    <div className="confirmar-contenedor">
      <h2>Confirmar Pedido</h2>

      <div className="info-pedido">
        <h3>Productos:</h3>
        <ul>
          {pedido.productos.map((prod, idx) => (
            <li key={idx}>
              {prod.nombre} - {prod.cantidad} x ${prod.precio}
            </li>
          ))}
        </ul>

        <p><strong>Dirección de envio: </strong> {pedido.direccion} </p>

        <p><strong>Método de pago:</strong> {pedido.metodoPago}</p>

        <p className="total"><strong>Total:</strong> $ {total}</p>
      </div>

      <div className="acciones">
        <button className="btn confirmar" onClick={confirmarPedido}>
          Confirmar
        </button>
        <button className="btn cancelar" onClick={cancelarPedido}>
          Cancelar
        </button>
      </div>

      {confirmado && <p className="mensaje exito">✅ Pedido confirmado con éxito.</p>}
      {cancelado && <p className="mensaje error">❌ Pedido cancelado.</p>}
    </div>
  );
};

export default ConfirmarPedidos;
