import { useState } from 'react';
import services from '../data/services';
import './ServicesSelector.css';
import { motion } from "framer-motion";
import WhatsAppFloating from './WhatsappBtn';

function WhatsAppIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M20.52 3.48A11.77 11.77 0 0012.04 0C5.4 0 .01 5.39.01 12.04c0 2.12.55 4.18 1.6 6.01L0 24l6.13-1.6a12.02 12.02 0 005.91 1.5h.01c6.64 0 12.03-5.39 12.03-12.04a11.8 11.8 0 00-3.56-8.38zM12.04 22a9.96 9.96 0 01-5.08-1.38l-.36-.21-3.64.95.97-3.55-.23-.37A9.96 9.96 0 012.05 12.04C2.05 6.51 6.51 2.05 12.04 2.05c2.66 0 5.16 1.04 7.04 2.91a9.88 9.88 0 012.92 7.03c0 5.53-4.46 10.01-9.96 10.01zm5.46-7.47c-.3-.15-1.76-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.58-.48-.5-.68-.5h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.03-1.05 2.52s1.08 2.93 1.23 3.13c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z" />
        </svg>
    );
}



function ServicesSelector() {
    const [selectedServices, setSelectedServices] = useState([]);

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    function alternarServicio(id) {
        setSelectedServices(prev =>
            prev[0] === id ? [] : [id]
        );
    }

    const servicioSeleccionado = services.find(
        service => service.id === selectedServices[0]
    );

    const mensajeWhatsApp = servicioSeleccionado
        ? `Hola Eli 👋
            Revisé tu página web y quería saber cuándo tenés un lugar disponible para ${servicioSeleccionado.name} 💅✨`
        : '';


    const whatsappLink = `https://wa.me/5491154922800?text=${encodeURIComponent(mensajeWhatsApp)}`;

    return (
        <section>
            <h2>Elegí tu servicio</h2>

            <motion.ul
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {services.map(service => {
                    const activo = servicioSeleccionado?.id === service.id;

                    return (
                        <motion.li
                            key={service.id}
                            variants={item}
                            layout
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className={activo ? "service-card activo" : "service-card"}
                            id='services'
                        >
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.03 }}
                                className={activo ? "seleccionado" : ""}
                                onClick={() => alternarServicio(service.id)}
                            >
                                {service.name}
                            </motion.button>


                            <p>{service.descripcion}</p>
                            <img src={service.imagen} alt={service.name} className='service-image' />
                            <p>${service.precio.toLocaleString('es-AR')}</p>
                        </motion.li>
                    );
                })}
            </motion.ul>

            {!servicioSeleccionado && (
                <p className="empty">
                    Seleccioná un servicio para continuar
                </p>
            )}

            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`wpp-float ${servicioSeleccionado ? "activo" : ""}`}
            >
                <WhatsAppIcon />

                {servicioSeleccionado && (
                    <span>Reservar turno</span>
                )}
            </a>



        </section>
    );
}

export default ServicesSelector;
