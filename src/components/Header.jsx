import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cccrLogo from '../assets/cccr-logo.png'; 
import kakaoIcon from '../assets/kakao-icon.png';
import './Header.css';

// 관리하기 쉽도록 메뉴 데이터를 배열로 정리합니다.
const menuData = [
  {
    title: '주요사업',
    subMenus: [
      { name: '연구개발', path: '/business/rnd' }, 
      { name: '표준화', path: '/business/standard' },
      { name: '교육', path: '/business/edu' },
      { name: '대외협력', path: '/business/coop' }, // cooperation
      { name: '홍보', path: '/business/pr' }, // public relations
      { name: '회원사 지원', path: '/business/support' }
    ]
  },
  {
    title: '인재양성',
    subMenus: [
      { name: '교육훈련', path: '/academy/training' }, 
      { name: '교육신청', path: '/academy/apply' }, 
      { name: '교육일정', path: '/academy/schedule' }, 
      { name: '교육문의', path: '/academy/inquiry' }, 
      { name: '교육제안', path: '/academy/suggest' }
    ]
  },
  {
    title: '알림마당',
    subMenus: [
      { name: '공지사항', path: '/news/notice' }, 
      { name: '행사소식', path: '/news/event' }, 
      { name: '기술동향', path: '/news/trend' }, 
      { name: '법령정보', path: '/news/law' }, 
      { name: '뉴스레터', path: '/news/newsletter' },
      { name: '최신뉴스', path: '/news/latest' }
    ]
  },
  {
    title: '회원공간',
    subMenus: [
      { name: '가입안내', path: '/members/join' }, 
      { name: '회원안내', path: '/members/info' }, 
      { name: '회원소식', path: '/members/news' }, 
      { name: '회원홍보', path: '/members/pr' }, 
      { name: '온·오프라인', path: '/members/service' }
    ]
  },
  {
    title: '조합안내',
    subMenus: [
      { name: '인사말', path: '/about/greeting' }, 
      { name: '설립목적 및 연혁', path: '/about/history' }, 
      { name: '역대 조합장', path: '/about/presidents' }, 
      { name: '이사 소개', path: '/about/directors' }, 
      { name: '조직도', path: '/about/organization' },
      { name: '오시는길', path: '/about/location' },
      { name: 'CI', path: '/about/ci' }
    ]
  }
];

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/'; // 메인 페이지인지 확인 (true/false)

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

  // 스크롤 내리면 흰색으로 바뀌게 함
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 50px 이상 내려가면 true, 아니면 false
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // 컴포넌트가 꺼질 때 정리
    };
  }, []);

  return (
    <header className={`kosa-header ${isHome ? (isScrolled ? 'scrolled' : '') : 'scrolled subpage-header'}`}> {/* 상단 유틸리티 메뉴 */}
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
            <li><Link to="/auth/login">로그인</Link></li>
            <li><Link to="/auth/joincccr">회원가입</Link></li>
            <li><Link to="https://www.cccr-edu.or.kr/main/index.jsp">아카데미</Link></li>
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
                  {/* 🚀 a 태그를 Link로 변경하고, 첫 번째 서브메뉴의 path를 연결합니다. */}
                  <Link to={menu.subMenus[0].path}>{menu.title}</Link>
                  <ul className="submenu">
                    {menu.subMenus.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link to={sub.path}>{sub.name}</Link>
                      </li>
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
              <Link to="/auth/joincccr" onClick={closeAll}>회원가입</Link>
              <span className="divider">/</span>
              {/* 👇 /auth/login 으로 수정 */}
              <Link to="/auth/login" onClick={closeAll}>로그인</Link>
            </div>
          </div>
        </div>

       {/* 모바일 사이드바 메뉴 */}
        <ul className="sidebar-menu">
          {menuData.map((menu, index) => (
            <li key={index} className="sidebar-item">
              <div 
                className="sidebar-title" 
                onClick={() => toggleSubMenu(index)}
              >
                {/* 🚀 div 내부에 텍스트 대신 Link 컴포넌트 사용 */}
                <Link 
                  to={menu.subMenus[0].path} 
                  className="sidebar-title-link"
                  onClick={(e) => {
                    // e.stopPropagation(); // 필요에 따라 이벤트 전파 차단
                    // 페이지 이동 시 사이드바를 닫고 싶다면 closeAll() 호출, 
                    // 열어둔 채로 이동만 하려면 주석 처리
                    // closeAll(); 
                  }}
                >
                  {menu.title}
                </Link>
                <span className={`arrow ${openMenuIndex === index ? 'up' : 'down'}`}>
                  ▼
                </span>
              </div>
              
              <ul className={`sidebar-submenu ${openMenuIndex === index ? 'open' : ''}`}>
                {menu.subMenus.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link to={sub.path} onClick={closeAll}>
                      {sub.name}
                    </Link>
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