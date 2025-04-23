import React, { useState } from 'react';
import Header from './Header';
import "./../Styles/Cliente.css"
import "./../Styles/admi.css"
import Footer from './Footer';
import Proyecto from "./../assets/imagenes/proyect.png"
import { Link } from 'react-router-dom'

export const Administrador = () => {
    return (
        <>

            <div>
                <header className="br">
                <div className="lados"></div>
                <div className="navcentro">
                <span>Administrador  👤</span>
                </div>
                </header>

            </div>
            <div className='administrador'>
                <div>
                    <p>Bienvenido a la seccion de Administrador.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis hic mollitia quae architecto rem, praesentium accusantium! Incidunt nulla ipsum, beatae nostrum vitae modi expedita, accusamus animi consectetur ex sapiente.</p>
                    <p>Gracias por elegirnos </p>
                </div>
                
            </div>
       
               <nav className="menu-center-container">
                     <ul className="menu-vertical-list">
                       <li className="menu-vertical-item">

                         <Link to="/adminiingresoinsumo" className="menu-vertical-button">Agregar Insumos </Link>
                       </li>
                       <li className="menu-vertical-item">
                         <Link to="/consultarpedido" className="menu-vertical-button">Eliminar Insumo</Link>
                       </li>

                       <li className="menu-vertical-item">
                         <Link to="/micuenta" className="menu-vertical-button">Ver Insumo </Link>
                       </li>
                       <li className="menu-vertical-item">
                         <Link to="/cancelarpedido" className="menu-vertical-button">Crear cuenta</Link>
                       </li>
                       <li className="menu-vertical-item">
                         <Link to="/verhistorial" className="menu-vertical-button">Administrar Cuenta </Link>
                       </li>
                       <li className="menu-vertical-item">
                         <Link to="/verhistorial" className="menu-vertical-button">Buzon de sugerencias  </Link>
                       </li>

                        <li className="menu-vertical-item">
                         <Link to="/confirmarpedidos" className="menu-vertical-button">Confirmar Pedidos </Link>
                       </li>

                       <li className="menu-vertical-item">
                         <Link to="/verhistorial" className="menu-vertical-button">Consultar Pedidos </Link>
                       </li>

                       <li className="menu-vertical-item">
                         <Link to="/Confirmareservas" className="menu-vertical-button"> Confirmar Reservas  </Link>
                       </li>

                       <li className="menu-vertical-item">
                         <Link to="/consultarreservas" className="menu-vertical-button">Consultar Reservas  </Link>
                       </li>
                    

                       <li className="menu-vertical-item">
                         <Link to="/contactar" className="menu-vertical-button">Modificar contacto con la empresa </Link>
                       </li>

                       <li className="menu-vertical-item">
                         <Link to="/modificarubi" className="menu-vertical-button">Modificar Ubicacion </Link>
                       </li>

                     </ul>
                   </nav>
           
        </>
    );
};

export default Administrador;