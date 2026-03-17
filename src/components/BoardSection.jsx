import React, { useState } from 'react'; 
// 🚀 1. useNavigate 훅을 추가로 불러옵니다.
import { Link, useNavigate } from 'react-router-dom';
import './BoardSection.css';

const BoardSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate(); // 🚀 2. 이동 함수 활성화

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
  // 🚀 달력 엔진 로직 
  // =========================================
  const [currentDate, setCurrentDate] = useState(new Date()); 

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); 

  const prevMonth = () => setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentYear, currentMonth + 1, 1));

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); 
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); 

  const realToday = new Date();
  const isThisMonth = realToday.getFullYear() === currentYear && realToday.getMonth() === currentMonth;
  const todayDateNum = realToday.getDate();

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i); 
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1); 

  // 🚀 3. 달력에 표시할 행사 데이터 배열 (ID와 날짜를 연결)
  const calendarEvents = [
    { id: 2, day: 2, title: '지역 IT 인재 양성 MOU 체결' },
    { id: 6, day: 10, title: '월간 클라우드 산업 세미나' },
    { id: 5, day: 20, title: '2025년 최우수 인증 기업 시상식' }
  ];
  const eventDays = calendarEvents.map(event => event.day); 

  // 🚀 4. 행사 상세 페이지로 이동하는 함수
  const handleEventClick = (eventId) => {
    navigate(`/news/event/${eventId}`);
  };

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
                  <Link to={`/news/${item.category === 'notice' ? 'notice' : 'event'}/${item.id}`}>
                    <div className="board-title-group">
                      <span className={`category-tag ${item.category}`}>{item.categoryLabel}</span>
                      <span className="board-title">{item.title}</span>
                    </div>
                    <div className="board-right-group">
                      <span className="board-date">{item.date}</span>
                      <span className="hover-arrow">&rarr;</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🚀 우측: 행사 달력 */}
        <div className="board-calendar-area">
          <div className="calendar-header-title">
            <h2 className="promo-title calendar-title">행사 일정</h2>
          </div>

          <div className="calendar-widget">
            <div className="cal-top">
              <button className="cal-nav-btn" onClick={prevMonth}>&lt;</button>
              <h3 className="cal-month">
                {currentYear}. {(currentMonth + 1).toString().padStart(2, '0')}
              </h3>
              <button className="cal-nav-btn" onClick={nextMonth}>&gt;</button>
            </div>
            
            <div className="cal-weekdays">
              {weekDays.map((day, idx) => (
                <span key={idx} className={`weekday ${idx === 0 ? 'sun' : idx === 6 ? 'sat' : ''}`}>{day}</span>
              ))}
            </div>

            <div className="cal-days">
              {emptyDays.map(empty => (
                <div key={`empty-${empty}`} className="cal-day empty"></div>
              ))}
              
              {days.map(day => {
                const isToday = isThisMonth && day === todayDateNum;
                // 현재 날짜에 해당하는 행사가 있는지 찾습니다.
                const eventInfo = calendarEvents.find(e => e.day === day);
                const hasEvent = !!eventInfo;

                return (
                  <div 
                    key={day} 
                    className={`cal-day ${isToday ? 'today' : ''} ${hasEvent ? 'has-event' : ''}`}
                    // 🚀 5. 행사가 있는 날짜를 클릭하면 해당 행사 ID로 이동
                    onClick={() => { if (hasEvent) handleEventClick(eventInfo.id); }}
                    style={{ cursor: hasEvent ? 'pointer' : 'default' }} 
                  >
                    <span className="day-num">{day}</span>
                    {hasEvent && <span className="event-dot"></span>}
                  </div>
                );
              })}
            </div>

            {/* 🚀 6. 다가오는 행사 리스트도 동적으로 연결 */}
            <div className="cal-upcoming">
              <h4 className="upcoming-title">다가오는 행사</h4>
              <ul className="upcoming-list">
                {/* 최대 2개만 보여주도록 설정 */}
                {calendarEvents.slice(0, 2).map((ev) => (
                  <li 
                    key={ev.id} 
                    onClick={() => handleEventClick(ev.id)}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', transition: 'opacity 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.opacity = 0.7}
                    onMouseOut={(e) => e.currentTarget.style.opacity = 1}
                  >
                    <span className="up-date">{(currentMonth + 1).toString().padStart(2, '0')}.{ev.day.toString().padStart(2, '0')}</span>
                    <span className="up-desc">{ev.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BoardSection;