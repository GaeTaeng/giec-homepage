import PageHero from '../components/layout/PageHero';
import companyIntroHero from '../assets/heroes/company-intro.png';
import PageTabs from '../components/layout/PageTabs';
import { companyIntro } from '../data/company';

const companyTabs = [
  { label: '인사말', to: '/company/greeting' },
  { label: '연혁', to: '/company/history' },
  { label: '오시는길', to: '/company/location' },
];

const CompanyGreetingPage = () => (
  <>
    <PageHero
      eyebrow="Company"
      title="회사소개"
      description="신뢰를 기반으로 한 제어기술과 유지보수 역량을 소개합니다."
      image={companyIntroHero}
      visualTitle="기업 소개 배너 이미지"
      visualDescription="회사소개 상단에는 기업 신뢰감을 주는 외부 전경, 설비, 작업 환경 이미지가 적합합니다."
      visualItems={[
        '본사 또는 작업 환경 전경',
        '설비와 공간이 함께 보이는 와이드 컷',
        '텍스트가 없는 원본 사진',
      ]}
    />
    <PageTabs items={companyTabs} />

    <section className="page-section">
      <div className="container intro-panel">
        <div className="intro-panel__content">
          <p className="section-heading__eyebrow">{companyIntro.eyebrow}</p>
          <h2>{companyIntro.title}</h2>
          <p className="intro-panel__lead">{companyIntro.lead}</p>
          <div className="intro-panel__paragraphs">
            {companyIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="intro-panel__signature">{companyIntro.signature}</p>
        </div>
        <div className="intro-panel__visual" aria-hidden="true">
          <div className="intro-panel__visual-card">
            <span>GI Branding</span>
            <strong>General Industry Electronic</strong>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default CompanyGreetingPage;
