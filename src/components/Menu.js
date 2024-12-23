import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css'; // CSS 파일을 import 합니다.

const Menu = ({isNewMenu, setIsNewMenu}) => {
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
  
    <div className="v1 top-menu">
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
                    <li><a href="/product/#">구분값으로 넣어도되고</a></li>
                    <li><a href="/product/#">이미지로 넣어도되고</a></li>
                    <li><a href="/product/#">종류/타입 등 원하는 방식 변경가능</a></li>
                    </ul>
                    <ul className="subMenu">
                        <li><a href="/company/#">인사말</a></li>
                        <li><a href="/company/history">연혁</a></li>
                        <li><a href="/company/#">목표 및 사명</a></li>
            {/* 회사소개 메뉴 */}
            <li
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="company" className={({ isActive }) => (isActive ? 'active' : '')}>회사소개</NavLink>
            </li>
                        {/* <li><a href="/company/#">조직도</a></li> */}
                    </ul>
                    <ul className="subMenu">
                        <li><a href="/product/#">컨트롤러</a></li>
                        <li><a href="/product/#">사출성형기 콘트롤러</a></li>
                        <li><a href="/product/#">비례밸브 콘트롤러</a></li>
                        <li><a href="/product/#">카드</a></li>
                        <li><a href="/product/#">RELAY 출력 카드</a></li>
                        <li><a href="/product/#">TR 출력 카드</a></li>
                        <li><a href="/product/#">SSR 출력카드</a></li>
                    </ul>
                    <ul className="subMenu">
                        {/* <li><a href="/technology/#">기술현황</a></li> */}
                    </ul>
                    <ul className="subMenu">
                        <li><a href="/board/#">공지사항</a></li>
                        <li><a href="/board/#">자유게시판</a></li>
                        <li><a href="/board/#">Q&A</a></li>
                    </ul>
                </ul>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
