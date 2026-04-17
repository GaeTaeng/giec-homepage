import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navigationSections } from '../../data/navigation';

const MegaMenu = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="mega-menu" onClick={onClose} role="presentation">
      <div
        className="mega-menu__panel"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="전체 메뉴"
      >
        <button className="mega-menu__close" type="button" onClick={onClose} aria-label="전체 메뉴 닫기">
          <span />
          <span />
        </button>
        <div className="mega-menu__grid">
          {navigationSections.map((section) => (
            <section className="mega-menu__section" key={section.title}>
              <div className="mega-menu__heading">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>
              <div className="mega-menu__links">
                {section.items.map((item) => (
                  <Link key={item.to} to={item.to} onClick={onClose}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
