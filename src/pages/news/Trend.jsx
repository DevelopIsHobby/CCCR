// src/pages/news/Trend.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import { Link } from 'react-router-dom';
import './Board.css'; 

const Trend = () => {
  const trendList = [
    { id: 5, title: "[IITP] 주간기술동향 2135호", date: "2024-03-20", views: 142, hasFile: true },
    { id: 4, title: "[IITP] 주간기술동향 2134호", date: "2024-03-13", views: 205, hasFile: true },
    { id: 3, title: "[IITP] 주간기술동향 2133호", date: "2024-03-06", views: 98, hasFile: true },
    { id: 2, title: "[IITP] 주간기술동향 2132호", date: "2024-02-28", views: 310, hasFile: true },
    { id: 1, title: "[IITP] 주간기술동향 2131호", date: "2024-02-21", views: 187, hasFile: true },
  ];

  return (
    <SubLayout mainCategory="알림마당" subCategory="기술동향">
      {/* 🚀 불필요한 타이틀과 news-content를 지우고 board-container로 통일했습니다 */}
      <div className="board-container">
        
        {/* 상단 검색 및 필터 영역 */}
        <div className="board-search-wrap">
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
          <table className="board-table">
            
            {/* 🚀 colgroup 추가: 제목 칸(auto)이 남은 너비를 다 가져가도록 설정 */}
            <colgroup>
              <col style={{ width: '10%' }} /> {/* NO */}
              <col style={{ width: 'auto' }} /> {/* 제목 */}
              <col style={{ width: '10%' }} className="hide-on-mobile" /> {/* 첨부 */}
              <col style={{ width: '15%' }} /> {/* 등록일 */}
              <col style={{ width: '10%' }} /> {/* 조회수 */}
            </colgroup>

            <thead>
              <tr>
                <th>NO</th>
                <th>제목</th>
                <th className="hide-on-mobile">첨부</th>
                <th>등록일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {trendList.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td className="title-col">
                    <Link to={`/news/trend/${item.id}`}>
                      {item.title}
                      {/* N 뱃지 (앞서 고르신 따뜻한 색상이 적용됩니다) */}
                      {item.id === 5 && <span className="new-badge" style={{ marginLeft: '8px' }}>N</span>}
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

export default Trend;