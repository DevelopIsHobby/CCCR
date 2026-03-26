// src/pages/news/NewsletterDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const NewsletterDetail = () => {
  const { id } = useParams();

  // 🚀 백엔드 연동 전 테스트용 가짜 데이터
  const newsletterData = {
    id: id,
    title: `[CCCR 뉴스레터] 2026년 3월호 (Vol.34) (ID: ${id})`,
    date: '2026-03-01',
    views: 145,
    // 뉴스레터 본문 HTML (보통 통이미지나 잘 짜인 HTML 표가 들어갑니다)
    content: `
      <div style="text-align: center; max-width: 800px; margin: 0 auto; border: 1px solid #e2e8f0; padding: 40px; background-color: #f8fafc; border-radius: 12px;">
        <h2 style="color: #0f172a; margin-bottom: 20px;">[Vol.34] 2026년 3월 한국클라우드컴퓨팅연구조합 소식</h2>
        <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; text-align: left; line-height: 1.8; color: #334155; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <p>안녕하십니까, 한국전파진흥협회(CCCR)입니다.</p>
          <p>따뜻한 봄기운이 느껴지는 3월, CCCR의 주요 소식과 정책 동향을 전해드립니다.</p>
          <br/>
          <h4 style="color: #0ea5e9; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px; margin-bottom: 15px;">■ 이달의 주요 뉴스</h4>
          <ul style="padding-left: 20px;">
            <li>2026년도 클라우드 산업 육성 지원 사업 공고 안내</li>
            <li>제 1회 CCCR 클라우드 네이티브 기술 세미나 성료</li>
            <li>신규 회원사 가입 안내 (총 5개사)</li>
          </ul>
          <br/>
          <h4 style="color: #0ea5e9; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px; margin-bottom: 15px;">■ 클라우드 기술 트렌드</h4>
          <p>최근 생성형 AI와 결합된 하이브리드 클라우드 아키텍처의 도입이 가속화되고 있습니다...</p>
        </div>
        <p style="margin-top: 30px; font-size: 14px; color: #94a3b8;">본 메일은 발신 전용이며, 관련 문의는 사무국으로 연락 바랍니다.</p>
      </div>
    `
  };

  return (
    <SubLayout mainCategory="알림마당" subCategory="뉴스레터">
      <div className="board-container">
        <div className="board-detail-wrap">
          
          {/* 1. 제목 및 메타 정보 */}
          <div className="board-detail-header">
            <h2 className="board-detail-title">{newsletterData.title}</h2>
            <div className="board-detail-info">
              <span><strong>등록일</strong> : {newsletterData.date}</span>
              <span><strong>조회수</strong> : {newsletterData.views}</span>
            </div>
          </div>

          {/* 2. 본문 영역 (뉴스레터 HTML 렌더링) */}
          <div 
            className="board-detail-content"
            dangerouslySetInnerHTML={{ __html: newsletterData.content }}
          ></div>

        </div>

        {/* 3. 하단 목록 버튼 */}
        <div className="board-detail-btns">
          <Link to="/news/newsletter" className="btn-list">목록으로 돌아가기</Link>
        </div>
      </div>
    </SubLayout>
  );
};

export default NewsletterDetail;