import { motion } from "framer-motion";
import './WhatsappBtn.css'

function WhatsAppFloating({ servicio }) {
  const mensaje = servicio
    ? `Hola! Quiero reservar un turno para ${servicio.name}`
    : "";

  const link = `https://wa.me/549XXXXXXXXXX?text=${encodeURIComponent(mensaje)}`;

  return (
    <motion.a
      href={servicio ? link : undefined}
      target="_blank"
      rel="noopener noreferrer"
      className={`wpp-float ${servicio ? "activo" : ""}`}
      whileTap={{ scale: 0.95 }}
    >
      <span className="icon">🟢</span>
      {servicio && <span className="text">Reservar turno</span>}
    </motion.a>
  );
}

export default WhatsAppFloating;
