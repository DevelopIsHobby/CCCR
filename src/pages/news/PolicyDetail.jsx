// src/pages/news/PolicyDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const PolicyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 🚀 백엔드 연동 전 테스트용 가짜 데이터 (첨부파일 배열 추가!)
  const post = {
    id: id,
    category: 'NIPA',
    title: `[Vol.26-012] 정책 지원 사업 브리핑 (ID: ${id})`,
    author: '정책지원팀',
    applyPeriod: '2026.03.05 ~ 2026.04.06',
    date: '2026-03-25',
    files: [
      { name: 'NIPA_지원사업_모집안내서.pdf', size: '1.2MB' },
      { name: '사업계획서_양식.hwp', size: '56KB' }
    ],
    content: `
      <h2>여기에 정책지원사업 상세 내용 또는 뉴스레터 템플릿이 들어갑니다.</h2>
      <p>상세 내용을 확인해 주세요.</p>
    `
  };

  return (
    <SubLayout mainCategory="알림마당" subCategory="정책지원사업">
      <div className="board-container">
        <div className="board-detail-wrap">
          
          {/* 1. 제목 및 메타 정보 */}
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

          {/* 🚀 2. 첨부파일 영역 (공지사항과 동일하게 적용!) */}
          {post.files && post.files.length > 0 && (
            <div className="board-detail-file">
              <span style={{ fontWeight: '600', color: '#333' }}>💾 첨부파일 : </span>
              {post.files.map((file, idx) => (
                <a href="#none" key={idx} style={{ marginLeft: '8px' }}>
                  {file.name} ({file.size}){idx < post.files.length - 1 ? ',' : ''}
                </a>
              ))}
            </div>
          )}
          
          {/* 3. HTML 태그가 포함된 컨텐츠 출력 */}
          <div className="board-detail-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          
          {/* 4. 하단 목록 버튼 */}
          <div className="board-detail-btns">
            <button className="btn-list" onClick={() => navigate('/news/policy')}>목록으로 돌아가기</button>
          </div>
          
        </div>
      </div>
    </SubLayout>
  );
};

export default PolicyDetail;