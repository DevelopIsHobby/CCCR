import React from 'react';
import { Link } from 'react-router-dom';
import './SubLayout.css';

// 🚀 Header에서 세팅했던 '주소가 포함된 메뉴 데이터'를 똑같이 가져옵니다.
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
      { name: '뉴스레터', path: '/news/newsletter' }
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

const categoryDesc = {
  주요사업: "CCCR이 선도하는 클라우드 및 소프트웨어 산업의 핵심 비즈니스를 소개합니다.",
  인재양성: "미래 SW 산업을 이끌어갈 핵심 인재를 발굴하고 전문성을 강화합니다.",
  알림마당: "CCCR의 다양한 소식과 유용한 산업 동향을 빠르고 정확하게 전달합니다.",
  회원공간: "회원사의 지속적인 성장과 비즈니스 성공을 위한 든든한 파트너가 되겠습니다.",
  조합안내: "대한민국 클라우드 컴퓨팅 산업의 발전을 이끄는 CCCR을 소개합니다."
};

const SubLayout = ({ mainCategory, subCategory, children }) => {
  // 🚀 1. 현재 메인 카테고리(예: '주요사업')의 데이터를 통째로 찾습니다.
  const currentMain = menuData.find(menu => menu.title === mainCategory);
  const currentSubMenus = currentMain ? currentMain.subMenus : [];
  const currentDesc = categoryDesc[mainCategory] || "";

  // 🚀 2. 현재 서브 카테고리(예: '표준화')의 데이터를 찾습니다.
  const currentSub = currentSubMenus.find(sub => sub.name === subCategory);
  
  // 🚀 3. 사용자가 경로(Breadcrumb)에서 '주요사업'을 누르면 어디로 보낼까요? (일단 첫 번째 메뉴인 연구개발로 보냅니다)
  const mainLink = currentSubMenus.length > 0 ? currentSubMenus[0].path : '/';
  
  const bgImageUrl = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop";

  return (
    <div className="sub-layout-wrapper">
      
      {/* 1. 서브 비주얼 배너 */}
      <section className="sub-visual" style={{ backgroundImage: `url(${bgImageUrl})` }}>
        <div className="sub-visual-overlay"></div>
        <div className="sub-visual-content">
          <h2 className="visual-title">{mainCategory}</h2>
          <p className="visual-desc">{currentDesc}</p> 
        </div>
      </section>

      {/* 2. 가로형 경로 네비게이션 (Breadcrumb) */}
      <nav className="sub-breadcrumb">
        <div className="breadcrumb-inner">
          {/* 🚀 텍스트 대신 이동 가능한 Link로 전부 교체했습니다! */}
          <Link to="/" className="home-btn" style={{textDecoration: 'none'}}>🏠</Link>
          <div className="breadcrumb-item">
            <Link to={mainLink} className="breadcrumb-link">{mainCategory}</Link>
          </div>
          <div className="breadcrumb-item">
            <Link to={currentSub?.path || '#'} className="breadcrumb-link current-sub">{subCategory}</Link>
          </div>
        </div>
      </nav>

      {/* 3. 메인 콘텐츠 영역 */}
      <main className="sub-content-area">
        <div className="content-inner sub-layout-split">
          
          {/* 3-1. 좌측 LNB (사이드바) */}
          <aside className="sub-sidebar">
            <h2 className="sidebar-main-title">{mainCategory}</h2>
            <ul className="sidebar-menu-list">
              {currentSubMenus.map((menu, index) => (
                <li key={index}>
                  {/* 🚀 메뉴 클릭 시 해당 주소(menu.path)로 정확히 이동합니다! */}
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

          {/* 3-2. 우측 실제 본문 영역 */}
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