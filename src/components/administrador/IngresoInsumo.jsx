// src/components/administrador/IngresoInsumo.jsx (o donde lo vayas a ubicar)
import React, { useState } from 'react';
import { useInsumos } from '../../context/InsumoContext'; // Asegúrate de que la ruta sea correcta
import './../../Styles/admi/IngresoInsumos.css'; 

const IngresoInsumo = () => {

  const { agregarInsumo } = useInsumos();

  // Estados para manejar los valores de los inputs del formulario
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(''); // Usamos string para el input y luego convertimos a number
  const [unidad, setUnidad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState(''); // Para mostrar mensajes de éxito/error

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)

    // Validaciones básicas
    if (!nombre || !cantidad || !unidad) {
      setMensaje({ type: 'error', text: 'Por favor, completa todos los campos obligatorios (Nombre, Cantidad, Unidad).' });
      return;
    }

    const cantidadNumerica = parseFloat(cantidad); // Convertir la cantidad a número
    if (isNaN(cantidadNumerica) || cantidadNumerica <= 0) {
      setMensaje({ type: 'error', text: 'La cantidad debe ser un número positivo.' });
      return;
    }

    // Crear el objeto del nuevo insumo con la estructura esperada por agregarInsumo
    const nuevoInsumo = {
      nombre: nombre.trim(), // trim() para eliminar espacios en blanco al inicio/final
      cantidad: cantidadNumerica,
      unidad: unidad.trim(),
      descripcion: descripcion.trim(), // La descripción puede ser opcional, pero la guardamos si existe
    };

    // Llamar a la función agregarInsumo del contexto
    agregarInsumo(nuevoInsumo);

    // Limpiar el formulario después de agregar/actualizar
    setNombre('');
    setCantidad('');
    setUnidad('');
    setDescripcion('');
    setMensaje({ type: 'success', text: `Insumo "${nuevoInsumo.nombre}" agregado/actualizado con éxito!` });

    // Opcional: Ocultar el mensaje después de unos segundos
    setTimeout(() => setMensaje(''), 3000);
  };

  return (
    <div className="ingreso-insumo-container">
      <h2>Ingresar/Actualizar Insumo</h2>
      {mensaje && (
        <div className={`mensaje ${mensaje.type}`}>
          {mensaje.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="ingreso-insumo-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre del Insumo:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Hielo, Leche, Café molido"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cantidad">Cantidad:</label>
          <input
            type="number" // Usar type="number" para facilitar la entrada
            id="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            placeholder="Ej: 500, 1000"
            min="1" // No permitir cantidades negativas o cero
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="unidad">Unidad de Medida:</label>
          <input
            type="text"
            id="unidad"
            value={unidad}
            onChange={(e) => setUnidad(e.target.value)}
            placeholder="Ej: g, ml, unidad, kg, litro"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="descripcion">Descripción (Opcional):</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Una breve descripción del insumo..."
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">
          Guardar Insumo
        </button>
      </form>
    </div>
  );
};

export default IngresoInsumo;