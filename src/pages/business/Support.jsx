// src/pages/business/Support.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Business.css';

const Support = () => {
  return (
    <SubLayout mainCategory="주요사업" subCategory="회원사 지원">
      <div className="biz-container">
        
        {/* 1. 회원사 지원 비전 (거시적 타이틀) */}
        <div className="biz-intro-box" style={{ textAlign: 'center', padding: '50px 20px' }}>
          <span style={{ display: 'inline-block', backgroundColor: '#f0f9ff', color: '#0ea5e9', fontSize: '14px', fontWeight: '800', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
            Business Partnership
          </span>
          <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.4' }}>
            대한민국 클라우드 산업의<br />동반 성장을 위한 강력한 파트너십
          </h3>
          <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            CCCR은 회원사의 비즈니스 성공이 곧 대한민국 IT 생태계의 발전이라는 믿음 아래, 
            기업의 권익 보호부터 기술 교류, R&D 사업화까지 다각적인 지원 체계를 제공합니다. 
            회원사의 지속 가능한 성장과 글로벌 경쟁력 강화를 위한 <strong>든든한 비즈니스 파트너</strong>가 되겠습니다.
          </p>
        </div>

        {/* 2. 4대 회원사 지원 가치 (추상화된 카드 그리드 2x2) */}
        <div className="biz-section" style={{ marginTop: '50px' }}>
          <h4 className="biz-section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>회원사 핵심 지원 가치 (Core Benefits)</h4>
          
          <div className="biz-card-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
            
            {/* 가치 1 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🛡️</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>산업 권익 보호 및 정책 건의</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                회원사가 현업에서 겪는 애로사항과 규제 이슈를 적극 수렴하고, 
                클라우드 산업 발전을 위한 법제도 개선 및 실효성 있는 정부 정책을 건의합니다.
              </p>
            </div>

            {/* 가치 2 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🚀</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>R&D 과제 발굴 및 사업화</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                정부 및 공공의 대형 국책 과제 참여를 위한 산학연 컨소시엄 구성을 지원하고, 
                유망 기술의 성공적인 상용화와 비즈니스 확장을 위한 발판을 제공합니다.
              </p>
            </div>

            {/* 가치 3 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🤝</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>비즈니스 네트워킹 생태계</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                주요 IT 기업, 학계 전문가, 공공기관이 한자리에 모이는 세미나 및 기술 교류회를 개최하여, 
                회원사 간의 새로운 비즈니스 시너지를 창출합니다.
              </p>
            </div>

            {/* 가치 4 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>📊</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>시장 동향 및 기술 인사이트</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                글로벌 클라우드 시장 동향, 최신 기술 심층 분석 리포트, 그리고 표준화 가이드라인 등 
                기업의 핵심 의사결정에 필요한 최고급 정보 자산을 제공합니다.
              </p>
            </div>

          </div>
        </div>

        {/* 3. 회원공간 메뉴로 유도하는 다크 앵커 박스 */}
        <div className="biz-section" style={{ marginTop: '50px' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '24px', padding: '40px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '15px', color: '#ffffff' }}>CCCR과 함께 성장할 준비가 되셨나요?</h4>
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', margin: 0 }}>
                임원사, 일반회원사 등 회원 등급별 상세 혜택과 구체적인 가입 절차 및 회비 안내는 <br/>
                별도로 마련된 <strong>[회원공간]</strong> 메뉴에서 자세히 확인하실 수 있습니다.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link 
                to="/members/info" 
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
                회원 가입 안내 ↗
              </Link>
            </div>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Support;