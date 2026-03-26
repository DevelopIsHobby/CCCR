// src/pages/news/Newsletter.jsx
import React, { useState, useEffect } from 'react';
import SubLayout from '../../layouts/SubLayout';
import { Link } from 'react-router-dom'; // 🚀 a 태그 대신 Link 사용
import './Board.css'; 

const Newsletter = () => {
  // 🚀 1. 백엔드 데이터를 담을 바구니
  const [newsletterList, setNewsletterList] = useState([]);

  // 🚀 2. 백엔드에서 NEWSLETTER 카테고리 데이터 가져오기
  useEffect(() => {
    fetch('http://localhost:8080/api/boards?category=NEWSLETTER')
      .then((response) => response.json())
      .then((data) => {
        // 🚀 등록일 기준으로 7일 이내면 '새 글(isNew)'로 판별하는 똑똑한 로직!
        const today = new Date();
        const formattedData = data.map(item => {
          const createdDate = new Date(item.createdAt);
          const diffTime = Math.abs(today - createdDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
          return {
            ...item,
            isNew: diffDays <= 7 // 7일 이하면 true, 아니면 false
          };
        });
        
        setNewsletterList(formattedData);
      })
      .catch((error) => console.error("데이터 가져오기 실패:", error));
  }, []);

  return (
    <SubLayout mainCategory="알림마당" subCategory="뉴스레터">
      <div className="board-container">
        
        {/* 상단 검색 영역 */}
        <div className="board-search-box">
          <select className="board-select">
            <option value="title">제목</option>
            <option value="content">내용</option>
          </select>
          <input type="text" className="board-search-input" placeholder="검색어를 입력하세요" />
          <button className="board-search-btn">검색</button>
        </div>

        {/* 게시판 리스트 영역 */}
        <div className="board-table-wrap">
          <table className="board-table">
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: 'auto' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '10%' }} className="hide-on-mobile" />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>등록일</th>
                <th className="hide-on-mobile">조회수</th>
              </tr>
            </thead>
            <tbody>
              {/* 🚀 3. 백엔드 데이터로 화면 그리기 */}
              {newsletterList.length > 0 ? (
                newsletterList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td className="title-col" style={{ textAlign: 'left' }}>
                      <Link to={`/news/newsletter/${item.id}`}>
                        {item.title}
                        
                        {/* 다른 게시판들과 일관성을 위해 댓글 수도 추가해 드렸습니다! */}
                        {item.comments && item.comments.length > 0 && (
                          <span style={{ color: '#ea580c', marginLeft: '6px', fontSize: '14px', fontWeight: 'bold' }}>
                            [{item.comments.length}]
                          </span>
                        )}
                        
                        {/* 🚀 방금 전 계산한 isNew가 true일 때만 N 뱃지 렌더링 */}
                        {item.isNew && <span className="new-badge" style={{ marginLeft: '8px', color: 'red', fontWeight: 'bold' }}>N</span>}
                      </Link>
                    </td>
                    <td>{item.createdAt.substring(0, 10)}</td>
                    <td className="hide-on-mobile">{item.views}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ padding: '40px 0', textAlign: 'center', color: '#94a3b8' }}>
                    등록된 뉴스레터가 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 페이지네이션 영역 */}
        <div className="pagination">
          <button className="page-btn prev">&lt;</button>
          <button className="page-btn active">1</button>
          <button className="page-btn next">&gt;</button>
        </div>

      </div>
    </SubLayout>
  );
};

export default Newsletter;