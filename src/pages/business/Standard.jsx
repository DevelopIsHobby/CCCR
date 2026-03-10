// src/pages/business/Standard.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Business.css'; 

const Standard = () => {
  return (
    <SubLayout mainCategory="주요사업" subCategory="표준화">
      <div className="biz-container">
        
        {/* 1. 소개 요약 박스 (복구) */}
        <div className="biz-intro-box">
          <h4>국내외 핵심 기술 표준 개발 및 기반 조성 주도</h4>
          <p>
            CCCR은 국내외 클라우드 및 소프트웨어 기술의 상호운용성을 확보하고, 산업 생태계의 활성화를 위해<br />
            TTA, 국가기술표준원 등 주요 기관과 협력하여 국가 및 국제 표준 개발을 적극 추진하고 있습니다.
          </p>
        </div>

        {/* 2. 국내외 표준화 활동 섹션 (기존 카드 디자인 활용하되 내용 양식 수정) */}
        <div className="biz-section">
          <h3 className="biz-section-title">2026년 국내외 표준화 활동 개요</h3>
          
          <div className="biz-card-grid">
            {/* 카드 1: TTA (내용 양식 변경: 바둑판 -> 세련된 리스트) */}
            <div className="biz-card">
              <div className="biz-card-icon">🇰🇷</div>
              <h5>한국정보통신기술협회(TTA)<br/>표준화위원회</h5>
              <div style={{ textAlign: 'left', marginTop: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>
                <strong style={{color:'#334155'}}>클라우드/빅데이터 분야</strong>
                <p style={{margin: '4px 0 10px 0'}}>PG1003(클라우드), PG1004(빅데이터)</p>
                <strong style={{color:'#334155'}}>AI 등 기타</strong>
                <p style={{margin: '4px 0 0 0'}}>PG415(지능형디바이스), PG1005(AI)</p>
              </div>
            </div>
            
            {/* 카드 2: 국가기술표준원 (내용 양식 변경) */}
            <div className="biz-card">
              <div className="biz-card-icon">🌐</div>
              <h5>국가기술표준원<br/>국내 대표 위원회</h5>
              <div style={{ textAlign: 'left', marginTop: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>
                <strong style={{color:'#334155'}}>클라우드 분야</strong>
                <p style={{margin: '4px 0 10px 0'}}>ISO/IEC JTC1/SC38</p>
                <strong style={{color:'#334155'}}>AI 등 기타</strong>
                <p style={{margin: '4px 0 0 0'}}>ISO/IEC JTC1/SC35</p>
              </div>
            </div>
            
            {/* 카드 3: 협력 포럼 (내용 양식 변경) */}
            <div className="biz-card">
              <div className="biz-card-icon">🤝</div>
              <h5>유관 기관<br/>기술 포럼 활동</h5>
              <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', color: '#475569', fontSize: '14px', lineHeight: '1.6', wordBreak: 'keep-all' }}>
                한국컴퓨팅산업협회<br/>
                지능형컴퓨팅기술포럼 참여 및 기술 교류
              </div>
            </div>
          </div>
        </div>

        {/* 3. 주요 내용 (리스트 박스 - 복구) */}
        <div className="biz-section">
          <h3 className="biz-section-title plan-title">2026년 주요 추진 내용</h3>
          <div className="biz-intro-box" style={{ backgroundColor: '#ffffff', textAlign: 'left', border: '1px solid #e2e8f0', marginTop: '0' }}>
            <ul style={{ lineHeight: '2.4', color: '#334155', fontSize: '16px', margin: 0, padding: '10px 10px 10px 20px', listStyleType: 'none' }}>
              <li>
                🌍 <strong>국내외 표준화 활동 수행 :</strong> 글로벌 트렌드에 발맞춘 클라우드 및 신기술 표준화 위원회 적극 참여
              </li>
              <li>
                🏗️ <strong>기반 조성 및 활동 지원 :</strong> 표준 규격 개발을 위한 기초 연구 조성 작업 및 회원사 표준 활동 밀착 지원
              </li>
              <li>
                👥 <strong>전문가 네트워킹 및 행사 :</strong> 산·학·연 관련 전문가 Pool 구성 및 심도 있는 워크샵/세미나 개최 지원
              </li>
              <li>
                📊 <strong>기술 분석 보고서 발간 :</strong> 국내외 관련 표준화 동향 및 심층 기술 분석 보고서 제작 및 배포
              </li>
            </ul>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Standard;