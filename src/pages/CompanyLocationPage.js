import PageHero from '../components/layout/PageHero';
import companyLocationHero from '../assets/heroes/company-location.png';
import PageTabs from '../components/layout/PageTabs';
import { companyLocation } from '../data/company';

const companyTabs = [
  { label: '인사말', to: '/company/greeting' },
  { label: '연혁', to: '/company/history' },
  { label: '오시는길', to: '/company/location' },
];

const CompanyLocationPage = () => (
  <>
    <PageHero
      eyebrow="Location"
      title="오시는길"
      description="방문 상담과 현장 점검을 위해 위치와 연락처 정보를 정리했습니다."
      image={companyLocationHero}
      visualTitle="방문 안내 배너 이미지"
      visualDescription="오시는길 페이지는 건물 외관, 주변 환경, 방문 동선을 암시하는 이미지가 적합합니다."
      visualItems={[
        '회사 건물 또는 주변 거리 전경',
        '지도/주소 정보와 충돌하지 않는 단순한 구도',
        '텍스트가 없는 원본 사진',
      ]}
    />
    <PageTabs items={companyTabs} />

    <section className="page-section">
      <div className="container location-grid">
        <div className="location-map">
          <div className="location-map__placeholder">
            <strong>GI전자</strong>
            <p>{companyLocation.address}</p>
          </div>
          <a href={companyLocation.mapQuery} rel="noreferrer" target="_blank">
            지도 열기
          </a>
        </div>

        <div className="location-card">
          <div>
            <span>주소</span>
            <strong>{companyLocation.address}</strong>
          </div>
          <div>
            <span>대표전화</span>
            <strong>{companyLocation.phone}</strong>
          </div>
          <div>
            <span>팩스</span>
            <strong>{companyLocation.fax}</strong>
          </div>
          <div>
            <span>이메일</span>
            <strong>{companyLocation.email}</strong>
          </div>
          <div>
            <span>운영시간</span>
            <strong>{companyLocation.businessHours}</strong>
          </div>
        </div>
      </div>

      <div className="container location-notes">
        {companyLocation.transitNotes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
    </section>
  </>
);

export default CompanyLocationPage;
