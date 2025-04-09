
import instagram from "./../assets/iconos/instagram.svg"
import whatsapp from "./../assets/iconos/whatsapp.svg"
import tiktok from "./../assets/iconos/tiktok.svg"
import React from 'react'
import "./../Styles/footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <h2>MiSitio</h2>
                    <p>Somos una empresa dedicada a ofrecer soluciones tecnológicas innovadoras para mejorar tu día a día.</p>
                </div>
                <div className="footer-section contact">
                    <h3>Contacto</h3>
                    <p>Email: contacto@misitio.com</p>
                    <p>Teléfono: +123 456 789</p>
                    <p>Dirección: Calle Ficticia 123, Ciudad, País</p>
                </div>
                <div className="footer-section social">
                    <h3>Redes Sociales</h3>
                    <div />
                    <div className="social-icons">
                        <a href="#"><img src={whatsapp} alt="Whatsapp"/></a>
                        <a href="#"><img src={tiktok} alt="Tiktok "/></a>
                        <a href="#"><img src={instagram} alt="Instagram" /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 MiSitio. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}
export default Footer




