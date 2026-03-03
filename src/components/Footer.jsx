import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="kosa-footer">
      {/* 푸터 상단 (약관 및 방침 링크) */}
      <div className="footer-top">
        <div className="inner-container">
          <ul className="footer-policy">
            <li><a href="#terms">이용약관</a></li>
            {/* 개인정보처리방침은 법적으로 굵고 진하게 표시해야 합니다 */}
            <li><a href="#privacy" className="privacy-bold">개인정보처리방침</a></li>
            <li><a href="#email-reject">이메일무단수집거부</a></li>
            <li><a href="#location">찾아오시는 길</a></li>
          </ul>
        </div>
      </div>

      {/* 푸터 하단 (주소 및 카피라이트) */}
      <div className="footer-bottom">
        <div className="inner-container footer-bottom-layout">
          {/* 하단 로고 */}
          <div className="footer-logo">
            <span className="logo-text">CCCR</span>
          </div>

          {/* 주소 및 연락처 정보 */}
          <div className="footer-info">
            <address>
              <p>서울특별시 강남구 테헤란로 000, CCCR 빌딩 5층</p>
              <p>
                대표전화 : 02-0000-0000 <span className="divider">|</span> 
                팩스 : 02-0000-0001 <span className="divider">|</span> 
                이메일 : info@cccr.or.kr
              </p>
            </address>
            <p className="copyright">Copyright © CCCR. All Rights Reserved.</p>
          </div>

          {/* 패밀리 사이트 (관련 기관 링크) */}
          <div className="family-site">
            <select aria-label="관련 기관 사이트 바로가기">
              <option value="">관련 기관 사이트</option>
              <option value="kosa">한국소프트웨어산업협회(KOSA)</option>
              <option value="msit">과학기술정보통신부</option>
              <option value="nipa">정보통신산업진흥원</option>
            </select>
            <button className="family-btn">이동</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;