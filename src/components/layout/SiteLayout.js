import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

const SiteLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
