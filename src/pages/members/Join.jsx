// src/pages/members/Join.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Members.css';

const Join = () => {
  return (
    <SubLayout mainCategory="회원공간" subCategory="가입안내">
      <div className="members-container">
        <h2 className="members-title">가입안내</h2>
        <div className="members-content">
          <div className="members-card">
            <p>CCCR의 회원이 되기 위한 가입 절차, 혜택, 연회비 등을 안내해 드립니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Join;