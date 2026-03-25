// src/pages/news/TabIR.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const TabIR = () => {
  const boardData = [
    { id: 5, isNew: true, title: '2026년 CCCR 1분기 결산 및 사업 보고서', date: '2026-04-10', views: 125, hasFile: true },
    { id: 4, isNew: true, title: 'CCCR 중장기 발전 전략 및 로드맵 안내', date: '2026-03-15', views: 342, hasFile: true },
    { id: 3, isNew: false, title: '2025년도 정기 총회 회의록', date: '2026-02-20', views: 210, hasFile: true },
    { id: 2, isNew: false, title: '클라우드 컴퓨팅 산업 생태계 활성화 방안 연구', date: '2026-01-05', views: 450, hasFile: true },
    { id: 1, isNew: false, title: '조합 정관 개정안 안내', date: '2025-12-10', views: 678, hasFile: false },
  ];

  return (
    <SubLayout mainCategory="알림마당" subCategory="TabIR">
      <div className="board-container">
        
        {/* 상단 검색 영역 */}
        <div className="board-search-wrap">
          <select className="board-select">
            <option value="title">제목</option>
            <option value="content">내용</option>
          </select>
          <input type="text" className="board-input" placeholder="검색어를 입력하세요" />
          <button className="board-search-btn">검색</button>
        </div>

        {/* 게시판 테이블 */}
        <div className="board-table-wrap">
          <table className="board-table">
            <colgroup>
              <col style={{ width: '10%' }} /> 
              <col style={{ width: 'auto' }} /> 
              <col style={{ width: '10%' }} className="hide-on-mobile" />  
              <col style={{ width: '15%' }} /> 
              <col style={{ width: '12%' }} className="hide-on-mobile" /> 
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th className="hide-on-mobile">첨부</th>
                <th>작성일</th>
                <th className="hide-on-mobile">조회수</th>
              </tr>
            </thead>
            <tbody>
              {boardData.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td className="title-col">
                    {/* 🚀 상세 페이지로 연결하도록 수정 */}
                    <Link to={`/news/ir/${item.id}`}>
                      {item.title}
                      {item.isNew && <span className="new-badge" style={{ marginLeft: '8px' }}>N</span>}
                    </Link>
                  </td>
                  <td className="hide-on-mobile">{item.hasFile && <span className="file-icon">💾</span>}</td>
                  <td>{item.date}</td>
                  <td className="hide-on-mobile">{item.views}</td>
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

export default TabIR;