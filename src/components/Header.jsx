import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cccrLogo from '../assets/cccr-logo.png'; 
import kakaoIcon from '../assets/kakao-icon.png';
import './Header.css';

// 🚀 3뎁스(thirdDepth) 데이터가 추가된 새로운 메뉴 배열
const menuData = [
  {
    title: '주요사업',
    subMenus: [
      { 
        name: '연구개발', path: '/business/rnd',
        thirdDepth: [
          { name: '유연의료', path: '/business/rnd/medical' },
          { name: '써드파티', path: '/business/rnd/thirdparty' },
          { name: '자율행동체', path: '/business/rnd/autonomous' },
          { name: '자원풀링', path: '/business/rnd/pooling' },
          { name: '엣지AI', path: '/business/rnd/edgeai' },
          { name: '위기대응', path: '/business/rnd/crisis' }
        ]
      }, 
      { name: '표준화', path: '/business/standard' },
      { 
        name: '교육', path: '/business/edu',
        thirdDepth: [
          { name: '전문인력', path: '/business/edu/expert' },
          { name: '대학·기업협력형', path: '/business/edu/univ' },
          { name: '채용연계형', path: '/business/edu/recruit' },
          { name: '새싹', path: '/business/edu/sesac' }
        ]
      },
      { name: '대외협력', path: '/business/coop' }, 
      { 
        name: '홍보', path: '/business/pr',
        thirdDepth: [
          { name: '홍보서비스', path: '/business/pr/service' },
          { name: '홍보서비스이용료', path: '/business/pr/fee' }
        ]
      }, 
      { 
        name: '회원사 지원', path: '/business/support',
        thirdDepth: [
          { name: '회원사소식', path: '/business/support/news' },
          { name: '회원사 특전', path: '/business/support/benefits' }
        ]
      }
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
  const isHome = location.pathname === '/'; 

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const openNewsletter = (e) => { e.preventDefault(); setIsNewsletterOpen(true); };
  const closeNewsletter = () => setIsNewsletterOpen(false);

  const toggleSearch = () => { if (isMenuOpen) setIsMenuOpen(false); setIsSearchOpen(!isSearchOpen); };
  const closeAll = () => { setIsMenuOpen(false); setIsSearchOpen(false); };
  const toggleMenu = () => { if (isSearchOpen) setIsSearchOpen(false); setIsMenuOpen(!isMenuOpen); };
  const toggleSubMenu = (index) => { setOpenMenuIndex(openMenuIndex === index ? null : index); };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  return (
    <>
    {/* 🚀 기존 헤더 스타일 완벽하게 그대로 사용합니다! (건드리지 않음) */}
    <header className={`kosa-header ${isHome ? (isScrolled ? 'scrolled' : '') : 'scrolled subpage-header'}`}> 
      <div className="header-utility">
        <div className="inner-container">
          <ul className="utility-left">
            <li>
              <a href="#channel" className="highlight-btn kakao-btn">
                <img src={kakaoIcon} alt="카카오톡" className="kakao-icon-img" />
                <span className="btn-text">+ 채널 추가</span>
              </a>
            </li>
            <li>
                <a href="#news" className="highlight-btn news-btn" onClick={openNewsletter}>
                  <span className="icon" aria-hidden="true">📰</span> 
                  <span className="btn-text">조합 소식 받기</span>
                </a>
            </li>
          </ul>
          <ul className="utility-links">
            <li><Link to="/auth/login">로그인</Link></li>
            <li><Link to="/auth/joincccr">회원가입</Link></li>
            <li><Link to="https://www.cccr-edu.or.kr/main/index.jsp">아카데미</Link></li>
          </ul>
        </div>
      </div>

      <div className="header-main">
        <div className="inner-container">
          <h1 className="logo">
            <a href="/">
              <img src={cccrLogo} alt="CCCR 로고" className="logo-img" />
            </a>
          </h1>

          {/* 🚀 PC 가로형 메인 메뉴 (풀사이즈 드롭다운 2뎁스/3뎁스 구조) */}
          <nav className="gnb">
            <ul>
              {menuData.map((menu, index) => (
                <li key={index} className="gnb-item">
                  <Link to={menu.subMenus[0].path} className="gnb-main-link">{menu.title}</Link>
                  
                  {/* 각 메뉴 호버 시 떨어지는 풀사이즈 메가메뉴 패널 */}
                  <div className="mega-menu-panel">
                    <div className="mega-inner">
                      {/* 왼쪽: 메인 타이틀 */}
                      <div className="mega-left">
                        <h2>{menu.title}</h2>
                      </div>
                      
                      {/* 오른쪽: 2뎁스 + 3뎁스 리스트 */}
                      <div className="mega-right">
                        {/* 🚀 3뎁스가 하나라도 존재하는 메뉴인지 검사! */}
                        {menu.subMenus.some(sub => sub.thirdDepth && sub.thirdDepth.length > 0) ? (
                          
                          // [타입 A] 3뎁스가 있는 경우: 기존처럼 줄바꿈(Row) 형태 유지
                          <div className="mega-list-with-3depth">
                            {menu.subMenus.map((sub, subIdx) => (
                              <div key={subIdx} className="mega-row">
                                <Link to={sub.path} className="mega-2depth">{sub.name}</Link>
                                {sub.thirdDepth && (
                                  <div className="mega-3depth-group">
                                    {sub.thirdDepth.map((third, tIdx) => (
                                      <Link key={tIdx} to={third.path} className="mega-3depth">{third.name}</Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>

                        ) : (
                          
                          // 🚀 [타입 B] 3뎁스가 아예 없는 경우: 2뎁스들을 3열 바둑판으로 예쁘게 쫙 펼침!
                          <div className="mega-list-only-2depth">
                            {menu.subMenus.map((sub, subIdx) => (
                              <Link key={subIdx} to={sub.path} className="mega-2depth-card">
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                          
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-icons">
            <div className={`desktop-search-wrap ${isSearchOpen ? 'active' : ''}`}>
              <input 
                type="text" 
                placeholder="검색어를 입력하세요" 
                className="desktop-search-input" 
              />
              <button className="icon-btn search-btn" aria-label="검색" onClick={toggleSearch}>
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

      {/* 오버레이 & 모바일 사이드바 영역 유지 */}
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeAll} aria-hidden="true"></div>
      <aside className={`sidebar ${isMenuOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <button className="sidebar-close-btn" onClick={toggleMenu} aria-label="닫기">✕</button>
          <div className="sidebar-util">
            <span className="sidebar-cccr">cccrMenu</span>
            <div className="sidebar-auth">
              <Link to="/auth/joincccr" onClick={closeAll}>회원가입</Link>
              <span className="divider">/</span>
              <Link to="/auth/login" onClick={closeAll}>로그인</Link>
            </div>
          </div>
        </div>
        <ul className="sidebar-menu">
          {menuData.map((menu, index) => (
            <li key={index} className="sidebar-item">
              <div className="sidebar-title" onClick={() => toggleSubMenu(index)}>
                <Link to={menu.subMenus[0].path} className="sidebar-title-link">{menu.title}</Link>
                <span className={`arrow ${openMenuIndex === index ? 'up' : 'down'}`}>▼</span>
              </div>
              <ul className={`sidebar-submenu ${openMenuIndex === index ? 'open' : ''}`}>
                {menu.subMenus.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link to={sub.path} onClick={closeAll}>{sub.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </aside>
    </header>

    {/* 뉴스레터 팝업 (기존 유지) */}
    {isNewsletterOpen && (
        <div className="newsletter-overlay" onClick={closeNewsletter}>
          <div className="newsletter-modal" onClick={(e) => e.stopPropagation()}>
            <button className="newsletter-close-x" onClick={closeNewsletter}>✕</button>
            <div className="newsletter-header">
              <span className="newsletter-kicker">SUBSCRIBE</span>
              <h2>CCCR 뉴스레터 구독</h2>
              <p>매월 클라우드 최신 동향과 주요 소식을 전해드립니다.</p>
            </div>
            <div className="newsletter-body">
              <div className="input-group">
                <label>이름 <span className="req">*</span></label>
                <input type="text" placeholder="홍길동" />
              </div>
              <div className="input-group">
                <label>이메일 <span className="req">*</span></label>
                <input type="email" placeholder="example@cccr.or.kr" />
              </div>
              <div className="input-group">
                <label>소속 (선택)</label>
                <input type="text" placeholder="회사명 또는 학교명" />
              </div>
              <label className="agree-checkbox">
                <input type="checkbox" />
                <span className="checkbox-text">개인정보 수집 및 이용에 동의합니다. <a href="#none">(전문보기)</a></span>
              </label>
            </div>
            <div className="newsletter-footer">
              <button className="btn-cancel" onClick={closeNewsletter}>취소</button>
              <button className="btn-submit" onClick={() => { alert('구독 신청이 완료되었습니다!'); closeNewsletter(); }}>구독하기</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;