// src/context/InsumoContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const InsumoContext = createContext();

export const InsumoProvider = ({ children }) => {
  const [insumos, setInsumos] = useState(() => {
    const guardado = localStorage.getItem('insumos');
    // Si no hay nada guardado, iniciamos con un array vacío,
    // lo cual es tu intención para luego agregarlos desde la UI.
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('insumos', JSON.stringify(insumos));
  }, [insumos]);

  const agregarInsumo = (nuevo) => {
    const fechaActual = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD

    const yaExiste = insumos.find(i => i.nombre.toLowerCase() === nuevo.nombre.toLowerCase());

    if (yaExiste) {
      const actualizados = insumos.map(i =>
        i.nombre.toLowerCase() === nuevo.nombre.toLowerCase()
          ? {
              ...i,
              cantidad: i.cantidad + nuevo.cantidad,
              // *** AGREGADO: Actualizar fecha de modificación ***
              fechaModificacion: fechaActual,
            }
          : i
      );
      setInsumos(actualizados);
    } else {
      const insumoConFechas = {
        ...nuevo,
        id: Date.now(), // Genera un ID único (para un proyecto más grande, considera librerías como `uuid`)
        fechaIngreso: fechaActual,
        // *** AGREGADO: La fecha de modificación inicial es la misma que la de ingreso ***
        fechaModificacion: fechaActual,
      };
      setInsumos([...insumos, insumoConFechas]);
    }
  };

  const aumentarCantidad = (id, cantidadExtra) => {
    const fechaActual = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD

    setInsumos(insumos.map(i =>
      i.id === id
        ? {
            ...i,
            cantidad: i.cantidad + cantidadExtra,
            // *** AGREGADO: Actualizar fecha de modificación ***
            fechaModificacion: fechaActual,
          }
        : i
    ));
  };

  // Puedes añadir una función para "consumir" insumos cuando se prepara un producto
  const consumirInsumos = (insumosNecesarios) => {
    const fechaActual = new Date().toISOString().split('T')[0];

    setInsumos(prevInsumos => {
      return prevInsumos.map(invInsumo => {
        const insumoRequerido = insumosNecesarios.find(
          req => req.nombreInsumo.toLowerCase() === invInsumo.nombre.toLowerCase()
        );

        if (insumoRequerido) {
          return {
            ...invInsumo,
            cantidad: invInsumo.cantidad - insumoRequerido.cantidadNecesaria,
            fechaModificacion: fechaActual, // Se actualiza la fecha de modificación al consumir
          };
        }
        return invInsumo;
      });
    });
  };

  // También puedes añadir una función para eliminar insumos
  const eliminarInsumo = (id) => {
    setInsumos(insumos.filter(i => i.id !== id));
  };


  return (
    <InsumoContext.Provider value={{ insumos, agregarInsumo, aumentarCantidad, consumirInsumos, eliminarInsumo }}>
      {children}
    </InsumoContext.Provider>
  );
};

export const useInsumos = () => useContext(InsumoContext);