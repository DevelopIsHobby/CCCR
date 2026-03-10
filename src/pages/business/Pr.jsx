// src/pages/business/Pr.jsx
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Business.css';

// 🚀 각 탭별 데이터를 4개의 카드(2x2)와 다크 배너 CTA로 완벽하게 구조화했습니다.
const prData = {
  info: {
    badge: 'Information Channel',
    title: '클라우드 생태계를 잇는<br />디지털 정보 허브',
    intro: 'CCCR은 회원사와 산업계 종사자들이 최신 IT 트렌드와 정책 동향을 한눈에 파악할 수 있도록, 전문적인 정보 채널과 심층 분석 리포트를 통합적으로 제공합니다.',
    cards: [
      { icon: '🌐', title: '조합 공식 웹사이트', desc: '협회의 주요 사업 성과, 정부 정책 자료, 회원사 동향 등 클라우드 산업 생태계의 전반적인 정보를 신속하게 전달합니다.' },
      { icon: '🎓', title: '전문 인재양성 포털', desc: '현장 맞춤형 클라우드 교육 커리큘럼 안내 및 수강 신청을 원스톱으로 지원하는 전용 아카데미 플랫폼을 운영합니다.' },
      { icon: '📊', title: '심층 기술 리포트 발간', desc: '클라우드, AI, 빅데이터 등 주요 IT 융합 기술의 시장 동향과 기술 분석을 담은 전문 리포트를 정기적으로 발행합니다.' },
      { icon: '📚', title: '디지털 지식 아카이브', desc: '과거 세미나 발표 자료, 정책 건의문, 연구 보고서 등을 체계적으로 축적하여 회원사의 비즈니스 기획을 지원합니다.' }
    ],
    cta: {
      title: '최신 산업 동향을 가장 먼저 확인하세요',
      desc: 'CCCR이 제공하는 다양한 간행물과 심층 분석 자료는 [알림마당 > 기술동향]에서 열람하실 수 있습니다.',
      link: '/news/trend',
      btnText: '기술동향 자료실 ↗'
    }
  },
  forum: {
    badge: 'Tech Conference',
    title: '미래 IT 트렌드를 조망하는<br />글로벌 인사이트 공유의 장',
    intro: '매년 대규모로 개최되는 CCCR 연례 세미나는 산·학·연 최고의 전문가들이 모여 차세대 기술 비전을 제시하고 비즈니스 혁신 사례를 교류하는 최적의 네트워킹 플랫폼입니다.',
    cards: [
      { icon: '🔭', title: '글로벌 기술 조망', desc: '클라우드 네이티브, 엣지 컴퓨팅 등 글로벌 수준의 최신 기술 트렌드와 미래 산업 발전 방향을 제시합니다.' },
      { icon: '💡', title: '비즈니스 혁신 사례 공유', desc: '국내외 선도 기업들의 실제 클라우드 도입 및 AI 융합 성공 사례를 공유하여 실질적인 비즈니스 인사이트를 제공합니다.' },
      { icon: '🤝', title: '최고의 네트워킹 생태계', desc: '정부 관계자, 학계 연구진, 주요 IT 기업 임원진이 한자리에 모여 새로운 비즈니스 시너지를 창출합니다.' },
      { icon: '🎤', title: '오피니언 리더 초청 강연', desc: '시대를 앞서가는 IT 업계 최고의 오피니언 리더와 키노트 스피커를 초청하여 수준 높은 강연을 진행합니다.' }
    ],
    cta: {
      title: '다가오는 세미나 일정을 확인해 보세요',
      desc: 'CCCR이 주관하는 연례 세미나 및 다양한 기술 컨퍼런스 사전 등록 안내는 [알림마당 > 행사소식]을 참조해 주세요.',
      link: '/news/event',
      btnText: '행사 일정 확인 ↗'
    }
  },
  newsletter: {
    badge: 'Monthly Newsletter',
    title: '매월 메일함으로 찾아가는<br />클라우드 산업의 생생한 소식',
    intro: 'CCCR의 주요 활동 성과부터 다가오는 행사 일정, 그리고 우수 회원사의 비즈니스 소식까지, 산업계의 가장 중요한 흐름을 큐레이션하여 매월 뉴스레터로 전해드립니다.',
    cards: [
      { icon: '🏢', title: '협회 주요 활동 성과', desc: '정부 R&D 과제 수주 현황, 주요 정책 건의 결과, 대외협력 성과 등 CCCR의 핵심 활동 내역을 요약하여 전달합니다.' },
      { icon: '🌟', title: '우수 회원사 줌인(Zoom-in)', desc: '혁신적인 솔루션을 보유한 유망 회원사를 소개하고 새로운 비즈니스 성과를 홍보하여 기업 간 협력을 독려합니다.' },
      { icon: '📅', title: '주요 교육 및 행사 캘린더', desc: '다가오는 연례 세미나, 기술 포럼, 재직자 및 미취업자 대상 교육 과정의 신청 일정을 가장 먼저 안내해 드립니다.' },
      { icon: '📰', title: '핵심 IT 뉴스 큐레이션', desc: '바쁜 현업 종사자를 위해 한 달 동안 가장 화제가 되었던 클라우드 및 SW 산업계의 주요 뉴스를 엄선하여 제공합니다.' }
    ],
    cta: {
      title: '클라우드 생태계의 핵심 정보를 놓치지 마세요',
      desc: '지금 뉴스레터를 구독하시고, 매월 가장 빠르고 정확한 IT 산업 동향과 조합의 소식을 메일로 받아보세요.',
      link: '/news/newsletter',
      btnText: '뉴스레터 구독 신청 ↗'
    }
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
        <div className="biz-tab-menu" style={{ marginBottom: '40px' }}>
          <Link to="/business/pr/info" className={`biz-tab-item ${prType === 'info' ? 'active' : ''}`}>정보서비스</Link>
          <Link to="/business/pr/forum" className={`biz-tab-item ${prType === 'forum' ? 'active' : ''}`}>연례 세미나</Link>
          <Link to="/business/pr/newsletter" className={`biz-tab-item ${prType === 'newsletter' ? 'active' : ''}`}>뉴스레터</Link>
        </div>

        {/* 1. 홍보 탭별 비전 (거시적 타이틀) */}
        <div className="biz-intro-box" style={{ textAlign: 'center', padding: '40px 20px 50px 20px' }}>
          <span style={{ display: 'inline-block', backgroundColor: '#f0f9ff', color: '#0ea5e9', fontSize: '14px', fontWeight: '800', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
            {currentData.badge}
          </span>
          <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.4' }} dangerouslySetInnerHTML={{ __html: currentData.title }}></h3>
          <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            {currentData.intro}
          </p>
        </div>

        {/* 2. 4대 핵심 내용 (추상화된 카드 그리드 2x2) */}
        <div className="biz-section" style={{ marginTop: '50px' }}>
          <h4 className="biz-section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>주요 운영 방향</h4>
          
          <div className="biz-card-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
            {currentData.cards.map((card, idx) => (
              <div className="biz-card" key={idx} style={{ padding: '40px 30px' }}>
                <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>{card.icon}</div>
                <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>{card.title}</h5>
                <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. 각 탭별 맞춤형 다크 앵커 박스 (CTA) */}
        <div className="biz-section" style={{ marginTop: '50px' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '24px', padding: '40px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '15px', color: '#ffffff' }}>{currentData.cta.title}</h4>
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', margin: 0 }}>
                {currentData.cta.desc}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link 
                to={currentData.cta.link} 
                style={{ 
                  display: 'inline-block', 
                  backgroundColor: '#0ea5e9', 
                  color: '#ffffff', 
                  padding: '14px 28px', 
                  borderRadius: '50px', 
                  fontSize: '16px', 
                  fontWeight: '700', 
                  textDecoration: 'none', 
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#0284c7';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#0ea5e9';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {currentData.cta.btnText}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Pr;