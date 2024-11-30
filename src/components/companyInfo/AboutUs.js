import React from "react";
import "./AboutUs.css"; // 외부 스타일시트 추가

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us-section">
      <h2 className="section-title">회사소개</h2>
      <p>
        저희 GI 전자의 제품을 사용하여 주시는 고객 여러분께 감사의 말씀을
        올립니다. 저희 GI 전자는 사출성형기 및 유압설비의 제어장치를 제작하고
        설비의 내구년수를 향상하고 항상 정상 가동 시키기 위해 설비의 유지보수를
        전담하는 기업입니다.
      </p>
      <p>
        주요생산품으로는 <strong>사출성형기 콘트롤러</strong>, <strong>전자비례변 콘트롤러</strong>,
        <strong>밴드히터</strong> 및 각종 콘트롤러의 주문제작이 있습니다. 당사는
        실용, 창의, 신뢰의 기업이념 아래 고객이 필요로 하는 제품을 항상 구상하여
        제작하고 공급하며, 고객의 설비 및 제품 품질을 안정시켜 효율을 증가시키고
        원가 절감을 통해 고객의 기업에 만족을 주는 기업이 되기 위해 최선을 다하고
        있습니다.
      </p>
      <p>
        최고의 품질과 사후 관리로 고객에게 만족을 드릴 것이며, 기술 개발 및 성능
        개선을 통해 더욱 향상된 제품을 공급하도록 노력하겠습니다.
      </p>
      <footer>
        <p>GI전자 대표 김범선</p>
      </footer>
    </section>
  );
};

export default AboutUs;
