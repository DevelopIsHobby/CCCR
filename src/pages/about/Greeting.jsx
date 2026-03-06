// src/pages/about/Greeting.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './About.css';

const Greeting = () => {
  return (
    <SubLayout mainCategory="조합안내" subCategory="인사말">
      <div className="about-container">
        <h2 className="about-title">인사말</h2>
        <div className="about-content">
          <div className="about-card">
            <p>대한민국 클라우드 및 SW 산업의 발전을 이끌어가는 CCCR에 오신 것을 환영합니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Greeting;