import React, { useState } from "react";
import "./../Styles/Quejas.css";
import 'src/Styles/AdimiOpiniones.css'


const datos = [

  {
    id: 1,
    nombre: "Juan Pérez",
    tipo: "Opinión",
    estado: "Pendiente",
    fecha: "20 de abr, 2024",
    mensaje: "El servicio fue excelente.",
  },

  {
    id: 2,
    nombre: "Carlos López",
    tipo: "Queja",
    estado: "Resuelto",
    fecha: "20 de abr, 2024",
    mensaje: "He estado esperando una respuesta durante días.",
  },
  {
    id: 3,
    nombre: "María Gómez",
    tipo: "Reclamo",
    estado: "Pendiente",
    fecha: "20 de abr, 2024",
    mensaje: "El producto llegó dañado y necesito un reemplazo.",
  },
  {
    id: 4,
    nombre: "Ana Martínez",
    tipo: "Opinión",
    estado: "Resuelto",
    fecha: "20 de abr, 2024",
    mensaje: "Todo el proceso fue rápido y sencillo.",
  },
];

function Quejas() {
  const [filtro, setFiltro] = useState("Todos");

  const filtrados = datos.filter(
    (item) => filtro === "Todos" || item.tipo === filtro
  );

  return (
    <div className="contenedor">
      <h2 className="titulo">Ver Opiniones, Quejas y Reclamos</h2>

      <div className="filtros">
        {["Todos", "Opinión", "Queja", "Reclamo"].map((tipo) => (
          <button
            key={tipo}
            className={`boton-filtro ${filtro === tipo ? "activo" : ""}`}
            onClick={() => setFiltro(tipo)}
          >
            {tipo}
          </button>
        ))}
      </div>

      <div className="lista">
        {filtrados.map((item) => (
          <div key={item.id} className="tarjeta">
            <div className="nombre">{item.nombre}</div>
            <div className="fecha">{item.fecha}</div>
            <div className="mensaje">{item.mensaje}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quejas;
