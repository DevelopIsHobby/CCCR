// src/pages/about/Directors.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './About.css';

const Directors = () => {
  return (
    <SubLayout mainCategory="조합안내" subCategory="이사 소개">
      <div className="about-container">
        <h2 className="about-title">이사 소개</h2>
        <div className="about-content">
          <div className="about-card">
            <p>조합의 주요 의사결정을 담당하시는 이사진을 소개합니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Directors;