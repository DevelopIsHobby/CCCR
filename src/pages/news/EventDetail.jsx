// src/pages/news/EventDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const EventDetail = () => {
  const { id } = useParams();

  // 🚀 서버에서 받아올 가짜(Dummy) 상세 데이터
  const eventDetail = {
    id: Number(id),
    status: 'ing', // 'ing'(접수중), 'ready'(예정), 'end'(마감)
    title: '2026 CCCR 클라우드 네트워킹 데이 및 세미나',
    applyPeriod: '2026.03.01 ~ 04.10',
    eventDate: '2026.04.15',
    views: 256,
    fileName: '세미나_일정표_및_안내문.pdf',
    fileSize: '1.2MB',
    content: `
      <div style="text-align: center; margin-bottom: 30px;">
        <img src="https://via.placeholder.com/800x400?text=Event+Poster" alt="행사 포스터" style="max-width: 100%; border-radius: 12px;" />
      </div>
      <h4 style="color: #0ea5e9; font-size: 18px; margin-bottom: 15px;">행사 개요</h4>
      <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8; margin-bottom: 30px;">
        <li><strong>일시:</strong> 2026년 4월 15일 (수) 14:00 ~ 17:00</li>
        <li><strong>장소:</strong> 한국클라우드컴퓨팅연구조합 대강당</li>
        <li><strong>대상:</strong> 클라우드 산업 관계자 및 관심 있는 누구나</li>
      </ul>
      <h4 style="color: #0ea5e9; font-size: 18px; margin-bottom: 15px;">주요 내용</h4>
      <p style="line-height: 1.8;">
        올해 새롭게 변화하는 클라우드 네이티브 환경과 네트워킹 트렌드를 조망하고,<br />
        회원사 간의 기술 교류 및 네트워킹을 위한 자리를 마련하였습니다.<br />
        관심 있는 분들의 많은 참여 바랍니다.
      </p>
    `
  };

  // 🚀 상태에 따른 뱃지 텍스트와 클래스 반환 함수
  const getStatusInfo = (status) => {
    switch (status) {
      case 'ing': return { text: '접수중', className: 'ing' };
      case 'ready': return { text: '예정', className: 'ready' };
      case 'end': return { text: '마감', className: 'end' };
      default: return { text: '알수없음', className: '' };
    }
  };

  const statusInfo = getStatusInfo(eventDetail.status);

  return (
    <SubLayout mainCategory="알림마당" subCategory="행사소식">
      <div className="news-container">
        <h2 className="news-title">행사소식</h2>

        <div className="board-detail-wrap">
          {/* 🚀 게시글 헤더 */}
          <div className="board-detail-header">
            <h3 className="board-detail-title">
              {/* 상태 뱃지를 제목 옆에 표시 */}
              <span className={`status-badge ${statusInfo.className}`} style={{ marginRight: '10px', verticalAlign: 'middle' }}>
                {statusInfo.text}
              </span>
              <span style={{ verticalAlign: 'middle' }}>{eventDetail.title}</span>
            </h3>
            
            <div className="board-detail-info">
              <span><strong>신청기간:</strong> {eventDetail.applyPeriod}</span>
              <span><strong>행사일:</strong> {eventDetail.eventDate}</span>
              <span>조회수: {eventDetail.views}</span>
            </div>
          </div>

          {/* 🚀 첨부파일 다운로드 영역 */}
          {eventDetail.fileName && (
            <div className="board-detail-file">
              <span className="file-icon">💾</span>
              <a href="#none" onClick={(e) => e.preventDefault()}>
                {eventDetail.fileName} ({eventDetail.fileSize})
              </a>
            </div>
          )}

          {/* 🚀 본문 내용 영역 (포스터, 개요 등) */}
          <div className="board-detail-content">
            <div dangerouslySetInnerHTML={{ __html: eventDetail.content }} />
          </div>
        </div>

        {/* 🚀 하단 버튼 영역 (목록으로 & 신청하기) */}
        <div className="board-detail-btns" style={{ display: 'flex', gap: '15px' }}>
          <Link to="/news/event" className="btn-list" style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>
            목록으로
          </Link>
          
          {/* 접수중일 때만 '신청하기' 버튼 활성화 */}
          {eventDetail.status === 'ing' ? (
            <Link to={`/news/event/apply/${eventDetail.id}`} className="btn-list" style={{ backgroundColor: '#0ea5e9' }}>
              사전등록 신청하기
            </Link>
          ) : (
            <button className="btn-list" style={{ backgroundColor: '#cbd5e1', cursor: 'not-allowed', border: 'none' }} disabled>
              {eventDetail.status === 'ready' ? '신청 오픈 예정' : '신청 마감'}
            </button>
          )}
        </div>

      </div>
    </SubLayout>
  );
};

export default EventDetail;