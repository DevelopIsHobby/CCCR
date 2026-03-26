// src/pages/news/Event.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const Event = () => {
  // 🚀 1. 백엔드에서 받아올 행사 데이터를 담을 바구니
  const [eventList, setEventList] = useState([]);

  // 🚀 2. 백엔드 연동 및 데이터 가공 로직
  useEffect(() => {
    fetch('http://localhost:8080/api/boards?category=EVENT')
      .then((response) => response.json())
      .then((data) => {
        // 백엔드 데이터를 프론트엔드 UI에 맞게 변환 (날짜 계산해서 ing, ready, end 판별)
        const formattedData = data.map(item => {
          let currentStatus = 'ing';
          
          if (item.startDate && item.endDate) {
            const today = new Date();
            today.setHours(0, 0, 0, 0); // 시간 제외 날짜만 비교
            const start = new Date(item.startDate);
            const end = new Date(item.endDate);

            if (today < start) currentStatus = 'ready';
            else if (today > end) currentStatus = 'end';
            else currentStatus = 'ing';
          }

          return {
            ...item,
            status: currentStatus,
            // 2026-03-20 형식을 2026.03.20 으로 변경하여 기존 UI와 맞춤
            applyPeriod: (item.startDate && item.endDate) 
              ? `${item.startDate.replace(/-/g, '.')} ~ ${item.endDate.replace(/-/g, '.')}` 
              : '-',
            eventDate: item.eventDate ? item.eventDate.replace(/-/g, '.') : '-',
            isNotice: false // (추후 백엔드에 isNotice 칼럼을 추가하면 연동 가능!)
          };
        });

        setEventList(formattedData);
      })
      .catch((error) => console.error("데이터 가져오기 실패:", error));
  }, []);

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
              {eventList.length > 0 ? (
                eventList.map((item) => {
                  const statusInfo = getStatusInfo(item.status);
                  
                  return (
                    <tr key={item.id} className={item.isNotice ? 'notice-row' : ''}>
                      {/* 1. 상태 배지 */}
                      <td>
                        <span className={`status-badge ${statusInfo.className}`}>
                          {statusInfo.text}
                        </span>
                      </td>
                      
                      {/* 2. 행사명 (제목) */}
                      <td className="title-col">
                        <Link to={`/news/event/${item.id}`}>
                          {item.title}
                          {item.isNotice && <span className="event-notice-badge" style={{ marginLeft: '8px' }}>공지</span>}
                          
                          {/* 🚀 댓글 수 표시 기능 추가 */}
                          {item.comments && item.comments.length > 0 && (
                            <span style={{ color: '#ea580c', marginLeft: '6px', fontSize: '14px', fontWeight: 'bold' }}>
                              [{item.comments.length}]
                            </span>
                          )}
                        </Link>
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
                })
              ) : (
                <tr>
                  <td colSpan="5" style={{ padding: '40px 0', textAlign: 'center', color: '#94a3b8' }}>
                    등록된 행사소식이 없습니다.
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

export default Event;