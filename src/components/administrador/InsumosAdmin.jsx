import React from 'react';
import "./../../Styles/admi/InsumoS.css"
import { Link } from 'react-router-dom';

const InsumosAdmin = () => {
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
  
  export default InsumosAdmin;