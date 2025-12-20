import './Location.css';

function Location() {
  return (
    <section id="location" className="location">
      <h2>Dónde encontrarnos</h2>

      <p className="location-text">
        Estamos ubicadas en una zona de fácil acceso.  
        Al confirmar tu turno te enviamos la dirección exacta 💕
      </p>

      <div className="map-wrapper">
        <iframe
          title="Ubicación del salón"
          src="https://www.google.com/maps?q=-34.6037,-58.3816&z=15&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <a
        href="https://www.google.com/maps"
        target="_blank"
        rel="noopener noreferrer"
        className="map-cta"
      >
        Ver en Google Maps
      </a>
    </section>
  );
}

export default Location;
