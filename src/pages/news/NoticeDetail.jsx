// src/pages/news/NoticeDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const NoticeDetail = () => {
  // 🚀 URL에서 게시글 번호(id)를 가져옵니다. (/news/notice/1 -> id는 1)
  const { id } = useParams();

  // 테스트용 가짜 데이터 (원래는 id를 서버로 보내서 상세 데이터를 받아옵니다)
  const noticeData = {
    id: id,
    title: '[안내] 2026년 CCCR 클라우드 전문가 양성과정 모집',
    author: '관리자',
    date: '2026-03-05',
    views: 152,
    files: [
      { name: '2026_전문가_양성과정_모집요강.pdf', size: '2.5MB' },
      { name: '참가신청서_양식.hwp', size: '45KB' }
    ],
    content: `
      안녕하십니까, 한국전파진흥협회(CCCR)입니다.<br/><br/>
      미래 소프트웨어 및 클라우드 산업을 이끌어갈 <strong>'2026년 CCCR 클라우드 전문가 양성과정'</strong> 교육생을 모집합니다.<br/><br/>
      본 과정은 클라우드 인프라 구축부터 최신 보안 트렌드까지 실무 중심의 커리큘럼으로 구성되어 있으며, 수료 우수자에게는 회원사 인턴십 기회가 제공됩니다. 관심 있는 분들의 많은 참여를 바랍니다.<br/><br/>
      <strong>1. 교육 일정</strong><br/>
      - 2026년 4월 1일(수) ~ 6월 30일(화) / 총 3개월<br/><br/>
      <strong>2. 모집 대상</strong><br/>
      - 클라우드 분야 취업 희망자 및 관련 학과 졸업(예정)자<br/><br/>
      <strong>3. 신청 방법</strong><br/>
      - 첨부된 신청서 양식을 작성하여 이메일(edu@cccr.or.kr) 제출<br/><br/>
      자세한 사항은 첨부된 모집요강을 참고해 주시기 바랍니다. 감사합니다.
    `
  };

  return (
    <SubLayout mainCategory="알림마당" subCategory="공지사항">
      <div className="board-container">
        
        <div className="board-detail-wrap">
          {/* 1. 제목 및 메타 정보 */}
          <div className="board-detail-header">
            <h2 className="board-detail-title">{noticeData.title}</h2>
            <div className="board-detail-info">
              <span><strong>작성자</strong> : {noticeData.author}</span>
              <span><strong>작성일</strong> : {noticeData.date}</span>
              <span><strong>조회수</strong> : {noticeData.views}</span>
            </div>
          </div>

          {/* 2. 첨부파일 영역 (파일이 있을 때만 렌더링) */}
          {noticeData.files && noticeData.files.length > 0 && (
            <div className="board-detail-file">
              <span style={{ fontWeight: '600', color: '#333' }}>💾 첨부파일 : </span>
              {noticeData.files.map((file, idx) => (
                <a href="#none" key={idx}>
                  {file.name} ({file.size}){idx < noticeData.files.length - 1 ? ', ' : ''}
                </a>
              ))}
            </div>
          )}

          {/* 3. 본문 영역 (HTML 태그를 렌더링하기 위해 dangerouslySetInnerHTML 사용) */}
          <div 
            className="board-detail-content"
            dangerouslySetInnerHTML={{ __html: noticeData.content }}
          ></div>
        </div>

        {/* 4. 하단 목록 버튼 */}
        <div className="board-detail-btns">
          <Link to="/news/notice" className="btn-list">목록으로</Link>
        </div>

      </div>
    </SubLayout>
  );
};

export default NoticeDetail;