// src/pages/business/Edu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Business.css';

const Edu = () => {
  return (
    <SubLayout mainCategory="주요사업" subCategory="교육">
      <div className="biz-container">

        {/* 1. 교육 사업 비전 (거시적 타이틀) */}
        <div className="biz-intro-box" style={{ textAlign: 'center', padding: '50px 20px' }}>
          <span style={{ display: 'inline-block', backgroundColor: '#f0f9ff', color: '#0ea5e9', fontSize: '14px', fontWeight: '800', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
            Education & Training
          </span>
          <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.4' }}>
            디지털 대전환 시대를 이끌어갈<br />클라우드·SW 핵심 인재 양성
          </h3>
          <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            한국클라우드컴퓨팅연구조합은 산업 현장의 목소리를 반영하여, 
            기업이 가장 필요로 하는 실무 맞춤형 교육 커리큘럼을 연구하고 제공합니다. 
            단순한 지식 전달을 넘어, 대한민국 IT 생태계를 책임질 <strong>차세대 기술 리더</strong>를 육성합니다.
          </p>
        </div>

        {/* 2. 4대 핵심 교육 방향 (추상화된 카드 그리드) */}
        <div className="biz-section" style={{ marginTop: '50px' }}>
          <h4 className="biz-section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>핵심 교육 방향 (Core Training Areas)</h4>

          <div className="biz-card-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>

            {/* 방향 1 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🌱</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>예비 개발자 취업 연계</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                클라우드 네이티브, 인공지능 기반 프로젝트 등 현업 중심의 밀도 있는 훈련을 통해 
                미취업 청년들을 실무에 즉시 투입 가능한 우수 인재로 양성합니다.
              </p>
            </div>

            {/* 방향 2 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🚀</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>재직자 직무 역량 강화</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                급변하는 IT 트렌드에 발맞추어, 현업 개발자 및 엔지니어들이 최신 클라우드 아키텍처와 
                신기술을 습득할 수 있도록 전문적인 심화 교육을 지원합니다.
              </p>
            </div>

            {/* 방향 3 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🏢</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>기업 맞춤형 특화 교육</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                개별 기업의 비즈니스 환경과 기술 스택을 철저히 분석하여, 
                해당 조직에 가장 최적화된 맞춤형 사내 교육 솔루션을 설계하고 운영합니다.
              </p>
            </div>

            {/* 방향 4 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🤝</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>산학 연계형 교육 생태계</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                대학 및 연구기관과의 긴밀한 협력을 통해 학문적 이론과 산업계의 실무 기술 간의 
                간극을 메우는 브릿지(Bridge) 역할을 수행합니다.
              </p>
            </div>

          </div>
        </div>

        {/* 3. 인재양성 메뉴로 유도하는 다크 앵커 박스 */}
        <div className="biz-section" style={{ marginTop: '50px' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '24px', padding: '40px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '15px', color: '#ffffff' }}>CCCR 인재양성 아카데미</h4>
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', margin: 0 }}>
                실제 운영 중인 교육 과정, 상세 커리큘럼, 그리고 수강 신청 안내는 <br/>
                별도로 마련된 <strong>[인재양성]</strong> 메뉴에서 더욱 자세히 확인하실 수 있습니다.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link 
                to="/academy/training" 
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
                인재양성 메뉴 바로가기 ↗
              </Link>
            </div>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Edu;