// src/pages/news/PolicyDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const TabIRDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 🚀 실제로는 백엔드(Spring Boot) API에서 데이터를 받아와야 하지만, 
  // 우선은 테스트용 가짜 데이터를 배치합니다.
  const post = {
    id: id,
    category: 'NIPA',
    title: `[Vol.26-012] 정책 지원 사업 브리핑 (ID: ${id})`,
    author: '정책지원팀',
    applyPeriod: '2026.03.05 ~ 2026.04.06',
    date: '2026-03-25',
    content: ` 여기에 뉴스레터 HTML 템플릿 코드가 들어갑니다... `
  };

  return (
    <SubLayout mainCategory="알림마당" subCategory="정책지원사업">
      <div className="board-container">
        <div className="board-detail-wrap">
          <div className="board-detail-header">
            <h3 className="board-detail-title">
              <span style={{ color: '#0ea5e9', marginRight: '10px' }}>[{post.category}]</span>
              {post.title}
            </h3>
            <div className="board-detail-info">
              <span>작성자: {post.author}</span>
              <span>신청기간: {post.applyPeriod}</span>
              <span>작성일: {post.date}</span>
            </div>
          </div>
          
          {/* HTML 태그가 포함된 컨텐츠 출력 */}
          <div className="board-detail-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          
          <div className="board-detail-btns">
            <button className="btn-list" onClick={() => navigate('/news/policy')}>목록으로 돌아가기</button>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default TabIRDetail;