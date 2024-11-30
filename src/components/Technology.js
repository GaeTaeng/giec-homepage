import React from 'react';
import './Technology.css'; // 스타일을 별도의 CSS 파일로 분리할 수 있습니다.
import img1 from './img/2000-00459_tech_1_k.jpg'; 
import img2 from './img/2000-00459_tech_2_k.jpg'; 
import img3 from './img/2000-00459_tech_3_k.jpg'; 

const Technology = () => {
  return (
    <div className="technology-container">
      {/* 이미지 1 */}
      <img
        src="/builder_images/technology_title_k.gif"
        alt="Technology Title"
        style={{
          position: 'absolute',
          left: '187px',
          top: '0px',
          zIndex: 11,
        }}
      />
      
      {/* 이미지 2 */}
      <img
        src={img1}
        alt="Technology Image 1"
      />
      
      {/* 이미지 3 */}
      <img
        src={img2}
        alt="Technology Image 2"
      />
      
      {/* 이미지 4 */}
      <img
        src={img3}
        alt="Technology Image 3"
      />

      {/* 텍스트 박스 */}
      <div  className="technology-text"
      >
        <span
          style={{
            fontSize: '9pt',
            letterSpacing: '1.5px',
            fontFamily: '굴림',
          }}
        >
          ▶ 전기 판넬 크리닝 (ELECTRONIC PANEL CLEANNING).<br />
          내용 : 전기판넬에 대한 지금까지의 관리는 사용중 고장이 발생될때까지 특별한 조치없이 방치되고 있는 실정입니다.
          이러한 결과 고가의 콘트롤러, RELAY, MC 등 장치에 먼지, 기름이 흐르고 접점 부위에 카본이 발생 접촉불량에 의한 기계의 오동작과 수명 단축을 일으켜 생산 지연에 따라 업체의 손실을 발생 시키고 있다고 봅니다.<br />
          당사는 이와 같은 손실부분을 감소시키고 항상 동일한 성능의 설비 상태로 유지시키기 위해 주기적으로 PANEL 내부를 전용 세척액 및 장비 그리고 전문인력이 CLEANNING 하여 부품의 수명연장, 오동작 방지, 화재위험 감소를 시켜 업체에 경비 절감의 효과를 발생 시키고 있습니다.<br />
          &lt;적용범위&gt;<br />
          1. 사출성형기 전기 PANEL.<br />
          2. 프레스 설비 전기 PANEL<br />
          3. 기타 전용기 전기 PANEL.
        </span>
      </div>
    </div>
  );
};

export default Technology;
