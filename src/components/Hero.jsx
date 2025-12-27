import "./Hero.css";
import { motion } from "framer-motion";


// Variantes de animación más suaves
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
};

const itemUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Hero() {
    return (
        <section className="hero">
            <motion.div 
                className="hero-container"
                initial="hidden"
                animate="visible"
                variants={container}
            >
                {/* COLUMNA IZQUIERDA: TEXTO */}
                <div className="hero-text-content">
                    <motion.span variants={itemUp} className="hero-badge">
                        ✨ Nueva temporada 2026
                    </motion.span>

                    <motion.h1 variants={itemUp}>
                        Arte y estilo en <br />
                        <span className="text-highlight">tus manos</span>
                    </motion.h1>

                    <motion.p className="hero-description" variants={itemUp}>
                        En <strong>Nails by Eli</strong> creamos diseños exclusivos que resaltan tu personalidad. 
                        Desde esculpidas hasta kapping, cuidamos cada detalle.
                    </motion.p>

                    <motion.div className="hero-actions" variants={itemUp}>
                        <button
                            className="btn-primary"
                            onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}
                        >
                            Reservar Turno
                        </button>
                        <button 
                            className="btn-secondary"
                            onClick={() => document.getElementById("location").scrollIntoView({ behavior: "smooth" })}
                        >
                            Ver ubicación
                        </button>
                    </motion.div>
                    
                    {/* Stats o detalles pequeños */}
                    <motion.div className="hero-stats" variants={itemUp}>
                        <div className="stat-item">
                            <span className="stat-number">+500</span>
                            <span className="stat-label">Clientas Felices</span>
                        </div>
                        <div className="stat-separator"></div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Productos Premium</span>
                        </div>
                    </motion.div>
                </div>

                {/* COLUMNA DERECHA: IMAGEN */}
                <motion.div 
                    className="hero-visual"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="image-wrapper">
                        {/* REEMPLAZA ESTO CON TU FOTO PRINCIPAL (y asegúrate que sea .webp!) */}
                        <img 
                            src="/heroimg.jpg" 
                            alt="Diseño de uñas elegante" 
                            className="hero-img-main"
                        />
                        
                        {/* Tarjeta flotante decorativa */}
                        <motion.div 
                            className="floating-card"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <span className="emoji">💅</span>
                            <div className="fc-text">
                                <strong>Eli Licurse</strong>
                                <small>Nail Artist</small>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}

export default Hero;