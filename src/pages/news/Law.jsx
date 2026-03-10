// src/pages/news/Law.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css'; 

const Law = () => {
  // 🚀 법령정보 더미 데이터 (색상 뱃지 로직 삭제)
  const lawList = [
    { id: 5, category: '가이드라인', title: '국가·공공기관 클라우드컴퓨팅 보안 가이드라인 개정안', date: '2024-03-15', views: 342, hasFile: true, isNew: true },
    { id: 4, category: '법률', title: '클라우드컴퓨팅 발전 및 이용자 보호에 관한 법률 (약칭: 클라우드컴퓨팅법)', date: '2024-02-10', views: 512, hasFile: true, isNew: false },
    { id: 3, category: '입법예고', title: '정보통신망 이용촉진 및 정보보호 등에 관한 법률 시행령 일부개정령(안) 입법예고', date: '2024-01-22', views: 210, hasFile: true, isNew: false },
    { id: 2, category: '고시', title: '클라우드컴퓨팅서비스 정보보호에 관한 기준', date: '2023-11-05', views: 420, hasFile: true, isNew: false },
    { id: 1, category: '가이드라인', title: '금융분야 클라우드컴퓨팅서비스 이용 가이드', date: '2023-08-17', views: 630, hasFile: true, isNew: false },
  ];

  return (
    <SubLayout mainCategory="알림마당" subCategory="법령정보">
      <div className="board-container">
        
        {/* 상단 검색 및 필터 영역 */}
        <div className="board-search-wrap">
          <select className="board-select">
            <option value="all">전체 분류</option>
            <option value="law">법률</option>
            <option value="guide">가이드라인</option>
            <option value="notice">입법예고</option>
          </select>
          <select className="board-select">
            <option value="title">제목</option>
            <option value="content">내용</option>
          </select>
          <input 
            type="text" 
            className="board-search-input" 
            placeholder="검색어를 입력하세요" 
          />
          <button className="board-search-btn">검색</button>
        </div>

        {/* 게시판 테이블 영역 */}
        <div className="board-table-wrap">
          <table className="board-table law-table"> {/* 👈 law-table 추가 */}
            <colgroup>
              <col style={{ width: '8%' }} />  {/* NO */}
              <col style={{ width: '12%' }} /> {/* 분류 */}
              <col style={{ width: 'auto' }} /> {/* 제목 (남은 공간 모두 차지) */}
              <col style={{ width: '10%' }} className="hide-on-mobile" /> {/* 첨부 */}
              <col style={{ width: '15%' }} /> {/* 등록일 */}
              <col style={{ width: '10%' }} /> {/* 조회수 */}
            </colgroup>
            
            <thead>
              <tr>
                <th>NO</th>
                <th>분류</th>
                <th>제목</th>
                <th className="hide-on-mobile">첨부</th>
                <th>등록일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {lawList.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  
                  {/* 분류 데이터를 심플하게 텍스트로만 출력 */}
                  <td style={{ fontWeight: '500', color: '#64748b' }}>
                    {item.category}
                  </td>
                  
                  <td className="title-col">
                    <Link to={`/news/law/${item.id}`}>
                      {item.title}
                      {/* 새 글인 경우 N 뱃지 표시 (이전 단계에서 고른 따뜻한 색상 적용됨) */}
                      {item.isNew && <span className="new-badge" style={{ marginLeft: '8px' }}>N</span>}
                    </Link>
                  </td>
                  <td className="hide-on-mobile">
                    {item.hasFile && <span className="file-icon">💾</span>}
                  </td>
                  <td>{item.date}</td>
                  <td>{item.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 하단 페이지네이션 */}
        <div className="pagination">
          <button className="page-btn">&lt;&lt;</button>
          <button className="page-btn">&lt;</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">&gt;</button>
          <button className="page-btn">&gt;&gt;</button>
        </div>

      </div>
    </SubLayout>
  );
};

export default Law;