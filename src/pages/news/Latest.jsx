// src/pages/news/Latest.jsx
import React, { useState } from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Board.css'; 

const Latest = () => {
  const categories = ['전체', '클라우드', '데이터센터', 'AI', '양자', '통신', '자율주행', '로봇'];
  const [activeCategory, setActiveCategory] = useState('전체');
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  const latestNewsList = [
    { id: 12, category: '로봇', source: '로봇신문', title: '휴머노이드 로봇 상용화 임박, 제조 공정의 혁신 예고', date: '2026.03.09', link: 'https://news.naver.com' },
    { id: 11, category: '자율주행', source: 'ZDNet', title: '레벨4 자율주행차 도심 달린다... 안전성 검증 통과', date: '2026.03.08', link: 'https://news.naver.com' },
    { id: 10, category: 'AI', source: '블로터', title: '초거대 AI, 금융권 핵심 서비스로 전면 도입 확산', date: '2026.03.07', link: 'https://news.naver.com' },
    { id: 9, category: '클라우드', source: '전자신문', title: '공공 클라우드 전환 사업 속도 낸다... K-클라우드 도약', date: '2026.03.06', link: 'https://news.naver.com' },
    { id: 8, category: '데이터센터', source: '전자신문', title: '친환경 수랭식 데이터센터 건립 붐... 전력 효율 극대화', date: '2026.03.05', link: 'https://news.naver.com' },
    { id: 7, category: '양자', source: '디지털데일리', title: '양자컴퓨팅 시대 대비하는 보안업계, 양자내성암호 주목', date: '2026.03.04', link: 'https://news.naver.com' },
    { id: 6, category: '통신', source: '아이티비즈', title: '6G 상용화 주도권 경쟁 치열... 위성 통신망 구축 박차', date: '2026.03.03', link: 'https://news.naver.com' },
    { id: 5, category: '클라우드', source: '테크월드', title: '하이브리드 클라우드 전략, 기업 IT 인프라의 표준으로', date: '2026.03.02', link: 'https://news.naver.com' },
    { id: 4, category: 'AI', source: '전자신문', title: '생성형 AI 모델 최적화 기술 개발... 비용 절감 효과 기대', date: '2026.03.01', link: 'https://news.naver.com' },
    { id: 3, category: '자율주행', source: 'ZDNet', title: '자율주행 데이터 처리를 위한 초저지연 엣지 컴퓨팅', date: '2026.02.28', link: 'https://news.naver.com' },
    { id: 2, category: '로봇', source: '아이티데일리', title: '물류 센터 완전 자동화 이끄는 물류 로봇 시스템', date: '2026.02.27', link: 'https://news.naver.com' },
    { id: 1, category: '데이터센터', source: '테크월드', title: '하이퍼스케일 데이터센터, 지역 경제 활성화 견인차 역할', date: '2026.02.26', link: 'https://news.naver.com' },
  ];

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1); 
  };

  const filteredNews = activeCategory === '전체' 
    ? latestNewsList 
    : latestNewsList.filter(news => news.category === activeCategory);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage) || 1;
  const currentItems = filteredNews.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <SubLayout mainCategory="알림마당" subCategory="최신뉴스">
      <div className="board-container">
        
        <div className="latest-category-menu">
          {categories.map((cat) => (
            <button 
              key={cat} 
              className={`latest-cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="board-search-box">
          <select className="board-select">
            <option value="title">기사제목</option>
            <option value="source">언론사</option>
          </select>
          <input type="text" className="board-search-input" placeholder="검색어를 입력하세요" />
          <button className="board-search-btn">검색</button>
        </div>

        {/* 게시판 리스트 영역 */}
        <table className="board-table latest-table">
          <thead>
            <tr>
              {/* 🚀 '분야'로 이름 변경 및 너비 축소 (10%) */}
              <th style={{ width: '10%' }}>분야</th>
              {/* 🚀 모바일에서 숨길 칸에 hide-on-mobile 클래스 추가 */}
              <th className="hide-on-mobile" style={{ width: '15%' }}>언론사</th>
              <th style={{ width: 'auto' }}>기사제목</th>
              {/* 🚀 모바일에서 숨길 칸에 hide-on-mobile 클래스 추가 */}
              <th className="hide-on-mobile" style={{ width: '12%' }}>등록일</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((news) => (
                <tr key={news.id}>
                  
                  {/* 분야 칸 */}
                  <td>
                    <span className="latest-badge" style={{ margin: 0 }}>
                      {news.category}
                    </span>
                  </td>
                  
                  {/* 언론사 칸 (모바일 숨김) */}
                  <td className="hide-on-mobile" style={{ fontWeight: '600', color: '#666' }}>
                    {news.source}
                  </td>
                  
                  {/* 기사제목 칸 */}
                  <td className="title-col" style={{ textAlign: 'left' }}>
                    <a 
                      href={news.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="새 창으로 기사 보기"
                    >
                      {news.title}
                    </a>
                  </td>
                  
                  {/* 등록일 칸 (모바일 숨김) */}
                  <td className="hide-on-mobile">{news.date}</td>
                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ padding: '50px 0', textAlign: 'center', color: '#888' }}>
                  해당 분야의 뉴스가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="pagination">
          <button 
            className="page-btn prev" 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button 
              key={i + 1} 
              className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button 
            className="page-btn next" 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>

      </div>
    </SubLayout>
  );
};

export default Latest;