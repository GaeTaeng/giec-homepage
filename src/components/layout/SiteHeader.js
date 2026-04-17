import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigationSections, primaryNav } from '../../data/navigation';
import MegaMenu from './MegaMenu';

const SiteHeader = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === '/';
  const useLightHeader = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = primaryNav.map((item) => ({
    ...item,
    children: navigationSections.find((section) => section.title === item.label)?.items || [],
  }));

  return (
    <>
      <header
        className={`site-header${useLightHeader ? ' site-header--light' : ''}${
          scrolled ? ' site-header--scrolled' : ''
        }`}
      >
        <div className="site-header__inner container">
          <Link
            className={`site-header__logo-placeholder${useLightHeader ? ' site-header__logo-placeholder--light' : ''}`}
            to="/"
            aria-label="홈으로 이동"
          >
            <span>LOGO</span>
            <strong>로고 추가 필요</strong>
          </Link>

          <div className="site-header__nav-region">
            <nav className="site-header__nav" aria-label="주요 메뉴">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="site-header__dropdown">
              <div className="site-header__dropdown-inner container">
                {navigationSections.map((section) => (
                  <section className="site-header__dropdown-section" key={section.title}>
                    <div className="site-header__dropdown-heading">
                      <h2>{section.title}</h2>
                      <p>{section.description}</p>
                    </div>
                    <div className="site-header__dropdown-links">
                      {section.items.map((child) => (
                        <Link key={child.to} to={child.to}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>

          <button
            className={`menu-button${useLightHeader ? ' menu-button--light' : ''}`}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="전체 메뉴 열기"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <MegaMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default SiteHeader;
