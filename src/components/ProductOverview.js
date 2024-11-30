import React from 'react';

const ProductOverview = () => {
  return (
    <div className="product-overview">
      <h2>제품소개</h2>
      <p>GI 전자는 사출성형기, 유압설비, 전자비례변, 밴드히터 등의 다양한 제품을 제공하며, 고객의 요구에 맞춰 설계 및 제작을 합니다.</p>
      <div className="product-images">
        <img src="img/2000-00459_intro_1_k.jpg" alt="Product 1" />
        <img src="img/2000-00459_intro_2_k.jpg" alt="Product 2" />
      </div>
    </div>
  );
};

export default ProductOverview;
