// src/pages/news/Notice.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './News.css';

const Notice = () => {
  return (
    <SubLayout mainCategory="알림마당" subCategory="공지사항">
      <div className="news-container">
        <h2 className="news-title">공지사항</h2>
        <div className="news-content">
          <div className="news-board-placeholder">
            <p>CCCR의 주요 공지사항 게시판 목록이 들어갈 자리입니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Notice;