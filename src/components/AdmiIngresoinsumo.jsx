import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "./../Styles/AdministradosIngresoinsumo.css"

export const Administrador = () => {
    return (
        <>
            <Header />
            <div className="contenedor-principal">
                <h1>Registro de Ingreso </h1>
                <form action="#" method="post" className="formulario-registro">
                    <div>
                        <label htmlFor="id_ingreso">ID Ingreso:</label>
                        <input type="text" id="id_ingreso" name="id_ingreso" required />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="id_administrador">ID Administrador:</label>
                        <input type="text" id="id_administrador" name="id_administrador" required />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="fecha">Fecha:</label>
                        <input type="date" id="fecha" name="fecha" required />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="observaciones">Observaciones:</label>
                        <textarea id="observaciones" name="observaciones"></textarea>
                    </div>
                    <br />
                    <h2>Detalle del Insumo</h2>
                    <div>
                        <label htmlFor="id_insumo">ID Insumo:</label>
                        <input type="text" id="id_insumo" name="id_insumo" required />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="categoria">Categoría:</label>
                        <input type="text" id="categoria" name="categoria" required />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="marca">Marca:</label>
                        <input type="text" id="marca" name="marca" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="unidad_medida">Unidad de Medida:</label>
                        <input type="text" id="unidad_medida" name="unidad_medida" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="cantidad">Cantidad:</label>
                        <input type="number" id="cantidad" name="cantidad" min="1" required />
                    </div>
                    <br />
                    <button type="submit">Registrar Ingreso</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Administrador;