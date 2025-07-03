import { createContext, useContext, useState, useEffect } from "react";

const PedidoContext = createContext();

export const PedidoProvider = ({ children }) => {
  const pedidoGuardado = JSON.parse(localStorage.getItem("pedido")) || null;
  const historialGuardado = JSON.parse(localStorage.getItem("historialPedidos")) || [];

  const [pedido, setPedido] = useState(pedidoGuardado);
  const [historialPedidos, setHistorialPedidos] = useState(historialGuardado);

  useEffect(() => {
    localStorage.setItem("pedido", JSON.stringify(pedido));
  }, [pedido]);

  useEffect(() => {
    localStorage.setItem("historialPedidos", JSON.stringify(historialPedidos));
  }, [historialPedidos]);

  const agregarPedidoAlHistorial = (nuevoPedido) => {
    const pedidoConId = {
      ...nuevoPedido,
      id: Date.now(),
      estado: "Pendiente",
      fecha: new Date().toISOString().split("T")[0],
    };
    setHistorialPedidos((prev) => [...prev, pedidoConId]);
    setPedido(pedidoConId);
  };

  const confirmarPedido = (id) => {
    setHistorialPedidos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, estado: "Confirmado" } : p
      )
    );
  };

  const cancelarPedido = (id) => {
    setHistorialPedidos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, estado: "Cancelado" } : p
      )
    );
  };

  const modificarPedido = (pedidoModificado) => {
    setHistorialPedidos((prev) =>
      prev.map((p) =>
        p.id === pedidoModificado.id ? { ...pedidoModificado } : p
      )
    );
    setPedido(pedidoModificado);
  };

  return (
    <PedidoContext.Provider
      value={{
        pedido,
        setPedido,
        historialPedidos,
        agregarPedidoAlHistorial,
        confirmarPedido,
        cancelarPedido,
        modificarPedido,
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
};

export const usePedido = () => useContext(PedidoContext);


