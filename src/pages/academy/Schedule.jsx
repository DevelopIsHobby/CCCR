// src/pages/academy/Schedule.jsx
import React, { useState } from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Academy.css';

// 🚀 2026년 기준 주요 공휴일 (원하는 연도/날짜로 추가 가능)
const HOLIDAYS = {
  '2026-01-01': '신정',
  '2026-02-16': '설연휴',
  '2026-02-17': '설날',
  '2026-02-18': '설연휴',
  '2026-03-01': '3·1절',
  '2026-03-02': '대체공휴일',
  '2026-05-05': '어린이날',
  '2026-05-24': '부처님오신날',
  '2026-05-25': '대체공휴일',
  '2026-06-06': '현충일',
  '2026-08-15': '광복절',
  '2026-09-24': '추석연휴',
  '2026-09-25': '추석',
  '2026-09-26': '추석연휴',
  '2026-10-03': '개천절',
  '2026-10-09': '한글날',
  '2026-12-25': '기독탄신일'
};

// 🚀 샘플 교육 일정 (YYYY-MM-DD 형식으로 키값을 변경하여 여러 달에 배치)
const EVENT_DATA = {
  '2026-03-10': [
    { type: 'incumbent', title: '[재직자] K8s 심화' },
    { type: 'jobseeker', title: '[KDT] 부트캠프 OT' }
  ],
  '2026-03-15': [{ type: 'incumbent', title: '[재직자] AWS SAA 과정' }],
  '2026-03-20': [{ type: 'jobseeker', title: '[KDT] 빅데이터 실습' }],
  '2026-04-05': [{ type: 'incumbent', title: '[재직자] 보안 과정' }],
  '2026-04-22': [{ type: 'jobseeker', title: '[KDT] 파이널 프로젝트' }],
};

const Schedule = () => {
  // 달력의 현재 기준일 상태 관리 (초기값: 2026년 3월 1일)
  // new Date()를 쓰면 오늘 날짜로 시작하지만, 데이터 확인을 위해 2026년 3월로 고정해두었습니다.
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1)); 

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0부터 시작 (0=1월, 2=3월)

  // 이전 달 / 다음 달 이동 함수
  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  // 달력 렌더링을 위한 날짜 계산
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // 이번 달의 총 일수
  const firstDayOfWeek = new Date(year, month, 1).getDay();   // 이번 달 1일의 요일 (0:일 ~ 6:토)

  // 달력 칸(Cell)을 담을 배열
  const calendarCells = [];

  // 1. 시작일 이전의 빈 칸 채우기
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarCells.push(<div key={`empty-${i}`} className="calendar-cell fade"></div>);
  }

  // 2. 실제 날짜 채우기
  for (let day = 1; day <= daysInMonth; day++) {
    // 'YYYY-MM-DD' 형식의 문자열 생성 (한 자리 수일 경우 앞에 0 붙이기)
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    // 해당 날짜의 일정과 공휴일 정보 가져오기
    const dailyEvents = EVENT_DATA[dateString] || [];
    const holidayName = HOLIDAYS[dateString];

    // 공휴일 여부 체크 (글자색 빨간색 처리를 위해)
    const isHoliday = !!holidayName;
    
    calendarCells.push(
      <div key={`day-${day}`} className="calendar-cell">
        <span 
          className="date-num" 
          style={isHoliday ? { color: '#e12e2e' } : {}} // 공휴일이면 무조건 빨간색!
        >
          {day}
          {/* 공휴일 이름 표시 */}
          {isHoliday && (
            <span style={{ fontSize: '11px', marginLeft: '6px', fontWeight: '500', opacity: 0.8 }}>
              {holidayName}
            </span>
          )}
        </span>
        
        {/* 해당 날짜의 이벤트 출력 */}
        {dailyEvents.map((ev, idx) => (
          <div key={idx} className={`calendar-event ${ev.type}`} title={ev.title}>
            {ev.title}
          </div>
        ))}
      </div>
    );
  }

  // 3. 마지막 주 남은 빈 칸 채우기 (선택 사항)
  const totalCells = calendarCells.length;
  const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  for (let i = 0; i < remainingCells; i++) {
    calendarCells.push(<div key={`end-empty-${i}`} className="calendar-cell fade"></div>);
  }

  return (
    <SubLayout mainCategory="인재양성" subCategory="교육일정">
      <div className="academy-container">
        <div className="academy-content">
          
          <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', justifyContent: 'flex-end', fontSize: '13px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: '12px', height: '12px', backgroundColor: '#004ecc', display: 'inline-block', borderRadius: '2px' }}></span>재직자 교육</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: '12px', height: '12px', backgroundColor: '#008773', display: 'inline-block', borderRadius: '2px' }}></span>미취업자 교육</span>
          </div>

          {/* 🚀 달력 네비게이션 (좌우 화살표에 클릭 이벤트 연결) */}
          <div className="calendar-header">
            <button className="calendar-nav-btn" onClick={handlePrevMonth}>&lt;</button>
            <h3>{year}. {String(month + 1).padStart(2, '0')}</h3>
            <button className="calendar-nav-btn" onClick={handleNextMonth}>&gt;</button>
          </div>

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