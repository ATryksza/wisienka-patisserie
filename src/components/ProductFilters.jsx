import { PRICE_RANGE } from "../constants/products";
import { categoryOptions } from "../data/products";

const ProductFilters = ({
  selectedCategories,
  maxPrice,
  onCategoryChange,
  onPriceChange,
}) => {
  return (
    <aside className="product-filters" aria-label="Filtry produktów">
      <p className="filter-title">Kategorie</p>

      <div className="category-options">
        {categoryOptions.map((option) => (
          <label className="category-option" key={option.key}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(option.key)}
              onChange={() => onCategoryChange(option.key)}
            />

            <span>{option.label}</span>
          </label>
        ))}
      </div>

      <div className="price-filter">
        <div className="filter-heading">
          <p className="filter-title">Cena maksymalna</p>

          <strong>{maxPrice} zł</strong>
        </div>

        <input
          className="price-slider"
          type="range"
          min={PRICE_RANGE.min}
          max={PRICE_RANGE.max}
          step="1"
          value={maxPrice}
          onChange={(event) => onPriceChange(Number(event.target.value))}
          aria-label="Maksymalna cena"
        />
      </div>
    </aside>
  );
};
export default ProductFilters;
