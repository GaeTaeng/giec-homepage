import React from 'react';
import './Footer.css'; // CSS 파일을 import 합니다.
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      {/* <p>주소 부산 부산진구 연지동 32-5번지 대주아트타워 701호</p> */}
      <p>주소 지구</p>
        {/* <p>대표전화 051-808-4750 팩스 051-808-4752 이메일 gielec@giec.koreasme.org 대표명 김법선</p> */}
      <p>대표전화 051-000-0000 팩스 051-000-0000 이메일 aaa@bbb.ccc.ddd 대표명 홍길동</p>
      </div>
      <div className="footer-links">
        <a href="#">회사소개</a>
        <a href="#">오시는길</a>
        <a href="#">이용약관</a>
        <a href="#">개인정보 처리방침</a>
      </div>
      <div className="footer-copyright">
        Copyright © 2024 GI전자 All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
