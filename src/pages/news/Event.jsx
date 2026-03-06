// src/pages/news/Event.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './News.css';

const Event = () => {
  return (
    <SubLayout mainCategory="알림마당" subCategory="행사소식">
      <div className="news-container">
        <h2 className="news-title">행사소식</h2>
        <div className="news-content">
          <div className="news-board-placeholder">
            <p>예정된 행사 및 지난 행사 결과 게시판 목록이 들어갈 자리입니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Event;