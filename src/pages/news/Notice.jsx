// src/pages/news/Notice.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const Notice = () => {
  // 🚀 게시글 10개 꽉 채운 가짜(Dummy) 데이터입니다!
  const boardData = [
    { id: 'notice1', isNotice: true, title: '[안내] 2026년 CCCR 클라우드 전문가 양성과정 모집', author: '관리자', date: '2026-03-05', views: 152, hasFile: true },
    { id: 'notice2', isNotice: true, title: '한국전파진흥협회 회원사 가입 절차 안내', author: '관리자', date: '2026-02-28', views: 340, hasFile: false },
    { id: 8, isNotice: false, title: '오프라인 클라우드 네트워킹 데이 행사 안내', author: '기획팀', date: '2026-03-07', views: 45, hasFile: false },
    { id: 7, isNotice: false, title: '3월 서버 점검 및 홈페이지 이용 일시 중단 안내', author: '운영팀', date: '2026-03-06', views: 88, hasFile: false },
    { id: 6, isNotice: false, title: '신규 가입 회원사 환영의 글 및 혜택 안내', author: '관리자', date: '2026-03-05', views: 67, hasFile: false },
    { id: 5, isNotice: false, title: '2026 상반기 클라우드 산업 동향 세미나 개최', author: '기획팀', date: '2026-03-02', views: 210, hasFile: true },
    { id: 4, isNotice: false, title: '개인정보처리방침 개정 사전 안내', author: '관리자', date: '2026-02-20', views: 112, hasFile: false },
    { id: 3, isNotice: false, title: '설 연휴 고객센터 및 업무 휴무 안내', author: '운영팀', date: '2026-02-10', views: 205, hasFile: false },
    { id: 2, isNotice: false, title: '2026년 CCCR 주요 사업 계획 발표 자료', author: '기획팀', date: '2026-01-25', views: 310, hasFile: true },
    { id: 1, isNotice: false, title: 'CCCR 홈페이지 신규 오픈 및 개편 안내', author: '관리자', date: '2026-01-15', views: 560, hasFile: true },
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
              <col style={{ width: '10%' }} /> {/* 번호/공지 */}
              <col style={{ width: 'auto' }} /> {/* 제목 (나머지 공간 전부 차지) */}
              <col style={{ width: '8%' }} />  {/* 첨부파일 */}
              <col style={{ width: '12%' }} /> {/* 작성자 */}
              <col style={{ width: '18%' }} /> {/* 작성일 (날짜가 기니까 여유 공간 확보) */}
              <col style={{ width: '10%' }} /> {/* 조회수 */}
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>첨부</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {boardData.map((item, index) => (
                <tr key={index}>
                  <td>
                    {item.isNotice ? <span className="notice-badge">공지</span> : item.id}
                  </td>
                  <td className="title-col">
                    <Link to={`/news/notice/${item.id}`}>{item.title}</Link>
                  </td>
                  <td>{item.hasFile && <span className="file-icon">💾</span>}</td>
                  <td>{item.author}</td>
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

export default Notice;