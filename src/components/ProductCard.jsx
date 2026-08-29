import React from "react";

const ProductCard = ({ index, product, onAddToCart }) => {
  return (
    <article className="product-card" key={product.name}>
      <div
        className={`product-image product-image-${(index % 3) + 1}`}
        aria-hidden="true"
      />

      <div className="product-info">
        <div>
          <h2>{product.name}</h2>

          <p>{product.description}</p>
        </div>

        <div className="product-buy-row">
          <strong>{product.price}</strong>

          <button type="button" onClick={() => onAddToCart(product)}>
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
