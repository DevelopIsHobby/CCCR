// src/pages/members/Info.jsx
import React, { useEffect } from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Members.css';

// 🚀 임원사 데이터 (유지보수가 쉽도록 배열로 분리)
const executiveCompanies = [
  { name: '(주)나눔기술', url: 'http://www.nanum.co.kr' },
  { name: '(주)노브레이크', url: 'http://www.nobreak.co.kr' },
  { name: '(주)디노아이티', url: 'http://www.dinnoit.com' },
  { name: '디포커스(주)', url: 'http://www.dfocus.net' },
  { name: '메가존클라우드(주)', url: 'http://www.megazone.com' },
  { name: '(주)모비젠', url: 'http://www.mobigen.com' },
  { name: '(주)소프트웍스', url: 'http://www.softworks.co.kr' },
  { name: '슈어소프트테크(주)', url: 'http://www.suresofttech.com' },
  { name: '(주)아이엔소프트', url: 'http://www.in-soft.co.kr' },
  { name: '(주)어니언소프트웨어', url: 'http://www.onionsoftware.com' },
  { name: '(주)엔텔스', url: 'http://www.ntels.com' },
  { name: '오케스트로(주)', url: 'http://www.okestro.com' },
  { name: '(주)위즈온텍', url: 'http://www.wizontech.com' },
  { name: '이노뎁(주)', url: 'http://www.innodep.co.kr' },
  { name: '스트라토㈜', url: 'http://www.strato.co.kr' },
  { name: '제스프로(주)', url: 'http://www.zespro.co.kr' },
  { name: '(주)틸론', url: 'http://www.tilon.co.kr' },
  { name: 'SK(주)', url: 'http://cc.sk.co.kr' },
];

const Info = () => {
  // 페이지 진입 시 스크롤 최상단 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SubLayout mainCategory="회원공간" subCategory="회원안내">
      <div className="guide-layout-wrapper">
        <div className="guide-container">
          
          <div className="guide-welcome-header" style={{ marginBottom: '50px' }}>
            <span className="welcome-badge">MEMBERSHIP INFO</span>
            <p className="welcome-main-text">
              CCCR과 함께 클라우드 산업을 이끄는 <br />
              <strong>주요 회원사 및 특전</strong>을 소개합니다.
            </p>
          </div>

          {/* 1. 회원사 특전 섹션 (카드형 UI) */}
          <section className="guide-section">
            <h3 className="guide-section-title">회원사 주요 특전</h3>
            <div className="benefit-grid">
              
              <div className="benefit-card">
                <div className="benefit-icon">🚀</div>
                <h4>과제 참여 및 컨소시엄 지원</h4>
                <p>정부 R&D 및 공공 과제 참여를 안내하고, 유관 기업 간의 컨소시엄 구성을 적극적으로 지원합니다.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">🤝</div>
                <h4>네트워킹 및 행사 우선 참여</h4>
                <p>조합 관련 국내외 행사에 우선적으로 참여 및 지원을 받을 수 있으며, 각종 조합 주도 모임에 초청됩니다.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">📊</div>
                <h4>최신 자료 및 간행물 제공</h4>
                <p>클라우드 산업 관련 국내외 조사 자료, 통계 및 협회 공식 간행물을 무료로 배포해 드립니다.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">🛡️</div>
                <h4>기업 권익 보호 및 의견 수렴</h4>
                <p>기업 경영 시 발생하는 애로사항 및 대정부 건의사항을 수렴하여 정책에 반영될 수 있도록 돕습니다.</p>
              </div>

            </div>

            {/* 등급별 특이사항 안내 바 */}
            <div className="benefit-notice-bar">
              <p>※ <strong>임원사</strong>는 임원 선임 및 총회 의결권을 보유합니다.</p>
              <p>※ <strong>준회원사</strong>는 일부 특전 제공이 정회원과 상이할 수 있습니다.</p>
            </div>
          </section>

          {/* 2. 회원사 현황 섹션 */}
          <section className="guide-section">
            <h3 className="guide-section-title">회원사 현황</h3>
            
            {/* 이사장사 (강조) */}
            <div className="chairman-wrap">
              <span className="chairman-label">이사장사</span>
              <a href="http://www.sktelecom.com" target="_blank" rel="noopener noreferrer" className="chairman-card">
                <div className="chairman-info">
                  <span className="company-name">SK텔레콤(주)</span>
                  <span className="company-url">www.sktelecom.com</span>
                </div>
                <div className="link-icon">🔗</div>
              </a>
            </div>

            {/* 임원사 그리드 */}
            <div className="executives-wrap">
              <div className="executives-header">
                <span className="executives-label">임원사</span>
                <span className="executives-count">총 {executiveCompanies.length}개사</span>
              </div>
              
              <div className="company-grid">
                {executiveCompanies.map((company, idx) => (
                  <a key={idx} href={company.url} target="_blank" rel="noopener noreferrer" className="company-card">
                    <span className="comp-name">{company.name}</span>
                    <span className="comp-link">방문하기 ↗</span>
                  </a>
                ))}
              </div>
            </div>

          </section>

        </div>
      </div>
    </SubLayout>
  );
};

export default Info;