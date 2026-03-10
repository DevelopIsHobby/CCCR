// src/pages/news/Notice.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const Notice = () => {
  const boardData = [
    // 🚀 최신 글에 isNew: true 추가
    { id: 'notice1', isNotice: true, isNew: true, title: '[안내] 2026년 CCCR 클라우드 전문가 양성과정 모집', author: '관리자', date: '2026-03-05', views: 152, hasFile: true },
    { id: 'notice2', isNotice: true, isNew: false, title: '한국전파진흥협회 회원사 가입 절차 안내', author: '관리자', date: '2026-02-28', views: 340, hasFile: false },
    { id: 8, isNotice: false, isNew: true, title: '오프라인 클라우드 네트워킹 데이 행사 안내', author: '기획팀', date: '2026-03-07', views: 45, hasFile: false },
    { id: 7, isNotice: false, isNew: false, title: '3월 서버 점검 및 홈페이지 이용 일시 중단 안내', author: '운영팀', date: '2026-03-06', views: 88, hasFile: false },
    { id: 6, isNotice: false, isNew: false, title: '신규 가입 회원사 환영의 글 및 혜택 안내', author: '관리자', date: '2026-03-05', views: 67, hasFile: false },
    { id: 5, isNotice: false, isNew: false, title: '2026 상반기 클라우드 산업 동향 세미나 개최', author: '기획팀', date: '2026-03-02', views: 210, hasFile: true },
    { id: 4, isNotice: false, isNew: false, title: '개인정보처리방침 개정 사전 안내', author: '관리자', date: '2026-02-20', views: 112, hasFile: false },
    { id: 3, isNotice: false, isNew: false, title: '설 연휴 고객센터 및 업무 휴무 안내', author: '운영팀', date: '2026-02-10', views: 205, hasFile: false },
    { id: 2, isNotice: false, isNew: false, title: '2026년 CCCR 주요 사업 계획 발표 자료', author: '기획팀', date: '2026-01-25', views: 310, hasFile: true },
    { id: 1, isNotice: false, isNew: false, title: 'CCCR 홈페이지 신규 오픈 및 개편 안내', author: '관리자', date: '2026-01-15', views: 560, hasFile: true },
  ];

  return (
    <SubLayout mainCategory="알림마당" subCategory="공지사항">
      <div className="board-container">
        
        {/* 상단 검색 영역 */}
        <div className="board-search-wrap">
          <select className="board-select">
            <option value="title">제목</option>
            <option value="content">내용</option>
            <option value="author">작성자</option>
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
              <col style={{ width: '8%' }} className="hide-on-mobile" />  
              <col style={{ width: '12%' }} className="hide-on-mobile" /> 
              <col style={{ width: '15%' }} /> 
              <col style={{ width: '10%' }} className="hide-on-mobile" /> 
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th className="hide-on-mobile">첨부</th>
                <th className="hide-on-mobile">작성자</th>
                <th>작성일</th>
                <th className="hide-on-mobile">조회수</th>
              </tr>
            </thead>
            <tbody>
              {boardData.map((item, index) => (
                <tr key={index} className={item.isNotice ? 'notice-row' : ''}>
                  <td>
                    {item.isNotice ? <span className="notice-badge">공지</span> : item.id}
                  </td>
                  <td className="title-col">
                    <Link to={`/news/notice/${item.id}`}>
                      {item.title}
                      {/* 🚀 N 뱃지 렌더링 */}
                      {item.isNew && <span className="new-badge" style={{ marginLeft: '8px' }}>N</span>}
                    </Link>
                  </td>
                  <td className="hide-on-mobile">{item.hasFile && <span className="file-icon">💾</span>}</td>
                  <td className="hide-on-mobile">{item.author}</td>
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

export default Notice;