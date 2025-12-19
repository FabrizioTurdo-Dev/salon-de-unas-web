import "./Hero.css";
import { motion } from "framer-motion";


const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

function Hero() {
    function scrollToServices() {
        const section = document.getElementById("services");
        section?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <motion.section
            className="hero"
            initial="hidden"
            animate="visible"
            variants={container}
        >
            <motion.div className="hero-content" variants={item}>

                <motion.h1 variants={item}>
                    Belleza que se nota,<br />detalles que enamoran
                </motion.h1>


                <motion.p className="hero-subtitle" variants={item}>
                    Reservá tu turno en pocos pasos y disfrutá una experiencia pensada para vos.
                </motion.p>


                <motion.div className="hero-steps" variants={item}>
                    <p>¿Cómo funciona?</p>
                    <ul>
                        <li>Elegí un servicio</li>
                        <li>Confirmá tu preferencia</li>
                        <li>Reservá por WhatsApp</li>
                    </ul>
                </motion.div>


                <motion.button
                    className="hero-cta"
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        document
                            .getElementById("services")
                            .scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    Ver servicios
                </motion.button>

                <motion.div
                    className="hero-scroll"
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    Deslizá para ver más
                </motion.div>


            </motion.div>
        </motion.section>
    );
}

export default Hero;
