import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu_v2.css'; // CSS 파일을 import 합니다.

const Menu_v2 = ({isNewMenu, setIsNewMenu}) => {
    const [activeMenu, setActiveMenu] = useState(null);
  
    const handleMouseEnter = (menu) => {
      setActiveMenu(menu);
    };
  
    const handleMouseLeave = () => {
      setActiveMenu(null);
    };
    const toggleMenu = () => {
      setIsNewMenu(prevState => !prevState); // 메뉴 상태 토글
    };
  return (
  
    <div className="v2 top-menu">
      <div className="inner1720">
        <h1 className="logo">
          <a href="/">
            <img src="http://giec.koreasme.com/img/2000-00459_logo.jpg" alt="Logo" />
          </a>
        </h1>
        {/* 토글 버튼 추가 */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {!isNewMenu ? '버젼1' : '버젼2'} {/* 상태에 따라 '열기' 또는 '닫기' 표시 */}
        </button>
        <nav>
          <ul className="gnb">
            {/* 예시 메뉴 */}
            <li
            >
              <NavLink to="company" className={({ isActive }) => (isActive ? 'active' : '')}>예시</NavLink>
            </li>
            {/* 회사소개 메뉴 */}
            <li
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="company" className={({ isActive }) => (isActive ? 'active' : '')}>회사소개</NavLink>
            </li>

            {/* 제품소개 메뉴 */}
            <li
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="product" className={({ isActive }) => (isActive ? 'active' : '')}>제품소개</NavLink>
              
            </li>

            {/* 기술현황 메뉴 */}
            <li
              onMouseEnter={() => handleMouseEnter('technology')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="tech" className={({ isActive }) => (isActive ? 'active' : '')}>기술현황</NavLink>
              
            </li>

            {/* 게시판 메뉴 */}
            <li
              onMouseEnter={() => handleMouseEnter('board')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="board" className={({ isActive }) => (isActive ? 'active' : '')}>게시판</NavLink>
            </li>
                <ul className="depth2">
                    <ul className="subMenu">
                    <li><NavLink to="company" className={({ isActive }) => (isActive ? 'active' : '')}>구분값으로 넣어도되고</NavLink></li>
                    <li><NavLink to="company" className={({ isActive }) => (isActive ? 'active' : '')}>이미지로 넣어도되고</NavLink></li>
                    <li><NavLink to="company" className={({ isActive }) => (isActive ? 'active' : '')}>종류/타입 등 원하는 방식 변경가능</NavLink></li>
                    </ul>
                    <ul className="subMenu">
                    <li><NavLink to="company" className={({ isActive }) => (isActive ? 'active' : '')}>인사말</NavLink></li>
                    <li><NavLink to="company/history" className={({ isActive }) => (isActive ? 'active' : '')}>연혁</NavLink></li>
                    <li><NavLink to="company" className={({ isActive }) => (isActive ? 'active' : '')}>목표 및 사명</NavLink></li>
                        {/* <li><a href="/company/#">조직도</a></li> */}
                    </ul>
                    <ul className="subMenu">
                        <li><NavLink to="product/#" className={({ isActive }) => (isActive ? 'active' : '')}>컨트롤러</NavLink></li>
                        <li><NavLink to="product/#" className={({ isActive }) => (isActive ? 'active' : '')}>사출성형기 콘트롤러</NavLink></li>
                        <li><NavLink to="product/#" className={({ isActive }) => (isActive ? 'active' : '')}>비례밸브 콘트롤러</NavLink></li>
                        <li><NavLink to="product/#" className={({ isActive }) => (isActive ? 'active' : '')}>카드</NavLink></li>
                        <li><NavLink to="product/#" className={({ isActive }) => (isActive ? 'active' : '')}>RELAY 출력 카드</NavLink></li>
                        <li><NavLink to="product/#" className={({ isActive }) => (isActive ? 'active' : '')}>TR 출력 카드</NavLink></li>
                        <li><NavLink to="product/#" className={({ isActive }) => (isActive ? 'active' : '')}>SSR 출력카드</NavLink></li>
                    </ul>
                    <ul className="subMenu">
                        {/* <li><NavLink to="technology/#">기술현황</NavLink></li> */}
                    </ul>
                    <ul className="subMenu">
                        <li><NavLink to="board/#" className={({ isActive }) => (isActive ? 'active' : '')}>공지사항</NavLink></li>
                        <li><NavLink to="board/#" className={({ isActive }) => (isActive ? 'active' : '')}>자유게시판</NavLink></li>
                        <li><NavLink to="board/#" className={({ isActive }) => (isActive ? 'active' : '')}>Q&A</NavLink></li>
                    </ul>
                </ul>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu_v2;
