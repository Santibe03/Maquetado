import React from 'react';
import { useInsumos } from '../../context/InsumoContext';
import './../../Styles/admi/Insumos.css';

const VerInsumo = () => {
  const { insumos } = useInsumos();

  return (
    <div className="inventario-container">
      <h2>Inventario Disponible</h2>

      {insumos.length === 0 ? (
        <p>No hay insumos registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Unidad</th>
              <th>Alcohol</th>
              <th>Detalles</th>
              <th>Fecha de Ingreso</th>
            </tr>
          </thead>
          <tbody>
            {insumos.map((insumo) => (
              <tr key={insumo.id}>
                <td>{insumo.nombre}</td>
                <td>{insumo.cantidad}</td>
                <td>{insumo.unidadMedida}</td>
                <td>{insumo.contieneAlcohol}</td>
                <td>{insumo.detalles}</td>
                <td>{insumo.fechaIngreso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VerInsumo;
