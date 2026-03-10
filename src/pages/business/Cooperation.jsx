// src/pages/business/Cooperation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Business.css'; 

const Cooperation = () => {
  return (
    <SubLayout mainCategory="주요사업" subCategory="대외협력">
      <div className="biz-container">
        
        {/* 1. 대외협력 비전 (거시적 타이틀) */}
        <div className="biz-intro-box" style={{ textAlign: 'center', padding: '50px 20px' }}>
          <span style={{ display: 'inline-block', backgroundColor: '#f0f9ff', color: '#0ea5e9', fontSize: '14px', fontWeight: '800', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
            Strategic Partnership
          </span>
          <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.4' }}>
            국내외 IT 생태계를 연결하는<br />글로벌 협력 네트워크의 중심
          </h3>
          <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            CCCR은 클라우드 산업 생태계의 발전을 위해 정부, 학계, 유관 협·단체와 긴밀한 교류 협력망을 구축하고 있습니다. 
            단순한 정보 교류를 넘어, 기업의 글로벌 진출과 비즈니스 시너지 창출을 위한 <strong>실질적인 연대 플랫폼</strong>을 제공합니다.
          </p>
        </div>

        {/* 2. 4대 협력 네트워크 전략 (추상화된 카드 그리드 2x2) */}
        <div className="biz-section" style={{ marginTop: '50px' }}>
          <h4 className="biz-section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>핵심 협력 생태계 (Core Networks)</h4>
          
          <div className="biz-card-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
            
            {/* 전략 1 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🤝</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>산·학·연·관 통합 거버넌스</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                정부 부처, 연구기관, 대학, 산업계가 함께 참여하는 유기적인 협력 체계를 구축하여, 
                대한민국 클라우드 산업의 중장기 발전 방향을 모색하고 국가 IT 경쟁력을 강화합니다.
              </p>
            </div>

            {/* 전략 2 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🏢</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>IT 유관 협·단체 공동 대응</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                데이터센터, 지능정보, 인공지능 등 인접 IT 산업의 주요 협회 및 조합들과 연대하여, 
                융복합 기술 시대에 걸맞은 거시적인 산업 생태계를 공동으로 조성합니다.
              </p>
            </div>

            {/* 전략 3 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🌍</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>글로벌 기술 교류 및 연대</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                해외 선진 IT 기관 및 글로벌 테크 기업들과의 기술 교류 채널을 안정적으로 확보하여, 
                국내 회원사들의 선진 기술 벤치마킹과 원활한 해외 시장 진출을 돕습니다.
              </p>
            </div>

            {/* 전략 4 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>💡</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>민관 협력 혁신 프로젝트 발굴</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                주요 공공기관 및 진흥원과 협력하여 국가·사회적 현안을 해결하는 디지털 혁신 모델을 발굴하고, 
                회원사들이 참여할 수 있는 공공 R&D 및 실증 사업 기회를 확대합니다.
              </p>
            </div>

          </div>
        </div>

        {/* 3. 알림마당 메뉴로 유도하는 다크 앵커 박스 */}
        <div className="biz-section" style={{ marginTop: '50px' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '24px', padding: '40px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '15px', color: '#ffffff' }}>강력한 파트너십이 만드는 비즈니스 시너지</h4>
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', margin: 0 }}>
                CCCR이 구축한 든든한 대외협력 네트워크를 통해 회원사 여러분의 비즈니스 무대를 넓혀보세요. <br/>
                유관 기관과의 다양한 기술 교류 및 세미나 일정은 <strong>[알림마당]</strong>에서 확인하실 수 있습니다.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link 
                to="/news/event" 
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
                행사 소식 보러가기 ↗
              </Link>
            </div>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Cooperation;