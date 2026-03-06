// src/pages/about/Organization.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './About.css';

const Organization = () => {
  return (
    <SubLayout mainCategory="조합안내" subCategory="조직도">
      <div className="about-container">
        <h2 className="about-title">조직도</h2>
        <div className="about-content">
          <div className="about-card">
            <p>CCCR의 부서별 업무와 조직 구성도를 안내해 드립니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Organization;