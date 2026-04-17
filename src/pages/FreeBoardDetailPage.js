import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import PageTabs from '../components/layout/PageTabs';
import { freeBoardPosts } from '../data/board';

const boardTabs = [
  { label: '공지사항', to: '/board/notice' },
  { label: '자유게시판', to: '/board/free' },
];

const FreeBoardDetailPage = () => {
  const { postId } = useParams();
  const post = freeBoardPosts.find((item) => item.id === postId);

  return (
    <>
      <PageHero
        eyebrow="Board"
        title="알림마당"
        description="자유게시판 상세 템플릿입니다."
        visualTitle="커뮤니티 배너 이미지"
        visualDescription="자유게시판 상세도 소통/문의 계열의 차분한 업무 이미지를 쓰는 편이 적합합니다."
      />
      <PageTabs items={boardTabs} />
      <section className="page-section">
        <div className="container">
          {post ? (
            <article className="board-detail">
              <header className="board-detail__header">
                <p className="section-heading__eyebrow">자유게시판</p>
                <h2>{post.title}</h2>
                <div className="board-detail__meta">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                  <span>조회 {post.views}</span>
                </div>
              </header>
              <div className="board-detail__content">
                {post.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="board-detail__actions">
                <Link className="button-link" to="/board/free">
                  목록
                </Link>
                <Link className="button-link button-link--ghost" to="/board/free/write">
                  글쓰기
                </Link>
              </div>
            </article>
          ) : (
            <div className="empty-state">해당 게시글을 찾을 수 없습니다.</div>
          )}
        </div>
      </section>
    </>
  );
};

export default FreeBoardDetailPage;
