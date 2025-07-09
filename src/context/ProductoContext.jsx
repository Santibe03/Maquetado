import { createContext, useContext, useState, useEffect } from 'react';

const ProductoContext = createContext();

export const ProductoProvider = ({ children }) => {
  const [productos] = useState(() => {
    const almacenado = localStorage.getItem('productos');
    return almacenado
      ? JSON.parse(almacenado)
      : [
          {
            id: 1,
            nombre: 'Granizado de fresa',
            descripcion: 'Refrescante granizado con sabor a fresa natural',
            precio: 7000,
            cantidadDisponible: 10,
            insumos: [
              { nombreInsumo: 'Hielo', cantidadNecesaria: 100, unidad: 'g' },
              { nombreInsumo: 'Sirope de fresa', cantidadNecesaria: 20, unidad: 'ml' },
              { nombreInsumo: 'Minichicles', cantidadNecesaria: 5, unidad: 'unidad' }
            ]
          },
          {
            id: 2,
            nombre: 'Café latte',
            descripcion: 'Café suave con leche espumosa',
            precio: 6000,
            cantidadDisponible: 6,
            insumos: [
              { nombreInsumo: 'Café molido', cantidadNecesaria: 15, unidad: 'g' },
              { nombreInsumo: 'Leche', cantidadNecesaria: 150, unidad: 'ml' },
              { nombreInsumo: 'Agua', cantidadNecesaria: 100, unidad: 'ml' }
            ]
          },
          {
            id: 3,
            nombre: 'Granizado de mango',
            descripcion: 'Granizado tropical dulce y ácido',
            precio: 7500,
            cantidadDisponible: 8,
            insumos: [
              { nombreInsumo: 'Hielo', cantidadNecesaria: 100, unidad: 'g' },
              { nombreInsumo: 'Pulpa de mango', cantidadNecesaria: 30, unidad: 'ml' },
              { nombreInsumo: 'Aritos', cantidadNecesaria: 4, unidad: 'unidad' }
            ]
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
