import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import { productFamilies, products } from '../data/productCatalog';

const ProductDetailPage = () => {
  const { productSlug } = useParams();
  const product = products.find((item) => item.slug === productSlug);

  if (!product) {
    return (
      <section className="page-section">
        <div className="container empty-state">
          찾으시는 제품 정보를 확인할 수 없습니다.
        </div>
      </section>
    );
  }

  const family = productFamilies.find((item) => item.slug === product.familySlug);

  return (
    <>
      <PageHero
        eyebrow={family?.title || 'Product'}
        title={product.name}
        description={product.summary}
        image={product.heroImage}
      />

      <section className="page-section">
        <div className="container product-detail">
          <div className="product-detail__summary">
            <div className="product-detail__image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-detail__intro">
              <p className="section-heading__eyebrow">{product.code}</p>
              <h2>{product.name}</h2>
              <p>{product.summary}</p>
              <div className="product-detail__actions">
                <Link className="button-link" to="/board/free/write">
                  문의하기
                </Link>
                <a className="button-link button-link--ghost" href={product.legacyUrl} rel="noreferrer" target="_blank">
                  원문 보기
                </a>
              </div>
            </div>
          </div>

          <div className="product-detail__content">
            <section className="detail-card">
              <h3>Key Features</h3>
              <ul>
                {product.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="detail-card">
              <h3>Applications</h3>
              <ul>
                {product.applications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="detail-card detail-card--specs">
              <h3>Specs</h3>
              <dl>
                {product.specs.map((spec) => (
                  <div key={spec.label}>
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
