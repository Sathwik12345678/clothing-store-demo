function ProductCard({ image, name, price }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={image} alt={name} />
        <button
          className="wishlist-button"
          type="button"
          aria-label={`Add ${name} to wishlist`}
        >
          ♡
        </button>
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </article>
  );
}

export default ProductCard;
