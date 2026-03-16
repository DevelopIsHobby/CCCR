import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './BoardSection.css';

const BoardSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const allBoardData = [
    { id: 1, category: 'notice', categoryLabel: '공지사항', title: '[안내] 2026년 CCCR 상반기 교육 일정 안내', date: '2026-03-03' },
    { id: 2, category: 'event', categoryLabel: '행사소식', title: 'CCCR, 지역 IT 인재 양성을 위한 MOU 체결', date: '2026-03-02' },
    { id: 3, category: 'notice', categoryLabel: '공지사항', title: '웹사이트 리뉴얼 작업에 따른 서비스 일시 중단 안내', date: '2026-03-01' },
    { id: 4, category: 'notice', categoryLabel: '공지사항', title: '소프트웨어 산업 발전 유공자 포상 신청 안내', date: '2026-02-28' },
    { id: 5, category: 'event', categoryLabel: '행사소식', title: '2025년 최우수 인증 기업 시상식 성료', date: '2026-02-20' },
    { id: 6, category: 'event', categoryLabel: '행사소식', title: '소프트웨어 산업 동향 세미나 개최 결과', date: '2026-02-10' },
  ];

  const sortByDateDesc = (a, b) => new Date(b.date) - new Date(a.date);

  let filteredData = [];
  if (activeTab === 'all') {
    const noticeList = allBoardData.filter(item => item.category === 'notice').sort(sortByDateDesc).slice(0, 3);
    const eventList = allBoardData.filter(item => item.category === 'event').sort(sortByDateDesc).slice(0, 3);
    filteredData = [...noticeList, ...eventList]; 
  } else {
    filteredData = allBoardData.filter(item => item.category === activeTab).sort(sortByDateDesc).slice(0, 6);
  }

  // =========================================
  // 🚀 달력 엔진 로직 추가
  // =========================================
  const [currentDate, setCurrentDate] = useState(new Date()); // 현재 화면에 보이는 달력 기준일

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0부터 시작 (0 = 1월, 2 = 3월)

  // 1. 이전 달 / 다음 달 이동 함수
  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };
  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // 2. 현재 달력에 그릴 날짜 계산
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // 이번 달 총 일수
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 1일의 요일 (0:일 ~ 6:토)

  // 3. 오늘 날짜 하이라이트 계산
  const realToday = new Date();
  const isThisMonth = realToday.getFullYear() === currentYear && realToday.getMonth() === currentMonth;
  const todayDateNum = realToday.getDate();

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i); // 1일 전까지의 빈 칸
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1); // 실제 날짜 1, 2, 3...

  // 임시 행사 데이터 (UI 테스트를 위해 달이 바뀌어도 고정으로 띄워둠)
  const eventDays = [2, 10, 20]; 

  return (
    <div className="board-section-wrapper">
      <div className="board-grid-full">

        {/* 좌측: 모던 스타일 게시판 영역 */}
        <div className="board-tabs-area">
          <div className="board-header">
            <h2 className="board-main-title">CCCR <span className="highlight-blue">새소식</span></h2>
            <div className="board-controls">
              <div className="tab-buttons">
                <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>전체</button>
                <button className={`tab-btn ${activeTab === 'notice' ? 'active' : ''}`} onClick={() => setActiveTab('notice')}>공지사항</button>
                <button className={`tab-btn ${activeTab === 'event' ? 'active' : ''}`} onClick={() => setActiveTab('event')}>행사소식</button>
              </div>
              <Link to={activeTab === 'event' ? '/news/event' : '/news/notice'} className="more-btn-modern">
                더보기 <span className="more-arrow">+</span>
              </Link>
            </div>
          </div>

          <div className="tab-content">
            <ul className="board-list">
              {filteredData.map((item) => (
                <li key={item.id} className="board-item">
                  <a href={`/board/${item.category}/${item.id}`}>
                    <div className="board-title-group">
                      <span className={`category-tag ${item.category}`}>{item.categoryLabel}</span>
                      <span className="board-title">{item.title}</span>
                    </div>
                    <div className="board-right-group">
                      <span className="board-date">{item.date}</span>
                      <span className="hover-arrow">&rarr;</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🚀 우측: 행사 달력 (엔진 탑재 완료) */}
        <div className="board-calendar-area">
          <div className="calendar-header-title">
            <h2 className="promo-title calendar-title">행사 일정</h2>
          </div>

          <div className="calendar-widget">
            {/* 달력 상단 월/버튼 */}
            <div className="cal-top">
              <button className="cal-nav-btn" onClick={prevMonth}>&lt;</button>
              <h3 className="cal-month">
                {currentYear}. {(currentMonth + 1).toString().padStart(2, '0')}
              </h3>
              <button className="cal-nav-btn" onClick={nextMonth}>&gt;</button>
            </div>
            
            {/* 요일 */}
            <div className="cal-weekdays">
              {weekDays.map((day, idx) => (
                <span key={idx} className={`weekday ${idx === 0 ? 'sun' : idx === 6 ? 'sat' : ''}`}>{day}</span>
              ))}
            </div>

            {/* 날짜 그리드 */}
            <div className="cal-days">
              {/* 1일 이전의 빈 칸 렌더링 */}
              {emptyDays.map(empty => (
                <div key={`empty-${empty}`} className="cal-day empty"></div>
              ))}
              
              {/* 실제 날짜 렌더링 */}
              {days.map(day => {
                const isToday = isThisMonth && day === todayDateNum;
                const hasEvent = eventDays.includes(day);

                return (
                  <div key={day} className={`cal-day ${isToday ? 'today' : ''} ${hasEvent ? 'has-event' : ''}`}>
                    <span className="day-num">{day}</span>
                    {hasEvent && <span className="event-dot"></span>}
                  </div>
                );
              })}
            </div>

            {/* 다가오는 행사 리스트 (임시) */}
            <div className="cal-upcoming">
              <h4 className="upcoming-title">다가오는 행사</h4>
              <ul className="upcoming-list">
                <li>
                  <span className="up-date">{(currentMonth + 1).toString().padStart(2, '0')}.02</span>
                  <span className="up-desc">지역 IT 인재 양성 MOU 체결</span>
                </li>
                <li>
                  <span className="up-date">{(currentMonth + 1).toString().padStart(2, '0')}.10</span>
                  <span className="up-desc">월간 클라우드 산업 세미나</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BoardSection;