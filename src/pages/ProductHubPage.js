import { useState } from 'react';
import PageHero from '../components/layout/PageHero';
import productHubHero from '../assets/heroes/product-hub.png';
import ProductCard from '../components/common/ProductCard';
import { productFamilies, products } from '../data/productCatalog';

const ProductHubPage = () => {
  const [activeFamily, setActiveFamily] = useState('all');

  const filteredProducts =
    activeFamily === 'all' ? products : products.filter((product) => product.familySlug === activeFamily);

  return (
    <>
      <PageHero
        eyebrow="Product Information"
        title="제품소개"
        description="옛 제품소개의 기술 자산을 현대적인 탐색 구조로 재정리한 제품 허브입니다."
        image={productHubHero}
        visualTitle="대표 제품군 배너 이미지"
        visualDescription="제품소개 상단에는 제어장치, 패널, 회로, 현장 테스트 장면처럼 제품군을 상징하는 사진이 적합합니다."
        visualItems={[
          '제품 패널이나 제어기 정면 컷',
          '텍스트가 겹치지 않는 단순한 배경',
          '카테고리 전체를 대표할 수 있는 산업용 전자 이미지',
        ]}
      />

      <section className="page-section page-section--tight">
        <div className="container family-grid">
          {productFamilies.map((family) => (
            <article className="family-card" key={family.slug}>
              <p className="section-heading__eyebrow">{family.title}</p>
              <h2>{family.summary}</h2>
              <p>{family.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="product-filter">
            <button
              className={activeFamily === 'all' ? 'is-active' : undefined}
              type="button"
              onClick={() => setActiveFamily('all')}
            >
              전체
            </button>
            {productFamilies.map((family) => (
              <button
                className={activeFamily === family.slug ? 'is-active' : undefined}
                key={family.slug}
                type="button"
                onClick={() => setActiveFamily(family.slug)}
              >
                {family.title}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} compact />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductHubPage;
