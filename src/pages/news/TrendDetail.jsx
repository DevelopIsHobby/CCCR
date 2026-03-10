// src/pages/news/TrendDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const TrendDetail = () => {
  // 1. URL 파라미터에서 게시글 ID를 가져옵니다. (예: /news/trend/5 -> id는 "5")
  const { id } = useParams();

  // 2. 실제로는 받아온 id를 이용해 서버(API)에서 데이터를 불러옵니다.
  // 여기서는 테스트를 위해 더미 데이터를 사용합니다.
  const trendData = {
    id: Number(id),
    title: `[IITP] 주간기술동향 213${id}호`, // id에 따라 제목이 바뀌도록 처리
    date: "2024-03-20",
    views: 142,
    fileName: `주간기술동향_213${id}호.pdf`,
    fileSize: "4.2MB",
    // 🚀 말씀해주신 IITP 본문 스타일 적용
    content: `
      <div style="margin-bottom: 30px;">
        <h4 style="color: #0ea5e9; font-size: 18px; margin-bottom: 15px;">기획시리즈</h4>
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
          <li>AI 기본법 시행 원년, 생성형 AI 운영 컴플라이언스 구축 전략</li>
          <li>D2C 시스템 스펙트럼 연구 동향</li>
        </ul>
      </div>
      
      <div>
        <h4 style="color: #0ea5e9; font-size: 18px; margin-bottom: 15px;">ICT 신기술</h4>
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
          <li>D2C 시스템 스펙트럼 연구 동향</li>
        </ul>
      </div>
    `
  };

  return (
    <SubLayout mainCategory="알림마당" subCategory="기술동향">
      <div className="news-container">
        <h2 className="news-title">기술동향</h2>

        <div className="board-detail-wrap">
          {/* 🚀 게시글 헤더 (제목, 작성일, 조회수) */}
          <div className="board-detail-header">
            <h3 className="board-detail-title">{trendData.title}</h3>
            <div className="board-detail-info">
              <span>작성일: {trendData.date}</span>
              <span>조회수: {trendData.views}</span>
            </div>
          </div>

          {/* 🚀 첨부파일 다운로드 영역 */}
          {trendData.fileName && (
            <div className="board-detail-file">
              <span className="file-icon">💾</span>
              <a href="#none" onClick={(e) => e.preventDefault()}>
                {trendData.fileName} ({trendData.fileSize})
              </a>
            </div>
          )}

          {/* 🚀 본문 내용 영역 */}
          <div className="board-detail-content">
            {/* HTML 태그가 포함된 문자열을 렌더링할 때 사용합니다. */}
            <div dangerouslySetInnerHTML={{ __html: trendData.content }} />
          </div>
        </div>

        {/* 🚀 목록으로 돌아가기 버튼 */}
        <div className="board-detail-btns">
          <Link to="/news/trend" className="btn-list">목록으로</Link>
        </div>

      </div>
    </SubLayout>
  );
};

export default TrendDetail;