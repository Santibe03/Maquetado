import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import "./../Styles/admi.css"

export const Administrador = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <Header />
            <main>
                <header className="br">
                    <div className="lados">
                        <img src="imagenes/logo.jpg" alt="Logo" className="logo" />
                        <span className="title">Inventoyingd and counting</span>
                    </div>

                    <div className="navcentro">
                        <div className="menu-container">
                            <button className="menu-button" onClick={toggleMenu}>
                                Menú ▾
                            </button>
                            {menuVisible && (
                                <div id="dropdown" className="dropdown">
                                    <a href="/agregarinsumo">Agregar insumos</a>
                                    <a href="#">Eliminar insumos</a>
                                    <a href="#">Ver insumos</a>
                                    <a href="#">Crear cuentas</a>
                                    <a href="#">Administrar cuentas</a>
                                    <a href="#">Ver opiniones, quejas o reclamos</a>
                                    <a href="#">Desactivar cuentas</a>
                                    <a href="#">Revisar cuentas</a>
                                    <a href="#">Confirmar pedidos</a>
                                    <a href="#">Consultar pedidos</a>
                                    <a href="#">Confirmar reservas</a>
                                    <a href="#">Modificar contactos con la empresa</a>
                                    <a href="#">Modificar Ubicación</a>
                                </div>
                            )}
                        </div>

                        <input type="text" className="buscar" placeholder="Buscar..." />
                    </div>

                    <div className="navcentro">
                        <span>Administrador 👤</span>
                    </div>
                </header>

                <section className="section1">
                    <img src="imagenes/logo.jpg" alt="Banner Principal" className="image" />
                </section>

            </main>
            <Footer />
        </>
    );
};

export default Administrador;