import React from 'react';
import { useProductos } from '../../context/ProductoContext';
import { useInsumos } from '../../context/InsumoContext';
import { verificarDisponibilidadInsumos } from '../../utils/verificarinsumos';
import './../../Styles/Empleado/Productos.css';

const VerProductos = () => {
  const { productos } = useProductos();
  const { insumos } = useInsumos();

  return (
    <div className="productos-container">
      <h2>Productos Disponibles</h2>
      <table className="tabla-productos">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Cantidad Disponible</th>
            <th>Preparación</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => {
            const resultado = verificarDisponibilidadInsumos(producto, 1, insumos);
            return (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>${producto.precio.toLocaleString()}</td>
                <td>{producto.cantidadDisponible}</td>
                <td>
                  {resultado === true ? (
                    <span className="estado-preparacion disponible">✅ Disponible</span>
                  ) : (
                    <span className="estado-preparacion no-disponible">❌ Faltan insumos</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VerProductos;
