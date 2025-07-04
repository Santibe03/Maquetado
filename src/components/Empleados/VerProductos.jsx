import React from 'react';
import { useProductos } from '../../context/ProductoContext';
import './../../Styles/Empleado/Productos.css';

const VerProductos = () => {
  const { productos } = useProductos();

  return (
    <div className="productos-container">
      <h2>Productos Disponibles</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Cantidad Disponible</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>{p.descripcion}</td>
              <td>${p.precio.toLocaleString()}</td>
              <td>{p.cantidadDisponible}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerProductos;
