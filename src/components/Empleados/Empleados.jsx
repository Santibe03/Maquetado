import React from 'react'



import "./../../Styles/Cliente/Cliente.css"
import "./../../Styles/admi.css"
import Proyecto from "./../../assets/imagenes/proyect.png"
import { Link } from 'react-router-dom'

export const Empleados = () => {
  return (
    <>
      
      <div>
        <header className="br">
          <div className="lados"></div>
          <div className="navcentro">
            <span>Empleados 👤</span>
          </div>
        </header>
      </div>
      <div className="cliente">
        <div>
          <p>Bienvenido a la sección de Empleados.</p>
          <p>Aquí podrás gestionar tus pedidos y consultar el estado de los mismos.</p>
          <p>Si tienes alguna duda, no dudes en ponerte en contacto con el administrador.</p>
          <p>¡Gracias por elegirnos!</p>
        </div>
      
      <nav className="menu-vertical-container">
      <ul className="menu-vertical-list">
        <li className="menu-vertical-item">
          <Link to="/productos" className="menu-vertical-button">Ver productos</Link>
        </li>
        <li className="menu-vertical-item">
          <Link to="/gestionarpedidos" className="menu-vertical-button">Gestionar Pedidos</Link>
        </li>
        <li className="menu-vertical-item">
          <Link to="/gestionareservas" className="menu-vertical-button">Gestionar Reservas</Link>
        </li>
        <li className="menu-vertical-item">
          <Link to="/ContactarAdministrador" className="menu-vertical-button">Contactar con el administrador</Link>
        </li>
        <li className="menu-vertical-item">
          <Link to="/verinsumo" className="menu-vertical-button">Inventario de insumos</Link>
        </li>
      </ul>
    </nav>
    </div>
      <section className="section1">
        <img src={Proyecto} alt="" className="image" />
      </section>
      
    </>

  )
}

export default Empleados;
