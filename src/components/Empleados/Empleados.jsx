// src/components/Empleados/Empleados.jsx
import React from 'react';
import './../../Styles/Empleado/EmpleadoInicio.css';
import Proyecto from './../../assets/imagenes/proyect.png';

const Empleados = () => {
  return (
    <div className="empleado-inicio">
      <section className="empleado-bienvenida">
        <h2>Bienvenido 👷 Empleado</h2>
        <p>Desde este panel podrás gestionar pedidos, confirmar reservas, revisar el inventario y visualizar los productos disponibles.</p>
        <p>Recuerda mantener actualizado el estado de los pedidos y reservas para garantizar una buena experiencia al cliente.</p>
        <p>¡Gracias por tu trabajo y compromiso!</p>
      </section>

      <section className="empleado-imagen">
        <img src={Proyecto} alt="Panel del empleado" />
      </section>
    </div>
  );
};

export default Empleados;
