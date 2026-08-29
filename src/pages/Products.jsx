import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilters";
import ReturnBtn from "../components/ReturnButton";
import ContactCard from "../components/ContactCard";
import { products, allProducts, categoryOptions } from "../data/products";
import { PRICE_RANGE } from "../constants/products";
import "./Products.css";

const Products = ({ onAddToCart }) => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const query = searchParams.get("q")?.trim() || "";

  const [selectedCategories, setSelectedCategories] = useState(
    categoryOptions.map((option) => option.key),
  );

  const [maxPrice, setMaxPrice] = useState(PRICE_RANGE.max);

  let visibleProducts = allProducts;

  if (category) {
    visibleProducts =
      products[category]?.items.map((product) => ({
        ...product,
        category,
      })) || [];
  }

  /*
   * -------------------------
   * WYSZUKIWANIE
   * -------------------------
   */

  if (query) {
    const normalizedQuery = query.toLowerCase();

    visibleProducts = visibleProducts.filter((product) => {
      const text = `${product.name} ${product.description}`.toLowerCase();

      return text.includes(normalizedQuery);
    });
  }

  /*
   * -------------------------
   * FILTROWANIE
   * -------------------------
   */

  const showFilters = !category && !query;

  if (showFilters) {
    visibleProducts = visibleProducts.filter(
      (product) =>
        selectedCategories.includes(product.category) &&
        Number.parseFloat(product.price) <= maxPrice,
    );
  }

  /*
   * -------------------------
   * NAGŁÓWEK
   * -------------------------
   */

  const categoryData = category ? products[category] : null;

  let title = "Nasze wypieki";
  let intro = "Wybierz coś słodkiego z całej naszej oferty.";

  if (categoryData) {
    title = categoryData.title;
    intro = categoryData.intro;
  }

  if (query) {
    title = `„${query}”`;

    intro = visibleProducts.length
      ? "Produkty dopasowane do Twojego zapytania."
      : "";
  }

  /*
   * -------------------------
   * KATEGORIE
   * -------------------------
   */

  const toggleCategory = (categoryKey) => {
    setSelectedCategories((categories) =>
      categories.includes(categoryKey)
        ? categories.filter((item) => item !== categoryKey)
        : [...categories, categoryKey],
    );
  };

  return (
    <>
      <Hero scrolled={true} />

      <main
        className={`products-page ${showFilters ? "all-products-page" : ""}`}
      >
        <section className="products-intro">
          <p className="eyebrow">
            {query ? "Wyniki wyszukiwania dla" : "Świeżo z naszej pracowni"}
          </p>

          <h1>{title}</h1>

          <p className="products-lead">{intro}</p>
        </section>

        {showFilters && (
          <ProductFilters
            selectedCategories={selectedCategories}
            maxPrice={maxPrice}
            onCategoryChange={toggleCategory}
            onPriceChange={setMaxPrice}
          />
        )}

        {visibleProducts.length > 0 ? (
          <section className="products-grid" aria-label="Produkty">
            {visibleProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                index={index}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </section>
        ) : (
          <>
            <section className="products-grid" aria-label="Kontakt">
              <ContactCard
                title={
                  query
                    ? `Nie znaleziono produktów dla „${query}”.`
                    : "Brak produktów...."
                }
              />
            </section>
          </>
        )}

        {!showFilters && (
          <Link to="/produkty" className="all-products-tab">
            <span>Wszystkie produkty</span>
            <span aria-hidden="true">↗</span>
          </Link>
        )}

        <ReturnBtn href="/#nasza-cukiernia" />
      </main>
    </>
  );
};

export default Products;
