// src/pages/news/Policy.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const Policy = () => {
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState(null);

  const handleDetail = (id) => {
    navigate(`/news/policy/${id}`);
  };
  
  const [activeCategory, setActiveCategory] = useState('전체');
  const categories = ['전체', '과학기술정보통신부', '산업통상부', '중소벤처기업부', '기타 정부 부처', 'NIPA', 'NIA'];

  const boardData = [
    { 
      id: 3, 
      isNotice: true, 
      isNew: true, 
      category: 'NIPA', 
      dDay: 'D-12', 
      isClosed: false,
      title: '[Vol.26-012] 정책 지원 사업 브리핑 (NIPA 과제 추가)', 
      applyPeriod: '2026.03.05 ~ 2026.04.06', 
      author: '정책지원팀', 
      date: '2026-03-25', 
      hasFile: false,
      content: `<h2>(여기에 뉴스레터 HTML 템플릿이 들어갑니다)</h2>` // 기존 HTML 유지
    },
    { 
      id: 2, 
      isNotice: false, 
      isNew: true, 
      category: '과학기술정보통신부', 
      dDay: 'D-20', 
      isClosed: false,
      title: '2026년도 클라우드 산업 육성 지원 사업 공고', 
      applyPeriod: '2026.03.20 ~ 2026.04.14', 
      author: '정책지원팀', 
      date: '2026-03-20', 
      hasFile: true, 
      content: '<h2>클라우드 산업 육성 지원 내용입니다...</h2>' 
    },
    { 
      id: 1, 
      isNotice: false, 
      isNew: false, 
      category: '산업통상부', 
      dDay: '마감', 
      isClosed: true,
      title: '[Vol.26-011] 정책 지원 사업 브리핑 (2월 4주차)', 
      applyPeriod: '2026.02.10 ~ 2026.02.24', 
      author: '정책지원팀', 
      date: '2026-02-24', 
      hasFile: false, 
      content: '<h2>2월 브리핑 내용입니다...</h2>' 
    },
  ];

  const filteredData = activeCategory === '전체' 
    ? boardData 
    : boardData.filter(item => item.category === activeCategory);

  return (
    <SubLayout mainCategory="알림마당" subCategory="정책지원사업">
      <div className="board-container">
        
        {/* 상세 화면 */}
        {selectedPost ? (
          <div className="board-detail-wrap">
            <div className="board-detail-header">
              <h3 className="board-detail-title">
                <span style={{ color: '#0ea5e9', marginRight: '10px', fontSize: '20px' }}>[{selectedPost.category}]</span>
                {selectedPost.title}
              </h3>
              <div className="board-detail-info">
                <span>작성자: {selectedPost.author}</span>
                <span>신청기간: {selectedPost.applyPeriod}</span>
                <span>작성일: {selectedPost.date}</span>
              </div>
            </div>
            
            <div className="detail-body" dangerouslySetInnerHTML={{ __html: selectedPost.content }}></div>
            
            <div className="board-detail-btns">
              <button className="btn-list" onClick={() => setSelectedPost(null)}>목록으로 돌아가기</button>
            </div>
          </div>
        ) : (
          /* 목록 화면 */
          <>
            <div className="policy-tab-menu">
              {categories.map((cat, idx) => (
                <button 
                  key={idx}
                  className={`policy-tab-item ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="board-search-wrap">
              <select className="board-select">
                <option value="title">제목</option>
                <option value="content">내용</option>
                <option value="author">작성자</option>
              </select>
              <input type="text" className="board-input" placeholder="검색어를 입력하세요" />
              <button className="board-search-btn">검색</button>
            </div>

            <div className="board-table-wrap">
              <table className="board-table policy-table">
                {/* 🚀 문제의 <colgroup> 태그를 통째로 삭제했습니다! */}
                <thead>
                  <tr>
                    {/* 🚀 각 열(th)에 명확한 클래스 부여 */}
                    <th className="col-num hide-on-mobile">번호</th>
                    <th className="col-status">상태</th>
                    <th className="col-title">제목</th>
                    <th className="col-period hide-on-mobile">신청기간</th>
                    <th className="col-author hide-on-mobile">작성자</th>
                    <th className="col-date hide-on-mobile">작성일</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                      <tr key={index} className={item.isNotice ? 'notice-row' : ''}>
                        <td className="col-num hide-on-mobile">
                          {item.isNotice ? <span className="notice-badge">공지</span> : item.id}
                        </td>
                        <td className="col-status">
                          <span className={`dday-badge ${item.isClosed ? 'end' : 'ing'}`}>
                            {item.dDay}
                          </span>
                        </td>
                        <td className="title-col col-title" onClick={() => handleDetail(item.id)}>
                          <span style={{cursor: 'pointer', display: 'block'}} onClick={() => setSelectedPost(item)}>
                            <span style={{ fontWeight: 600, color: item.isClosed ? '#94a3b8' : '#1e293b' }}>
                              <span style={{ color: '#0ea5e9', marginRight: '6px' }}>[{item.category}]</span> 
                              {item.title}
                            </span>
                            {item.isNew && <span className="new-badge" style={{ marginLeft: '8px' }}>N</span>}
                          </span>
                        </td>
                        <td className="col-period hide-on-mobile">{item.applyPeriod}</td>
                        <td className="col-author hide-on-mobile">{item.author}</td>
                        <td className="col-date hide-on-mobile">{item.date}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" style={{ padding: '60px 0', color: '#94a3b8', textAlign: 'center' }}>
                        해당 카테고리의 정책지원사업이 없습니다.
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
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn">&gt;</button>
              <button className="page-btn">&gt;&gt;</button>
            </div>
          </>
        )}

      </div>
    </SubLayout>
  );
};

export default Policy;