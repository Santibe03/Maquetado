import React, { useState } from 'react';
import Proyecto from "./../assets/imagenes/proyect.png"
import "./../Styles/admi.css"

export const Administrador = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
           
            <main>
                <header className="br">
                    <div className="lados">
                    </div>

                    <div className="navcentro">
                        <div className="menu-container">
                            <button className="menu-button" onClick={toggleMenu}>
                                Menú ▾
                            </button>
                            {menuVisible && (
                                <div id="dropdown" className="dropdown">
                                    <a href="/agregarinsumo">Agregar insumos</a>
                                    <a href="/eliminarinsumo">Eliminar insumos</a>
                                    <a href="/verinsumo">Ver insumos</a>
                                    <a href="/crearcuenta">Crear cuentas</a>
                                    <a href="/administrarcuentas">Administrar cuentas</a>
                                    <a href="/buzonsugerencias">buzon de zugerencias</a>
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

                    </div>

                    <div className="navcentro">
                        <span>Administrador 👤</span>
                    </div>
                </header>

                <section className="section1">
                    <img src={Proyecto} alt="" className="image" />
                </section>

            </main>
           
        </>
    );
};

export default Administrador;