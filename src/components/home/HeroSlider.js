import { useEffect, useState } from 'react';

const HeroSlider = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <section className="hero-slider">
      <div className="hero-slider__slides" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`hero-slider__slide${index === activeIndex ? ' is-active' : ''}`}
            style={slide.image ? { backgroundImage: `linear-gradient(rgba(6, 10, 16, 0.55), rgba(6, 10, 16, 0.55)), url(${slide.image})` } : undefined}
          />
        ))}
      </div>

      <div className="container hero-slider__content">
        <div className="hero-slider__grid">
          <div className="hero-slider__copy">
            <p className="hero-slider__eyebrow">{activeSlide.eyebrow}</p>
            <h1>{activeSlide.title}</h1>
            <p className="hero-slider__description">{activeSlide.description}</p>
          </div>

          <aside className="hero-slider__visual" aria-label="메인 비주얼 준비 안내">
            <span>이미지 준비중</span>
            <strong>{activeSlide.visualTitle}</strong>
            <p>{activeSlide.visualDescription}</p>
            <ul>
              {activeSlide.visualItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="hero-slider__controls">
          <div className="hero-slider__progress">
            <span>{String(activeIndex + 1).padStart(2, '0')}</span>
            <div className="hero-slider__bars">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  className={index === activeIndex ? 'is-active' : undefined}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${index + 1}번 슬라이드 보기`}
                />
              ))}
            </div>
            <span>{String(slides.length).padStart(2, '0')}</span>
          </div>

          <div className="hero-slider__buttons">
            <button
              type="button"
              onClick={() => setActiveIndex((current) => (current - 1 + slides.length) % slides.length)}
              aria-label="이전 슬라이드"
            >
              이전
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((current) => (current + 1) % slides.length)}
              aria-label="다음 슬라이드"
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
