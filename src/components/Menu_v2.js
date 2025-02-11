import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu_v2.css'; // CSS 파일을 import 합니다.

const Menu_v2 = ({ isNewMenu, setIsNewMenu }) => {
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
        <div className="v2 header">
            <div className="nav-container">
                <div className="logo">
                    <a href="/">
                        <img src="http://giec.koreasme.com/img/2000-00459_logo.jpg" alt="Logo" />
                    </a>
                </div>
                <nav>
                    <ul className="gnb">
                        <li onMouseEnter={() => handleMouseEnter('company')} onMouseLeave={handleMouseLeave}>
                            <NavLink to="company" className={({ isActive }) => (isActive ? 'active' : '')}>회사소개</NavLink>
                            {activeMenu === 'company' && (
                                <ul className="depth2">
                                    <li><NavLink to="company/intro">인사말</NavLink></li>
                                    <li><NavLink to="company/history">연혁</NavLink></li>
                                    <li><NavLink to="company/mission">목표 및 사명</NavLink></li>
                                </ul>
                            )}
                        </li>
                        <li onMouseEnter={() => handleMouseEnter('products')} onMouseLeave={handleMouseLeave}>
                            <NavLink to="product" className={({ isActive }) => (isActive ? 'active' : '')}>제품소개</NavLink>
                            {activeMenu === 'products' && (
                                <ul className="depth2">
                                    <li><NavLink to="product/controller">컨트롤러</NavLink></li>
                                    <li><NavLink to="product/injection">사출성형기 콘트롤러</NavLink></li>
                                    <li><NavLink to="product/valve">비례밸브 콘트롤러</NavLink></li>
                                </ul>
                            )}
                        </li>
                        <li onMouseEnter={() => handleMouseEnter('technology')} onMouseLeave={handleMouseLeave}>
                            <NavLink to="tech" className={({ isActive }) => (isActive ? 'active' : '')}>기술현황</NavLink>
                            {activeMenu === 'technology' && (
                                <ul className="depth2">
                                    <li><NavLink to="tech/overview">기술 개요</NavLink></li>
                                    <li><NavLink to="tech/innovation">혁신 기술</NavLink></li>
                                </ul>
                            )}
                        </li>
                        <li onMouseEnter={() => handleMouseEnter('board')} onMouseLeave={handleMouseLeave}>
                            <NavLink to="board" className={({ isActive }) => (isActive ? 'active' : '')}>게시판</NavLink>
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
