// src/pages/business/Rnd.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Business.css';

const Rnd = () => {
  return (
    <SubLayout mainCategory="주요사업" subCategory="연구개발">
      <div className="biz-container">
        
        {/* 1. 소개 요약 박스 */}
        <div className="biz-intro-box">
          <h4>미래를 선도하는 클라우드 기술 연구</h4>
          <p>
            CCCR은 클라우드 네이티브, 인공지능(AI), 빅데이터 등 4차 산업혁명의 핵심 기반이 되는<br />
            소프트웨어 및 클라우드 컴퓨팅 기술을 선제적으로 연구하고 개발하여 국가 기술 경쟁력을 강화합니다.
          </p>
        </div>

        {/* 2. 상세 내용 섹션 */}
        <div className="biz-section">
          <h3 className="biz-section-title">주요 연구 분야</h3>
          
          <div className="biz-card-grid">
            <div className="biz-card">
              <div className="biz-card-icon">☁️</div>
              <h5>클라우드 네이티브 기술</h5>
              <p>MSA(Microservices Architecture), 컨테이너(Container), 데브옵스(DevOps) 기반의 차세대 클라우드 인프라 전환 기술 연구</p>
            </div>
            
            <div className="biz-card">
              <div className="biz-card-icon">🤖</div>
              <h5>AI & 클라우드 융합</h5>
              <p>생성형 AI, 머신러닝(ML) 모델의 효율적인 학습 및 배포를 위한 GPU/NPU 기반 클라우드 최적화 연구</p>
            </div>
            
            <div className="biz-card">
              <div className="biz-card-icon">🔒</div>
              <h5>클라우드 보안 및 표준화</h5>
              <p>제로 트러스트(Zero Trust) 아키텍처 및 공공/금융 부문 클라우드 보안 가이드라인 연구</p>
            </div>
          </div>
        </div>

        <div className="biz-section">
          <h3 className="biz-section-title">추진 체계</h3>
          <div className="biz-intro-box" style={{ backgroundColor: '#fff', textAlign: 'left' }}>
            <ul style={{ lineHeight: '2', color: '#444' }}>
              <li>✅ <strong>산학연 연계:</strong> 회원사 및 대학, 연구기관과의 공동 R&D 프로젝트 기획 및 수행</li>
              <li>✅ <strong>정부 R&D 참여:</strong> 과기정통부, IITP 등 주요 정부 부처 클라우드 관련 R&D 과제 수주 및 수행</li>
              <li>✅ <strong>기술 이전:</strong> 연구개발 성과물을 회원사 및 산업계에 확산하여 실질적인 비즈니스 창출 지원</li>
            </ul>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Rnd;