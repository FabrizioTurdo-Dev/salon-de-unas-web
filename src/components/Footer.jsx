import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h3>Eli Nails Studio</h3>
          <p>TÉCNICA DE UÑAS ARTISTICAS💅 <br/>#cursos #esculpidas #capping</p>
        </div>

        <div className="footer-info">
          <p>📍 Palermo, CABA</p>
          <p>🕒 Lun a Vie · 9 a 19 hs</p>
          <a
            href="https://wa.me/5491154922800"
            target="_blank"
            rel="noopener noreferrer"
          >
            📲 WhatsApp
          </a>
        </div>

        <div className="footer-social">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} · Eli Nails Studio
      </div>
    </footer>
  );
}

export default Footer;
