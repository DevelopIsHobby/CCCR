// src/pages/members/Info.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Members.css';

const Info = () => {
  return (
    <SubLayout mainCategory="회원공간" subCategory="회원안내">
      <div className="members-container">
        <h2 className="members-title">회원안내</h2>
        <div className="members-content">
          <div className="members-card">
            <p>현재 당 조합과 함께하고 있는 든든한 회원사들의 목록과 소개를 보실 수 있습니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Info;