// src/pages/academy/Training.jsx
import React, { useState } from 'react';
import SubLayout from '../../layouts/SubLayout';
import { Link } from 'react-router-dom';
import './Academy.css';

const trainingPrograms = [
  {
    id: 'professional',
    tabName: '전문인력 양성',
    title: '클라우드컴퓨팅 전문인력 양성기관 지원사업',
    badge: '과기부 지정',
    desc: '클라우드 교육훈련 기관 중 지정요건을 충족하는 기관을 선발하여 운영함으로써 대한민국 클라우드 산업의 핵심 인재 육성 및 기술 자질 향상을 선도합니다.',
    info: [
      { label: '지정기간', value: '3년(2023~2025) + 6년(2017~2022)' },
      { label: '주관부처', value: '과학기술정보통신부' },
      { label: '전담기관', value: '정보통신산업진흥원(NIPA)' },
      { label: '선발순위', value: '1순위: 중소기업 재직자 (50% 이상) / 2순위: 중견·대기업 재직자' }
    ],
    detailsTitle: '⚖️ 관련 법령 및 근거',
    details: [
      '「클라우드컴퓨팅 발전 및 이용자 보호에 관한 법률」 제14조',
      '「클라우드컴퓨팅 발전 및 이용자 보호에 관한 법률 시행령」 제12조',
      '「K-ICT 클라우드컴퓨팅 활성화 계획」'
    ],
    link: './apply.jsx'
  },
  {
    id: 'recruitment',
    tabName: '채용연계형',
    title: '채용연계형 SW전문인재양성 사업',
    badge: '취업연계',
    desc: '중소·벤처기업 등 멤버십기업과 컨소시엄을 구성하여 기업군별 특화 교육을 운영하고, 수료 후 멤버십기업으로 즉시 채용을 지원하는 프로그램입니다.',
    info: [
      { label: '교육대상', value: '미취업자 및 졸업예정자' },
      { label: '수당지급', value: '월 최대 30만원 (최대 세전 약 180만원)' },
      { label: '지원내용', value: '교육비 전액 무료, 교재 및 PC 무상 지원' }
    ],
    detailsTitle: '📚 운영 교육 과정',
    details: [
      'DevOps & SRE 엔지니어 부트캠프 (이론/실습/프로젝트 총 929h)',
      '오픈소스 기반 클라우드 플랫폼(PaaS) 엔지니어 부트캠프 (총 863h)',
      '경남주력산업 디지털전환 인공지능융합 부트캠프 (총 840h)'
    ],
    link: './apply.jsx'
  },
  {
    id: 'taba',
    tabName: '대학·기업 협력형',
    title: '대학·기업 협력형 SW아카데미 (TABA)',
    badge: '산학협력',
    desc: '단국대학교, 오케스트로, CCCR이 컨소시엄을 구성하여 빅데이터 및 AI SW융합개발자를 양성하는 채용연계형 미취업자 교육입니다.',
    info: [
      { label: '참여기관', value: '단국대학교, 오케스트로, CCCR' },
      { label: '학점인정', value: '단국대 재학생 최대 15학점 인정' },
      { label: '혜택지원', value: '식비/교통비 월 30만원, 팀별 프로젝트비 지원' }
    ],
    detailsTitle: '💻 핵심 교육 과목',
    details: [
      '티베로(Tibero) DBMS 구축 및 SQL 실습',
      '오케스트로(OKESTRO) 클라우드 솔루션 활용 및 실습',
      '운영체제(Linux) 및 인공지능 입문 딥러닝 프로젝트'
    ],
    link: './apply.jsx'
  },
  {
    id: 'sesac',
    tabName: '새싹(SeSAC)',
    title: '서울시 청년취업사관학교 (SeSAC)',
    badge: '서울시 지원',
    desc: '서울시와 서울경제진흥원(SBA)이 지원하는 교육 브랜드로, 개발자를 꿈꾸는 청년들이 실무 역량을 쌓아 현업에 데뷔할 수 있도록 돕습니다.',
    info: [
      { label: '교육장소', value: '청년취업사관학교 전용 교육장' },
      { label: '멘토링', value: 'AWS Korea, SKT, 오케스트로 현직자 멘토링' },
      { label: '취업지원', value: '기업 탐방, 잡페어 참여, 포트폴리오 컨설팅' }
    ],
    detailsTitle: '🛠️ 주요 교육 모듈',
    details: [
      'Architecting on AWS 및 Terraform 활용 인프라 구축',
      '클라우드 기반 인공지능(AI) 핵심 기술 구현',
      '가상화 데이터센터 및 클라우드 네이티브 실무 프로젝트'
    ],
    link: './apply.jsx'
  }
];

const Training = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = trainingPrograms[activeTab];

  return (
    <SubLayout mainCategory="인재양성" subCategory="교육훈련">
      <div className="academy-container">
        
        {/* 🚀 상단 4탭 메뉴 (알약 스타일) */}
        <div className="academy-tab-menu" style={{ marginBottom: '40px' }}>
          {trainingPrograms.map((program, idx) => (
            <button
              key={program.id}
              className={`academy-tab-item ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              {program.tabName}
            </button>
          ))}
        </div>

        {/* 🚀 탭 콘텐츠 영역 (선택된 사업 내용만 출력) */}
        <div className="academy-content-view" style={{ animation: 'fadeIn 0.5s ease' }}>
          
          {/* 1. 타이틀 섹션 */}
          <div className="academy-form-section" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="academy-badge ing" style={{ marginBottom: '15px' }}>{current.badge}</div>
            <h2 className="academy-form-title" style={{ alignItems: 'center' }}>{current.title}</h2>
            <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '17px', wordBreak: 'keep-all', maxWidth: '850px', margin: '0 auto' }}>
              {current.desc}
            </p>
          </div>

          {/* 2. 핵심 정보 요약 (Table) */}
          <div className="academy-table-wrap">
            <table className="academy-table">
              <tbody>
                {current.info.map((item, idx) => (
                  <tr key={idx}>
                    <td className="title-col" style={{ width: '220px', backgroundColor: '#f8fafc', fontWeight: '700' }}>{item.label}</td>
                    <td style={{ textAlign: 'left', paddingLeft: '25px' }}>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 3. 상세 커리큘럼 / 내용 (Card) */}
          <div className="academy-form-section" style={{ marginTop: '40px', backgroundColor: '#f8fafc' }}>
            <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>{current.detailsTitle}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {current.details.map((detail, idx) => (
                <li key={idx} style={{ padding: '12px 20px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', marginBottom: '10px', color: '#475569', fontSize: '15px' }}>
                  • {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. 액션 버튼 */}
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link 
              to="/academy/apply/jobseeker"  // 🚀 내부 페이지로 연결
              className="academy-submit-btn" 
              style={{ textDecoration: 'none', display: 'inline-block', maxWidth: '300px', textAlign: 'center' }}
            >
              모집 중인 교육과정 확인하기 ↗
            </Link>
          </div>

        </div>
      </div>
    </SubLayout>
  );
};

export default Training;