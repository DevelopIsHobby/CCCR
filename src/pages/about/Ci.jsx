// src/pages/about/Ci.jsx
import React, { useEffect } from 'react';
import SubLayout from '../../layouts/SubLayout';
import './About.css';

// 🚀 로고 이미지 경로 (폴더 구조에 맞게 조절하세요)
import cccrLogo from '../../assets/cccr-logo.png'; 

const Ci = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SubLayout mainCategory="조합안내" subCategory="CI">
      <div className="premium-ci-wrapper">
        
        {/* 헤더 영역 */}
        <section className="ci-header-section">
          <p className="premium-lead">
            한국클라우드컴퓨팅연구조합(CCCR)의 비전과 가치를 담은 공식 로고를 소개합니다.
          </p>
        </section>

        {/* 🚀 1. 컴팩트해진 로고 쇼케이스 */}
        <section className="ci-showcase-section">
          <div className="ci-showcase-box">
            <img src={cccrLogo} alt="CCCR 공식 로고" className="ci-main-image" />
          </div>
          
          {/* 다운로드 버튼 영역 */}
          <div className="ci-download-area">
            <h4 className="download-title">로고 다운로드</h4>
            <div className="download-buttons">
              <a href="/downloads/cccr-logo.png" download className="btn-download png">
                <span>PNG 다운로드</span>
                <i className="icon-download">↓</i>
              </a>
              <a href="/downloads/cccr-logo.ai" download className="btn-download ai">
                <span>AI 원본 다운로드</span>
                <i className="icon-download">↓</i>
              </a>
            </div>
          </div>
        </section>

        <div className="premium-divider"></div>

        {/* 🚀 2. 심볼 마크 의미 (컬러 시스템 제거 & 중앙 정렬) */}
        <section className="ci-system-section">
          <div className="ci-meaning-box">
            <h4 className="system-title">Symbol Mark</h4>
            <p className="system-desc">
              CCCR의 심볼 마크는 클라우드 컴퓨팅 기술을 통해 <strong>사람과 기술, 그리고 산업을 하나로 연결</strong>하는 무한한 가능성을 상징합니다. 안정적이고 신뢰감 있는 형태를 통해 글로벌 기술 우위를 선도하겠다는 굳건한 의지를 담았습니다.
            </p>
          </div>
        </section>

      </div>
    </SubLayout>
  );
};

export default Ci;