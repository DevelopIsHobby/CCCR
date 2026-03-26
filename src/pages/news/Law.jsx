// src/pages/news/Law.jsx
import React, { useState, useEffect } from 'react';
import SubLayout from '../../layouts/SubLayout';
import { Link } from 'react-router-dom';
import './Board.css';

const Law = () => {
  // 🚀 1. 데이터를 담을 바구니 준비
  const [lawList, setLawList] = useState([]);

  // 🚀 2. 백엔드에서 LAW 카테고리만 쏙 뽑아오기
  useEffect(() => {
    fetch('http://localhost:8080/api/boards?category=LAW')
      .then((response) => response.json())
      .then((data) => {
        setLawList(data);
      })
      .catch((error) => console.error("데이터 가져오기 실패:", error));
  }, []);

  return (
    <SubLayout mainCategory="알림마당" subCategory="관련법령">
      <div className="board-container">
        
        {/* 상단 검색 영역 */}
        <div className="board-search-wrap">
          <select className="board-select">
            <option value="title">제목</option>
            <option value="author">분류(부처)</option>
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
          <table className="board-table">
            <colgroup>
              <col style={{ width: '8%' }} /> {/* NO */}
              <col style={{ width: '15%' }} className="hide-on-mobile" /> {/* 분류(소관부처) */}
              <col style={{ width: 'auto' }} /> {/* 제목 */}
              <col style={{ width: '8%' }} className="hide-on-mobile" /> {/* 첨부 */}
              <col style={{ width: '15%' }} /> {/* 등록일 */}
            </colgroup>
            
            <thead>
              <tr>
                <th>NO</th>
                <th className="hide-on-mobile">분류(부처)</th>
                <th>제목</th>
                <th className="hide-on-mobile">첨부</th>
                <th>등록일</th>
              </tr>
            </thead>
            
            <tbody>
              {/* 🚀 3. 화면 그리기 */}
              {lawList.length > 0 ? (
                lawList.map((item) => (
                  <tr key={item.id}>
                    {/* 1. NO */}
                    <td>{item.id}</td>
                    
                    {/* 2. 분류 (author 항목을 활용) */}
                    <td className="hide-on-mobile" style={{ color: '#475569', fontWeight: '500' }}>
                      {item.author || '일반'}
                    </td>
                    
                    {/* 3. 제목 (링크 및 댓글 수 포함) */}
                    <td className="title-col">
                      <Link to={`/news/law/${item.id}`}>
                        {item.title}
                        {/* 댓글 수 표시 */}
                        {item.comments && item.comments.length > 0 && (
                          <span style={{ color: '#ea580c', marginLeft: '6px', fontSize: '14px', fontWeight: 'bold' }}>
                            [{item.comments.length}]
                          </span>
                        )}
                      </Link>
                    </td>
                    
                    {/* 🚀 4. 첨부 (바로 이 부분입니다! 제가 빼먹었던 곳) */}
                    <td className="hide-on-mobile">
                      {item.files && item.files.length > 0 && <span className="file-icon">💾</span>}
                    </td>
                    
                    {/* 5. 등록일 */}
                    <td>{item.createdAt.substring(0, 10)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ padding: '40px 0', color: '#94a3b8', textAlign: 'center' }}>
                    등록된 관련법령이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 하단 페이지네이션 */}
        <div className="pagination">
          <button className="page-btn">&lt;&lt;</button>
          <button className="page-btn">&lt;</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">&gt;</button>
          <button className="page-btn">&gt;&gt;</button>
        </div>

      </div>
    </SubLayout>
  );
};

export default Law;