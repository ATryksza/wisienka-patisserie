const ContactCard = ({ title }) => {
  return (
    <a href="mailto:hello@wisienka.pl" className="product-card contact-card">
      <div className="product-image contact-image" aria-hidden="true" />

      <div className="product-info">
        <div>
          <h2>{title}</h2>

          <p>
            Ale nie martw się, że nie możesz znaleźć wymarzonego produktu.
            Stworzymy go dla ciebie.
          </p>
        </div>

        <div className="contact-card-row">
          <strong>Napisz do nas</strong>
          <span aria-hidden="true">↗</span>
        </div>
      </div>
    </a>
  );
};

export default ContactCard;
