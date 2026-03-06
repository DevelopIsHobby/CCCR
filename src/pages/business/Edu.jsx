import React from 'react';
import SubLayout from '../../layouts/SubLayout'; 
import './Business.css'; // 이제 이거 하나면 끝!

const Edu = () => {
  return (
    <SubLayout mainCategory="주요사업" subCategory="교육">
      <div className="edu-content-wrap">
        
        {/* 1. 상단 소개 영역 (통합 CSS의 edu-intro-area 사용) */}
        <div className="edu-intro-area">
          <h4>미래 SW·클라우드 산업을 이끌어갈<br/><span className="highlight">핵심 실무 인재</span>를 양성합니다.</h4>
          <p>
            CCCR은 현장 중심의 실무 교육과 글로벌 트렌드를 반영한 커리큘럼을 통해 
            기업이 필요로 하는 맞춤형 전문가를 육성하고, 회원사의 기술 경쟁력 강화를 적극 지원합니다.
          </p>
        </div>

        {/* 2. 주요 교육 프로그램 */}
        <div className="edu-program-section">
          <h5 className="edu-section-title">주요 교육 프로그램</h5>
          
          <div className="biz-card-grid">
            <div className="biz-card">
              <div className="biz-card-icon">💻</div>
              <h6>클라우드 네이티브 부트캠프</h6>
              <p>미취업 청년 및 대학생을 대상으로 한 MSA, 쿠버네티스 중심의 6개월 집중 실무 양성 과정</p>
              <ul className="card-list">
                <li>- K-Digital Training 연계</li>
                <li>- 현업 멘토링 및 실무 프로젝트</li>
              </ul>
            </div>
            <div className="biz-card">
              <div className="biz-card-icon">🏢</div>
              <h6>재직자 역량 강화 교육</h6>
              <p>회원사 및 SW 기업 재직자의 기술 트렌드 캐치업과 직무 전문성 향상을 위한 단기 집중 과정</p>
              <ul className="card-list">
                <li>- AI/BigData/Cloud 최신 기술 세미나</li>
                <li>- 실습 위주의 맞춤형 커리큘럼</li>
              </ul>
            </div>

            <div className="biz-card">
              <div className="biz-card-icon">🤝</div>
              <h6>기업 맞춤형(주문형) 교육</h6>
              <p>개별 기업의 요구사항과 비즈니스 환경을 분석하여 설계된 '우리 회사만을 위한' 특화 교육</p>
              <ul className="card-list">
                <li>- 사내 강사 양성 및 온사이트 교육</li>
                <li>- 도입 기술 스택 기반 실전 훈련</li>
              </ul>
            </div>
          </div>
        </div>
        

        {/* 3. 하단 문의처 박스 */}
        <div className="edu-contact-box">
          <div className="contact-info">
            <strong>교육 사업 문의</strong>
            <span>인재양성팀 김담당 팀장</span>
          </div>
          <div className="contact-detail">
            <span>📞 02-1234-5678</span>
            <span>✉️ edu@cccr.or.kr</span>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Edu;