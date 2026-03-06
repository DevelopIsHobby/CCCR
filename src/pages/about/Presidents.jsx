// src/pages/about/Presidents.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './About.css';

const Presidents = () => {
  return (
    <SubLayout mainCategory="조합안내" subCategory="역대 조합장">
      <div className="about-container">
        <h2 className="about-title">역대 조합장</h2>
        <div className="about-content">
          <div className="about-card">
            <p>조합을 이끌어주신 역대 조합장님들을 소개합니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Presidents;