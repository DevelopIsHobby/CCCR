// src/pages/academy/Inquiry.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Academy.css';

const Inquiry = () => {
  return (
    <SubLayout mainCategory="인재양성" subCategory="교육문의">
      <div className="academy-container">
        <h2 className="academy-title">교육문의</h2>
        <div className="academy-content">
          <div className="academy-card">
            <p>교육 과정에 대해 궁금하신 점을 남겨주시면 빠르게 답변해 드립니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Inquiry;