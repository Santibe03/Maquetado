import React, { useState } from "react";
import "./../../Styles/confirmarPedido.css"; 


const ConfirmarPedidos = () => {
  const [pedidos, setPedidos] = useState([
    { id: 1, nombre: "Pedido 1", confirmado: false },
    { id: 2, nombre: "Pedido 2", confirmado: false },
    { id: 3, nombre: "Pedido 3", confirmado: false },
  ]);

  const confirmarPedido = (id) => {
    setPedidos(
      pedidos.map((pedido) =>
        pedido.id === id ? { ...pedido, confirmado: true } : pedido
      )
    );
  };

  return (
    <div className="confirmar-pedidos">
      <h2 className="titulo">Confirmar Pedidos</h2>
      <ul className="lista-pedidos">
        {pedidos.map((pedido) => (
          <li key={pedido.id} className="pedido">
            <span className="nombre">
              {pedido.nombre} -{" "}
              {pedido.confirmado ? (
                <span className="confirmado">Confirmado</span>
              ) : (
                <span className="pendiente">Pendiente</span>
              )}
            </span>
            {!pedido.confirmado && (
              <button
                onClick={() => confirmarPedido(pedido.id)}
                className="boton-confirmar"
              >
                Confirmar
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConfirmarPedidos;
