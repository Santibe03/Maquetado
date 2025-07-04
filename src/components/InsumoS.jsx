// src/components/Insumos.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './../Styles/InsumoS.css'; // Asegúrate de tener este archivo

const Insumos = () => {
  return (
    <div className="contenedor-insumos">
      <h2>Gestión de Insumos</h2>

      <table className="tabla-insumos">
        <thead>
          <tr>
            <th>Acción</th>
            <th>Ir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Agregar Insumo</td>
            <td><Link to="/agregarinsumo" className="btn-tabla">Ir</Link></td>
          </tr>
          <tr>
            <td>Eliminar Insumo</td>
            <td><Link to="/eliminarinsumo" className="btn-tabla">Ir</Link></td>
          </tr>
          <tr>
            <td>Ver Insumos</td>
            <td><Link to="/verinsumo" className="btn-tabla">Ir</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Insumos;
