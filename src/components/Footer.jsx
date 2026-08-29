import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="carattere-regular">Cukiernia Wisienka</span>
          <p>Małe przyjemności na każdą okazję.</p>
        </div>

        <div className="footer-column">
          <span className="footer-label">Nawigacja</span>

          <a href="/">Strona główna</a>
          <a href="/produkty">Produkty</a>
          <a href="/kontakt">Kontakt</a>
        </div>

        <div className="footer-column">
          <span className="footer-label">Kontakt</span>

          <p>+48 22 123 45 67</p>
          <a href="mailto:hello@wisienka.pl">hello@wisienka.pl</a>
        </div>

        <div className="footer-column">
          <span className="footer-label">Odwiedź nas</span>

          <p>ul. Wiśniowa 12</p>
          <p>00-001 Warszawa</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Cukiernia Wisienka</span>
        <span>Wszystkie prawa zastrzeżone</span>
      </div>
    </footer>
  );
};

export default Footer;
