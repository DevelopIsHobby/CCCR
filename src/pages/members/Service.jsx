// src/pages/members/Service.jsx
import React, { useEffect } from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Members.css';

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🚀 홍보 서비스 데이터 세팅
  const prServices = [
    { 
      icon: '📧', 
      title: '이메일 타겟 광고 (e-EDM)', 
      desc: 'CCCR이 보유한 클라우드/SW 산업 핵심 타겟 DB를 대상으로 귀사의 맞춤형 홍보 메일을 발송합니다.' 
    },
    { 
      icon: '🖥️', 
      title: '홈페이지 & 뉴스레터 배너', 
      desc: '협회 공식 홈페이지 및 매월 발송되는 정기 뉴스레터의 메인 배너 영역에 기업과 제품을 노출합니다.' 
    },
    { 
      icon: '📢', 
      title: '공지사항 및 소식 게시', 
      desc: '회원사의 주요 행사, 웨비나, 보도자료를 협회 공식 공지사항 및 SNS 채널을 통해 빠르게 확산합니다.' 
    },
    { 
      icon: '🤝', 
      title: '행사 스폰서십', 
      desc: 'CCCR 주관 대규모 컨퍼런스 및 기술 세미나의 공식 후원사로 참여하여 브랜드 인지도를 극대화합니다.' 
    }
  ];

  return (
    <SubLayout mainCategory="회원공간" subCategory="온·오프라인">
      <div className="news-container">
        
        {/* 상단 타이틀 영역 */}
        <div className="service-hero-box">
          <div className="service-hero-content">
            <span className="service-badge">B2B PR PARTNERSHIP</span>
            <h2 className="service-title">
              비즈니스 성공을 앞당기는<br/>
              <span className="highlight">CCCR 맞춤형 홍보 서비스</span>
            </h2>
            <p className="service-desc">
              협회의 강력한 IT 산업 네트워크와 다양한 홍보 채널을 통해<br className="hide-on-mobile" /> 
              귀사의 브랜드와 솔루션을 시장에 가장 효과적으로 알리세요.
            </p>
          </div>
          <div className="service-hero-visual">
            <div className="visual-circle main-circle">
              <span className="visual-icon">📈</span>
            </div>
            <div className="visual-circle sub-circle1"></div>
            <div className="visual-circle sub-circle2"></div>
          </div>
        </div>

        {/* 1. 주요 홍보 서비스 (카드 그리드) */}
        <section className="guide-section">
          <h3 className="guide-section-title">지원 서비스 안내</h3>
          <div className="pr-service-grid">
            {prServices.map((srv, idx) => (
              <div key={idx} className="pr-service-card">
                <div className="pr-service-icon">{srv.icon}</div>
                <h4 className="pr-service-title">{srv.title}</h4>
                <p className="pr-service-desc">{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. 진행 절차 (가로 프로세스 바) */}
        <section className="guide-section bg-gray">
          <h3 className="guide-section-title">서비스 진행 절차</h3>
          <div className="process-bar-wrap" style={{ marginTop: '30px' }}>
            <div className="process-step">
              <div className="process-icon">💬</div>
              <div className="process-num">STEP 01</div>
              <div className="process-name">홍보 문의 및 상담</div>
            </div>
            <div className="process-arrow">&gt;</div>
            <div className="process-step">
              <div className="process-icon">📋</div>
              <div className="process-num">STEP 02</div>
              <div className="process-name">서비스·단가 협의</div>
            </div>
            <div className="process-arrow">&gt;</div>
            <div className="process-step">
              <div className="process-icon">📤</div>
              <div className="process-num">STEP 03</div>
              <div className="process-name">홍보 소재 전달</div>
            </div>
            <div className="process-arrow">&gt;</div>
            <div className="process-step">
              <div className="process-icon">🚀</div>
              <div className="process-num">STEP 04</div>
              <div className="process-name">광고 집행 및 리포트</div>
            </div>
          </div>
        </section>

        {/* 3. 강력한 CTA (문의하기 배너) */}
        <div className="cta-section">
          <h3 className="cta-title">지금 바로 CCCR과 함께 비즈니스를 확장하세요!</h3>
          <p className="cta-desc">
            회원사 등급(임원사/일반회원사)에 따라 홍보 서비스 무상 지원 및 할인 혜택이 제공됩니다.
          </p>
          <a href="mailto:admin@cccr.or.kr" className="btn-primary cta-btn">
            홍보 및 스폰서십 문의하기 ↗
          </a>
        </div>

      </div>
    </SubLayout>
  );
};

export default Service;