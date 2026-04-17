import { NavLink } from 'react-router-dom';

const PageTabs = ({ items }) => (
  <nav className="page-tabs" aria-label="페이지 탭">
    <div className="container page-tabs__inner">
      {items.map((item) => (
        <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
          {item.label}
        </NavLink>
      ))}
    </div>
  </nav>
);

export default PageTabs;
