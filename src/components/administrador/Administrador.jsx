

import "./../../Styles/Cliente/Cliente.css"
import Proyecto from "./../../assets/imagenes/proyect.png"
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
            <div className='cliente'>
                <div>
                    <p>Bienvenido a la seccion de Administrador.</p>
                    <p>Aqui podras gestionar las diferentes actividades del negocio.</p>
                    <p>Gracias por elegirnos </p>
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
            </div>

            <section className="section1">
                <img src={Proyecto} alt="" className="image" />
            </section>
        </>
    );
};

export default Administrador;