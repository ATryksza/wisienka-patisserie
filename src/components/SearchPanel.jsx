import { useState } from "react";
import { useNavigate } from "react-router-dom";
import lupa from "../images/lupa.png";

const SearchPanel = ({ setSearchOpen }) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const query = searchInput.trim();

    if (!query) return;

    setSearchOpen(false);
    navigate(`/produkty?q=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <div className="cart-backdrop" onClick={() => setSearchOpen(false)} />
      <div className="search-overlay">
        <div className="search-container">
          <button
            className="search-close"
            type="button"
            onClick={() => setSearchOpen(false)}
            aria-label="Zamknij"
          >
            <span></span>
            <span></span>
          </button>

          <form
            className="search-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Przeszukaj nasz sklep"
                aria-label="Wyszukaj"
                autoFocus
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
              />

              <button
                className="search-submit"
                aria-label="Wyszukaj"
                type="submit"
              >
                <img
                  width="24"
                  height="24"
                  src={lupa}
                  alt=""
                  className="loop-image"
                  aria-label="Szukaj"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchPanel;
