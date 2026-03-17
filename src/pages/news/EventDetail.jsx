// src/pages/news/EventDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const EventDetail = () => {
  // 🚀 1. 주소창에서 id 값을 가져옵니다.
  const { id } = useParams();

  // 🚀 2. 서버에서 받아올 가짜(Dummy) 데이터 배열
  // 나중에 Spring Boot 백엔드가 완성되면 이 배열 대신 API로 데이터를 불러오게 됩니다.
  const eventDatabase = [
    {
      id: 2,
      status: 'end', // 마감
      title: 'CCCR, 지역 IT 인재 양성을 위한 MOU 체결',
      applyPeriod: '2026.02.01 ~ 02.28',
      eventDate: '2026.03.02',
      views: 152,
      fileName: 'MOU_보도자료.pdf',
      fileSize: '512KB',
      content: `
        <h4 style="color: #0ea5e9; font-size: 18px; margin-bottom: 15px;">MOU 체결식 안내</h4>
        <p style="line-height: 1.8;">
          지역 IT 인재 양성을 위한 뜻깊은 MOU 체결식이 성공적으로 진행되었습니다.<br />
          앞으로도 CCCR은 지역 사회와 연계한 다양한 교육 프로그램을 발굴할 예정입니다.
        </p>
      `
    },
    {
      id: 5,
      status: 'end', // 마감
      title: '2025년 최우수 인증 기업 시상식 성료',
      applyPeriod: '2026.01.10 ~ 02.10',
      eventDate: '2026.02.20',
      views: 320,
      fileName: '시상식_결과보고서.pdf',
      fileSize: '2.1MB',
      content: `
        <h4 style="color: #0ea5e9; font-size: 18px; margin-bottom: 15px;">시상식 결과</h4>
        <p style="line-height: 1.8;">
          올해 최고의 클라우드 기업들을 위한 시상식이 성황리에 마무리되었습니다.<br />
          참여해주신 모든 회원사 여러분께 진심으로 감사드립니다.
        </p>
      `
    },
    {
      id: 6,
      status: 'ing', // 접수중 (신청버튼 활성화)
      title: '월간 클라우드 산업 동향 세미나',
      applyPeriod: '2026.03.01 ~ 04.10',
      eventDate: '2026.04.15',
      views: 256,
      fileName: '세미나_일정표_및_안내문.pdf',
      fileSize: '1.2MB',
      content: `
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop" alt="행사 포스터" style="max-width: 100%; height: 300px; object-fit: cover; border-radius: 12px;" />
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
    }
  ];

  // 🚀 3. 주소창 id와 일치하는 행사 찾기
  const eventDetail = eventDatabase.find(item => item.id === parseInt(id));

  // 🚀 4. 만약 데이터에 없는 번호로 접속했을 때의 방어 코드
  if (!eventDetail) {
    return (
      <SubLayout mainCategory="알림마당" subCategory="행사소식">
        <div className="news-container" style={{ textAlign: 'center', padding: '100px 0' }}>
          <h2>존재하지 않거나 삭제된 행사입니다. 😥</h2>
          <Link to="/news/event" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#0ea5e9', color: '#fff', borderRadius: '4px' }}>목록으로 돌아가기</Link>
        </div>
      </SubLayout>
    );
  }

  // 상태에 따른 뱃지 텍스트와 클래스 반환 함수
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
          {/* 게시글 헤더 */}
          <div className="board-detail-header">
            <h3 className="board-detail-title">
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

          {/* 첨부파일 다운로드 영역 */}
          {eventDetail.fileName && (
            <div className="board-detail-file">
              <span className="file-icon">💾</span>
              <a href="#none" onClick={(e) => e.preventDefault()}>
                {eventDetail.fileName} ({eventDetail.fileSize})
              </a>
            </div>
          )}

          {/* 본문 내용 영역 */}
          <div className="board-detail-content">
            <div dangerouslySetInnerHTML={{ __html: eventDetail.content }} />
          </div>
        </div>

        {/* 하단 버튼 영역 */}
        <div className="board-detail-btns" style={{ display: 'flex', gap: '15px' }}>
          <Link to="/news/event" className="btn-list" style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>
            목록으로
          </Link>
          
          {/* 접수중일 때만 '신청하기' 버튼 활성화 */}
          {eventDetail.status === 'ing' ? (
            <Link to={`/news/event/apply/${eventDetail.id}`} className="btn-list" style={{ backgroundColor: '#0ea5e9', color: '#fff' }}>
              사전등록 신청하기
            </Link>
          ) : (
            <button className="btn-list" style={{ backgroundColor: '#cbd5e1', color: '#fff', cursor: 'not-allowed', border: 'none' }} disabled>
              {eventDetail.status === 'ready' ? '신청 오픈 예정' : '신청 마감'}
            </button>
          )}
        </div>

      </div>
    </SubLayout>
  );
};

export default EventDetail;