// src/pages/news/TabIRDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const TabIRDetail = () => {
  const { id } = useParams();

  // 🚀 백엔드 연동 전 테스트용 가짜 데이터
  const irData = {
    id: id,
    title: `2026년 CCCR 1분기 결산 및 사업 보고서 (ID: ${id})`,
    date: '2026-04-10',
    views: 125,
    files: [
      { name: '2026_1분기_결산_보고서.pdf', size: '3.4MB' },
      { name: '사업보고_요약본.hwp', size: '120KB' }
    ],
    content: `
      <div style="font-size: 16px; line-height: 1.8; color: #334155;">
        <p>안녕하십니까, 한국전파진흥협회(CCCR)입니다.</p>
        <p>본 조합의 경영 투명성 제고 및 조합원 알 권리 보장을 위하여 <strong>'2026년 1분기 결산 및 사업 보고서'</strong>를 공시합니다.</p>
        <br/>
        <h4>■ 주요 공시 내용</h4>
        <ul style="padding-left: 20px;">
          <li>2026년 1분기 재무제표 및 수지 결산 내역</li>
          <li>클라우드 지원 사업 및 인력 양성 사업 추진 실적</li>
          <li>2분기 주요 사업 추진 계획 및 예산 집행 계획</li>
        </ul>
        <br/>
        <p>자세한 사항은 상단에 첨부된 문서를 다운로드하여 확인해 주시기 바랍니다.</p>
        <p>CCCR은 앞으로도 투명하고 공정한 운영을 통해 조합원 여러분의 기대에 부응하겠습니다. 감사합니다.</p>
      </div>
    `
  };

  return (
    <SubLayout mainCategory="알림마당" subCategory="TabIR">
      <div className="board-container">
        
        <div className="board-detail-wrap">
          {/* 1. 제목 및 메타 정보 (작성자는 제외) */}
          <div className="board-detail-header">
            <h2 className="board-detail-title">{irData.title}</h2>
            <div className="board-detail-info">
              <span><strong>작성일</strong> : {irData.date}</span>
              <span><strong>조회수</strong> : {irData.views}</span>
            </div>
          </div>

          {/* 2. 첨부파일 영역 */}
          {irData.files && irData.files.length > 0 && (
            <div className="board-detail-file">
              <span style={{ fontWeight: '600', color: '#333' }}>💾 첨부파일 : </span>
              {irData.files.map((file, idx) => (
                <a href="#none" key={idx} style={{ marginLeft: '8px' }}>
                  {file.name} ({file.size}){idx < irData.files.length - 1 ? ',' : ''}
                </a>
              ))}
            </div>
          )}

          {/* 3. 본문 영역 */}
          <div 
            className="board-detail-content"
            dangerouslySetInnerHTML={{ __html: irData.content }}
          ></div>
        </div>

        {/* 4. 하단 목록 버튼 */}
        <div className="board-detail-btns">
          <Link to="/news/ir" className="btn-list">목록으로 돌아가기</Link>
        </div>

      </div>
    </SubLayout>
  );
};

export default TabIRDetail;