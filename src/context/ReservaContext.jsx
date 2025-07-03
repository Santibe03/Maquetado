// src/context/ReservaContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ReservaContext = createContext();

export const ReservaProvider = ({ children }) => {
  const [reservas, setReservas] = useState(() => {
    const stored = localStorage.getItem('reservas');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('reservas', JSON.stringify(reservas));
  }, [reservas]);

  const agregarReserva = (reserva) => {
    const nuevaReserva = {
      ...reserva,
      id: Date.now(),
      estado: 'Pendiente'
    };
    setReservas(prev => [...prev, nuevaReserva]);
  };

  const cancelarReserva = (id) => {
  setReservas((prev) =>
    prev.map((r) =>
      r.id === id ? { ...r, estado: 'Cancelada' } : r
    )
  );
};

const confirmarReserva = (id) => {
  setReservas((prev) =>
    prev.map((r) =>
      r.id === id ? { ...r, estado: 'Confirmada' } : r
    )
  );
};

const modificarReserva = (reservaModificada) => {
  setReservas((prev) =>
    prev.map((r) =>
      r.id === reservaModificada.id ? { ...reservaModificada } : r
    )
  );
};

  return (
<ReservaContext.Provider value={{
  reservas,
  agregarReserva,
  confirmarReserva,
  cancelarReserva,
  modificarReserva
}}>
      {children}
    </ReservaContext.Provider>
  );
};

export const useReserva = () => useContext(ReservaContext);
