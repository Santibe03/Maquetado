import { createContext, useContext, useState, useEffect } from 'react';

const ProductoContext = createContext();

export const ProductoProvider = ({ children }) => {
  const [productos] = useState(() => {
    const almacenado = localStorage.getItem('productos');
    return almacenado ? JSON.parse(almacenado) : [
      {
        id: 1,
        nombre: 'Granizado de fresa',
        descripcion: 'Refrescante granizado con sabor a fresa natural',
        precio: 7000,
        cantidadDisponible: 10
      },
      {
        id: 2,
        nombre: 'Café latte',
        descripcion: 'Café suave con leche espumosa',
        precio: 6000,
        cantidadDisponible: 6
      },
      {
        id: 3,
        nombre: 'Granizado de mango',
        descripcion: 'Granizado tropical dulce y ácido',
        precio: 7500,
        cantidadDisponible: 8
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(productos));
  }, [productos]);

  return (
    <ProductoContext.Provider value={{ productos }}>
      {children}
    </ProductoContext.Provider>
  );
};

export const useProductos = () => useContext(ProductoContext);
