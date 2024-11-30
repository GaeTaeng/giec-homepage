import React from 'react';
import './Footer.css'; // CSS 파일을 import 합니다.
const Footer = () => {
  return (
    <div className="footer">
      <table>
        <tbody>
          <tr>
            <td>회사명: GI전자</td>
            <td>전화번호: 051-808-4750</td>
          </tr>
          <tr>
            <td>팩스번호: 051-808-4752</td>
            <td>주소: 부산 부산진구 연지동 32-5번지 대주아트타워 701호</td>
          </tr>
          <tr>
            <td colSpan="2">E-mail: <a href="mailto:gielec@giec.koreasme.org">gielec@giec.koreasme.org</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Footer;
