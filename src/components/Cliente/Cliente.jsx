// src/components/Cliente/Cliente.jsx
import React from 'react';
import Proyecto from './../../assets/imagenes/proyect.png';
import { useProductos } from '../../context/ProductoContext';
import './../../Styles/cliente/Cliente.css';

const Cliente = () => {
  const { productos } = useProductos();

  return (
    <div className="cliente-bienvenida">
      <div className="cliente-info">
        <h2>🎉 Bienvenido, Cliente</h2>
        <p>
          Nos alegra tenerte con nosotros. Aquí podrás realizar tus pedidos, hacer reservas
          y ponerte en contacto con la empresa de manera rápida y sencilla.
        </p>
        <p>Utiliza el menú lateral para comenzar.</p>
      </div>

      <div className="cliente-imagen">
        <img src={Proyecto} alt="Proyecto Cliente" />
      </div>

      <section className="cliente-productos">
        <h3>🛍️ Productos Disponibles</h3>
        <div className="grid-productos">
          {productos.map((producto) => (
            <div className="card-producto" key={producto.id}>
              <h4>{producto.nombre}</h4>
              <p>{producto.descripcion}</p>
              <p><strong>Precio:</strong> ${producto.precio.toLocaleString()}</p>
              <p><strong>Disponibles:</strong> {producto.cantidadDisponible}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cliente;
