import React from 'react'
import "./../../Styles/Cliente/Cliente.css"
import "./../../Styles/admi.css"
import Proyecto from "./../../assets/imagenes/proyect.png"
import { Link } from 'react-router-dom'

export const Cliente = () => {
  return (
    <>
      
      <div>
        <header className="br">
          <div className="lados"></div>
          <div className="navcentro">
            <span>Cliente 👤</span>
          </div>
        </header>
      </div>
      <div className="cliente">
        <div>
          <p>Bienvenido a la sección de Cliente.</p>
          <p>Aquí podrás gestionar tus pedidos y consultar el estado de los mismos.</p>
          <p>Si tienes alguna duda, no dudes en ponerte en contacto con nosotros.</p>
          <p>¡Gracias por elegirnos!</p>
        </div>
      
      <nav className="menu-vertical-container">
      <ul className="menu-vertical-list">
        <li className="menu-vertical-item">
          <Link to="/realizarpedido" className="menu-vertical-button">Realizar pedido</Link>
        </li>
        <li className="menu-vertical-item">
          <Link to="/verhistorial" className="menu-vertical-button">Consultar Pedidos</Link>
        </li>
        <li className="menu-vertical-item">
          <Link to="/realizarreserva" className="menu-vertical-button">Realizar Reserva</Link>
        </li>
        <li className="menu-vertical-item">
          <Link to="/historialreservas" className="menu-vertical-button">Consultar Reservas</Link>
        </li>
        <li className="menu-vertical-item">
          <Link to="/contactar" className="menu-vertical-button">Contactar con la empresa</Link>
        </li>
      </ul>
    </nav>
    </div>
    <h1>Productos</h1>
    <main>
        <section className="productos">
          <div className="productos2">
            <div className="imagenproducto"></div>
            <h3>Granizado de Fresa</h3>
            <p>Refrescante Granizado con sabor a fresa natural</p>
            <span className="valor">$7000</span>
          </div>
          <div className="productos2">
            <div className="imagenproducto"></div>
            <h3>Caffe Latte</h3>
            <p>Cafe suave con leche espumosa</p>
            <span className="valor">$6000</span>
          </div>
          <div className="productos2">
            <div className="imagenproducto"></div>
            <h3>Granizado de Mango</h3>
            <p>Granizado Tropical Dulce y Ácido</p>
            <span className="valor">$7500</span>
          </div>
          <div className="productos2">
            <div className="imagenproducto"></div>
            <h3>Categoría</h3>
            <p>Nombre del producto</p>
            <span className="valor">$$$</span>
          </div>
        </section>
        <section className="productos">
          <div className="productos2">
            <div className="imagenproducto"></div>
            <h3>Categoría</h3>
            <p>Nombre del producto</p>
            <span className="valor">$$$</span>
          </div>
          <div className="productos2">
            <div className="imagenproducto"></div>
            <h3>Categoría</h3>
            <p>Nombre del producto</p>
            <span className="valor">$$$</span>
          </div>
          <div className="productos2">
            <div className="imagenproducto"></div>
            <h3>Categoría</h3>
            <p>Nombre del producto</p>
            <span className="valor">$$$</span>
          </div>
          <div className="productos2">
            <div className="imagenproducto"></div>
            <h3>Categoría</h3>
            <p>Nombre del producto</p>
            <span className="valor">$$$</span>
          </div>
        </section>
        <section className="productos">
          <div className="productos2">
            <div className="imagenproducto"></div>
            <h3>Categoría</h3>
            <p>Nombre del producto</p>
            <span className="valor">$$$</span>
          </div>
          <div className="productos2">
            <div className="imagenproducto"></div>
            <h3>Categoría</h3>
            <p>Nombre del producto</p>
            <span className="valor">$$$</span>
          </div>
          <div className="productos2">
            <div className="imagenproducto"></div>
            <h3>Categoría</h3>
            <p>Nombre del producto</p>
            <span className="valor">$$$</span>
          </div>
          <div className="productos2">
            <div className="imagenproducto"></div>
            <h3>Categoría</h3>
            <p>Nombre del producto</p>
            <span className="valor">$$$</span>
          </div>
        </section>
      </main>
      <section className="section1">
        <img src={Proyecto} alt="" className="image" />
      </section>
      
    </>

  )
}

export default Cliente;
