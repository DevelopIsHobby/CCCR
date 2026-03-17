import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MemberSpace.css';

const MemberSpace = () => {
  const [newsList] = useState([
    { id: 1, category: '클라우드', title: '클라우드 네이티브 전환 가속화... 공공부문 도입 활기', date: '2026.03.05', source: '전자신문', url: 'https://www.etnews.com' },
    { id: 2, category: 'AI', title: '생성형 AI 모델 최적화를 위한 하이브리드 클라우드 전략', date: '2026.03.04', source: '디지털데일리', url: 'https://www.ddaily.co.kr' },
    { id: 3, category: '데이터센터', title: '친환경 데이터센터 건립 붐... 전력 효율성이 핵심 경쟁력', date: '2026.03.02', source: '아이티비즈', url: 'https://www.itbiznews.com' },
    { id: 4, category: '양자', title: '양자컴퓨팅과 클라우드의 결합, 차세대 암호 통신 시대 연다', date: '2026.02.28', source: 'ZDNet', url: 'https://zdnet.co.kr' },
    { id: 5, category: '통신', title: '5G 특화망 기반 엣지 클라우드, 스마트 팩토리 도입 확산', date: '2026.02.25', source: '테크월드', url: 'https://www.epnc.co.kr' },
    { id: 6, category: '자율주행', title: '자율주행차 데이터 처리를 위한 초저지연 클라우드 기술', date: '2026.02.20', source: '아이티데일리', url: 'https://www.itdaily.kr' },
  ]);

  const cloudInfo = [
    { id: 1, title: 'IITP 기술동향', desc: '최신 ICT 및 클라우드 동향', path: '/news/trend' },
    { id: 2, title: '클라우드 법령정보', desc: '관련 법률 및 보안 규제 안내', path: '/news/law' },
    { id: 3, title: '뉴스레터', desc: 'CCCR 월간 핵심 이슈 구독', path: '/news/newsletter' },
    { id: 4, title: '세미나/자료실', desc: '전문가 발표 자료 다시보기', path: '/news/event' }
  ];

  const memberInfo = [
    { id: 1, title: '회원사 소식', desc: '조합원 동향 및 보도자료', path: '/members/news' },
    { id: 2, title: '홍보 서비스', desc: '회원사 제품 및 서비스 홍보', path: '/members/pr' },
    { id: 3, title: '회원사 가입안내', desc: 'CCCR 조합원 신규 가입 절차', path: '/members/join' },
    { id: 4, title: '회원사 현황', desc: '든든한 CCCR 파트너스 목록', path: '/members/info' }
  ];

  // 🚀 Header에 있는 팝업을 열라고 찌르는(Dispatch) 함수!
  const handleOpenNewsletter = (e) => {
    e.preventDefault(); // 페이지 이동을 막음
    window.dispatchEvent(new Event('openNewsletter')); // 팝업 오픈 신호 발사
  };

  return (
    <div className="member-space-wrapper">
      <div className="member-space-grid">
        <div className="ms-layout">
          
          {/* ================= 좌측: 카드형 소식 영역 ================= */}
          <div className="ms-left-cards">
            <div className="ms-card-section">
              <div className="ms-section-header">
                <h3 className="ms-title title-cloud">클라우드 <span className="ms-highlight">소식</span></h3>
              </div>
              <div className="ms-card-grid">
                {cloudInfo.map(item => (
                  <Link to={item.path} key={item.id} className="ms-info-card">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="ms-card-section">
              <div className="ms-section-header">
                <h3 className="ms-title title-member">CCCR <span className="ms-highlight">회원공간</span></h3>
              </div>
              <div className="ms-card-grid">
                {memberInfo.map(item => (
                  <Link to={item.path} key={item.id} className="ms-info-card member-card-theme">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ================= 우측: 뉴스 및 하단 배너 영역 ================= */}
          <div className="ms-right-news">
            <div className="ms-section-header news-header">
              <h3 className="ms-title title-news">최신 <span className="ms-highlight">뉴스</span></h3>
              <Link to="/news/latest" className="ms-more-btn-modern" >
                전체보기 <span className="more-arrow">+</span>
              </Link>
            </div>
            
            <ul className="ms-news-list">
              {newsList.slice(0, 6).map((news) => (
                <li key={news.id} className="ms-news-item">
                  <a href={news.url} target="_blank" rel="noopener noreferrer" className="ms-news-link">
                    <div className="ms-news-left">
                      <span className="ms-category">[{news.category}]</span>
                      <span className="ms-news-title">{news.title}</span>
                    </div>
                    <div className="ms-news-right">
                      <span className="ms-source-badge">{news.source}</span>
                      <span className="ms-date">{news.date}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="ms-banner-group">
              <Link to="/news/event" className="ms-event-banner primary-banner">
                <div className="banner-content">
                  <span className="banner-subtitle">선착순 100명 얼리버드 혜택</span>
                  <h4 className="banner-title">2026 CCCR 클라우드 컨퍼런스 사전등록</h4>
                </div>
                <div className="banner-btn">
                  참가 신청하기 &rarr;
                </div>
              </Link>

              {/* 🚀 Link를 a 태그로 바꾸고 팝업 호출 이벤트를 달아줍니다! */}
              <a href="#newsletter" className="ms-event-banner secondary-banner" onClick={handleOpenNewsletter}>
                <div className="banner-content">
                  <span className="banner-subtitle">매월 첫째 주 수요일 발행</span>
                  <h4 className="banner-title">CCCR 공식 뉴스레터 정기구독</h4>
                </div>
                <div className="banner-btn">
                  구독 신청하기 &rarr;
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberSpace;