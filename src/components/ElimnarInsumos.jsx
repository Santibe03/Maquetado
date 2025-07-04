// src/components/EliminarInsumo.jsx
import React from 'react';

const EliminarInsumo = () => {
  const insumosEjemplo = [
    { id: 1, nombre: "Papel A4", categoria: "Papelería" },
    { id: 2, nombre: "Tóner HP", categoria: "Impresión" }
  ];

  return (
    <div className="contenedor-insumos">
      <h2>Eliminar Insumos</h2>
      <table className="tabla-insumos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {insumosEjemplo.map((insumo) => (
            <tr key={insumo.id}>
              <td>{insumo.id}</td>
              <td>{insumo.nombre}</td>
              <td>{insumo.categoria}</td>
              <td><button className="btn-tabla">Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EliminarInsumo;
