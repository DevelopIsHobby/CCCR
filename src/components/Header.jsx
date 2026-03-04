import React, { useState } from 'react';
import cccrLogo from '../assets/cccr-logo.png'; 
import kakaoIcon from '../assets/kakao-icon.png';
import './Header.css';

// 관리하기 쉽도록 메뉴 데이터를 배열로 정리합니다.
const menuData = [
  {
    title: '주요사업',
    subMenus: ['연구개발', '표준화', '교육', '대외협력', '홍보', '회원사 지원']
  },
  {
    title: '인재양성',
    subMenus: ['교육훈련', '교육신청', '교육일정', '교육문의', '교육제안']
  },
  {
    title: '알림마당',
    subMenus: ['공지사항', '행사소식', '기술동향', '법령정보', '뉴스레터']
  },
  {
    title: '회원공간',
    subMenus: ['가입안내', '회원안내', '회원소식', '회원홍보', '온·오프라인 홍보 서비스']
  },
  {
    title: '조합안내',
    subMenus: ['인사말', '설립목적 및 연혁', '역대조합장', '이사 소개', '조직도', '오시는길', 'CI']
  }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 검색 사이드바 상태 추가
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // 검색창 토글 함수 (메뉴가 열려있으면 닫기)
  const toggleSearch = () => {
    if (isMenuOpen) setIsMenuOpen(false);
    setIsSearchOpen(!isSearchOpen);
  };

  // 오버레이(빈 공간) 클릭 시 모두 닫기
  const closeAll = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  // 사이드바에서 어떤 아코디언 메뉴가 열려있는지 추적하는 State
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = () => {
    if (isSearchOpen) setIsSearchOpen(false);
    setIsMenuOpen(!isMenuOpen);
  };

  // 사이드바 메인 메뉴 클릭 시 하위 메뉴 열기/닫기
  const toggleSubMenu = (index) => {
    // 이미 열려있는 메뉴를 다시 누르면 닫히고, 다른 메뉴를 누르면 그 메뉴가 열립니다.
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <header className="kosa-header">
      {/* 상단 유틸리티 메뉴 */}
      <div className="header-utility">
        <div className="inner-container">
          
          {/* 왼쪽: 둥근 테두리가 적용된 채널 추가, 소식 받기 */}
          <ul className="utility-left">
            <li>
              <a href="#channel" className="highlight-btn kakao-btn">
                <img src={kakaoIcon} alt="카카오톡" className="kakao-icon-img" />
                <span className="btn-text">+ 채널 추가</span>
              </a>
            </li>
            <li>
                <a href="#news" className="highlight-btn news-btn">
                <span className="icon" aria-hidden="true">📰</span> 
                <span className="btn-text">조합 소식 받기</span>
              </a>
            </li>
          </ul>

          {/* 오른쪽: HOME 삭제 및 | 구분선 적용 */}
          <ul className="utility-links">
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
              <img src={cccrLogo} alt="CCCR 로고" className="logo-img" />
            </a>
          </h1>

          {/* 👇 3. PC 가로형 메인 메뉴 (hover 시 드롭다운) */}
          <nav className="gnb">
            <ul>
              {menuData.map((menu, index) => (
                <li key={index} className="gnb-item">
                  <a href={`#menu-${index}`}>{menu.title}</a>
                  {/* PC용 2뎁스 드롭다운 메뉴 */}
                  <ul className="submenu">
                    {menu.subMenus.map((sub, subIndex) => (
                      <li key={subIndex}><a href={`#sub-${index}-${subIndex}`}>{sub}</a></li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>

          {/* 우측 아이콘 */}
          <div className="header-icons">
            {/* 👇 PC용 확장형 검색창 래퍼 추가 */}
            <div className={`desktop-search-wrap ${isSearchOpen ? 'active' : ''}`}>
              <input 
                type="text" 
                placeholder="검색어를 입력하세요" 
                className="desktop-search-input" 
              />
              <button className="icon-btn search-btn" aria-label="검색" onClick={toggleSearch}>
                {/* 상태에 따라 돋보기와 X 아이콘 전환 */}
                <span className="icon-search">🔍</span>
                <span className="icon-close">✕</span>
              </button>
            </div>
            
            <button className="icon-btn menu-btn" aria-label="전체메뉴" onClick={toggleMenu}>
              ☰
            </button>
          </div>
        </div>
      </div>

     {/* 오버레이 : 메뉴나 검색창 중 하나라도 열리면 나타남 */}
      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeAll} 
        aria-hidden="true"
      >
      </div>

      {/* 모바일 & 전체화면 사이드바 (클릭 시 아코디언) */}
      <aside className={`sidebar ${isMenuOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <button className="sidebar-close-btn" onClick={toggleMenu} aria-label="닫기">✕</button>
          <div className="sidebar-util">
            <span className="sidebar-cccr">cccrMenu</span>
            <div className="sidebar-auth">
              <a href="#join">회원가입</a><span className="divider">/</span><a href="#login">로그인</a>
            </div>
          </div>
        </div>

        <ul className="sidebar-menu">
          {menuData.map((menu, index) => (
            <li key={index} className={`sidebar-item ${openMenuIndex === index ? 'open' : ''}`}>
              {/* 1뎁스 타이틀 (클릭 시 토글) */}
              <div className="sidebar-title" onClick={() => toggleSubMenu(index)}>
                <span>{menu.title}</span>
                <span className="arrow">{openMenuIndex === index ? '▲' : '▼'}</span>
              </div>
              
              {/* 2뎁스 하위 메뉴 리스트 */}
              <ul className="sidebar-submenu">
                {menu.subMenus.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <a href={`#sub-${index}-${subIndex}`}>- {sub}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
};

export default Header;