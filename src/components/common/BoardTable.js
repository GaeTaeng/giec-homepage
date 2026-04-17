import { Link } from 'react-router-dom';

const BoardTable = ({ posts, basePath, writePath, emptyLabel }) => (
  <section className="board-shell">
    <div className="board-shell__actions">
      <div className="board-search" aria-hidden="true">
        <input placeholder="검색어를 입력하세요" readOnly />
        <button type="button">검색</button>
      </div>
      {writePath ? (
        <Link className="button-link button-link--small" to={writePath}>
          글쓰기
        </Link>
      ) : null}
    </div>

    {posts.length ? (
      <div className="board-table">
        <div className="board-table__head">
          <span>번호</span>
          <span>제목</span>
          <span>작성자</span>
          <span>작성일</span>
        </div>
        <div className="board-table__body">
          {posts.map((post, index) => (
            <Link className="board-table__row" key={post.id} to={`${basePath}/${post.id}`}>
              <span>{posts.length - index}</span>
              <span>{post.title}</span>
              <span>{post.author}</span>
              <span>{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    ) : (
      <div className="empty-state">{emptyLabel}</div>
    )}
  </section>
);

export default BoardTable;
