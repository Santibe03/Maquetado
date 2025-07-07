import React from 'react';
import { Link } from 'react-router-dom';
import Proyecto from './../../assets/imagenes/proyect.png'; 
import './../../Styles/Cliente/Cliente.css';
import './../../Styles/admi.css'; 
export const Administrador = () => {
  return (
    <div className="fondo-admin">
      <header className="br">
        <div className="lados"></div>
        <div className="navcentro">
          <span>Administrador 👤</span>
        </div>
      </header>

      <div className="cliente contenido-claro">
        <div>
          <p>Bienvenido a la sección de Administrador.</p>
          <p>Aquí podrás gestionar insumos, cuentas, pedidos, reservas y más.</p>
          <p>Si tienes alguna duda, no dudes en ponerte en contacto con nosotros.</p>
          <p>¡Gracias por elegirnos!</p>
        </div>

        <nav className="menu-vertical-container">
          <ul className="menu-vertical-list">
            <li className="menu-vertical-item">
            <Link to="/insumoadmin" className="menu-vertical-button">Insumos</Link>
            </li>
            <li className="menu-vertical-item">
              <Link to="/crearcuenta" className="menu-vertical-button">Cuentas</Link>
            </li>
            <li className="menu-vertical-item">
              <Link to="/pedidosadmin" className="menu-vertical-button">Pedidos</Link>

            </li>
            <li className="menu-vertical-item">
              <Link to="/gestionareservas" className="menu-vertical-button">Reservas</Link>
            </li>
            <li className="menu-vertical-item">
              <Link to="/modificarcontacto" className="menu-vertical-button">Configuración</Link>
            </li>
            <li className="menu-vertical-item">
              <Link to="/sugerencias" className="menu-vertical-button">Buzon de sugerencias</Link>
            </li>
          </ul>
        </nav>
      </div>

      <h1>Productos</h1>
      <main className="contenido-claro">
        {[1, 2, 3].map((_, idx) => (
          <section key={idx} className="productos">
            {Array(4).fill().map((_, i) => (
              <div key={i} className="productos2">
                <div className="imagenproducto"></div>
                <h3>Categoría</h3>
                <p>Nombre del producto</p>
                <span className="valor">$$$</span>
              </div>
            ))}
          </section>
        ))}
      </main>

      <section className="section1 contenido-claro">
        <img src={Proyecto} alt="Proyecto" className="image" />
      </section>
    </div>
  );
};

export default Administrador;
