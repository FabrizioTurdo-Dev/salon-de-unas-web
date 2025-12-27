import { useState } from 'react';
// Importamos ambos arrays del mismo archivo
import servicesManos, { services_pies as servicesPies } from '../data/services'; 
import './ServicesSelector.css';
import { motion, AnimatePresence } from "framer-motion";

function WhatsAppIcon() { /* ... tu icono queda igual ... */ }

function ServicesSelector() {
    // Estado para controlar qué categoría ver: 'manos' o 'pies'
    const [activeTab, setActiveTab] = useState('manos');
    const [selectedServices, setSelectedServices] = useState([]);

    // Seleccionamos el array correspondiente según la pestaña activa
    const currentServices = activeTab === 'manos' ? servicesManos : servicesPies;

    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };
    
    const itemLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const itemRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    function alternarServicio(id, categoria) {
        // Guardamos el id y la categoría para que el find no falle al cambiar de tab
        setSelectedServices(prev => 
            prev.id === id && prev.cat === categoria ? [] : { id, cat: categoria }
        );
    }

    // Buscamos el servicio seleccionado en el array correcto
    const listaParaBuscar = selectedServices.cat === 'manos' ? servicesManos : servicesPies;
    const servicioSeleccionado = listaParaBuscar.find(s => s.id === selectedServices.id);

    const mensajeWhatsApp = servicioSeleccionado
        ? `Hola Eli 👋 Revisé tu página web y quería saber cuándo tenés un lugar disponible para ${servicioSeleccionado.titulo} 💅✨`
        : '';

    const whatsappLink = `https://wa.me/5491154922800?text=${encodeURIComponent(mensajeWhatsApp)}`;

    return (
        <section id='services'>
            <div className="services-header">
                <h2>Elegí tu servicio:</h2>
                <div className="tab-container">
                    <button 
                        className={`tab-button ${activeTab === 'manos' ? 'active' : ''}`}
                        onClick={() => setActiveTab('manos')}
                    >
                        Uñas / Manos
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'pies' ? 'active' : ''}`}
                        onClick={() => setActiveTab('pies')}
                    >
                        Pies
                    </button>
                </div>
            </div>

            <motion.ul
                key={activeTab} // Importante para que Framer Motion re-anime al cambiar de pestaña
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className='service'
            >
                {currentServices.map((service, index) => {
                    const activo = selectedServices.id === service.id && selectedServices.cat === activeTab;
                    const variants = index % 2 === 0 ? itemLeft : itemRight;

                    return (
                        <motion.li
                            key={`${activeTab}-${service.id}`}
                            variants={variants}
                            className={activo ? "service-card activo" : "service-card"}
                        >
                            <div className="service-image-wrapper">
                                <img
                                    src={service.imagen || 'https://via.placeholder.com/400x320?text=Servicio'} 
                                    alt={service.titulo}
                                    className="service-image"
                                />
                            </div>

                            <div className="service-content">
                                <h3>{service.titulo}</h3>
                                <p className="service-desc">
                                    {service.descripcion} <br/>
                                    <strong>Duración estimada:</strong> {service.tiempo_trabajo}
                                </p>
                                <p className="service-price">
                                    {service.precio}
                                </p>
                                <button
                                    className={`service-select ${activo ? "seleccionado" : ""}`}
                                    onClick={() => alternarServicio(service.id, activeTab)}
                                >
                                    {activo ? "Servicio seleccionado ✓" : "Seleccionar servicio"}
                                </button>
                            </div>
                        </motion.li>
                    );
                })}
            </motion.ul>

            {!servicioSeleccionado && (
                <p className="empty">Seleccioná un servicio para continuar</p>
            )}

            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`wpp-float ${servicioSeleccionado ? "activo" : ""}`}
            >
                <WhatsAppIcon />
                {servicioSeleccionado && <span>Reservar turno</span>}
            </a>
        </section>
    );
}

export default ServicesSelector;