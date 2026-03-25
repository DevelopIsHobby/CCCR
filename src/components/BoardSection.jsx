import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BoardSection.css';

const BoardSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  const allBoardData = [
    { id: 1, category: 'notice', categoryLabel: '공지사항', title: '[안내] 2026년 CCCR 상반기 교육 일정 안내', date: '2026-03-03' },
    { id: 2, category: 'event', categoryLabel: '행사소식', title: 'CCCR, 지역 IT 인재 양성을 위한 MOU 체결', date: '2026-03-02' },
    { id: 3, category: 'notice', categoryLabel: '공지사항', title: '웹사이트 리뉴얼 작업에 따른 서비스 일시 중단 안내', date: '2026-03-25' }, 
    { id: 4, category: 'notice', categoryLabel: '공지사항', title: '소프트웨어 산업 발전 유공자 포상 신청 안내', date: '2026-02-28' },
    { id: 5, category: 'event', categoryLabel: '행사소식', title: '2025년 최우수 인증 기업 시상식 성료', date: '2026-03-20' }, 
    { id: 6, category: 'event', categoryLabel: '행사소식', title: '소프트웨어 산업 동향 세미나 개최 결과', date: '2026-03-10' }, 
    { id: 7, category: 'event', categoryLabel: '행사소식', title: '4월 클라우드 보안 워크숍 개최 안내', date: '2026-04-05' },
    { id: 8, category: 'ir', categoryLabel: 'TabIR', title: '2026년 CCCR 1분기 결산 및 사업 보고서', date: '2026-04-10' }, 
    { id: 9, category: 'ir', categoryLabel: 'TabIR', title: 'CCCR 중장기 발전 전략 및 로드맵 안내', date: '2026-03-15' }, 
  ];

  const sortByDateDesc = (a, b) => new Date(b.date) - new Date(a.date);

  let filteredData = [];
  if (activeTab === 'all') {
    // 🚀 전체 탭일 때 각 카테고리별로 2개씩 가져옴
    const noticeList = allBoardData.filter(item => item.category === 'notice').sort(sortByDateDesc).slice(0, 2);
    const eventList = allBoardData.filter(item => item.category === 'event').sort(sortByDateDesc).slice(0, 2);
    const irList = allBoardData.filter(item => item.category === 'ir').sort(sortByDateDesc).slice(0, 2);
    
    // 🚀 [수정됨] 마지막에 날짜순으로 섞지 않고 배열을 순서대로 나열하여 (공지 -> 행사 -> TabIR) 순서 고정!
    filteredData = [...noticeList, ...eventList, ...irList];
  } else {
    filteredData = allBoardData.filter(item => item.category === activeTab).sort(sortByDateDesc).slice(0, 6);
  }

  const [currentDate, setCurrentDate] = useState(new Date('2026-03-17'));

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

  // 🚀 달력에 점을 찍기 위한 데이터 추출 로직
  const currentMonthEvents = allBoardData.filter(item => {
    // 🚀 [수정됨] TabIR 데이터는 달력 일정에서 아예 제외!
    if (item.category === 'ir') return false; 
    
    const itemDate = new Date(item.date);
    return itemDate.getFullYear() === currentYear && itemDate.getMonth() === currentMonth;
  });

  const handleDataClick = (category, id) => {
    const pathSegment = category === 'notice' ? 'notice' : category === 'event' ? 'event' : 'ir';
    navigate(`/news/${pathSegment}/${id}`);
  };

  return (
    <div className="board-section-wrapper">
      <div className="board-grid-full">

        <div className="board-tabs-area">
          <div className="board-header">
            <h2 className="board-main-title">CCCR <span className="highlight-blue">새소식</span></h2>
            <div className="board-controls">
              <div className="tab-buttons">
                <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>전체</button>
                <button className={`tab-btn ${activeTab === 'notice' ? 'active' : ''}`} onClick={() => setActiveTab('notice')}>공지사항</button>
                <button className={`tab-btn ${activeTab === 'event' ? 'active' : ''}`} onClick={() => setActiveTab('event')}>행사소식</button>
                <button className={`tab-btn ${activeTab === 'ir' ? 'active' : ''}`} onClick={() => setActiveTab('ir')}>TabIR</button>
              </div>
              <Link to={activeTab === 'event' ? '/news/event' : activeTab === 'ir' ? '/news/ir' : '/news/notice'} className="more-btn-modern">
                더보기 <span className="more-arrow">+</span>
              </Link>
            </div>
          </div>

          <div className="tab-content">
            <ul className="board-list">
              {filteredData.map((item) => (
                <li key={item.id} className="board-item">
                  <Link to={`/news/${item.category === 'notice' ? 'notice' : item.category === 'event' ? 'event' : 'ir'}/${item.id}`}>
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

        <div className="board-calendar-area">
          <div className="calendar-header-title">
            <h2 className="promo-title calendar-title">주요 일정</h2>
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
                const dateStr = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
                const dayDatas = currentMonthEvents.filter(e => e.date === dateStr);
                const hasData = dayDatas.length > 0;
                const firstCategory = hasData ? dayDatas[0].category : null;

                return (
                  <div 
                    key={day} 
                    className={`cal-day ${isToday ? 'today' : ''} ${hasData ? `has-event ${firstCategory}` : ''}`}
                    onClick={() => { 
                      if (hasData) handleDataClick(dayDatas[0].category, dayDatas[0].id);
                    }}
                  >
                    <span className="day-num">{day}</span>
                    {hasData && <span className={`event-dot ${firstCategory}`}></span>}
                  </div>
                );
              })}
            </div>

            <div className="cal-upcoming">
              <h4 className="upcoming-title">다가오는 일정</h4>
              <ul className="upcoming-list">
                {allBoardData
                  .filter(ev => {
                    // 🚀 [수정됨] TabIR 데이터는 다가오는 일정에서도 아예 제외!
                    if (ev.category === 'ir') return false; 
                    
                    const eventDate = new Date(ev.date);
                    const todayDate = new Date(realToday.getFullYear(), realToday.getMonth(), realToday.getDate());
                    return eventDate >= todayDate;
                  })
                  .sort((a, b) => new Date(a.date) - new Date(b.date))
                  .slice(0, 3) 
                  .map((ev) => {
                    const evDate = new Date(ev.date);
                    return (
                      <li 
                        key={ev.id} 
                        onClick={() => handleDataClick(ev.category, ev.id)}
                        className={`upcoming-item ${ev.category}`}
                      >
                        <span className="up-date">
                          {(evDate.getMonth() + 1).toString().padStart(2, '0')}.{evDate.getDate().toString().padStart(2, '0')}
                        </span>
                        <span className="up-desc">{ev.title}</span>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BoardSection;