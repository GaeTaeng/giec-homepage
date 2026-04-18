import PageHero from '../components/layout/PageHero';
import contactSupportHero from '../assets/heroes/contact-support.png';
import PageTabs from '../components/layout/PageTabs';

const boardTabs = [
  { label: '공지사항', to: '/board/notice' },
  { label: '자유게시판', to: '/board/free' },
];

const FreeBoardWritePage = () => (
  <>
    <PageHero
      eyebrow="Support"
      title="1:1 문의 / 자유게시판 작성"
      description="첫 슬라이스에서는 UI 템플릿 형태로 문의 작성 경험을 정리합니다."
      image={contactSupportHero}
      visualTitle="문의 작성 배너 이미지"
      visualDescription="작성 페이지는 상담, 응대, 커뮤니케이션 장면처럼 너무 복잡하지 않은 업무 사진이 적합합니다."
    />
    <PageTabs items={boardTabs} />
    <section className="page-section">
      <div className="container">
        <form className="board-form">
          <div className="board-form__row">
            <label htmlFor="board-title">제목</label>
            <input id="board-title" placeholder="제목을 입력하세요." type="text" />
          </div>
          <div className="board-form__row">
            <label htmlFor="board-author">작성자</label>
            <input id="board-author" placeholder="작성자명을 입력하세요." type="text" />
          </div>
          <div className="board-form__row">
            <label htmlFor="board-email">이메일</label>
            <input id="board-email" placeholder="회신 받을 이메일을 입력하세요." type="email" />
          </div>
          <div className="board-form__row">
            <label htmlFor="board-body">내용</label>
            <textarea id="board-body" placeholder="문의 내용을 입력하세요." rows="10" />
          </div>
          <div className="board-form__actions">
            <button className="button-link button-link--ghost" type="button">
              취소
            </button>
            <button className="button-link" type="submit">
              등록
            </button>
          </div>
        </form>
      </div>
    </section>
  </>
);

export default FreeBoardWritePage;
