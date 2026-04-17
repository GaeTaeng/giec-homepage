import { Link } from 'react-router-dom';
import { companyLocation } from '../../data/company';

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="site-footer__main">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <div className="site-footer__logo-placeholder">
            <span>LOGO</span>
            <strong>로고 추가 필요</strong>
            <p>브랜드 로고 자산 반영 예정</p>
          </div>
          <p>{companyLocation.address}</p>
        </div>
        <dl className="site-footer__meta">
          <div>
            <dt>대표전화</dt>
            <dd>{companyLocation.phone}</dd>
          </div>
          <div>
            <dt>팩스</dt>
            <dd>{companyLocation.fax}</dd>
          </div>
          <div>
            <dt>이메일</dt>
            <dd>{companyLocation.email}</dd>
          </div>
          <div>
            <dt>대표명</dt>
            <dd>{companyLocation.representative}</dd>
          </div>
        </dl>
      </div>
    </div>

    <div className="site-footer__bottom">
      <div className="container site-footer__bottom-inner">
        <div className="site-footer__links">
          <Link to="/company/greeting">회사소개</Link>
          <Link to="/company/location">오시는길</Link>
          <Link to="/board/notice">이용약관</Link>
          <Link to="/board/notice">개인정보 처리방침</Link>
        </div>
        <p>Copyright © 2024 GI전자 All Right Reserved</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
