// src/pages/news/Law.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Board.css'; 

const Law = () => {
  return (
    <SubLayout mainCategory="알림마당" subCategory="법령정보">
      <div className="news-container">
        <h2 className="news-title">법령정보</h2>
        <div className="news-content">
          <div className="news-board-placeholder">
            <p>관련 법령 및 규제 개정 안내 게시판 목록이 들어갈 자리입니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Law;