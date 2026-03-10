import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SubLayout.css';

// 1. 메뉴 데이터 세팅
const menuData = [
  {
    title: '주요사업',
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
    ],
  },
  {
    title: '멤버십',
    subMenus: [
      { name: '로그인', path: '/auth/login' },
      { name: '회원가입', path: '/auth/join' },
      { name: '아이디/비밀번호 찾기', path: '#none' }
    ]
  }
];

const categoryDesc = {
  주요사업: "CCCR이 선도하는 클라우드 및 소프트웨어 산업의 핵심 비즈니스를 소개합니다.",
  인재양성: "미래 SW 산업을 이끌어갈 핵심 인재를 발굴하고 전문성을 강화합니다.",
  알림마당: "CCCR의 다양한 소식과 유용한 산업 동향을 빠르고 정확하게 전달합니다.",
  회원공간: "회원사의 지속적인 성장과 비즈니스 성공을 위한 든든한 파트너가 되겠습니다.",
  조합안내: "대한민국 클라우드 컴퓨팅 산업의 발전을 이끄는 CCCR을 소개합니다."
};

const categoryEng = {
  '주요사업': 'BUSINESS',
  '인재양성': 'ACADEMY',
  '알림마당': 'NOTICE',
  '회원공간': 'MEMBERS',
  '조합안내': 'ABOUT US',
  '멤버십': 'MEMBERSHIP'
};

// ==========================================
// 🚀 컴포넌트 시작
// ==========================================
const SubLayout = ({ mainCategory, subCategory, children }) => {
  
  // 데이터 찾기
  const currentMain = menuData.find(menu => menu.title === mainCategory);
  const currentSubMenus = currentMain ? currentMain.subMenus : [];
  const currentDesc = categoryDesc[mainCategory] || "";
  const currentEng = categoryEng[mainCategory] || "CCCR";
  
  const bgImageUrl = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop";

  // 🚀 경로바 드롭다운 State (3뎁스 삭제로 사이드바 State는 제거됨!)
  const [openDropdown, setOpenDropdown] = useState(null); 

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  return (
    <div className="sub-layout-wrapper">
      
      {/* 서브 비주얼 배너 */}
      <section className="sub-visual" style={{ backgroundImage: `url(${bgImageUrl})` }}>
        <div className="sub-visual-overlay"></div>
        <div className="sub-visual-content">
          <h2 className="visual-title">{mainCategory}</h2>
          <p className="visual-desc">{currentDesc}</p> 
        </div>
      </section>

      {/* 2. 가로형 경로 네비게이션 */}
      <nav className="sub-breadcrumb">
        <div className="breadcrumb-inner">
          <Link to="/" className="home-btn" style={{textDecoration: 'none'}}>🏠</Link>
          
          {/* --- [1뎁스] 대분류 카테고리 --- */}
          <div className="breadcrumb-item has-dropdown">
            <button className="breadcrumb-drop-btn" onClick={() => toggleDropdown('main')}>
              <span className="text-truncate">{mainCategory}</span> 
              <span className="drop-icon">☰</span>
            </button>
            {/* 🚀 1뎁스 클릭 시 -> 다른 대분류(인재양성, 알림마당 등)로 이동 가능 */}
            {openDropdown === 'main' && (
              <ul className="breadcrumb-drop-list">
                {menuData.map((menu, idx) => (
                  <li key={idx}>
                    {/* 대분류 클릭 시 해당 카테고리의 첫 번째 서브메뉴로 이동 */}
                    <Link to={menu.subMenus[0].path} onClick={() => setOpenDropdown(null)}>
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* --- [2뎁스] 소분류 세부 메뉴 --- */}
          <div className="breadcrumb-item has-dropdown">
            <button className="breadcrumb-drop-btn" onClick={() => toggleDropdown('sub')}>
              <span className="current-sub text-truncate">{subCategory}</span> 
              <span className="drop-icon">☰</span>
            </button>
            {/* 🚀 2뎁스 클릭 시 -> 현재 카테고리의 다른 소분류들 표시 */}
            {openDropdown === 'sub' && (
              <ul className="breadcrumb-drop-list">
                {currentSubMenus.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} onClick={() => setOpenDropdown(null)}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>

      {/* 3. 메인 콘텐츠 영역 */}
      <main className="sub-content-area">
        <div className="content-inner sub-layout-split">
          
          {/* --- 좌측 LNB (사이드바) --- */}
          <aside className="sub-sidebar">
            <div className="sidebar-title-wrap">
              <h2 className="sidebar-eng-title">{currentEng}</h2>
              <span className="sidebar-kor-title">{mainCategory}</span>
            </div>
            <ul className="sidebar-menu-list">
              {currentSubMenus.map((menu, index) => (
                <li key={index} className="sidebar-item-wrap">
                  {/* 🚀 3뎁스(+/-)가 깔끔하게 삭제된 직관적인 메뉴 링크 */}
                  <Link 
                    to={menu.path} 
                    className={`sidebar-link ${menu.name === subCategory ? 'active' : ''}`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* --- 우측 실제 본문 영역 --- */}
          <div className="sub-content-right">
            <div className="content-header">
              <h3 className="content-title">{subCategory}</h3>
            </div>
            <div className="content-body">
              {children}
            </div>
          </div>

        </div>
      </main>

    </div>
  );
};

export default SubLayout;