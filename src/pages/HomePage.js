import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading';
import ProductCard from '../components/common/ProductCard';
import HeroSlider from '../components/home/HeroSlider';
import { featuredProductSlugs, products } from '../data/productCatalog';
import { noticePosts } from '../data/board';

const slides = [
  {
    eyebrow: 'Best Quality, Optimum Management',
    title: '적극적인 제품 향상과 유지보수로 최고의 서비스를 제공합니다',
    description: '설비 운용과 현장 대응까지 함께 고려한 산업용 전자 파트너를 지향합니다.',
    visualTitle: '산업용 제어 부품 클로즈업 메인컷',
    visualDescription: '메인 히어로에는 실제 설비 제어부, 보드, 패널 등 텍스트가 없는 현장 사진이 필요합니다.',
    visualItems: [
      '어두운 배경의 제어기/회로 보드 클로즈업',
      '브랜드 블루 포인트를 살릴 수 있는 금속성 질감',
      '텍스트 영역이 비어 있는 좌측 또는 우측 구도',
    ],
  },
  {
    eyebrow: 'Sustainable Technology Development',
    title: '최고의 품질, 최적의 관리로 고객의 지속가능한 기술개발을 돕습니다',
    description: '현장과 유지보수 관점에서 설비 안정화를 지원하는 기술 서비스를 제공합니다.',
    visualTitle: '현장 점검 및 유지보수 작업 장면',
    visualDescription: '브랜드 메시지와 맞게 현장 대응, 패널 점검, 유지보수 흐름을 보여주는 사진이 적합합니다.',
    visualItems: [
      '작업자 손과 장비가 함께 보이는 현장컷',
      '불필요한 타이포나 로고가 없는 원본 사진',
      '브랜드 신뢰감을 줄 수 있는 정돈된 작업 환경',
    ],
  },
  {
    eyebrow: 'General Industry Electronic',
    title: '고객이 신뢰하는 제품 최고의 콘트롤러 주문제작 기업',
    description: '제조 현장에 맞춘 주문형 제어장치와 부품 공급 역량을 축적해왔습니다.',
    visualTitle: '제품 제작 또는 테스트 장비 중심의 브랜드컷',
    visualDescription: '제조 현장, 테스트 장비, 주문 제작 이미지를 통해 B2B 기술 브랜드 인상을 강화하는 컷이 적합합니다.',
    visualItems: [
      '제품 조립 또는 테스트 장면',
      '장비, 공구, 패널이 함께 보이는 장면',
      '검은 톤 오버레이를 견딜 수 있는 콘트라스트 높은 원본',
    ],
  },
];

const HomePage = () => {
  const featuredProducts = featuredProductSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter(Boolean);

  return (
    <div className="home-page">
      <HeroSlider slides={slides} />

      <section className="home-section home-section--products">
        <div className="container home-products">
          <div className="home-products__intro">
            <SectionHeading
              eyebrow="제품소개"
              title="Our Product"
              description="GI전자는 고객에게 최고의 품질과 기술력으로 최적의 상품을 제공합니다."
            />
            <p className="home-products__copy">
              옛 제품소개의 기술 자산은 유지하되, 새로운 페이지에서는 제품군 탐색과 상세 진입이 더 쉽도록
              재구성합니다.
            </p>
            <Link className="button-link" to="/product">
              제품 더 보기
            </Link>
          </div>
          <div className="home-products__grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--lookup">
        <div className="container lookup-banner">
          <div>
            <p className="lookup-banner__eyebrow">빠른 제품 진입</p>
            <h2>원하는 제품을 빠르게 탐색해보세요.</h2>
            <div className="lookup-banner__chips">
              <span># 컨트롤러</span>
              <span># 비례밸브</span>
              <span># 출력카드</span>
              <span># 주문제작</span>
            </div>
          </div>
          <Link className="button-link button-link--light" to="/product">
            제품 허브로 이동
          </Link>
        </div>
      </section>

      <section className="home-section home-section--news">
        <div className="container news-preview">
          <SectionHeading eyebrow="뉴스레터" title="News" description="GI전자의 주요 소식을 확인하세요." />
          <div className="news-preview__list">
            {noticePosts.map((post) => (
              <article className="news-preview__item" key={post.id}>
                <div className="news-preview__date">
                  <strong>{post.date.split('.').slice(2).join('') || post.date}</strong>
                  <span>{post.date}</span>
                </div>
                <div className="news-preview__body">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
                <Link className="button-link button-link--ghost" to={`/board/notice/${post.id}`}>
                  보기
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--contact">
        <div className="container">
          <div className="contact-banner">
            <div className="contact-banner__copy">
              <p className="contact-banner__eyebrow">Contact Us</p>
              <h2>문의 접수 이후 빠르게 검토하고 회신드릴 수 있도록 대응 흐름을 정리했습니다.</h2>
              <p className="contact-banner__description">
                현재 이 영역은 실제 사진 대신 안내형 비주얼로 운영합니다. 이미지 자산이 준비되면 상담,
                기술지원, 현장 커뮤니케이션 계열의 컷으로 교체하면 됩니다.
              </p>
              <div className="contact-banner__actions">
                <Link className="button-link button-link--light" to="/board/free/write">
                  문의하기
                </Link>
              </div>
            </div>

            <aside className="contact-banner__visual" aria-label="문의 배너 이미지 준비 안내">
              <span>이미지 준비중</span>
              <strong>문의 배너용 상담 / 기술지원 이미지</strong>
              <p>
                하단 CTA에는 문서나 노트북 스톡컷보다 실제 상담, 엔지니어 응대, 미팅 장면처럼 신뢰감을
                주는 산업 현장 계열 이미지가 더 적합합니다.
              </p>
              <ul>
                <li>상담 또는 미팅이 진행되는 장면</li>
                <li>엔지니어와 설비가 함께 보이는 와이드 컷</li>
                <li>텍스트가 겹치지 않는 비워진 여백이 있는 원본 이미지</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
