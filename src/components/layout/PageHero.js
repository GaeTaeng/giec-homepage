const PageHero = ({ eyebrow, title, description, image, visualTitle, visualDescription, visualItems = [] }) => (
  <section
    className={`page-hero${image ? ' page-hero--image' : ' page-hero--placeholder'}`}
    style={image ? { backgroundImage: `linear-gradient(rgba(10, 14, 20, 0.58), rgba(10, 14, 20, 0.58)), url(${image})` } : undefined}
  >
    <div className="container page-hero__inner">
      {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
      <div className="page-hero__grid">
        <div className="page-hero__copy">
          <h1>{title}</h1>
          {description ? <p>{description}</p> : null}
        </div>
        {!image ? (
          <aside className="page-hero__placeholder-card" aria-label="이미지 준비 안내">
            <span>이미지 준비중</span>
            <strong>{visualTitle || '페이지 상단 비주얼이 준비중입니다.'}</strong>
            {visualDescription ? <p>{visualDescription}</p> : null}
            {visualItems.length ? (
              <ul>
                {visualItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </aside>
        ) : null}
      </div>
    </div>
  </section>
);

export default PageHero;
