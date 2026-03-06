// src/pages/news/Trend.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './News.css';

const Trend = () => {
  return (
    <SubLayout mainCategory="알림마당" subCategory="기술동향">
      <div className="news-container">
        <h2 className="news-title">기술동향</h2>
        <div className="news-content">
          <div className="news-board-placeholder">
            <p>클라우드 및 최신 IT 기술 동향 리포트 게시판 목록이 들어갈 자리입니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Trend;