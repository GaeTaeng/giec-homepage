import BoardTable from '../components/common/BoardTable';
import PageHero from '../components/layout/PageHero';
import PageTabs from '../components/layout/PageTabs';
import { freeBoardPosts } from '../data/board';

const boardTabs = [
  { label: '공지사항', to: '/board/notice' },
  { label: '자유게시판', to: '/board/free' },
];

const FreeBoardListPage = () => (
  <>
    <PageHero
      eyebrow="Board"
      title="알림마당"
      description="자유게시판 UI 템플릿과 글 목록 예시를 제공합니다."
      visualTitle="커뮤니티 배너 이미지"
      visualDescription="자유게시판은 소통과 문의 흐름을 암시하는 업무/미팅 이미지가 적합합니다."
    />
    <PageTabs items={boardTabs} />
    <section className="page-section">
      <div className="container">
        <div className="board-heading">
          <p className="section-heading__eyebrow">Community</p>
          <h2>자유게시판</h2>
        </div>
        <BoardTable
          posts={freeBoardPosts}
          basePath="/board/free"
          writePath="/board/free/write"
          emptyLabel="등록된 게시물이 없습니다."
        />
      </div>
    </section>
  </>
);

export default FreeBoardListPage;
