import React from 'react';
import './ProductIntroduction.css'; // 외부 CSS 파일 포함

const ProductIntroduction = () => {
  const products = [
    {
      id: 146822,
      name: '사출성형기 콘트롤러',
      description: `1. 운용방법의 숙지가 빠르고 간단하며 공정별 동작 확인이 쉽다.
                    2. 형체측 위치 제어를 근접 및 포테션메타로 선택 가능하다.
                    3. 콘트롤러의 회로가 모듈화 되어 유지보수가 간단하다.
                    4. 기능 제어용 PLC를 사용자가 임의 선택 가능
                    5. 기능 대비 단가 저렴`,
      imageUrl: 'http://free.smipc.or.kr/2000/00/459/tp_html/img/2000-00459_cat_1_small_img.gif',
      detailUrl: 'DetailView.jsp?objectid=146822&comCode=2000-00459&coLang=1&design=1',
    },
    {
      id: 146826,
      name: '비례밸브 콘트롤러',
      description: `1. 기본 2CH부터 4CH까지 사용자의 용도에 따라 선택 가능.
                    2. CH별 출력 확인은 SELECT 스위치를 선택하여 확인.
                    3. 용량에 비교하여 크기가 작아 설치 효율 증대.
                    4. 기능 및 성능 대비하여 단가 저렴.
                    <br><br>&lt;적용분야&gt;
                    <br>1. 사출성형기.
                    <br>2. 유압프레스.
                    <br>3. 기타 비례변 제어장치.`,
      imageUrl: 'http://free.smipc.or.kr/2000/00/459/tp_html/img/2000-00459_cat_2_small_img.gif',
      detailUrl: 'DetailView.jsp?objectid=146826&comCode=2000-00459&coLang=1&design=1',
    },
    {
      id: 98932,
      name: '밴드히터(BAND HEATER)',
      description: `1. 실린더 고정이 볼트식이 아닌 고정 클램프 방식으로 체결시 기존 볼트 고정식 보다 체결 작업시간 단축 가능.
                    2. 일반용과 보온용 2가지 TYPE 제작.
                    3. 열전도가 우수한 고급 운모판을 사용하여 절연 및 열전도가 우수함.
                    4. 주문시 신속한 납품과 상대적으로 저렴한 단가로 고객에게 만족을 드림.
                    <br><br>&lt;적용분야&gt;
                    <br>1. 사출성형기 실린더
                    <br>2. 압출기 실린더.`,
      imageUrl: 'http://free.smipc.or.kr/2000/00/459/tp_html/img/2000-00459_cat_3_small_img.gif',
      detailUrl: 'DetailView.jsp?objectid=98932&comCode=2000-00459&coLang=1&design=1',
    },
    {
      id: 98932,
      name: 'RELAY 출력 카드',
      description: `1. 입출력이 단자대 방식으로 처리되어 범용적으로 사용가능.
                    2. 입출력 동작을 취부된 LED로 확인이 가능.
                    3. 8점 단위로 구성되어 출력점수 증가시 원가절감 가능.
                    4. 제품 SIZE가 작아 취부 작업시 공간 절약.
                    5. 제품의 단순화로 가격이 저렴.
                    6. RELAY 접점 보호용으로 TNR 삽입.`,
      imageUrl: 'http://free.smipc.or.kr/2000/00/459/tp_html/img/2000-00459_cat_4_small_img.gif',
      detailUrl: 'DetailView.jsp?objectid=98932&comCode=2000-00459&coLang=1&design=1',
    },
    {
      id: 98932,
      name: 'TR 출력 카드',
      description: `1. 입출력이 단자대 방식으로 처리되어 범용적으로 사용가능.
                    2. 입력과 출력부에 LED가 추가되어 입출력 동작 확인 가능.
                    3. 8점 단위로 구성되어 출력점수 증가시 원가절감 가능.
                    4. 제품 SIZE가 작아 취부 작업시 공간 절약.
                    5. 제품의 단순화로 가격이 저렴.
                    6. 과전압 발생시 출력 보호용으로 보호 회로 삽입.`,
      imageUrl: 'http://free.smipc.or.kr/2000/00/459/tp_html/img/2000-00459_cat_5_small_img.gif',
      detailUrl: 'DetailView.jsp?objectid=98932&comCode=2000-00459&coLang=1&design=1',
    },
    {
      id: 98932,
      name: 'SSR 출력카드',
      description: `1. 입출력이 단자대 방식으로 처리되어 범용적으로 사용가능.
                    2. 입출력 동작을 취부된 LED로 확인이 가능.
                    3. 8점 단위로 구성되어 출력점수 증가시 원가절감 가능.
                    4. 제품 SIZE가 작아 취부 작업시 공간 절약.
                    5. 제품의 단순화로 가격이 저렴.`,
      imageUrl: 'http://free.smipc.or.kr/2000/00/459/tp_html/img/2000-00459_cat_6_small_img.gif',
      detailUrl: 'DetailView.jsp?objectid=98932&comCode=2000-00459&coLang=1&design=1',
    },
    // 추가 상품을 여기에 나열
  ];

  return (
    <div className="product-container">
      <table className="product-table" width="95%">
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td width="20%" align="center" valign="top">
                <a href={product.detailUrl}>
                  <img src={product.imageUrl} alt={product.name} className="product-image" />
                </a>
              </td>
              <td width="80%" valign="top">
                <table width="100%" className="product-details" cellspacing="0">
                  <tbody>
                    <tr>
                      <td className="product-title">
                        <strong>
                          <a href={product.detailUrl}>{product.name}</a>
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="product-description" dangerouslySetInnerHTML={{ __html: product.description }} />
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductIntroduction;
