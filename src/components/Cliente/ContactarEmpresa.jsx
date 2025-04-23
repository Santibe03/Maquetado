import React, { useState } from 'react';
import './../../Styles/Cliente/ContactarEmpresa.css'; // Archivo de estilos opcional
import Header from '../Header';
import Footer from '../Footer';

function ContactarEmpresa() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [enviado, setEnviado] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'nombre':
                setNombre(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'mensaje':
                setMensaje(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        // Por ejemplo, una llamada a una API para enviar el correo electrónico
        console.log('Formulario de contacto enviado:', { nombre, email, mensaje });
        setEnviado(true);

        // Opcional: Limpiar el formulario después del envío
        setNombre('');
        setEmail('');
        setMensaje('');
    };

    if (enviado) {
        return (
            <>
            
            <div className="contacto-enviado-container">
                <h2>¡Gracias por contactarnos!</h2>
                <p>Hemos recibido tu mensaje y te responderemos a la brevedad.</p>
            </div>
            
            </>
        );
    }

    return (
        <>
       
        <div className="contacto-empresa-container">
            <h2>Contactar con la Empresa</h2>
            <p>Por favor, completa el siguiente formulario para ponerte en contacto con nosotros.</p>
            <form onSubmit={handleSubmit} className="contacto-form">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="5"
                        value={mensaje}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="enviar-button">Enviar Mensaje</button>
            </form>
        </div>
   
        </>
    );
}

export default ContactarEmpresa;