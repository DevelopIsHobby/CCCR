// src/pages/business/Standard.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Business.css'; 

const Standard = () => {
  return (
    <SubLayout mainCategory="주요사업" subCategory="표준화">
      <div className="biz-container">
        
        {/* 1. 소개 요약 박스 */}
        <div className="biz-intro-box">
          <h4>글로벌 호환성과 품질을 보장하는 기술 표준화</h4>
          <p>
            CCCR은 국내외 클라우드 및 SW 기술의 상호운용성을 확보하고, 산업 생태계의 활성화를 위해<br />
            국가 및 국제 표준 개발을 주도하며 회원사의 글로벌 경쟁력 강화를 지원합니다.
          </p>
        </div>

        {/* 2. 상세 내용 섹션 (그리드 카드) */}
        <div className="biz-section">
          <h3 className="biz-section-title">주요 표준화 분야</h3>
          
          <div className="biz-card-grid">
            <div className="biz-card">
              <div className="biz-card-icon">🤝</div>
              <h5>클라우드 상호운용성</h5>
              <p>멀티 클라우드 및 하이브리드 클라우드 환경에서 이기종 플랫폼 간의 데이터 및 서비스 이동성(Portability) 표준 개발</p>
            </div>
            
            <div className="biz-card">
              <div className="biz-card-icon">📊</div>
              <h5>데이터 및 API 표준</h5>
              <p>공공 데이터 개방 및 민간 클라우드 연계를 위한 개방형 API(Open API) 명세 및 데이터 포맷 표준화 연구</p>
            </div>
            
            <div className="biz-card">
              <div className="biz-card-icon">🛡️</div>
              <h5>정보보호 및 품질 평가</h5>
              <p>안전한 클라우드 서비스 제공을 위한 보안 인증(CSAP) 체계 지원 및 서비스 품질·성능(SLA) 측정 지표 표준화</p>
            </div>
          </div>
        </div>

        {/* 3. 추진 체계 및 활동 */}
        <div className="biz-section">
          <h3 className="biz-section-title">주요 활동</h3>
          <div className="biz-intro-box" style={{ backgroundColor: '#fff', textAlign: 'left' }}>
            <ul style={{ lineHeight: '2.2', color: '#444' }}>
              <li>
                🎯 <strong>표준화 포럼 운영:</strong> 
                산·학·연 전문가로 구성된 클라우드 컴퓨팅 표준화 포럼 및 분과위원회 운영
              </li>
              <li>
                🌍 <strong>국제 표준화 대응:</strong> 
                ISO/IEC JTC1 등 국제 표준화 기구 참여 및 국내 기술의 국제 표준 제안 추진
              </li>
              <li>
                📖 <strong>표준 가이드라인 배포:</strong> 
                개발된 표준 기술을 실무에 적용할 수 있도록 회원사 및 산업계 대상 기술 가이드/백서 발간
              </li>
              <li>
                ✅ <strong>국가 표준(KS/TTA) 제정:</strong> 
                한국정보통신기술협회(TTA)와 연계하여 단체표준 및 국가표준 제·개정 수행
              </li>
            </ul>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Standard;