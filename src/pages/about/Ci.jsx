// src/pages/about/Ci.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './About.css';

const Ci = () => {
  return (
    <SubLayout mainCategory="조합안내" subCategory="CI">
      <div className="about-container">
        <h2 className="about-title">CI</h2>
        <div className="about-content">
          <div className="about-card">
            <p>CCCR의 비전과 가치를 담은 공식 로고 및 심볼(CI)을 소개합니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Ci;