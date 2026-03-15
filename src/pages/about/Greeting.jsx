// src/pages/about/Greeting.jsx
import React, { useEffect } from 'react';
import SubLayout from '../../layouts/SubLayout';
import './About.css';

const Greeting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SubLayout mainCategory="조합안내" subCategory="인사말">
      {/* 🚀 이 전체를 감싸는 .vision-wrapper에 배경 패턴을 적용합니다 */}
      <div className="vision-wrapper">
        
        {/* 1. 슬로건 영역 */}
        <header className="vision-hero">
          <p className="vision-kicker">고객과 함께하는 Consortium of World-Class Research</p>
          <h2 className="vision-slogan">
            한국 클라우드 컴퓨팅이 <strong>세계적인 수준으로 도약</strong>할 수 있도록<br />
            최선을 다하겠습니다.
          </h2>
        </header>

        {/* 2. 본문 영역 */}
        <article className="vision-message-body">
          <p className="vision-lead">
            안녕하십니까? 한국클라우드컴퓨팅연구조합 이사장 이동기입니다.<br />
            저희 홈페이지를 찾아 주신 여러분을 진심으로 환영합니다.
          </p>
          <p>
            한국클라우드컴퓨팅연구조합(CCCR)은 대한민국 클라우드 컴퓨팅 및 소프트웨어 산업의 
            경쟁력 강화를 위해 설립된 전문 연구기관입니다.
          </p>
          <p>
            급변하는 글로벌 IT 환경과 다가오는 지능형 클라우드·AI 시대에 발맞춰, 
            우리 조합은 <strong>핵심 기술의 연구개발(R&D)과 현장 맞춤형 전문 인력 양성</strong>에 전력을 다하고 있습니다. 
            더불어 회원사 간의 긴밀한 협력 네트워크를 구축하고, 산업계의 목소리를 대변하여 
            건강하고 자생력 있는 클라우드 생태계를 조성하는 데 앞장서겠습니다.
          </p>
          <p>
            회원사 여러분의 비즈니스 혁신과 동반 성장을 위한 가장 든든한 파트너가 될 것을 약속드리며, 
            앞으로도 한국클라우드컴퓨팅연구조합의 행보에 아낌없는 관심과 성원을 부탁드립니다.
          </p>
          
          <div className="vision-signature">
            감사합니다.
          </div>
        </article>

        {/* 3. 하단 프로필 카드 */}
        <div className="vision-profile-card">
          <div className="profile-image-wrap">
            <img 
              src="https://placehold.co/400x550/e2e8f0/64748b?text=CEO+Photo" 
              alt="이사장 이동기" 
            />
          </div>
          
          <div className="profile-info-wrap">
            <span className="profile-label">한국클라우드컴퓨팅연구조합 이사장</span>
            <h3 className="profile-name">이 동 기</h3>
            
            <div className="profile-resume">
              <div className="resume-section">
                <h4>학력</h4>
                <ul>
                  <li>서울대학교 컴퓨터공학과 학사 / 석사</li>
                  <li>미국 스탠퍼드 대학교 컴퓨터과학 박사</li>
                </ul>
              </div>
              
              <div className="resume-section">
                <h4>주요 경력</h4>
                <ul>
                  <li>(현) 한국클라우드컴퓨팅연구조합 이사장</li>
                  <li>(현) (주)클라우드이노베이션 대표이사</li>
                  <li>(전) 정보통신산업진흥원(NIPA) 클라우드 기획위원</li>
                  <li>(전) 한국클라우드산업협회 부회장</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Greeting;