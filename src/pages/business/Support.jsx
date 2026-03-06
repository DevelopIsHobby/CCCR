import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Business.css';

const Support = () => {
  return (
    <SubLayout mainCategory="주요사업" subCategory="회원사 지원">
      <div className="biz-container">
        
        <div className="biz-intro-box">
          <h4>회원사의 든든한 비즈니스 파트너</h4>
          <p>
            CCCR은 회원사의 지속 가능한 성장과 글로벌 경쟁력 강화를 위해<br/>
            기술 컨설팅, 네트워킹, 마케팅 등 다각적인 맞춤형 지원 프로그램을 운영합니다.
          </p>
        </div>

        <h3 className="biz-section-title">회원사 전용 혜택</h3>
        
        <div className="biz-card-grid">
          <div className="biz-card">
            <div className="biz-card-icon">💡</div>
            <h5>기술 컨설팅 및 자문</h5>
            <p>클라우드 전환, 아키텍처 설계, 클라우드 보안 인증(CSAP) 획득을 위한 전문가 1:1 멘토링 및 기술 자문을 제공합니다.</p>
          </div>
          
          <div className="biz-card">
            <div className="biz-card-icon">🤝</div>
            <h5>비즈니스 네트워킹</h5>
            <p>C-Level 조찬 포럼, 분야별 실무자 밋업(Meetup) 등을 수시로 개최하여 수요 기업과 공급 기업 간의 비즈니스 매칭을 돕습니다.</p>
          </div>
          
          <div className="biz-card">
            <div className="biz-card-icon">🎁</div>
            <h5>교육 및 마케팅 지원</h5>
            <p>협회 주관 재직자 교육 프로그램 무료/할인 수강, IT 전시회 공동관 참여 지원, 소프트웨어 제휴 할인 등을 제공합니다.</p>
          </div>
        </div>

        {/* 회원사 가입 문의처 추가 */}
        <div className="edu-contact-box">
          <div className="contact-info">
            <strong>회원 가입 및 혜택 문의</strong>
            <span>회원지원팀 박담당 매니저</span>
          </div>
          <div className="contact-detail">
            <span>📞 02-1111-2222</span>
            <span>✉️ support@cccr.or.kr</span>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Support;