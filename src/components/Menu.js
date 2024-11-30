import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css'; // CSS 파일을 import 합니다.

const Menu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
  
    const handleMouseEnter = (menu) => {
      setActiveMenu(menu);
    };
  
    const handleMouseLeave = () => {
      setActiveMenu(null);
    };
  return (
  
    <div className="top-menu">
      <div className="inner1720">
        <h1 className="logo">
          <a href="/">
            <img src="http://giec.koreasme.com/img/2000-00459_logo.jpg" alt="Logo" />
          </a>
        </h1>
        <nav>
          <ul className="gnb">
            {/* 회사소개 메뉴 */}
            <li
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/company" className={({ isActive }) => (isActive ? 'active' : '')}>회사소개</NavLink>
            </li>

            {/* 제품소개 메뉴 */}
            <li
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/product" className={({ isActive }) => (isActive ? 'active' : '')}>제품소개</NavLink>
              
            </li>

            {/* 기술현황 메뉴 */}
            <li
              onMouseEnter={() => handleMouseEnter('technology')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/tech" className={({ isActive }) => (isActive ? 'active' : '')}>기술현황</NavLink>
              
            </li>

            {/* 게시판 메뉴 */}
            <li
              onMouseEnter={() => handleMouseEnter('board')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/board" className={({ isActive }) => (isActive ? 'active' : '')}>게시판</NavLink>
            </li>
                <ul className="depth2">
                    <ul className="subMenu">
                        <li><a href="#">인사말</a></li>
                        <li><a href="#">연혁</a></li>
                        <li><a href="#">목표 및 사명</a></li>
                        <li><a href="#">조직도</a></li>
                    </ul>
                    <ul className="subMenu">
                        <li><a href="#">제품 1</a></li>
                        <li><a href="#">제품 2</a></li>
                        <li><a href="#">제품 3</a></li>
                    </ul>
                    <ul className="subMenu">
                        <li><a href="#">기술 1</a></li>
                        <li><a href="#">기술 2</a></li>
                        <li><a href="#">기술 3</a></li>
                    </ul>
                    <ul className="subMenu">
                        <li><a href="#">공지사항</a></li>
                        <li><a href="#">자유게시판</a></li>
                        <li><a href="#">Q&A</a></li>
                    </ul>
                </ul>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
