// src/pages/about/Location.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './About.css';

const Location = () => {
  return (
    <SubLayout mainCategory="조합안내" subCategory="오시는길">
      <div className="about-container">
        <h2 className="about-title">오시는길</h2>
        <div className="about-content">
          <div className="about-card">
            <p>CCCR 사무국으로 찾아오시는 길과 대중교통 이용 방법을 안내해 드립니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Location;