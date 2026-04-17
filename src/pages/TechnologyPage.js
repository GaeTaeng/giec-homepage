import PageHero from '../components/layout/PageHero';
import { technologyOverview } from '../data/company';

const TechnologyPage = () => (
  <>
    <PageHero
      eyebrow={technologyOverview.eyebrow}
      title="기술현황"
      description={technologyOverview.lead}
      visualTitle="기술현황 배너 이미지"
      visualDescription="기술현황 상단에는 패널 클리닝, 설비 점검, 제어 시스템 세팅 같은 서비스 장면이 적합합니다."
      visualItems={[
        '점검/세척/유지보수 작업 장면',
        '기술 서비스가 보이는 현장 중심 이미지',
        '짙은 오버레이를 견딜 수 있는 대비감 있는 원본',
      ]}
    />

    <section className="page-section">
      <div className="container technology-grid">
        {technologyOverview.sections.map((section) => (
          <article className="technology-card" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default TechnologyPage;
