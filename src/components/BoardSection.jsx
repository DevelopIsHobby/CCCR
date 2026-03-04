import React, { useState } from 'react';
import './BoardSection.css';

const BoardSection = () => {
  // 기본 탭을 '전체(all)'로 설정합니다.
  const [activeTab, setActiveTab] = useState('all');

  // 👇 '보도자료'를 '행사소식(event)'으로 모두 변경했습니다.
  const allBoardData = [
    { id: 1, category: 'notice', categoryLabel: '공지사항', title: '[안내] 2026년 CCCR 상반기 교육 일정 안내', date: '2026-03-03' },
    { id: 2, category: 'event', categoryLabel: '행사소식', title: 'CCCR, 지역 IT 인재 양성을 위한 MOU 체결', date: '2026-03-02' },
    { id: 3, category: 'notice', categoryLabel: '공지사항', title: '웹사이트 리뉴얼 작업에 따른 서비스 일시 중단 안내', date: '2026-03-01' },
    { id: 4, category: 'notice', categoryLabel: '공지사항', title: '소프트웨어 산업 발전 유공자 포상 신청 안내', date: '2026-02-28' },
    { id: 5, category: 'event', categoryLabel: '행사소식', title: '2025년 최우수 인증 기업 시상식 성료', date: '2026-02-20' },
    { id: 6, category: 'event', categoryLabel: '행사소식', title: '소프트웨어 산업 동향 세미나 개최 결과', date: '2026-02-10' },
  ];

  // 👇 '전체' 탭일 경우 공지사항(notice)이 먼저, 행사소식(event)이 나중에 오도록 정렬합니다.
  const groupedData = [...allBoardData].sort((a, b) => {
    // notice에 1번, event에 2번 순위를 매겨서 줄을 세웁니다.
    const orderA = a.category === 'notice' ? 1 : 2;
    const orderB = b.category === 'notice' ? 1 : 2;
    return orderA - orderB;
  });

// 활성화된 탭에 따라 정렬된 데이터를 필터링하고 최대 4개를 자릅니다.
  const filteredData = (activeTab === 'all' 
    ? groupedData 
    : allBoardData.filter(item => item.category === activeTab)
  ).slice(0, 4); // 보여줄 개수를 늘리고 싶다면 이 숫자를 5나 6으로 변경하세요!

  return (
    <div className="board-section-wrapper">
      <div className="board-grid-full">

        {/* 좌측: CCCR 스타일 게시판 영역 */}
        <div className="board-tabs-area">
          
          <div className="board-header">
            {/* 👇 '새소식' 글자에만 파란색을 주기 위해 span으로 감쌌습니다! */}
            <h2 className="board-main-title">CCCR <span className="highlight-blue">새소식</span></h2>
            
            <div className="board-controls">
              <div className="tab-buttons">
                <button 
                  className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveTab('all')}
                >전체</button>
                <button 
                  className={`tab-btn ${activeTab === 'notice' ? 'active' : ''}`}
                  onClick={() => setActiveTab('notice')}
                >공지사항</button>
                <button 
                  className={`tab-btn ${activeTab === 'event' ? 'active' : ''}`} // news -> event로 변경
                  onClick={() => setActiveTab('event')}
                >행사소식</button>
              </div>
              {/* 👇 더보기 버튼 */}
              <a href={`/board/${activeTab}`} className="more-btn" aria-label="더보기">+</a>
            </div>
          </div>

          {/* 게시물 리스트 영역 */}
          <div className="tab-content">
            <ul className="board-list">
              {filteredData.map((item) => (
                <li key={item.id} className="board-item">
                  <a href={`/board/${item.category}/${item.id}`}>
                    <div className="board-title-group">
                      <span className={`category-tag ${item.category}`}>
                        {item.categoryLabel}
                      </span>
                      <span className="board-title">{item.title}</span>
                    </div>
                    <span className="board-date">{item.date}</span>
                  </a>
                </li>
              ))}
            </ul>
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