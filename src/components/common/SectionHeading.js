const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => (
  <div className={`section-heading section-heading--${align}`}>
    {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
    <h2 className="section-heading__title">{title}</h2>
    {description ? <p className="section-heading__description">{description}</p> : null}
  </div>
);

export default SectionHeading;
