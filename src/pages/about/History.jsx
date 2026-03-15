// src/pages/about/History.jsx
import React, { useState, useEffect } from 'react';
import SubLayout from '../../layouts/SubLayout';
import './About.css';

const History = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeEra, setActiveEra] = useState('2020s');

  const historyData = [
    { year: '2023', events: [ { month: '12', desc: '제 7회 GEdge Platform 커뮤니티 컨퍼런스 개최 / 차세대 DBMS 기술 개발 과제 성과발표회' }, { month: '11', desc: '2023 ICT 기기산업 페스티벌 전시부스 참가 / 청년취업사관학교 새싹(SeSAC) 동대문캠퍼스 1기 개설' }, { month: '10', desc: 'CCCR TaB 2023 세미나 개최 / CCCR 아카데미 수료생 커뮤니티 운영위원회' }, { month: '06', desc: '과기정통부 클라우드컴퓨팅 전문인력양성기관 지원 사업 선정' }, { month: '03', desc: '제 5대 이사장 이동기 SK텔레콤 본부장 선임' } ] },
    { year: '2022', events: [ { month: '12', desc: 'GEdge Platform 제5회 컨퍼런스 개최 / 사무국 소재지 이전(삼성동)' }, { month: '06', desc: '과기정통부 "캠퍼스SW아카데미", "기업멤버십SW캠프" 사업 선정' }, { month: '01', desc: '과기정통부 "SW전문인력양성기관" 지정' } ] },
    { year: '2021', events: [ { month: '12', desc: 'NIPA 2021 클라우드컴퓨팅 전문인력 양성기관 지원사업 선정' }, { month: '10', desc: '제1회 CCCR TaB 2021 세미나 개최' }, { month: '03', desc: 'SW전문인력양성기관 지정(과기정통부)' } ] },
    { year: '2020', events: [ { month: '12', desc: '자율지능 디지털 동반자 기술 연구 과제 성과발표회' }, { month: '08', desc: 'TaB Issue Report 발행 시작' }, { month: '03', desc: '제12회 정기총회 개최' } ] },
    { year: '2019', events: [ { month: '11', desc: 'CCCR TaB 2019 세미나 / 교통혼잡 지능형 SW 포럼' }, { month: '04', desc: '혁신성장 청년인재 집중양성사업 선정 / 대한민국과학축제 참가' }, { month: '03', desc: '제 4대 이사장 홍승균 SK텔레콤 그룹장 선임' } ] },
    { year: '2018', events: [ { month: '08', desc: '2018 혁신성장 청년인재 집중양성사업 선정(IITP)' }, { month: '03', desc: '2018 청년취업아카데미 선정' } ] },
    { year: '2017', events: [ { month: '05', desc: '미래창조과학부 클라우드컴퓨팅 전문인력 양성기관 지정' }, { month: '01', desc: 'ITU-T 학계회원 멤버십 획득 (국제 표준 추진)' } ] },
    { year: '2016', events: [ { month: '06', desc: '클라우드 활성화 촉진 이행방안 정책연구 사업 선정' }, { month: '01', desc: '클라우드컴퓨팅 기술 스택 v2.1 발간' } ] },
    { year: '2015', events: [ { month: '09', desc: '빅데이터 심포지엄 개최 / 클라우드 EXPO Korea 2015 참가' }, { month: '03', desc: '국가 표준개발협력기관(COSD) 지정(국가기술표준원)' } ] },
    { year: '2014', events: [ { month: '11', desc: '제7회 클라우드 데이 주관' }, { month: '05', desc: '사용자인터페이스표준화포럼 장관상 수상' } ] },
    { year: '2013', events: [ { month: '11', desc: '2013 차세대컴퓨팅 전시회 및 제2차 클라우드 세미나 개최' }, { month: '05', desc: '사용자 인터페이스 표준화 포럼 선정(TTA)' } ] },
    { year: '2012', events: [ { month: '11', desc: '클라우드 비즈니스 모델 세미나' }, { month: '05', desc: '클라우드 재팬 한국관 기획 참가' } ] },
    { year: '2011', events: [ { month: '11', desc: '2011년 SW·컴퓨팅 R&D 전시회 개최' }, { month: '04', desc: '2011 클라우드 컴퓨팅 산업 아웃룩 포럼' } ] },
    { year: '2010', events: [ { month: '11', desc: '그린/클라우드 컴퓨팅 R&D 성과발표회 개최' }, { month: '05', desc: '제 2대 이사장 임종태(SK텔레콤 기술원 원장) 취임' }, { month: '01', desc: '법무처 클라우드 컴퓨팅 정책협의회 참여' } ] },
    { year: '2009', events: [ { month: '07', desc: '클라우드 컴퓨팅 R&D 테스트베드 오픈(KAIST)' }, { month: '01', desc: '지식경제부 연구조합 법인 설립 인가' } ] },
    { year: '2008', events: [ { month: '12', desc: '창립총회 : 초대 이사장 한재선(넥스알 대표이사) 취임' } ] }
  ];

  const filteredHistory = historyData.filter(data => {
    const yearNum = parseInt(data.year, 10);
    if (activeEra === '2020s') return yearNum >= 2020;
    if (activeEra === '2010s') return yearNum >= 2010 && yearNum <= 2019;
    if (activeEra === '2000s') return yearNum < 2010;
    return true;
  });

  return (
    <SubLayout mainCategory="조합안내" subCategory="설립목적 및 연혁">
      <div className="premium-history-wrapper">
        
        {/* 🚀 1. 이미지 내용 기반 + 모던 프리미엄 디자인 적용 */}
        <section className="premium-vision-section">
          <div className="vision-intro-center">
            <h3 className="premium-title">설립목적</h3>
            <p className="premium-lead">
              클라우드 컴퓨팅 분야의 핵심기술 및 공통 애로기술에 대한 수요를 발굴하고<br className="hide-on-mobile"/>
              관련 기술의 보급에 힘써 클라우드 컴퓨팅 산업의 성장발전을 도모함
            </p>
          </div>

          <div className="premium-grid-container">
            {/* 좌측: VISION (다크 네이비) */}
            <div className="premium-grid-box dark">
              <h4 className="grid-label">VISION</h4>
              <p className="grid-text">‘클라우드 컴퓨팅’ 세계 기술 우위 선도 및 경쟁력 보유</p>
            </div>
            
            {/* 우측: MISSION (스카이블루 그라데이션) */}
            <div className="premium-grid-box light">
              <h4 className="grid-label">MISSION</h4>
              <ul className="grid-list">
                <li>✔️ 핵심 기술 발굴 및 개발</li>
                <li>✔️ 산업 활성화 기반 구축</li>
              </ul>
            </div>

            {/* 하단: 5대 핵심 사업분야 (쿨그레이 바탕 + 블루 텍스트) */}
            <div className="premium-grid-box full-width">
              <h4 className="grid-label">5대 핵심 사업분야</h4>
              <div className="premium-tags">
                <span>연구개발</span>
                <span className="divider"></span>
                <span>표준화</span>
                <span className="divider"></span>
                <span>교육</span>
                <span className="divider"></span>
                <span>대외협력</span>
                <span className="divider"></span>
                <span>홍보</span>
              </div>
            </div>
          </div>
        </section>

        <div className="premium-divider"></div>

        {/* 🚀 2. 미니멀리즘 연혁 타임라인 (에디토리얼 리스트 스타일) */}
        <section className="premium-history-section">
          <div className="history-header-center">
            <h3 className="premium-title">주요 연혁</h3>
          </div>

          <div className="premium-tabs">
            <button className={`tab-item ${activeEra === '2020s' ? 'active' : ''}`} onClick={() => setActiveEra('2020s')}>2020 - 현재</button>
            <button className={`tab-item ${activeEra === '2010s' ? 'active' : ''}`} onClick={() => setActiveEra('2010s')}>2010 - 2019</button>
            <button className={`tab-item ${activeEra === '2000s' ? 'active' : ''}`} onClick={() => setActiveEra('2000s')}>2008 - 2009</button>
          </div>

          <div className="premium-timeline">
            {filteredHistory.map((data, index) => (
              <div key={index} className="timeline-row">
                <div className="timeline-year">
                  <span>{data.year}</span>
                </div>
                
                <div className="timeline-events">
                  {data.events.map((event, idx) => (
                    <div key={idx} className="event-line">
                      <span className="event-mm">{event.month}.</span>
                      <p className="event-txt">{event.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </SubLayout>
  );
};

export default History;