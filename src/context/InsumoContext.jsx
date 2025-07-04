import { createContext, useContext, useState, useEffect } from 'react';

const InsumoContext = createContext();

export const InsumoProvider = ({ children }) => {
  const [insumos, setInsumos] = useState(() => {
    const guardado = localStorage.getItem('insumos');
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('insumos', JSON.stringify(insumos));
  }, [insumos]);

const agregarInsumo = (nuevo) => {
  const yaExiste = insumos.find(i => i.nombre.toLowerCase() === nuevo.nombre.toLowerCase());

  if (yaExiste) {
    // Solo se aumenta la cantidad, no se modifican los demás campos
    const actualizados = insumos.map(i =>
      i.nombre.toLowerCase() === nuevo.nombre.toLowerCase()
        ? { ...i, cantidad: i.cantidad + nuevo.cantidad }
        : i
    );
    setInsumos(actualizados);
  } else {
    const insumoConFecha = {
      ...nuevo,
      id: Date.now(),
      fechaIngreso: new Date().toISOString().split('T')[0],
    };
    setInsumos([...insumos, insumoConFecha]);
  }
};



  const aumentarCantidad = (id, cantidadExtra) => {
    setInsumos(insumos.map(i =>
      i.id === id ? { ...i, cantidad: i.cantidad + cantidadExtra } : i
    ));
  };

  return (
    <InsumoContext.Provider value={{ insumos, agregarInsumo, aumentarCantidad }}>
      {children}
    </InsumoContext.Provider>
  );
};

export const useInsumos = () => useContext(InsumoContext);
