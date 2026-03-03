import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="kosa-header">
      {/* 상단 유틸리티 메뉴 (로그인, 회원가입 등) */}
      <div className="header-utility">
        <div className="inner-container">
          <ul className="utility-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#login">로그인</a></li>
            <li><a href="#join">회원가입</a></li>
            <li><a href="#sitemap">사이트맵</a></li>
          </ul>
        </div>
      </div>

      {/* 메인 네비게이션 영역 */}
      <div className="header-main">
        <div className="inner-container">
          {/* 로고 */}
          <h1 className="logo">
            <a href="/">
              {/* 실제 이미지 로고 대신 텍스트로 임시 대체 */}
              <span className="logo-text">KOSA</span>
              <span className="logo-sub">한국소프트웨어산업협회 스타일</span>
            </a>
          </h1>

          {/* 메인 GNB */}
          <nav className="gnb">
            <ul>
              <li><a href="#about">협회소개</a></li>
              <li><a href="#business">주요사업</a></li>
              <li><a href="#info">SW산업정보</a></li>
              <li><a href="#edu">인재·교육</a></li>
              <li><a href="#news">알림마당</a></li>
            </ul>
          </nav>

          {/* 우측 아이콘 메뉴 (검색, 전체메뉴) */}
          <div className="header-icons">
            <button className="icon-btn search-btn" aria-label="검색">🔍</button>
            <button className="icon-btn menu-btn" aria-label="전체메뉴">☰</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;