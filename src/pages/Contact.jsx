import Hero from "../components/Hero";
import { contactData } from "../data/contact";
import logo from "../images/IMG-1.jpg";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <Hero scrolled={true} />
      <main className="contact-page">
        <section className="contact-note">
          <div>
            <p className="eyebrow">Przyjmujemy zamówienia indywidualne</p>
            <h2>Opowiedz nam o swoim wymarzonym deserze.</h2>
          </div>
          <a className="contact-action" href={contactData.contact.emailHref}>
            Napisz do nas <span aria-hidden="true">↗</span>
          </a>
        </section>
        <section className="contact-welcome">
          <div className="contact-welcome-inner">
            <div className="contact-welcome-image">
              <img src={logo} alt="Wnętrze cukierni Wisienka" />
            </div>
            <div className="contact-welcome-content" aria-hidden="true">
              <p className="eyebrow">Jesteśmy do Twojej dyspozycji</p>

              <h3>
                Wpadnij do nas na coś słodkiego lub skontaktuj się z nami.
              </h3>

              <p>
                Chętnie doradzimy, pomożemy dobrać odpowiedni produkt na
                wyjątkową okazję albo ugościmy najlepszymi słodkościami.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-details">
          <div className="contact-detail">
            <span className="detail-label">{contactData.address.label}</span>

            <p>
              {contactData.address.street}
              <br />
              {contactData.address.city}
            </p>
          </div>

          <div className="contact-detail">
            <span className="detail-label">{contactData.contact.label}</span>

            <p>
              {contactData.contact.phone}
              <br />
              {contactData.contact.email}
            </p>
          </div>

          <div className="contact-detail">
            <span className="detail-label">
              {contactData.openingHours.label}
            </span>

            <p>
              {contactData.openingHours.weekdays.days}
              &nbsp;&nbsp;
              {contactData.openingHours.weekdays.hours}
              <br />
              {contactData.openingHours.saturday.days}
              &nbsp;&nbsp;
              {contactData.openingHours.saturday.hours}
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
