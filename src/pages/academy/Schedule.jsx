// src/pages/academy/Schedule.jsx
import React, { useState } from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Academy.css';

const HOLIDAYS = {
  '2026-01-01': '신정', '2026-02-16': '설연휴', '2026-02-17': '설날', '2026-02-18': '설연휴',
  '2026-03-01': '3·1절', '2026-03-02': '대체공휴일', '2026-05-05': '어린이날', '2026-05-24': '부처님오신날',
  '2026-05-25': '대체공휴일', '2026-06-06': '현충일', '2026-08-15': '광복절', '2026-09-24': '추석연휴',
  '2026-09-25': '추석', '2026-09-26': '추석연휴', '2026-10-03': '개천절', '2026-10-09': '한글날', '2026-12-25': '기독탄신일'
};

const EDU_EVENTS = [
  { id: 1, type: 'incumbent', title: '[전문] 클라우드 양성', startDate: '2026-04-10', endDate: '2026-04-12' },
  { id: 2, type: 'jobseeker', title: '[채용] 부트캠프 4기', startDate: '2026-05-01', endDate: '2026-10-31' },
  { id: 3, type: 'jobseeker', title: '[산학] TABA 7기', startDate: '2026-07-01', endDate: '2026-12-31' },
  { id: 4, type: 'jobseeker', title: '[서울] SeSAC 3기', startDate: '2026-01-10', endDate: '2026-06-30' }
];

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1)); 

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); 

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const handleToday = () => setCurrentDate(new Date()); // 오늘로 돌아오기 버튼 추가

  const daysInMonth = new Date(year, month + 1, 0).getDate(); 
  const firstDayOfWeek = new Date(year, month, 1).getDay();   

  const isDateInRange = (dateString, start, end) => {
    const targetDate = new Date(dateString).getTime();
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();
    return targetDate >= startDate && targetDate <= endDate;
  };

  const calendarCells = [];

  // 1. 달력 앞부분 빈 칸
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarCells.push(<div key={`empty-${i}`} className="calendar-cell empty"></div>);
  }

  // 2. 실제 날짜
  for (let day = 1; day <= daysInMonth; day++) {
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const holidayName = HOLIDAYS[dateString];
    const isHoliday = !!holidayName;
    const isSunday = new Date(year, month, day).getDay() === 0;
    
    const dailyEvents = EDU_EVENTS.filter(ev => isDateInRange(dateString, ev.startDate, ev.endDate));

    calendarCells.push(
      <div key={`day-${day}`} className="calendar-cell">
        <div className="date-header">
          <span className={`date-num ${isHoliday || isSunday ? 'holiday' : ''}`}>
            {day}
          </span>
          {isHoliday && <span className="holiday-name">{holidayName}</span>}
        </div>
        
        <div className="event-list">
          {dailyEvents.map((ev) => {
            const isStart = ev.startDate === dateString;
            const isEnd = ev.endDate === dateString;
            return (
              <div 
                key={ev.id} 
                className={`calendar-event ${ev.type} ${isStart ? 'is-start' : ''} ${isEnd ? 'is-end' : ''}`}
                title={`${ev.title} (${ev.startDate} ~ ${ev.endDate})`}
              >
                <span className="event-text">{ev.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 3. 달력 뒷부분 빈 칸
  const totalCells = calendarCells.length;
  const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  for (let i = 0; i < remainingCells; i++) {
    calendarCells.push(<div key={`end-empty-${i}`} className="calendar-cell empty"></div>);
  }

  return (
    <SubLayout mainCategory="인재양성" subCategory="교육일정">
      <div className="academy-container">
        <div className="academy-content">
          
          {/* 🚀 프리미엄 캘린더 카드 영역 */}
          <div className="premium-calendar-card">
            
            {/* 상단 컨트롤러 */}
            <div className="calendar-top-bar">
              <div className="calendar-nav-group">
                <button className="cal-btn outline" onClick={handleToday}>오늘</button>
                <div className="cal-arrows">
                  <button className="cal-btn icon" onClick={handlePrevMonth}>&lt;</button>
                  <button className="cal-btn icon" onClick={handleNextMonth}>&gt;</button>
                </div>
                <h3 className="cal-current-month">{year}년 {month + 1}월</h3>
              </div>

              {/* 우측 범례 */}
              <div className="calendar-legend">
                <span className="legend-item"><i className="legend-dot incumbent"></i> 재직자 과정</span>
                <span className="legend-item"><i className="legend-dot jobseeker"></i> 미취업자 과정</span>
              </div>
            </div>

            {/* 달력 본체 */}
            <div className="calendar-grid-wrapper">
              <div className="calendar-grid modern">
                {/* 요일 헤더 */}
                {['일', '월', '화', '수', '목', '금', '토'].map((day, idx) => (
                  <div key={day} className={`calendar-day-header ${idx === 0 ? 'sun' : ''} ${idx === 6 ? 'sat' : ''}`}>
                    {day}
                  </div>
                ))}
                {/* 날짜 셀 */}
                {calendarCells}
              </div>
            </div>

          </div>

        </div>
      </div>
    </SubLayout>
  );
};

export default Schedule;