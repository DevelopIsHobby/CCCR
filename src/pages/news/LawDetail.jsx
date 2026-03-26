// src/pages/news/LawDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const LawDetail = () => {
  // 1. URL 파라미터에서 게시글 ID를 가져옵니다.
  const { id } = useParams();

  // 2. 테스트를 위한 관련법령 더미 데이터
  const lawData = {
    id: Number(id),
    title: `클라우드컴퓨팅 발전 및 이용자 보호에 관한 법률 일부개정안 (ID: ${id})`, 
    date: "2026-02-15",
    views: 320,
    author: "과학기술정보통신부", // 법령은 보통 소관 부처가 있으니 추가했습니다.
    fileName: `클라우드컴퓨팅법_개정안_상세.hwp`,
    fileSize: "1.5MB",
    content: `
      <div style="line-height: 1.8; color: #334155;">
        <p style="margin-bottom: 20px;"><strong>[시행 2026. 7. 1.] [법률 제12345호, 2026. 1. 1., 일부개정]</strong></p>
        
        <h4 style="color: #0ea5e9; font-size: 18px; margin-bottom: 10px;">■ 개정이유 및 주요내용</h4>
        <p style="margin-bottom: 30px;">
          국가기관등의 클라우드컴퓨팅서비스 이용 촉진을 위하여, 국가기관등의 장이 업무를 위하여 클라우드컴퓨팅서비스를 이용할 수 있는 근거를 명확히 하고, 보안 인증 제도를 개선하여 민간 클라우드 이용을 활성화하려는 것임.
        </p>
        
        <h4 style="color: #0ea5e9; font-size: 18px; margin-bottom: 10px;">■ 주요 개정 조항</h4>
        <ul style="list-style-type: disc; margin-left: 20px; margin-bottom: 30px;">
          <li>제12조(국가기관등의 클라우드컴퓨팅 도입 촉진) 개정</li>
          <li>제20조(클라우드컴퓨팅서비스의 보안인증 등) 신설 및 개정</li>
        </ul>
        
        <p style="color: #64748b; font-size: 14px;">※ 상세한 법령 개정문 및 신구조문대비표는 상단 첨부파일을 확인해 주시기 바랍니다.</p>
      </div>
    `
  };

  return (
    <SubLayout mainCategory="알림마당" subCategory="관련법령">
      {/* 🚀 TrendDetail에 있던 news-container 대신 CSS가 완벽히 잡혀있는 board-container 사용 */}
      <div className="board-container">
        
        <div className="board-detail-wrap">
          {/* 🚀 게시글 헤더 (제목, 작성기관, 작성일, 조회수) */}
          <div className="board-detail-header">
            <h3 className="board-detail-title">{lawData.title}</h3>
            <div className="board-detail-info">
              <span><strong>소관부처</strong> : {lawData.author}</span>
              <span><strong>작성일</strong> : {lawData.date}</span>
              <span><strong>조회수</strong> : {lawData.views}</span>
            </div>
          </div>

          {/* 🚀 첨부파일 다운로드 영역 (board-detail-file 클래스 적용) */}
          {lawData.fileName && (
            <div className="board-detail-file">
              <span style={{ fontWeight: '600', color: '#333' }}>💾 첨부파일 : </span>
              <a href="#none" onClick={(e) => e.preventDefault()} style={{ marginLeft: '8px' }}>
                {lawData.fileName} ({lawData.fileSize})
              </a>
            </div>
          )}

          {/* 🚀 본문 내용 영역 */}
          <div 
            className="board-detail-content"
            dangerouslySetInnerHTML={{ __html: lawData.content }} 
          />
        </div>

        {/* 🚀 목록으로 돌아가기 버튼 */}
        <div className="board-detail-btns">
          <Link to="/news/law" className="btn-list">목록으로</Link>
        </div>

      </div>
    </SubLayout>
  );
};

export default LawDetail;