import React, {  useState } from "react";
import "./Dashboard.css";
import { PRODUCTS } from "./Constant/Products";

const HeroSection = () => {
  const [ver, setVer] = useState(1);

  return (
    <section className={`hero v${ver}`}>
      <h2 className="hero-title">
        고객이 신뢰하는 제품
        <br />최고의 콘트롤러 주문제작 기업
      </h2>
      <div className="version-buttons">
        {[1, 2, 3, 4].map((num) => (
          <button key={num} onClick={() => setVer(num)} className={ver === num ? "active" : ""}>
            Ver {num}
          </button>
        ))}
      </div>
    </section>
  );
};

const ProductSection = () => {
  return (
    <section className="products">
      <h2 className="section-title">Our Product</h2>
      <p className="section-description">GI전자는 고객에게 최고의 품질과 기술력으로 최적의 상품을 제공합니다.</p>
      <div className="product-grid">
        {PRODUCTS.map((product, idx) => {
          return (
            <div className="product-card" key={idx}>
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <h3 className="product-title">[{product.code}] {product.name}</h3>
              <p>AC220V(10) 60Hz, 접촉, 입력 6채널, 출력 4채널</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};



const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-overlay">
        <h2 className="contact-title">Contact US</h2>
        <p className="contact-description">문의주시면 확인하여 최대한 빠르게 연락드리도록 하겠습니다.</p>
        <button className="contact-button">문의하기 →</button>
      </div>
    </section>
  );
};
const Dashboard = () => (
  <div>
    <HeroSection />
    <ProductSection />
    <ContactSection />
  </div>
);

export default Dashboard;
