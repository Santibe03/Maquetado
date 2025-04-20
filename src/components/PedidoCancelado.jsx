import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Proyecto from './../assets/imagenes/proyect.png'; // Asegúrate de que la ruta sea correcta

function PedidoCancelado() {
    const location = useLocation();
    const navigate = useNavigate();
    const mensaje = location.state?.mensaje || 'El pedido ha sido marcado como cancelado.';

    const handleVolverInicio = () => {
        navigate('/');
    };

    return (
        <>
            <Header />
            <div style={{ textAlign: 'center', padding: '20px', marginTop: '20px', border: '1px solid #d4edda', backgroundColor: '#d1e7dd', color: '#0f5132', borderRadius: '5px' }}>
                <h2>Pedido Cancelado</h2>
                <p>{mensaje}</p>
                <button onClick={handleVolverInicio} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1em', marginTop: '15px' }}>Volver al Inicio</button>
            </div>
            <section className="section1">
                <img src={Proyecto} alt="" className="image" />
            </section>
            <Footer />
        </>
    );
}

export default PedidoCancelado;