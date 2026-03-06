// src/pages/members/Pr.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Members.css';

const Pr = () => {
  return (
    <SubLayout mainCategory="회원공간" subCategory="회원홍보">
      <div className="members-container">
        <h2 className="members-title">회원홍보</h2>
        <div className="members-content">
          <div className="members-card">
            <p>회원사의 우수한 제품과 서비스를 알릴 수 있는 홍보 공간입니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Pr;