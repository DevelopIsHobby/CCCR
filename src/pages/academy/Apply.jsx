// src/pages/academy/Apply.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Academy.css';

const Apply = () => {
  return (
    <SubLayout mainCategory="인재양성" subCategory="교육신청">
      <div className="academy-container">
        <h2 className="academy-title">교육신청</h2>
        <div className="academy-content">
          <div className="academy-card">
            <p>현재 접수 중인 교육 과정을 확인하고 신청할 수 있습니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Apply;