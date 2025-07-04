import React, { useState } from 'react';
import { useInsumos } from '../../context/InsumoContext';
import './../../Styles/admi/Insumos.css';

const InventarioInsumos = () => {
  const { insumos, agregarInsumo } = useInsumos();

  const [nuevoInsumo, setNuevoInsumo] = useState({
    nombre: '',
    cantidad: 0,
    unidadMedida: '',
    contieneAlcohol: false,
    detalles: '',
  });

  const handleAgregar = (e) => {
    e.preventDefault();
    if (!nuevoInsumo.nombre || nuevoInsumo.cantidad <= 0 || !nuevoInsumo.unidadMedida) return;
    agregarInsumo({
      ...nuevoInsumo,
      cantidad: parseFloat(nuevoInsumo.cantidad),
    });
    setNuevoInsumo({
      nombre: '',
      cantidad: 0,
      unidadMedida: '',
      contieneAlcohol: false,
      detalles: '',
    });
  };

  return (
    <div className="inventario-container">
      <h2>Inventario de Insumos</h2>

      <form className="form-insumo" onSubmit={handleAgregar}>
        <input
          type="text"
          placeholder="Nombre del insumo"
          value={nuevoInsumo.nombre}
          onChange={(e) => setNuevoInsumo({ ...nuevoInsumo, nombre: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={nuevoInsumo.cantidad}
          min="0"
          step="any"
          onChange={(e) => setNuevoInsumo({ ...nuevoInsumo, cantidad: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Unidad de medida (ej: g, ml, unidades)"
          value={nuevoInsumo.unidadMedida}
          onChange={(e) => setNuevoInsumo({ ...nuevoInsumo, unidadMedida: e.target.value })}
          required
        />
        <select
  value={nuevoInsumo.contieneAlcohol}
  onChange={(e) =>
    setNuevoInsumo({
      ...nuevoInsumo,
      contieneAlcohol: e.target.value,
    })
  }
  required
>
  <option value="">¿Contiene alcohol?</option>
  <option value="sí">Sí</option>
  <option value="no">No</option>
  <option value="no_aplica">No aplica</option>
</select>

        <input
          type="text"
          placeholder="Detalles del insumo"
          value={nuevoInsumo.detalles}
          onChange={(e) => setNuevoInsumo({ ...nuevoInsumo, detalles: e.target.value })}
        />
        <button type="submit">Registrar Insumo</button>
      </form>

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

export default InventarioInsumos;
