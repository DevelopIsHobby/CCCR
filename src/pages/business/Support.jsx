// src/pages/business/Support.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Business.css';

const Support = () => {
  return (
    <SubLayout mainCategory="주요사업" subCategory="회원사 지원">
      <div className="biz-container">
        
        {/* 1. 소개 요약 박스 */}
        <div className="biz-intro-box">
          <h4>회원사의 든든한 비즈니스 파트너</h4>
          <p>
            CCCR은 회원사의 지속 가능한 성장과 비즈니스 확장을 위해<br/>
            과제 참여 지원, 네트워킹, 최신 산업 동향 자료 제공 등 다각적인 맞춤형 혜택을 제공합니다.
          </p>
        </div>

        {/* 2. 주요 혜택 (그리드 카드 3개로 그룹핑) */}
        <div className="biz-section">
          <h3 className="biz-section-title">회원사 주요 혜택</h3>
          
          <div className="biz-card-grid">
            {/* 카드 1: 비즈니스 및 과제 */}
            <div className="biz-card">
              <div className="biz-card-icon">🤝</div>
              <h5>과제 및 비즈니스 지원</h5>
              <p>정부 R&D 과제 참여 안내 및 컨소시엄 구성을 적극 지원하며, 기업 경영 시 발생하는 애로사항과 건의사항을 수렴하여 해결을 돕습니다.</p>
            </div>
            
            {/* 카드 2: 네트워킹 및 행사 */}
            <div className="biz-card">
              <div className="biz-card-icon">🎟️</div>
              <h5>행사 참여 및 네트워킹</h5>
              <p>조합과 관련된 각종 국내외 행사에 우선적으로 참여하고 지원받을 수 있으며, 조합이 주도하는 다양한 전문가 모임에 초청됩니다.</p>
            </div>
            
            {/* 카드 3: 자료 및 정보 제공 */}
            <div className="biz-card">
              <div className="biz-card-icon">📊</div>
              <h5>최신 정보 및 간행물 제공</h5>
              <p>클라우드 산업 관련 최신 국내외 조사 자료, 통계 자료 및 협회 공식 간행물을 회원사에게 무료로 배포하여 인사이트를 제공합니다.</p>
            </div>
          </div>
        </div>

        {/* 3. 회원 등급별 유의사항 (리스트 박스) */}
        <div className="biz-section">
          <h3 className="biz-section-title">회원 등급별 안내</h3>
          <div className="biz-intro-box" style={{ backgroundColor: '#ffffff', textAlign: 'left', border: '1px solid #e2e8f0' }}>
            <ul style={{ lineHeight: '2.4', color: '#334155', fontSize: '16px', margin: 0, padding: '10px 10px 10px 20px', listStyleType: 'none' }}>
              <li>
                👑 <strong>임원사 특전 :</strong> 임원사는 임원 선임 및 총회 의결권을 보유하며, 조합의 주요 의사결정에 참여할 수 있습니다.
              </li>
              <li>
                ⚠️ <strong>준회원사 안내 :</strong> 준회원사의 경우 가입비가 면제되는 대신, 제공되는 특전이 정회원(임원사 및 일반회원사)과 상이할 수 있습니다.
              </li>
            </ul>
          </div>
        </div>

        {/* 4. 가입 문의처 (실제 조합 연락처 적용) */}
        <div className="edu-contact-box" style={{ 
          marginTop: '50px', 
          padding: '30px', 
          backgroundColor: '#f8fafc', 
          borderRadius: '16px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          border: '1px solid #e2e8f0'
        }}>
          <div className="contact-info">
            <strong style={{ display: 'block', fontSize: '18px', color: '#0f172a', marginBottom: '8px' }}>회원 가입 및 혜택 문의</strong>
            <span style={{ color: '#475569', fontSize: '15px' }}>조합회원 입회 담당자</span>
          </div>
          <div className="contact-detail" style={{ textAlign: 'right' }}>
            <span style={{ display: 'block', color: '#0ea5e9', fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>📞 02-2052-0156</span>
            <span style={{ display: 'block', color: '#64748b', fontSize: '15px' }}>✉️ admin@cccr.or.kr</span>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Support;