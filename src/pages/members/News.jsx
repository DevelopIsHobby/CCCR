// src/pages/members/News.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Members.css';

const News = () => {
  return (
    <SubLayout mainCategory="회원공간" subCategory="회원소식">
      <div className="members-container">
        <h2 className="members-title">회원소식</h2>
        <div className="members-content">
          <div className="members-card">
            <p>회원사들의 주요 동향, 신규 서비스 출시, 수상 내역 등 반가운 소식을 전합니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default News;