import { useEffect, useRef, useState } from 'react';

const HeroSlider = ({ slides, onScrollNext, nextSectionLabel = '다음 섹션' }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCompactViewport, setIsCompactViewport] = useState(false);
  const heroRef = useRef(null);
  const touchStartYRef = useRef(null);
  const releaseTimerRef = useRef(null);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [slides.length]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const syncViewport = (event) => {
      setIsCompactViewport(event.matches);
    };

    setIsCompactViewport(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', syncViewport);
    } else {
      mediaQuery.addListener(syncViewport);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', syncViewport);
      } else {
        mediaQuery.removeListener(syncViewport);
      }
    };
  }, []);

  useEffect(() => {
    if (!onScrollNext) {
      return undefined;
    }

    const heroElement = heroRef.current;

    if (!heroElement) {
      return undefined;
    }

    const releaseScrollLock = () => {
      window.clearTimeout(releaseTimerRef.current);
      releaseTimerRef.current = window.setTimeout(() => {
        releaseTimerRef.current = null;
      }, 920);
    };

    const isHeroLeadingSection = () => {
      const rect = heroElement.getBoundingClientRect();

      return rect.top > -(window.innerHeight * 0.12) && rect.bottom > window.innerHeight * 0.6;
    };

    const requestNextSection = () => {
      if (releaseTimerRef.current) {
        return;
      }

      onScrollNext();
      releaseScrollLock();
    };

    const handleWheel = (event) => {
      if (event.deltaY < 16 || !isHeroLeadingSection()) {
        return;
      }

      event.preventDefault();
      requestNextSection();
    };

    const handleTouchStart = (event) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchEnd = (event) => {
      const touchStartY = touchStartYRef.current;

      touchStartYRef.current = null;

      if (touchStartY == null || !isHeroLeadingSection()) {
        return;
      }

      const touchEndY = event.changedTouches[0]?.clientY ?? touchStartY;

      if (touchStartY - touchEndY > 56) {
        requestNextSection();
      }
    };

    heroElement.addEventListener('wheel', handleWheel, { passive: false });
    heroElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    heroElement.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      heroElement.removeEventListener('wheel', handleWheel);
      heroElement.removeEventListener('touchstart', handleTouchStart);
      heroElement.removeEventListener('touchend', handleTouchEnd);
      window.clearTimeout(releaseTimerRef.current);
      releaseTimerRef.current = null;
    };
  }, [onScrollNext]);

  const activeSlide = slides[activeIndex];
  const showVisualGuide = !activeSlide.image;
  const titleLines =
    isCompactViewport && activeSlide.titleLinesMobile?.length
      ? activeSlide.titleLinesMobile
      : activeSlide.titleLines?.length
        ? activeSlide.titleLines
        : [activeSlide.title];

  return (
    <section className="hero-slider" ref={heroRef}>
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
        <div className={`hero-slider__grid${showVisualGuide ? '' : ' hero-slider__grid--image'}`}>
          <div className="hero-slider__copy">
            <p className="hero-slider__eyebrow">{activeSlide.eyebrow}</p>
            <h1>
              {titleLines.map((line) => (
                <span className="hero-slider__title-line" key={line}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero-slider__description">{activeSlide.description}</p>
          </div>

          {showVisualGuide ? (
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
          ) : null}
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

        {onScrollNext ? (
          <button
            className="hero-slider__scroll-cue"
            type="button"
            onClick={onScrollNext}
            aria-label={`${nextSectionLabel} 섹션으로 이동`}
          >
            <span className="hero-slider__scroll-cue-copy">
              <span className="hero-slider__scroll-cue-label">다음 섹션</span>
              <strong>{nextSectionLabel}</strong>
            </span>
            <span className="hero-slider__scroll-cue-icon" aria-hidden="true" />
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default HeroSlider;
