import PageHero from '../components/layout/PageHero';
import companyHistoryHero from '../assets/heroes/company-history.png';
import PageTabs from '../components/layout/PageTabs';
import { companyTimeline } from '../data/company';

const companyTabs = [
  { label: '인사말', to: '/company/greeting' },
  { label: '연혁', to: '/company/history' },
  { label: '오시는길', to: '/company/location' },
];

const CompanyHistoryPage = () => (
  <>
    <PageHero
      eyebrow="History"
      title="연혁"
      description="GI전자가 현장에서 쌓아온 기술과 고객 대응의 흐름을 정리했습니다."
      image={companyHistoryHero}
      visualTitle="연혁 배너 이미지"
      visualDescription="연혁 페이지는 브랜드의 시간성과 신뢰를 보여주는 설비, 현장, 기업 활동 이미지가 적합합니다."
      visualItems={[
        '기업 활동 또는 현장 설치 사진',
        '과하지 않은 다크 오버레이에 적합한 원본',
        '타임라인 본문을 방해하지 않는 차분한 톤',
      ]}
    />
    <PageTabs items={companyTabs} />

    <section className="page-section">
      <div className="container timeline">
        {companyTimeline.map((entry) => (
          <article className="timeline__item" key={entry.year}>
            <div className="timeline__year">{entry.year}</div>
            <div className="timeline__events">
              {entry.events.map((event) => (
                <p key={event}>{event}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default CompanyHistoryPage;
