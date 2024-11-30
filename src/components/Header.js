import React from "react";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#333", color: "#fff", padding: "10px 0" }}>
      <h1 style={{ textAlign: "center" }}>GI전자</h1>
      <nav style={{ textAlign: "center" }}>
        <a href="#about-us" style={{ margin: "0 10px", color: "#fff" }}>회사소개</a>
        <a href="#products" style={{ margin: "0 10px", color: "#fff" }}>제품소개</a>
        <a href="#technology" style={{ margin: "0 10px", color: "#fff" }}>기술현황</a>
        <a href="#community" style={{ margin: "0 10px", color: "#fff" }}>게시판</a>
      </nav>
    </header>
  );
};

export default Header;
