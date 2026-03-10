// src/pages/business/Standard.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Business.css'; 

const Standard = () => {
  return (
    <SubLayout mainCategory="주요사업" subCategory="표준화">
      <div className="biz-container">
        
        {/* 1. 표준화 사업 비전 (거시적 타이틀) */}
        <div className="biz-intro-box" style={{ textAlign: 'center', padding: '50px 20px' }}>
          <span style={{ display: 'inline-block', backgroundColor: '#f0f9ff', color: '#0ea5e9', fontSize: '14px', fontWeight: '800', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
            Global Standardization
          </span>
          <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.4' }}>
            국내외 클라우드 산업을 연결하는<br />핵심 기술 표준 생태계 선도
          </h3>
          <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            CCCR은 국내 클라우드 및 소프트웨어 기술이 세계로 뻗어나갈 수 있도록 
            국내외 주요 표준화 기구와 긴밀하게 협력합니다. 이기종 시스템 간의 상호운용성을 확보하고, 
            국내 기업의 글로벌 기술 경쟁력 강화를 위한 <strong>차세대 표준 생태계 조성</strong>을 주도합니다.
          </p>
        </div>

        {/* 2. 4대 표준화 전략 (추상화된 카드 그리드 2x2) */}
        <div className="biz-section" style={{ marginTop: '50px' }}>
          <h4 className="biz-section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>핵심 표준화 전략 (Core Standard Strategies)</h4>
          
          <div className="biz-card-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
            
            {/* 전략 1 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🌍</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>국제 표준화 기구 대응</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                ISO/IEC 등 글로벌 국제 표준화 기구의 주요 논의에 적극 참여하여, 
                대한민국의 우수한 클라우드 및 신기술이 국제 표준으로 제정될 수 있도록 선도적 역할을 수행합니다.
              </p>
            </div>

            {/* 전략 2 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🏛️</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>국내 표준 규격 개발 주도</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                한국정보통신기술협회(TTA), 국가기술표준원 등과 협력하여 클라우드, 인공지능, 빅데이터 분야의 
                국가 산업 발전과 시장 활성화를 위한 기반 표준을 연구하고 확립합니다.
              </p>
            </div>

            {/* 전략 3 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🔗</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>상호운용성 및 품질 확보</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                멀티·하이브리드 클라우드 환경에서 이기종 시스템 간의 데이터 호환성과 상호운용성을 보장하고, 
                소프트웨어 품질 및 보안성을 평가할 수 있는 객관적인 기준을 마련합니다.
              </p>
            </div>

            {/* 전략 4 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🤝</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>산·학·연 표준 전문가 네트워크</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                기업, 학계, 연구소의 최고 전문가들을 연결하는 기술 포럼 및 위원회를 지속적으로 운영하여, 
                산업 현장의 실질적인 요구사항이 표준 정책에 반영되도록 지원합니다.
              </p>
            </div>

          </div>
        </div>

        {/* 3. 회원사 지원 혜택 강조 (다크 앵커 박스) */}
        <div className="biz-section" style={{ marginTop: '50px' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '24px', padding: '40px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '15px', color: '#ffffff' }}>기술 표준 선점의 파트너, CCCR</h4>
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', margin: 0 }}>
                회원사 여러분이 급변하는 글로벌 기술 규제와 표준 동향에 선제적으로 대응할 수 있도록, <br/>
                최신 <strong>심층 기술 분석 보고서 발간</strong> 및 <strong>전문가 기술 세미나</strong>를 지속적으로 지원합니다.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.1)', padding: '15px 20px', borderRadius: '12px' }}>
                <span style={{ display: 'block', fontSize: '20px', fontWeight: '800', color: '#0ea5e9', marginBottom: '4px' }}>동향 리포트</span>
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>Trend Report</span>
              </div>
              <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.1)', padding: '15px 20px', borderRadius: '12px' }}>
                <span style={{ display: 'block', fontSize: '20px', fontWeight: '800', color: '#10b981', marginBottom: '4px' }}>기술 세미나</span>
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>Tech Seminar</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Standard;