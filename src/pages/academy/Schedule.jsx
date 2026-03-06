// src/pages/academy/Schedule.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Academy.css';

const Schedule = () => {
  return (
    <SubLayout mainCategory="인재양성" subCategory="교육일정">
      <div className="academy-container">
        <h2 className="academy-title">교육일정</h2>
        <div className="academy-content">
          <div className="academy-card">
            <p>연간 교육 일정 및 상세 커리큘럼을 달력 형태로 제공합니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Schedule;