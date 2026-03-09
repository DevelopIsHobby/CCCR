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
    title: '멤버십', // 🚀 이 카테고리 이름을 SubLayout의 mainCategory로 쓸 겁니다!
    subMenus: [
      { name: '로그인', path: '/auth/login' },
      { name: '회원가입', path: '/auth/joincccr' },
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

// ==========================================
// 🚀 컴포넌트 시작 (Hook은 무조건 이 안쪽에 있어야 합니다!)
// ==========================================
const SubLayout = ({ mainCategory, subCategory, children }) => {
  
  // 데이터 찾기
  const currentMain = menuData.find(menu => menu.title === mainCategory);
  const currentSubMenus = currentMain ? currentMain.subMenus : [];
  const currentDesc = categoryDesc[mainCategory] || "";
  
  const mainLink = currentSubMenus.length > 0 ? currentSubMenus[0].path : '/';
  const bgImageUrl = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop";

  // 🚀 1. 경로바 드롭다운 State
  const [openDropdown, setOpenDropdown] = useState(null); 

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  // 🚀 2. 좌측 사이드바 아코디언(+/-) State
  const [expandedSidebar, setExpandedSidebar] = useState(null);

  const toggleSidebar = (menuName, e) => {
    e.preventDefault(); 
    setExpandedSidebar(expandedSidebar === menuName ? null : menuName);
  };
  
  // 🚀 1. 연구개발의 세부 사업(3뎁스) 데이터 (연구개발 페이지일 때만 나오게 설정)
  let thirdDepthItems = [];
  
  if (subCategory === '연구개발') {
    thirdDepthItems = [
      { name: '유연의료', path: '/business/rnd/medical' },
      { name: '써드파티', path: '/business/rnd/thirdparty' },
      { name: '자율행동체', path: '/business/rnd/autonomous' },
      { name: '자원풀링', path: '/business/rnd/pooling' },
      { name: '엣지 AI', path: '/business/rnd/edgeai' },
      { name: '위기대응', path: '/business/rnd/crisis' }
    ];
  } else if (subCategory === '교육') {
    // (기존 코드 유지)
    thirdDepthItems = [
      { name: '재직자 교육', path: '/business/edu/incumbent' },
      { name: '미취업자 교육', path: '/business/edu/jobseeker' }
    ];
  } else if (subCategory === '홍보') {
    // (기존 코드 유지)
    thirdDepthItems = [
      { name: '정보서비스', path: '/business/pr/info' },
      { name: '포럼', path: '/business/pr/forum' },
      { name: '뉴스레터', path: '/business/pr/newsletter' }
    ];
  } 

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
          
          {/* --- [1뎁스] 주요사업 --- */}
          <div className="breadcrumb-item has-dropdown">
            <button className="breadcrumb-drop-btn" onClick={() => toggleDropdown('main')}>
              <span className="text-truncate">{mainCategory}</span> 
              <span className="drop-icon">☰</span>
            </button>
            {/* 🚀 1뎁스 클릭 시 -> 2뎁스(연구개발, 표준화 등) 메뉴가 내려옵니다! */}
            {openDropdown === 'main' && (
              <ul className="breadcrumb-drop-list">
                {currentSubMenus.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} onClick={() => setOpenDropdown(null)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* --- [2뎁스] 세부 메뉴 --- */}
          <div className="breadcrumb-item has-dropdown">
            <button className="breadcrumb-drop-btn" onClick={() => toggleDropdown('sub')}>
              <span className="current-sub text-truncate">{subCategory}</span> 
              <span className="drop-icon">☰</span>
            </button>
            {/* 🚀 2뎁스 클릭 시 -> 3뎁스(엣지AI/GPU 등) 메뉴가 내려옵니다! */}
            {openDropdown === 'sub' && (
              <ul className="breadcrumb-drop-list">
                {thirdDepthItems.length > 0 ? (
                  thirdDepthItems.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.path} onClick={() => setOpenDropdown(null)}>{item.name}</Link>
                    </li>
                  ))
                ) : (
                  <li className="empty-drop-item">등록된 세부 사업이 없습니다.</li>
                )}
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
            <h2 className="sidebar-main-title">{mainCategory}</h2>
            <ul className="sidebar-menu-list">
              {currentSubMenus.map((menu, index) => (
                <li key={index} className="sidebar-item-wrap">
                  
                  {/* 실제 페이지 이동 링크 (글자) */}
                  <Link 
                    to={menu.path} 
                    className={`sidebar-link ${menu.name === subCategory ? 'active' : ''}`}
                  >
                    {menu.name}
                  </Link>

                  {/* 🚀 '멤버십'과 '인재양성'이 아닐 때만 + 기호와 3뎁스를 보여줍니다! */}
                  {mainCategory !== '멤버십' && mainCategory !== '인재양성' && (
                    <>
                      {/* 독립적으로 작동하는 + / - 아코디언 버튼 */}
                      <button 
                        className="sidebar-toggle-btn"
                        onClick={(e) => toggleSidebar(menu.name, e)}
                      >
                        {expandedSidebar === menu.name ? '-' : '+'}
                      </button>

                      {/* 3뎁스 하위 메뉴 영역 */}
                      {expandedSidebar === menu.name && (
                        <ul className="sidebar-depth3">
                          {/* 🚀 현재 메뉴가 선택된 메뉴이고, thirdDepthItems 데이터가 있다면 진짜 메뉴를 뿌려줌! */}
                          {menu.name === subCategory && thirdDepthItems.length > 0 ? (
                            thirdDepthItems.map((item, idx) => (
                              <li key={idx}><Link to={item.path}>{item.name}</Link></li>
                            ))
                          ) : (
                            <>
                              {/* 🚀 주석을 반드시 이 빈 태그(Fragment) 안쪽으로 넣어야 에러가 안 납니다! */}
                              <li><Link to="#none">세부메뉴 준비중</Link></li>
                            </>
                          )}
                        </ul>
                      )}
                    </>
                  )}

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