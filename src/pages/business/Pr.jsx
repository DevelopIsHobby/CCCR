import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Business.css';

const Pr = () => {
  return (
    <SubLayout mainCategory="주요사업" subCategory="홍보">
      <div className="biz-container">
        
        <div className="edu-intro-area">
          <h4>클라우드 산업의 <span className="highlight">현재와 미래</span>를 널리 알립니다</h4>
          <p>
            최신 기술 트렌드, 우수 도입 사례, 그리고 회원사의 혁신적인 성과를<br/>
            다양한 온·오프라인 미디어 채널을 통해 발 빠르게 전달합니다.
          </p>
        </div>

        <h5 className="edu-section-title">주요 홍보 채널 및 활동</h5>
        
        <div className="biz-card-grid">
          <div className="biz-card">
            <div className="biz-card-icon">📰</div>
            <h6>정기 뉴스레터 발간</h6>
            <p>클라우드 업계 동향, 정책 변화, 회원사 소식 등을 담은 주간/월간 뉴스레터를 산업 관계자 1만여 명에게 배포합니다.</p>
          </div>
          
          <div className="biz-card">
            <div className="biz-card-icon">🎤</div>
            <h6>컨퍼런스 및 세미나 개최</h6>
            <p>클라우드 이노베이션 서밋 등 대규모 컨퍼런스와 최신 기술 세미나를 주최하여 기술 정보 교류의 장을 마련합니다.</p>
          </div>
          
          <div className="biz-card">
            <div className="biz-card-icon">📢</div>
            <h6>언론 미디어 지원</h6>
            <p>회원사의 신제품 출시, 주요 성과 등에 대한 보도자료 배포, IT 전문 매체 언론사 인터뷰 연결 등 PR 활동을 지원합니다.</p>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Pr;