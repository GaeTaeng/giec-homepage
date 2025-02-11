import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Menu_v2.css';
import logo from './img/2000-00459_logo.jpg';

const Menu_v2 = ({ isNewMenu, setIsNewMenu }) => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false); // 모바일 메뉴 상태
    const [currentPage, setCurrentPage] = useState('');

    const location = useLocation(); // 이제 Router 내부에서 실행됨

    const handleMouseEnter = (menu) => {
        setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    const toggleMenu = () => {
        setIsNewMenu(prevState => !prevState);
    };


  useEffect(() => {
    const pathToClass = {
      '/': 'dashboard',
      '/company': 'company-info',
      '/company/history': 'company-history',
      '/product': 'product-introduction',
      '/tech': 'technology',
      '/board': 'board',
    };
    setCurrentPage(pathToClass[location.pathname] || 'dashboard');
  }, [location]);

    return (
        <div className={`v2 header ${currentPage}`}>
            <div className="nav-container">
                <div className="logo">
                    <a href="/giec-homepage/">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
                <nav>
                    <ul className={`gnb ${menuOpen ? 'active' : ''}`}>
                        <li onMouseEnter={() => handleMouseEnter('company')} onMouseLeave={handleMouseLeave}>
                            <NavLink to="company">회사소개</NavLink>
                            {/* {activeMenu === 'company' && (
                                <ul className="depth2">
                                    <li><NavLink to="company/intro">인사말</NavLink></li>
                                    <li><NavLink to="company/history">연혁</NavLink></li>
                                    <li><NavLink to="company/mission">목표 및 사명</NavLink></li>
                                </ul>
                            )} */}
                        </li>
                        <li onMouseEnter={() => handleMouseEnter('products')} onMouseLeave={handleMouseLeave}>
                            <NavLink to="product">제품소개</NavLink>
                            {activeMenu === 'products' && (
                                <ul className="depth2">
                                    <li><NavLink to="product/controller">컨트롤러</NavLink></li>
                                    <li><NavLink to="product/injection">사출성형기 콘트롤러</NavLink></li>
                                    <li><NavLink to="product/valve">비례밸브 콘트롤러</NavLink></li>
                                </ul>
                            )}
                        </li>
                        <li onMouseEnter={() => handleMouseEnter('technology')} onMouseLeave={handleMouseLeave}>
                            <NavLink to="tech">기술현황</NavLink>
                            {activeMenu === 'technology' && (
                                <ul className="depth2">
                                    <li><NavLink to="tech/overview">기술 개요</NavLink></li>
                                    <li><NavLink to="tech/innovation">혁신 기술</NavLink></li>
                                </ul>
                            )}
                        </li>
                        <li onMouseEnter={() => handleMouseEnter('board')} onMouseLeave={handleMouseLeave}>
                            <NavLink to="board">게시판</NavLink>
                            {activeMenu === 'board' && (
                                <ul className="depth2">
                                    <li><NavLink to="board/notice">공지사항</NavLink></li>
                                    <li><NavLink to="board/free">자유게시판</NavLink></li>
                                    <li><NavLink to="board/qna">Q&A</NavLink></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Menu_v2;
