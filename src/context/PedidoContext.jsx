import React, { createContext, useState, useContext, useEffect } from "react";

// Crear el contexto
const PedidoContext = createContext();

// Proveedor del contexto
export const PedidoProvider = ({ children }) => {
  // Cargar desde localStorage si existe, o usar null
  const pedidoGuardado = JSON.parse(localStorage.getItem("pedido")) || null;
  const [pedido, setPedido] = useState(pedidoGuardado);

  // Guardar en localStorage cada vez que el pedido cambie
  useEffect(() => {
    if (pedido) {
      localStorage.setItem("pedido", JSON.stringify(pedido));
    }
  }, [pedido]);

  return (
    <PedidoContext.Provider value={{ pedido, setPedido }}>
      {children}
    </PedidoContext.Provider>
  );
};

// Hook personalizado para usar el contexto fácilmente
export const usePedido = () => useContext(PedidoContext);


