// src/pages/members/Pr.jsx
import React, { useState, useEffect } from 'react';
import SubLayout from '../../layouts/SubLayout';
import { Link } from 'react-router-dom';
import './Members.css';

const Pr = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🚀 1. 카테고리 상태 관리
  const categories = ['전체', '클라우드(IaaS/PaaS)', 'SaaS/SW', '보안/네트워크', 'AI/빅데이터'];
  const [activeCategory, setActiveCategory] = useState('전체');

  // 🚀 2. 검색 상태 관리
  const [searchInput, setSearchInput] = useState('');
  const [appliedKeyword, setAppliedKeyword] = useState('');

  // 🚀 3. 홍보 게시판 더미 데이터 (이미지는 임시 플레이스홀더)
  const prList = [
    { id: 1, category: '클라우드(IaaS/PaaS)', company: '메가존클라우드(주)', title: 'SpaceONE 플랫폼', desc: '멀티 클라우드 환경을 하나의 대시보드에서 통합 관리하고 비용을 최적화할 수 있는 강력한 클라우드 관리 플랫폼(CMP)입니다.', tags: ['#CMP', '#비용최적화'], img: 'https://placehold.co/600x400/f0f9ff/0ea5e9?text=SpaceONE' },
    { id: 2, category: '클라우드(IaaS/PaaS)', company: '오케스트로(주)', title: 'OKESTRO CMP', desc: '프라이빗, 퍼블릭, 하이브리드 클라우드를 아우르는 지능형 클라우드 오케스트레이션 솔루션입니다.', tags: ['#하이브리드', '#지능형'], img: 'https://placehold.co/600x400/f8fafc/64748b?text=OKESTRO+CMP' },
    { id: 3, category: '보안/네트워크', company: '(주)노브레이크', title: '클라우드 원격 보안 관제', desc: '24시간 365일 중단 없는 클라우드 특화 보안 관제 서비스로 기업의 소중한 데이터를 안전하게 보호합니다.', tags: ['#보안관제', '#무중단'], img: 'https://placehold.co/600x400/f0fdf4/16a34a?text=Security' },
    { id: 4, category: 'AI/빅데이터', company: '이노뎁(주)', title: 'VURIX AI 영상관제', desc: '도시의 다양한 CCTV 데이터를 AI로 실시간 분석하여 위험 상황을 사전에 감지하는 스마트 관제 솔루션입니다.', tags: ['#스마트시티', '#영상분석'], img: 'https://placehold.co/600x400/fffbeb/d97706?text=VURIX+AI' },
    { id: 5, category: 'SaaS/SW', company: '(주)틸론', title: 'Vstation (DaaS)', desc: '언제 어디서나 안전하게 업무 환경에 접속할 수 있는 가상 데스크톱 인프라 솔루션입니다.', tags: ['#DaaS', '#스마트워크'], img: 'https://placehold.co/600x400/fdf4ff/c026d3?text=Vstation' },
    { id: 6, category: 'AI/빅데이터', company: '(주)소프트웍스', title: 'DataFlow Pro', desc: '대용량 데이터의 수집부터 정제, 시각화까지 원스톱으로 제공하는 엔터프라이즈 데이터 파이프라인 솔루션.', tags: ['#데이터파이프라인', '#자동화'], img: 'https://placehold.co/600x400/fef2f2/dc2626?text=DataFlow' },
  ];

  // 🚀 4. 검색 및 필터링 로직
  const handleSearch = () => {
    setAppliedKeyword(searchInput.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const filteredPrList = prList.filter(item => {
    const matchCategory = activeCategory === '전체' || item.category === activeCategory;
    const matchKeyword = item.title.includes(appliedKeyword) || item.company.includes(appliedKeyword);
    return matchCategory && matchKeyword;
  });

  return (
    <SubLayout mainCategory="회원공간" subCategory="회원홍보">
      <div className="news-container">
        
        {/* 상단 타이틀 영역 */}
        <div className="guide-welcome-header" style={{ marginBottom: '40px' }}>
          <span className="welcome-badge">PR CENTER</span>
          <p className="welcome-main-text">
            CCCR 회원사의 <strong>우수한 제품과 서비스</strong>를 만나보세요.
          </p>
        </div>

        {/* 🚀 카테고리 필터 버튼 (가로 스크롤 가능하게) */}
        <div className="pr-category-wrap">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`pr-cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => { setActiveCategory(cat); setAppliedKeyword(''); setSearchInput(''); }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🚀 검색창 (News.jsx의 CSS 클래스 재활용!) */}
        <div className="news-search-wrap" style={{ marginBottom: '40px' }}>
          <input 
            type="text" 
            className="news-search-input" 
            placeholder="제품명 또는 회사명을 검색해 보세요" 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="news-search-btn" onClick={handleSearch}>검색</button>
        </div>

        {/* 🚀 카드형 갤러리 그리드 */}
        <div className="pr-grid">
          {filteredPrList.length > 0 ? (
            filteredPrList.map((item) => (
              /* 👇 Link 태그로 감싸기! */
              <Link to={`/members/pr/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                <div className="pr-card">
                  <div className="pr-img-wrap">
                    <img src={item.img} alt={item.title} className="pr-img" />
                    <span className="pr-card-category">{item.category}</span>
                  </div>
                  <div className="pr-content">
                    <span className="pr-company">{item.company}</span>
                    <h4 className="pr-title">{item.title}</h4>
                    <p className="pr-desc">{item.desc}</p>
                    <div className="pr-tags">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="pr-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="pr-empty">검색된 홍보 자료가 없습니다.</div>
          )}
        </div>

        {/* 페이지네이션 (News.jsx CSS 재활용) */}
        <div className="news-pagination">
          <button className="news-page-btn active">1</button>
        </div>

      </div>
    </SubLayout>
  );
};

export default Pr;