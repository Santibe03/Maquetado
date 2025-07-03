import { useLocation } from 'react-router-dom';
import './../../Styles/Cliente/ReservaDetalle.css'; 

const ReservaSencilla = () => {
  const location = useLocation();
  const reserva = location.state?.reserva;

  if (!reserva) return <p>Reserva Registrada</p>;

  return (
    <div className="reserva-cuadrado">
      <h3>Detalles de la Reserva</h3>
      <p><strong>Cliente:</strong> {reserva.nombreCliente}</p>
      <p><strong>Fecha de Reserva:</strong> {reserva.fechaReserva}</p>
      <p><strong>Fecha del Evento:</strong> {reserva.fechaEvento}</p>
      <p><strong>Número de Personas:</strong> {reserva.personas}</p>
      <p><strong>Mesa:</strong> {reserva.mesa}</p>
      <p><strong>Estado:</strong> {reserva.estado}</p>
    </div>
  );
};
export default ReservaSencilla;