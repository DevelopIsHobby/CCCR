// src/pages/business/Pr.jsx
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Business.css';

const prData = {
  info: {
    title: '정보서비스',
    subtitle: '클라우드 산업 동향 및 통합 채널 운영',
    intro: '협회의 주요 사업 안내 및 교육 신청 플랫폼을 운영하며, 최신 시장 트렌드를 담은 전문 리포트를 발간하여 회원사와 산업계에 제공합니다.',
    cards: [
      { icon: '🌐', title: '홈페이지 운영', desc: '협회 주요 사업 안내, 회원사 동향, 공지사항 및 정책 자료를 제공하는 공식 웹사이트 운영' },
      { icon: '🎓', title: '교육사업 홈페이지 운영', desc: '클라우드 전문 인력 양성을 위한 최신 교육 과정 안내 및 수강 신청 통합 플랫폼 운영' },
      { icon: '📊', title: 'TaB Issue Report 발행', desc: '클라우드 및 SW 관련 심층 기술 분석과 최신 시장 트렌드를 담은 전문 리포트 정기 발간' }
    ],
    plans: [
      '✅ <strong>공식 홈페이지:</strong> <a href="https://www.cccr.or.kr" target="_blank" rel="noopener noreferrer" style="color:#0ea5e9; text-decoration:none;">www.cccr.or.kr</a>',
      '✅ <strong>교육 홈페이지:</strong> <a href="https://www.cccr-edu.or.kr" target="_blank" rel="noopener noreferrer" style="color:#0ea5e9; text-decoration:none;">www.cccr-edu.or.kr</a>'
    ]
  },
  forum: {
    title: '연례 세미나',
    subtitle: 'CCCR Insight Series 2026',
    intro: '클라우드, 엣지 컴퓨팅, AI, 빅데이터, IoT 등 최신 융합 기술 트렌드와 우수 사례를 발표하는 연례 대규모 세미나를 개최합니다.',
    cards: [
      { icon: '📅', title: '개최 일정', desc: '2026년 10월 ~ 12월 중 개최 (연 1회 정기 개최)' },
      { icon: '📍', title: '개최 장소', desc: 'COEX 등 접근성이 뛰어난 대형 컨퍼런스 홀' },
      { icon: '💡', title: '주요 발표 내용', desc: '클라우드, 엣지, AI, 빅데이터 등 IT 융합 기술 최신 동향 및 회원사 비즈니스 성공 사례 공유' }
    ],
    plans: [
      '✅ <strong>참여 대상:</strong> CCCR 회원사 임직원 및 IT 산업계 주요 종사자',
      '✅ <strong>행사 혜택:</strong> 업계 오피니언 리더와의 네트워킹 및 최신 기술 트렌드 조기 파악'
    ]
  },
  newsletter: {
    title: '뉴스레터',
    subtitle: 'CCCR과 회원사의 생생한 소식을 매월 메일함으로',
    intro: '협회의 주요 활동 성과, 다가오는 행사 일정, 그리고 우수 회원사의 비즈니스 소식 등을 담은 월간 뉴스레터를 발행합니다.',
    cards: [
      { icon: '📬', title: '협회 주요 소식 안내', desc: '진행 중인 정부 R&D 과제 현황, 교육생 모집 일정, 정책 건의 결과 등 협회 동향 공유' },
      { icon: '📢', title: '교육 및 행사 안내', desc: '세미나, 포럼, 채용 연계형 교육 등 다가오는 주요 일정 사전 안내' },
      { icon: '🌟', title: '회원사 동향 및 홍보', desc: '우수 솔루션을 보유한 회원사의 새로운 소식 및 비즈니스 동향 전파' }
    ],
    plans: [
      '✅ <strong>구독 대상:</strong> 홈페이지 가입 회원 및 뉴스레터 구독 신청자',
      '✅ <strong>발송 일정:</strong> 매월 정기 발행 (이메일 링 발송)'
    ]
  }
};

const Pr = () => {
  const { prType } = useParams();

  // URL 파라미터가 없거나 잘못되었으면 첫 번째 탭(정보서비스)으로 강제 이동
  if (!prType || !prData[prType]) {
    return <Navigate to="/business/pr/info" replace />;
  }

  const currentData = prData[prType];

  return (
    <SubLayout mainCategory="주요사업" subCategory="홍보">
      <div className="biz-container">
        
        {/* 상단 탭 (Tab) 메뉴 */}
        <div className="biz-tab-menu">
          <Link to="/business/pr/info" className={`biz-tab-item ${prType === 'info' ? 'active' : ''}`}>정보서비스</Link>
          {/* URL 경로는 /forum을 유지하되 화면에 보이는 텍스트는 세미나로 변경 */}
          <Link to="/business/pr/forum" className={`biz-tab-item ${prType === 'forum' ? 'active' : ''}`}>연례 세미나</Link>
          <Link to="/business/pr/newsletter" className={`biz-tab-item ${prType === 'newsletter' ? 'active' : ''}`}>뉴스레터</Link>
        </div>

        <div className="biz-intro-box">
          <h4>{currentData.title} : {currentData.subtitle}</h4>
          <p>{currentData.intro}</p>
        </div>

        <div className="biz-section">
          <h3 className="biz-section-title">주요 내용</h3>
          <div className="biz-card-grid">
            {currentData.cards.map((card, idx) => (
              <div className="biz-card" key={idx}>
                <div className="biz-card-icon">{card.icon}</div>
                <h5>{card.title}</h5>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="biz-section">
          <h3 className="biz-section-title">운영 방향</h3>
          <div className="biz-intro-box" style={{ backgroundColor: '#fff', textAlign: 'left' }}>
            <ul style={{ lineHeight: '2.2', color: '#444' }}>
              {currentData.plans.map((plan, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: plan }}></li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Pr;