import { Link } from 'react-router-dom';

const BoardTable = ({ posts, basePath, writePath, emptyLabel }) => (
  <section className="board-shell">
    {writePath ? (
      <div className="board-shell__actions">
        <Link className="button-link button-link--small" to={writePath}>
          글쓰기
        </Link>
      </div>
    ) : null}

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
              <span className="board-table__cell board-table__cell--number" data-label="번호">
                {posts.length - index}
              </span>
              <span className="board-table__cell board-table__cell--title" data-label="제목">
                {post.title}
              </span>
              <span className="board-table__cell" data-label="작성자">
                {post.author}
              </span>
              <span className="board-table__cell" data-label="작성일">
                {post.date}
              </span>
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
