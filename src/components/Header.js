import React from "react";
import './Header.css'; // CSS 파일을 import 합니다.

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">GI Electronic</h1>
      <nav>
        <ul className="nav-menu">
          <li>회사소개</li>
          <li>제품소개</li>
          <li>알림마당</li>
          <li>고객지원</li>
        </ul>
      </nav>
      <button className="menu-button">☰</button>
    </header>
  );
};

export default Header;
