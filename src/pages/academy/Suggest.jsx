// src/pages/academy/Suggest.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Academy.css';

const Suggest = () => {
  return (
    <SubLayout mainCategory="인재양성" subCategory="교육제안">
      <div className="academy-container">
        <h2 className="academy-title">교육제안</h2>
        <div className="academy-content">
          <div className="academy-card">
            <p>조합원 및 산업계에 필요한 맞춤형 교육 과정을 자유롭게 제안해 주세요.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Suggest;