import BoardTable from '../components/common/BoardTable';
import PageHero from '../components/layout/PageHero';
import PageTabs from '../components/layout/PageTabs';
import { noticePosts } from '../data/board';

const boardTabs = [
  { label: '공지사항', to: '/board/notice' },
  { label: '자유게시판', to: '/board/free' },
];

const NoticeListPage = () => (
  <>
    <PageHero
      eyebrow="Board"
      title="알림마당"
      description="공지사항과 운영 소식을 리스트 형태로 확인할 수 있습니다."
      visualTitle="알림마당 배너 이미지"
      visualDescription="게시판 상단에는 공지, 커뮤니케이션, 문서, 상담 흐름을 암시하는 이미지가 적합합니다."
      visualItems={[
        '문서, 노트북, 미팅 장면',
        '텍스트가 없는 소통/업무 이미지',
        '리스트형 게시판과 충돌하지 않는 차분한 배경',
      ]}
    />
    <PageTabs items={boardTabs} />
    <section className="page-section">
      <div className="container">
        <div className="board-heading">
          <p className="section-heading__eyebrow">Notice</p>
          <h2>공지사항</h2>
        </div>
        <BoardTable
          posts={noticePosts}
          basePath="/board/notice"
          emptyLabel="등록된 공지사항이 없습니다."
        />
      </div>
    </section>
  </>
);

export default NoticeListPage;
