import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import PageTabs from '../components/layout/PageTabs';
import { noticePosts } from '../data/board';

const boardTabs = [
  { label: '공지사항', to: '/board/notice' },
  { label: '자유게시판', to: '/board/free' },
];

const NoticeDetailPage = () => {
  const { postId } = useParams();
  const post = noticePosts.find((item) => item.id === postId);

  return (
    <>
      <PageHero
        eyebrow="Board"
        title="알림마당"
        description="공지사항 상세 템플릿입니다."
        visualTitle="알림마당 배너 이미지"
        visualDescription="공지 상세도 리스트와 동일한 계열의 업무/문서 중심 이미지를 쓰는 편이 일관됩니다."
      />
      <PageTabs items={boardTabs} />
      <section className="page-section">
        <div className="container">
          {post ? (
            <article className="board-detail">
              <header className="board-detail__header">
                <p className="section-heading__eyebrow">공지사항</p>
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
                <Link className="button-link" to="/board/notice">
                  목록
                </Link>
              </div>
            </article>
          ) : (
            <div className="empty-state">해당 공지사항을 찾을 수 없습니다.</div>
          )}
        </div>
      </section>
    </>
  );
};

export default NoticeDetailPage;
