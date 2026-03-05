import React from 'react';
import './Footer.css';
// 🚀 1. 로고 이미지와 SNS 이미지 불러오기 (react-icons 삭제)
import cccrLogo from '../assets/cccr-logo.png'; 
import instaLogo from '../assets/insta.svg'; 
import metaLogo from '../assets/meta.jpg'; 

const Footer = () => {

  return (
    <footer className="kosa-footer">
      {/* 푸터 상단 (약관 및 방침 링크 + SNS) */}
      <div className="footer-top">
        <div className="inner-container footer-top-layout">
          <ul className="footer-policy">
            <li><a href="#terms">이용약관</a></li>
            <li><a href="#privacy" className="privacy-bold">개인정보처리방침</a></li>
            <li><a href="#email-reject">찾아오시는 길</a></li>
            <li><a href="#location">사이트맵</a></li>
          </ul>

          {/* 🚀 2. 가져오신 이미지 파일(img 태그)로 교체! */}
          <div className="footer-sns">
            <a href="#insta" aria-label="Instagram" className="sns-icon">
              <img src={instaLogo} alt="Instagram" className="sns-img" />
            </a>
            <a href="#meta" aria-label="Meta" className="sns-icon">
              <img src={metaLogo} alt="Meta" className="sns-img" />
            </a>
          </div>
        </div>
      </div>

      {/* 푸터 하단 (주소 및 카피라이트) */}
      <div className="footer-bottom">
        <div className="inner-container footer-bottom-layout">
          
          <div className="footer-logo">
            <img src={cccrLogo} alt="CCCR 로고" className="footer-logo-img" />
          </div>

          {/* 주소 및 연락처 정보 */}
          <div className="footer-info">
            <address>
              <p>서울특별시 강남구 테헤란로 86길 11, 거봉INC 빌딩 5층</p>
              <p>
                대표전화 : 02-2052-0156 <span className="divider">|</span> 
                팩스 : 02-2052-0158 <span className="divider">|</span> 
                이메일 : admin@cccr.or.kr <span className="divider">|</span> 
                우편번호 : 06178
              </p>
            </address>
            <p className="copyright">Copyright © CCCR. All Rights Reserved.</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;