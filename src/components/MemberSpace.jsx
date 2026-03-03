import React from 'react';
// 사용할 아이콘들을 불러옵니다
import { FiGift, FiMessageCircle, FiUsers, FiDatabase } from 'react-icons/fi';
import './MemberSpace.css';

const MemberSpace = () => {
  // 우측에 들어갈 카드 데이터
  const memberServices = [
    { id: 1, title: '회원 혜택 안내', desc: 'CCCR 가입 기업을 위한 특별한 맞춤 혜택', icon: <FiGift /> },
    { id: 2, title: '전문가 무료 상담', desc: '법률, 노무, 세무 등 1:1 온라인 상담 지원', icon: <FiMessageCircle /> },
    { id: 3, title: 'SW 인재 채용', desc: '우수 인재와 회원사 간의 다이렉트 매칭', icon: <FiUsers /> },
    { id: 4, title: '최신 기술 자료실', desc: '국내외 산업 동향 보고서 및 연구 자료 제공', icon: <FiDatabase /> },
  ];

  return (
    <div className="member-space-wrapper">
      <div className="member-grid-full">
        
        {/* 섹션 타이틀 */}
        <div className="member-header">
          <h2>CCCR 회원 공간</h2>
          <p>회원사만의 특별한 혜택과 맞춤형 서비스를 누려보세요.</p>
        </div>

        {/* 좌/우 분할 레이아웃 */}
        <div className="member-content-layout">
          
          {/* 좌측: 뉴스레터 영역 (1 비율) */}
          <div className="newsletter-area">
            <div className="newsletter-box">
              <h3>CCCR 뉴스레터 구독</h3>
              <p>최신 소프트웨어 산업 동향과 주요 소식을<br/>매월 이메일로 빠르게 받아보세요.</p>
              
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="이메일 주소를 입력해주세요" required />
                <button type="submit">구독하기</button>
              </form>
            </div>
          </div>

          {/* 우측: 회원 서비스 카드 영역 (2 비율) */}
          <div className="member-cards-area">
            <div className="member-cards-grid">
              {memberServices.map(service => (
                <a href={`#service-${service.id}`} className="member-card" key={service.id}>
                  <div className="member-card-icon">{service.icon}</div>
                  <div className="member-card-text">
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MemberSpace;