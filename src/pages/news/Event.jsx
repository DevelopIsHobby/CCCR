// src/pages/news/Event.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const Event = () => {
  // 🚀 스프링부트와 연동할 행사소식 가짜(Dummy) 데이터
  const eventData = [
    { id: 6, status: 'ing', title: '2026 CCCR 클라우드 네트워킹 데이 및 세미나', applyPeriod: '2026.03.01 ~ 04.10', eventDate: '2026.04.15' },
    { id: 5, status: 'ing', title: '제5회 대한민국 소프트웨어 기술 컨퍼런스', applyPeriod: '2026.03.05 ~ 05.15', eventDate: '2026.05.20 ~ 05.22' },
    { id: 4, status: 'ready', title: '하반기 클라우드 인프라 구축 실무 교육 (사전안내)', applyPeriod: '2026.07.01 ~ 07.31', eventDate: '2026.08.10 ~ 08.14' },
    { id: 3, status: 'end', title: '2026년 상반기 클라우드 보안 전문가 세미나', applyPeriod: '2026.01.10 ~ 02.20', eventDate: '2026.02.28' },
    { id: 2, status: 'end', title: 'CCCR 신년 하례회 및 우수 회원사 시상식', applyPeriod: '2025.12.01 ~ 12.31', eventDate: '2026.01.20' },
  ];

  const getStatusInfo = (status) => {
    switch (status) {
      case 'ing': return { text: '접수중', className: 'ing' };
      case 'ready': return { text: '예정', className: 'ready' };
      case 'end': return { text: '마감', className: 'end' };
      default: return { text: '알수없음', className: '' };
    }
  };

  return (
    <SubLayout mainCategory="알림마당" subCategory="행사소식">
      <div className="board-container">
        
        {/* 상단 검색 영역 */}
        <div className="board-search-wrap">
          <select className="board-select">
            <option value="title">행사명</option>
            <option value="status">상태 (접수중/마감)</option>
          </select>
          <input type="text" className="board-input" placeholder="검색어를 입력하세요" />
          <button className="board-search-btn">검색</button>
        </div>

        {/* 게시판 테이블 */}
        <div className="board-table-wrap">
          <table className="board-table event-table">
            <colgroup>
              <col style={{ width: '10%' }} />  {/* 1. 상태 배지 */}
              <col style={{ width: 'auto' }} /> {/* 2. 행사명 (제목) */}
              <col style={{ width: '20%' }} />  {/* 3. 신청기간 */}
              <col style={{ width: '15%' }} />  {/* 4. 행사일 */}
              <col style={{ width: '12%' }} />  {/* 5. 사전등록 버튼 */}
            </colgroup>
            <thead>
              <tr>
                <th>상태</th>
                <th>행사명</th>
                <th>신청기간</th>
                <th>행사일</th>
                <th>사전등록</th>
              </tr>
            </thead>
            <tbody>
              {eventData.map((item) => {
                const statusInfo = getStatusInfo(item.status);
                
                return (
                  <tr key={item.id}>
                    {/* 1. 상태 배지 */}
                    <td>
                      <span className={`status-badge ${statusInfo.className}`}>
                        {statusInfo.text}
                      </span>
                    </td>
                    
                    {/* 2. 행사명 (제목) */}
                    <td className="title-col">
                      <Link to={`/news/event/${item.id}`}>{item.title}</Link>
                    </td>
                    
                    {/* 3. 신청기간 */}
                    <td>{item.applyPeriod}</td>

                    {/* 4. 행사일 */}
                    <td>{item.eventDate}</td>
                    
                    {/* 5. 사전등록 버튼 */}
                    <td>
                      {item.status === 'ing' ? (
                        <Link to={`/news/event/apply/${item.id}`} className="apply-btn">
                          신청하기
                        </Link>
                      ) : (
                        <button className="apply-btn disabled" disabled>
                          {item.status === 'ready' ? '오픈예정' : '신청마감'}
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
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

export default Event;