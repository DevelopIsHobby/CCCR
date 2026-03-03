import React, { useState } from 'react';
import './BoardSection.css';

const BoardSection = () => {
  // 현재 활성화된 탭의 상태를 관리합니다.
  const [activeTab, setActiveTab] = useState('notice');

  // 백엔드(Spring Boot) API에서 받아올 임시 데이터
  const boardData = {
    notice: [
      { id: 1, title: '[안내] 2026년 CCCR 상반기 교육 일정 안내', date: '2026-03-03' },
      { id: 2, title: '웹사이트 리뉴얼 작업에 따른 서비스 일시 중단 안내', date: '2026-03-01' },
      { id: 3, title: '소프트웨어 산업 발전 유공자 포상 신청 안내', date: '2026-02-28' },
      { id: 4, title: 'CCCR 인증 심사 기준 개정 안내', date: '2026-02-15' },
    ],
    news: [
      { id: 1, title: 'CCCR, 지역 IT 인재 양성을 위한 MOU 체결', date: '2026-03-02' },
      { id: 2, title: '2025년 최우수 인증 기업 시상식 성료', date: '2026-02-20' },
      { id: 3, title: '소프트웨어 산업 동향 세미나 개최 결과', date: '2026-02-10' },
      { id: 4, title: '신규 임원진 취임식 진행', date: '2026-01-15' },
    ]
  };

  return (
    <div className="board-section-wrapper">
      {/* 화면 끝까지 꽉 차게 만드는 와이드 그리드 클래스 적용 */}
      <div className="board-grid-full">
        
        {/* 좌측: 탭 형식의 게시판 */}
        <div className="board-tabs-area">
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === 'notice' ? 'active' : ''}`}
              onClick={() => setActiveTab('notice')}
            >
              공지사항
            </button>
            <button 
              className={`tab-btn ${activeTab === 'news' ? 'active' : ''}`}
              onClick={() => setActiveTab('news')}
            >
              보도자료
            </button>
          </div>

          <div className="tab-content">
            <ul className="board-list">
              {/* activeTab 상태에 따라 notice 또는 news 배열을 렌더링 */}
              {boardData[activeTab].map((item) => (
                <li key={item.id} className="board-item">
                  <a href={`/board/${item.id}`}>
                    <span className="board-title">{item.title}</span>
                    <span className="board-date">{item.date}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href={`/board/${activeTab}`} className="more-btn" aria-label="더보기">
              + 더보기
            </a>
          </div>
        </div>

        {/* 우측: 홍보 배너 */}
        <div className="board-banner-area">
          <div className="promo-banner">
            <h3>기업 지원 프로그램</h3>
            <p>중소 SW기업의 성장을 지원합니다.</p>
            <button className="promo-btn">자세히 보기 →</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BoardSection;