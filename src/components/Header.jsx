import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cccrLogo from '../assets/cccr-logo.png'; 
import cccrLogoWhite from '../assets/cccr-logo-white.png'; 
import kakaoIcon from '../assets/kakao-icon.png';
import './Header.css';

// 🚀 3뎁스를 모두 제거하고 SubLayout과 동일하게 2뎁스로 통일!
const menuData = [
  {
    title: '주요사업',
    desc: <>CCCR이 선도하는 클라우드 및<br/>SW 산업의 핵심 비즈니스입니다.</>,
    subMenus: [
      { name: '연구개발', path: '/business/rnd' }, 
      { name: '표준화', path: '/business/standard' },
      { name: '교육', path: '/business/edu' },
      { name: '대외협력', path: '/business/coop' },
      { name: '홍보', path: '/business/pr' },
      { name: '회원사 지원', path: '/business/support' }
    ]
  },
  {
    title: '인재양성',
    desc: <>미래 SW 산업을 이끌어갈<br/>핵심 인재를 발굴하고 양성합니다.</>,
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
    desc: <>조합의 다양한 최신 소식과<br/>유용한 산업 동향을 전달합니다.</>,
    subMenus: [
      { name: '공지사항', path: '/news/notice' }, 
      { name: '행사소식', path: '/news/event' }, 
      { name: '정책지원사업', path: '/news/policy' }, 
      { name: 'TabIR', path: '/news/ir' },          
      { name: '뉴스레터', path: '/news/newsletter' },
      { name: '최신뉴스', path: '/news/latest' },
      { name: '기술동향', path: '/news/trend' },    
      { name: '법령정보', path: '/news/law' }     
    ]
  },
  {
    title: '회원공간',
    desc: <>회원사의 지속적인 성장과<br/>비즈니스 성공을 든든하게 지원합니다.</>,
    subMenus: [
      { name: '가입안내', path: '/members/join' }, 
      { name: '회원안내', path: '/members/info' }, 
      { name: '회원소식', path: '/members/news' }, 
      { name: '회원홍보', path: '/members/pr' }, 
      { name: '온·오프라인 홍보', path: '/members/service' }
    ]
  },
  {
    title: '조합안내',
    desc: <>대한민국 클라우드 컴퓨팅<br/>산업의 발전을 이끄는 CCCR입니다.</>,
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

  const [hideMega, setHideMega] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  useEffect(() => {
    const handleOpenNewsletterEvent = () => {
      setIsNewsletterOpen(true);
    };
    window.addEventListener('openNewsletter', handleOpenNewsletterEvent);
    return () => {
      window.removeEventListener('openNewsletter', handleOpenNewsletterEvent);
    };
  }, []);

  const handleMegaClick = () => {
    setHideMega(true);
    setTimeout(() => {
      setHideMega(false);
    }, 150); // 0.15초 뒤에 숨김 해제 (마우스를 떼었을 때 다시 정상 작동하도록)
  };

  return (
    <>
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
                  <span className="btn-text">뉴스레터 받기</span>
                </a>
            </li>
          </ul>
          <ul className="utility-links">
            <li><Link to="/auth/login">로그인</Link></li>
            <li><Link to="/auth/joincccr">회원가입</Link></li>
            <li><Link to="https://www.cccr-edu.or.kr/main/index.jsp" target="_blank" rel="noopener noreferrer">아카데미</Link></li>
          </ul>
        </div>
      </div>

      <div className="header-main">
        <div className="inner-container">
          <h1 className="logo">
            <Link to="/">
              <img 
                  src={(isHome && !isScrolled) ? cccrLogoWhite : cccrLogo} 
                  alt="CCCR 로고" 
                  className="logo-img" 
                />
            </Link>
          </h1>

          {/* 🚀 PC 가로형 메인 메뉴 (깔끔한 2뎁스 전용 그리드 구조) */}
          <nav className="gnb">
            <ul>
              {menuData.map((menu, index) => (
                <li key={index} className="gnb-item">
                  <Link 
                    to={menu.subMenus[0].path} 
                    className="gnb-main-link" 
                    onClick={handleMegaClick}
                  >
                    {menu.title}
                  </Link>
                  <div className="mega-menu-panel" style={{ display: hideMega ? 'none' : '' }}>
                    <div className="mega-inner">
                      <div className="mega-left">
                        <h2>{menu.title}</h2>
                        <p>{menu.desc}</p>
                      </div>
                      
                      <div className="mega-right">
                        <div className="mega-menu-grid">
                          {menu.subMenus.map((sub, subIdx) => (
                            // 🚀 수정 3: 서브 메뉴 클릭 시에도 닫히도록 onClick 추가
                            <Link 
                              key={subIdx} 
                              to={sub.path} 
                              className="mega-2depth-card"
                              onClick={handleMegaClick}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
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

      {/* 모바일 사이드바 영역 */}
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeAll} aria-hidden="true"></div>
      <aside className={`sidebar ${isMenuOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <button className="sidebar-close-btn" onClick={toggleMenu} aria-label="닫기">✕</button>
          <div className="sidebar-util">
            <span className="sidebar-cccr">cccrMenu</span>
            <div className="sidebar-auth">
              <Link to="/auth/join" onClick={closeAll}>회원가입</Link>
              <span className="divider">/</span>
              <Link to="/auth/login" onClick={closeAll}>로그인</Link>
            </div>
          </div>
        </div>
        <ul className="sidebar-menu">
          {menuData.map((menu, index) => (
            <li key={index} className="sidebar-item">
              <div className="sidebar-title" onClick={() => toggleSubMenu(index)}>
                {/* 👇 이 부분을 아래 코드로 교체합니다! */}
                <span className="sidebar-title-link">
                  {menu.title}
                </span>
                
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