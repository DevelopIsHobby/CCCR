// src/pages/academy/Schedule.jsx
import React, { useState } from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Academy.css';

// 🚀 2026년 기준 주요 공휴일 (유지)
const HOLIDAYS = {
  '2026-01-01': '신정', '2026-02-16': '설연휴', '2026-02-17': '설날', '2026-02-18': '설연휴',
  '2026-03-01': '3·1절', '2026-03-02': '대체공휴일', '2026-05-05': '어린이날', '2026-05-24': '부처님오신날',
  '2026-05-25': '대체공휴일', '2026-06-06': '현충일', '2026-08-15': '광복절', '2026-09-24': '추석연휴',
  '2026-09-25': '추석', '2026-09-26': '추석연휴', '2026-10-03': '개천절', '2026-10-09': '한글날', '2026-12-25': '기독탄신일'
};

// 🚀 교육 일정 데이터 (단일 날짜가 아닌 시작일~종료일 기간 기반으로 변경!)
const EDU_EVENTS = [
  { 
    id: 1, type: 'incumbent', title: '[재직자] K8s 컨테이너 오케스트레이션 심화',
    startDate: '2026-04-10', endDate: '2026-04-12' 
  },
  { 
    id: 2, type: 'incumbent', title: '[재직자] AWS SAA 자격 취득',
    startDate: '2026-06-05', endDate: '2026-06-07' 
  },
  { 
    id: 3, type: 'jobseeker', title: '[채용연계형] DevOps & SRE 부트캠프',
    startDate: '2026-05-01', endDate: '2026-10-31' 
  },
  { 
    id: 4, type: 'jobseeker', title: '[SeSAC] 클라우드 인공지능 기초',
    startDate: '2026-03-15', endDate: '2026-04-20' 
  },
  { 
    id: 5, type: 'incumbent', title: '[세미나] 2026 클라우드 동향 포럼',
    startDate: '2026-04-25', endDate: '2026-04-25' // 당일치기 일정
  }
];

const Schedule = () => {
  // 달력 시작 날짜 (2026년 4월을 기본으로 세팅 - 데이터가 많아서 4월로 테스트)
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1)); 

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); 

  // 이전 달 / 다음 달 이동
  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const daysInMonth = new Date(year, month + 1, 0).getDate(); 
  const firstDayOfWeek = new Date(year, month, 1).getDay();   

  // 🚀 날짜 비교 헬퍼 함수 (특정 날짜가 기간 안에 포함되는지 확인)
  const isDateInRange = (dateString, start, end) => {
    const targetDate = new Date(dateString).getTime();
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();
    return targetDate >= startDate && targetDate <= endDate;
  };

  const calendarCells = [];

  // 1. 달력 앞부분 빈 칸 채우기
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarCells.push(<div key={`empty-${i}`} className="calendar-cell fade"></div>);
  }

  // 2. 실제 날짜 채우기 (기간 매칭 로직 탑재)
  for (let day = 1; day <= daysInMonth; day++) {
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const holidayName = HOLIDAYS[dateString];
    const isHoliday = !!holidayName;
    
    // 🚀 현재 렌더링 중인 날짜(dateString)가 포함된 모든 교육 과정 찾기!
    const dailyEvents = EDU_EVENTS.filter(ev => isDateInRange(dateString, ev.startDate, ev.endDate));

    calendarCells.push(
      <div key={`day-${day}`} className="calendar-cell">
        <div className="date-header">
          <span 
            className="date-num" 
            style={isHoliday ? { color: '#ef4444' } : {}} // 공휴일 빨간색
          >
            {day}
          </span>
          {isHoliday && (
            <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: '700', marginLeft: '6px' }}>
              {holidayName}
            </span>
          )}
        </div>
        
        {/* 해당 날짜에 포함된 이벤트 블록 출력 */}
        <div className="event-list">
          {dailyEvents.map((ev) => {
            // 기간 중 첫째 날인지, 마지막 날인지 확인 (CSS 스타일링을 위해)
            const isStart = ev.startDate === dateString;
            const isEnd = ev.endDate === dateString;
            
            return (
              <div 
                key={ev.id} 
                className={`calendar-event ${ev.type} ${isStart ? 'is-start' : ''} ${isEnd ? 'is-end' : ''}`}
                title={`${ev.title} (${ev.startDate} ~ ${ev.endDate})`}
              >
                {/* 🚀 시작일에만 텍스트를 보여주거나, 매일 보여주거나 취향껏 설정 가능 */}
                <span className="event-text">{ev.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 3. 달력 뒷부분 빈 칸 채우기
  const totalCells = calendarCells.length;
  const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  for (let i = 0; i < remainingCells; i++) {
    calendarCells.push(<div key={`end-empty-${i}`} className="calendar-cell fade"></div>);
  }

  return (
    <SubLayout mainCategory="인재양성" subCategory="교육일정">
      <div className="academy-container">
        <div className="academy-content">
          
          {/* 달력 헤더 (연월 이동 및 범례) */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
            
            {/* 왼쪽 범례 (Legend) */}
            <div style={{ display: 'flex', gap: '15px', fontSize: '14px', fontWeight: '600', color: '#475569' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '12px', height: '12px', backgroundColor: '#0ea5e9', display: 'inline-block', borderRadius: '3px' }}></span>
                재직자 교육
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '12px', height: '12px', backgroundColor: '#10b981', display: 'inline-block', borderRadius: '3px' }}></span>
                미취업자(부트캠프)
              </span>
            </div>

            {/* 중앙 네비게이션 */}
            <div className="calendar-header" style={{ margin: 0 }}>
              <button className="calendar-nav-btn" onClick={handlePrevMonth}>&lt;</button>
              <h3 style={{ margin: '0 20px' }}>{year}. {String(month + 1).padStart(2, '0')}</h3>
              <button className="calendar-nav-btn" onClick={handleNextMonth}>&gt;</button>
            </div>

            {/* 우측 여백 맞춤용 투명 박스 */}
            <div style={{ width: '200px', display: 'none' }} className="desktop-spacer"></div>

          </div>

          {/* 달력 본체 */}
          <div className="calendar-grid">
            {/* 요일 헤더 */}
            {['일', '월', '화', '수', '목', '금', '토'].map(day => (
              <div key={day} className="calendar-cell calendar-day-header">{day}</div>
            ))}
            
            {/* 자바스크립트로 생성한 달력 배열 출력 */}
            {calendarCells}
          </div>

        </div>
      </div>
    </SubLayout>
  );
};

export default Schedule;