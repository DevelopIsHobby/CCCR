// src/pages/business/Rnd.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Business.css';

const Rnd = () => {
  return (
    <SubLayout mainCategory="주요사업" subCategory="연구개발(R&D)">
      <div className="biz-container">
        
        {/* 1. R&D 비전 및 목표 (거시적 타이틀) */}
        <div className="biz-intro-box" style={{ textAlign: 'center', padding: '50px 20px' }}>
          <span style={{ display: 'inline-block', backgroundColor: '#f0f9ff', color: '#0ea5e9', fontSize: '14px', fontWeight: '800', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
            R&D Vision & Strategy
          </span>
          <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.4' }}>
            대한민국 클라우드 생태계를 선도하는<br />차세대 핵심 기술 연구
          </h3>
          <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            한국클라우드컴퓨팅연구조합은 급변하는 IT 환경에 대응하여, 산·학·연 협력을 기반으로 
            클라우드 네이티브, 인공지능(AI) 융합, 엣지 컴퓨팅 등 <strong>미래 주도형 클라우드 원천 기술</strong>을 
            연구·개발하고 국내 기업의 글로벌 기술 경쟁력 강화를 지원합니다.
          </p>
        </div>

        {/* 2. 4대 핵심 연구 분야 (추상화된 카드 그리드) */}
        <div className="biz-section" style={{ marginTop: '50px' }}>
          <h4 className="biz-section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>핵심 연구 분야 (Core Research Areas)</h4>
          
          <div className="biz-card-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
            
            {/* 분야 1 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>☁️</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>클라우드 네이티브 및 MSA</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                기존 레거시 시스템의 한계를 극복하기 위해 마이크로서비스 아키텍처(MSA), 컨테이너, 서버리스 기술 등 
                완전한 클라우드 네이티브 환경으로의 전환 기술을 연구합니다.
              </p>
            </div>

            {/* 분야 2 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🧠</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>AI·빅데이터 융합 지능형 클라우드</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                초거대 AI 모델 학습 및 빅데이터 분석에 최적화된 고성능 컴퓨팅(HPC) 자원 할당 기술과 
                분산 처리 인프라 최적화 방안을 선도적으로 개발합니다.
              </p>
            </div>

            {/* 분야 3 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🛡️</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>제로 트러스트 기반 클라우드 보안</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                하이브리드 및 멀티 클라우드 환경에서 발생할 수 있는 보안 위협에 대응하기 위해, 
                접근 제어 및 데이터 암호화를 포함한 차세대 보안 아키텍처를 연구합니다.
              </p>
            </div>

            {/* 분야 4 */}
            <div className="biz-card" style={{ padding: '40px 30px' }}>
              <div className="biz-card-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🌐</div>
              <h5 style={{ fontSize: '20px', marginBottom: '15px' }}>분산·엣지 컴퓨팅 인프라</h5>
              <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>
                초저지연 서비스(IoT, 자율주행 등) 처리를 위한 엣지 컴퓨팅 기술과, 
                중앙 클라우드 자원 간의 끊김 없는 연동 및 자원 스케줄링 기술을 연구합니다.
              </p>
            </div>

          </div>
        </div>

        {/* 3. 산학연 협력 생태계 강조 (가로형 와이드 박스) */}
        <div className="biz-section" style={{ marginTop: '50px' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '24px', padding: '40px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '15px', color: '#ffffff' }}>산·학·연 R&D 생태계 허브</h4>
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', margin: 0 }}>
                정부 부처, 학계 연구진, 산업계 회원사 간의 긴밀한 네트워크를 통해 
                원천 기술 연구부터 상용화, 표준화까지 이어지는 통합 선순환 생태계를 구축하고 있습니다.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.1)', padding: '15px 25px', borderRadius: '12px' }}>
                <span style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: '#0ea5e9' }}>정부/공공</span>
              </div>
              <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.1)', padding: '15px 25px', borderRadius: '12px' }}>
                <span style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: '#10b981' }}>산업계</span>
              </div>
              <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.1)', padding: '15px 25px', borderRadius: '12px' }}>
                <span style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: '#8b5cf6' }}>학계/연구소</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Rnd;