// src/pages/academy/Training.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Academy.css';

const Training = () => {
  return (
    <SubLayout mainCategory="인재양성" subCategory="교육훈련">
      <div className="academy-container">
        <h2 className="academy-title">교육훈련</h2>
        <div className="academy-content">
          <div className="academy-card">
            <p>산업 발전을 이끌어갈 전문 인재를 양성하는 교육훈련 프로그램 안내입니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Training;