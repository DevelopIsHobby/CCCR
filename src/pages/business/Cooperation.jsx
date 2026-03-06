import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Business.css'; 
const Cooperation = () => {
  return (
    <SubLayout mainCategory="주요사업" subCategory="대외협력">
      <div className="biz-container">
        
        <div className="biz-intro-box">
          <h4>국내외 IT 생태계를 연결하는 글로벌 네트워크</h4>
          <p>
            CCCR은 정부, 지자체, 유관기관 및 글로벌 기업과의 긴밀한 협력을 통해<br/>
            클라우드 산업 발전을 위한 시너지를 창출하고 회원사의 비즈니스 확장을 지원합니다.
          </p>
        </div>

        <h3 className="biz-section-title">주요 협력 분야</h3>
        
        <div className="biz-card-grid">
          <div className="biz-card">
            <div className="biz-card-icon">🏛️</div>
            <h5>대정부 및 공공 협력</h5>
            <p>과기정통부, NIPA 등 정부 부처 및 공공기관과 정책 간담회를 개최하고 산업계의 현장 목소리를 적극 전달합니다.</p>
          </div>
          
          <div className="biz-card">
            <div className="biz-card-icon">🌍</div>
            <h5>글로벌 파트너십</h5>
            <p>해외 유수의 클라우드 협회 및 기술 재단(CNCF 등)과 교류하여 최신 글로벌 기술 트렌드를 국내에 빠르게 도입합니다.</p>
          </div>
          
          <div className="biz-card">
            <div className="biz-card-icon">🎓</div>
            <h5>산학연 연계 생태계</h5>
            <p>국내 주요 대학 및 연구기관과 업무협약(MOU)을 체결하고, 공동 연구 및 차세대 인재 양성을 위한 생태계를 조성합니다.</p>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Cooperation;