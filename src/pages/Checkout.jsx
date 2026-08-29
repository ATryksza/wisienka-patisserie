import { useState } from "react";
import CalendarPicker from "../components/CalendarPicker";
import Hero from "../components/Hero";
import "./Checkout.css";
import ReturnBtn from "../components/ReturnButton";

const Checkout = ({ items, total, onSubmit }) => {
  const [submitted, setSubmitted] = useState(false);
  const [orderDate, setOrderDate] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (emailValue) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setEmailError("Wpisz poprawny adres e-mail");
      return false;
    }

    setEmailError("");
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!orderDate || !validateEmail(email)) return;
    setSubmitted(true);
    onSubmit();
  };

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  if (submitted) {
    return (
      <>
        <Hero scrolled={true} />
        <main className="checkout-page">
          <section className="checkout-success">
            <p className="eyebrow">Dziękujemy</p>
            <h1>
              Zamówienie
              <br />
              zostało wysłane.
            </h1>
            <p>
              Skontaktujemy się z Tobą, aby potwierdzić szczegóły zamówienia.
            </p>
            <ReturnBtn href="/" />
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <Hero scrolled={true} />
      <main className="checkout-page">
        <div className="checkout-layout">
          <section className="checkout-form-section">
            <p className="eyebrow">Finalizacja zamówienia</p>
            <h1>
              Przejdź do
              <br />
              zamówienia.
            </h1>
            <form className="checkout-form" onSubmit={handleSubmit}>
              <label>
                Imię i nazwisko
                <input name="name" type="text" required />
              </label>
              <label>
                Adres e-mail
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (emailError) validateEmail(event.target.value);
                  }}
                  onBlur={() => validateEmail(email)}
                  aria-invalid={Boolean(emailError)}
                  required
                />
                {emailError && (
                  <span className="field-error">{emailError}</span>
                )}
              </label>
              <label>
                Numer telefonu
                <input name="phone" type="tel" required />
              </label>
              <label>
                Data odbioru zamówienia
                <CalendarPicker value={orderDate} onChange={setOrderDate} />
              </label>
              <label>
                Sposób odbioru
                <div className="select-wrapper">
                  <select name="delivery" defaultValue="odbior" required>
                    <option value="odbior">Odbiór osobisty w cukierni</option>
                    <option value="kontakt">
                      Ustalimy szczegóły telefonicznie
                    </option>
                  </select>
                </div>
              </label>
              <label>
                Dodatkowa wiadomość
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Np. data odbioru lub dedykacja"
                />
              </label>
              <details className="order-summary-mobile">
                <summary>
                  <div className="summary-mobile-heading">
                    <strong>Podsumowanie zamówienia</strong>
                    <span className="summary-mobile-meta">
                      {totalQuantity}{" "}
                      {totalQuantity === 1 ? "produkt" : "produktów"}
                      <b>{total.toFixed(2).replace(".", ",")} zł</b>
                    </span>
                  </div>

                  <span className="summary-mobile-arrow" aria-hidden="true" />
                </summary>

                <div className="summary-mobile-content">
                  <div className="summary-items">
                    {items.map((item) => (
                      <div className="summary-item" key={item.name}>
                        <span>
                          {item.name} <small>× {item.quantity}</small>
                        </span>

                        <strong>
                          {(Number.parseFloat(item.price) * item.quantity)
                            .toFixed(2)
                            .replace(".", ",")}{" "}
                          zł
                        </strong>
                      </div>
                    ))}
                  </div>

                  <div className="summary-total">
                    <span>Razem</span>
                    <strong>{total.toFixed(2).replace(".", ",")} zł</strong>
                  </div>
                </div>
              </details>
              <button className="checkout-submit" type="submit">
                Wyślij zamówienie
              </button>
            </form>
          </section>

          <aside className="order-summary order-summary-desktop">
            <p className="eyebrow">Twoje zamówienie</p>
            <h2>Podsumowanie</h2>
            <div className="summary-items">
              {items.map((item) => (
                <div className="summary-item" key={item.name}>
                  <span>
                    {item.name} <small>× {item.quantity}</small>
                  </span>
                  <strong>
                    {(Number.parseFloat(item.price) * item.quantity)
                      .toFixed(2)
                      .replace(".", ",")}{" "}
                    zł
                  </strong>
                </div>
              ))}
            </div>
            <div className="summary-total">
              <span>Razem</span>
              <strong>{total.toFixed(2).replace(".", ",")} zł</strong>
            </div>
          </aside>
        </div>
        <ReturnBtn href="/produkty" />
      </main>
    </>
  );
};

export default Checkout;
