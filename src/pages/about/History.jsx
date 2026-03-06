// src/pages/about/History.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './About.css';

const History = () => {
  return (
    <SubLayout mainCategory="조합안내" subCategory="설립목적 및 연혁">
      <div className="about-container">
        <h2 className="about-title">설립목적 및 연혁</h2>
        <div className="about-content">
          <div className="about-card">
            <p>CCCR의 설립 배경과 그동안 걸어온 발자취를 소개합니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default History;