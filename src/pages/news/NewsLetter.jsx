// src/pages/news/Newsletter.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Board.css'; 

const Newsletter = () => {
  const newsletterData = [
    // 🚀 가장 최신호에 isNew: true 추가
    { id: 3, isNew: true, title: '[CCCR 뉴스레터] 2026년 3월호 (Vol.34)', date: '2026-03-01', views: 145 },
    { id: 2, isNew: false, title: '[CCCR 뉴스레터] 2026년 2월호 (Vol.33)', date: '2026-02-01', views: 210 },
    { id: 1, isNew: false, title: '[CCCR 뉴스레터] 2026년 1월호 (Vol.32)', date: '2026-01-01', views: 330 },
  ];

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
              {newsletterData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td className="title-col" style={{ textAlign: 'left' }}>
                    <a href={`/news/newsletter/${item.id}`}>
                      {item.title}
                      {/* 🚀 N 뱃지 렌더링 */}
                      {item.isNew && <span className="new-badge" style={{ marginLeft: '8px' }}>N</span>}
                    </a>
                  </td>
                  <td>{item.date}</td>
                  <td className="hide-on-mobile">{item.views}</td>
                </tr>
              ))}
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