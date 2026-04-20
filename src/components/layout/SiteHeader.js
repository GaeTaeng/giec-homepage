import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigationSections, primaryNav } from '../../data/navigation';
import MegaMenu from './MegaMenu';

const DESKTOP_DROPDOWN_CLOSE_DELAY = 180;

const SiteHeader = () => {
  const location = useLocation();
  const desktopCloseTimerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === '/';
  const useLightHeader = isHome && !scrolled && !menuOpen && !desktopDropdownOpen;

  const clearDesktopCloseTimer = () => {
    if (desktopCloseTimerRef.current) {
      window.clearTimeout(desktopCloseTimerRef.current);
      desktopCloseTimerRef.current = null;
    }
  };

  const openDesktopDropdown = () => {
    clearDesktopCloseTimer();
    setDesktopDropdownOpen(true);
  };

  const closeDesktopDropdown = () => {
    clearDesktopCloseTimer();
    setDesktopDropdownOpen(false);
  };

  const scheduleDesktopDropdownClose = () => {
    clearDesktopCloseTimer();
    desktopCloseTimerRef.current = window.setTimeout(() => {
      setDesktopDropdownOpen(false);
      desktopCloseTimerRef.current = null;
    }, DESKTOP_DROPDOWN_CLOSE_DELAY);
  };

  useEffect(() => {
    setMenuOpen(false);
    clearDesktopCloseTimer();
    setDesktopDropdownOpen(false);
  }, [location.pathname]);

  useEffect(
    () => () => {
      clearDesktopCloseTimer();
    },
    []
  );

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

  const handleNavRegionBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      scheduleDesktopDropdownClose();
    }
  };

  const handleDesktopNavClick = () => {
    closeDesktopDropdown();
  };

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

          <div
            className={`site-header__nav-region${desktopDropdownOpen ? ' is-open' : ''}`}
            onMouseEnter={openDesktopDropdown}
            onMouseLeave={scheduleDesktopDropdownClose}
            onFocus={openDesktopDropdown}
            onBlur={handleNavRegionBlur}
          >
            <nav className="site-header__nav" aria-label="주요 메뉴">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                  onClick={handleDesktopNavClick}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="site-header__dropdown" aria-hidden={!desktopDropdownOpen}>
              <div className="site-header__dropdown-inner container">
                {navigationSections.map((section) => (
                  <section className="site-header__dropdown-section" key={section.title}>
                    <div className="site-header__dropdown-heading">
                      <h2>{section.title}</h2>
                      <p>{section.description}</p>
                    </div>
                    <div className="site-header__dropdown-links">
                      {section.items.map((child) => (
                        <Link key={child.to} to={child.to} onClick={closeDesktopDropdown}>
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
            onClick={() => {
              closeDesktopDropdown();
              setMenuOpen(true);
            }}
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
