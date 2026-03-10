// src/pages/business/Cooperation.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Business.css'; 

const Cooperation = () => {
  return (
    <SubLayout mainCategory="주요사업" subCategory="대외협력">
      <div className="biz-container">
        
        {/* 1. 소개 요약 박스 */}
        <div className="biz-intro-box">
          <h4>국내외 IT 생태계를 연결하는 든든한 협력 네트워크</h4>
          <p>
            CCCR은 주요 ICT 협·단체 및 유관기관과의 긴밀한 교류와 협력을 통해<br/>
            클라우드 산업 생태계의 발전을 도모하고 회원사의 비즈니스 시너지를 창출합니다.
          </p>
        </div>

        {/* 2. 주요 활동 기관 (그리드 카드 - 8개 기관을 3그룹으로 분류) */}
        <div className="biz-section">
          <h3 className="biz-section-title">협회 및 조합 주요 활동 기관</h3>
          
          <div className="biz-card-grid">
            {/* 카드 1: 컴퓨팅 및 데이터센터 */}
            <div className="biz-card">
              <div className="biz-card-icon">🖥️</div>
              <h5>컴퓨팅 & 데이터센터</h5>
              <ul style={{ textAlign: 'left', paddingLeft: '20px', marginTop: '15px', color: '#475569', fontSize: '15px', lineHeight: '1.8' }}>
                <li>한국데이터센터연합회</li>
                <li>한국데이터센터에너지효율협회</li>
                <li>한국컴퓨팅산업협회</li>
                <li>한국컴퓨팅사업협동조합</li>
              </ul>
            </div>
            
            {/* 카드 2: 정보통신 기술 및 표준 */}
            <div className="biz-card">
              <div className="biz-card-icon">📡</div>
              <h5>정보통신 & 기술 표준</h5>
              <ul style={{ textAlign: 'left', paddingLeft: '20px', marginTop: '15px', color: '#475569', fontSize: '15px', lineHeight: '1.8' }}>
                <li>한국정보통신기술협회 (TTA)</li>
                <li>한국정보통신진흥협회 (KAIT)</li>
              </ul>
            </div>
            
            {/* 카드 3: 지능정보 및 연구조합 */}
            <div className="biz-card">
              <div className="biz-card-icon">🧠</div>
              <h5>지능정보 & 연구 생태계</h5>
              <ul style={{ textAlign: 'left', paddingLeft: '20px', marginTop: '15px', color: '#475569', fontSize: '15px', lineHeight: '1.8' }}>
                <li>지능정보사회연구원</li>
                <li>한국산업기술연구조합연합회</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. 유관기관 협력 (리스트 박스) */}
        <div className="biz-section">
          <h3 className="biz-section-title">유관기관 협력</h3>
          <div className="biz-intro-box" style={{ backgroundColor: '#ffffff', textAlign: 'left', border: '1px solid #e2e8f0' }}>
            <ul style={{ lineHeight: '2.4', color: '#334155', fontSize: '16px', margin: 0, padding: '10px 10px 10px 20px', listStyleType: 'none' }}>
              <li>
                🏆 <strong>한국지능정보사회진흥원 (NIA) :</strong> 사회 현안 해결을 위한 디지털 혁신 공모전 수상 및 민관 협력 지원
              </li>
            </ul>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Cooperation;