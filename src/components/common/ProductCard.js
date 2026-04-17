import { Link } from 'react-router-dom';

const ProductCard = ({ product, compact = false }) => (
  <article className={`product-card${compact ? ' product-card--compact' : ''}`}>
    <div className="product-card__media">
      <img src={product.image} alt={product.name} />
    </div>
    <div className="product-card__body">
      <p className="product-card__code">{product.code}</p>
      <h3 className="product-card__title">{product.name}</h3>
      <p className="product-card__summary">{product.summary}</p>
      <ul className="product-card__tags">
        {product.highlights.slice(0, compact ? 2 : 3).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link className="button-link button-link--inline" to={`/product/${product.slug}`}>
        자세히 보기
      </Link>
    </div>
  </article>
);

export default ProductCard;
