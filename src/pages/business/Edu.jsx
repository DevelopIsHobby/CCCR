// src/pages/business/Edu.jsx
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Business.css';

// 🚀 4개의 세부 교육 사업 데이터 세팅
const eduData = {
  expert: {
    target: '재직자',
    title: '클라우드컴퓨팅 전문인력 양성기관 지원사업',
    intro: '디지털 대전환 시대를 맞이하여, 국가 차원의 클라우드 대전환을 이끌어갈 국내 클라우드 중장기 및 중·고급 전문 인력을 양성합니다.',
    cards: [
      { icon: '⚙️', title: '인프라 구축/운영', desc: '프라이빗/멀티 클라우드 환경에서의 쿠버네티스(K8s) 클러스터 및 오픈스택(OpenStack) 구축 실무' },
      { icon: '🚀', title: '배포 자동화 (IaC)', desc: 'Ansible, Terraform을 활용한 인프라 에스코트(IaC) 기반 애플리케이션 배포 및 관리' },
      { icon: '🔄', title: '최신 융합 기술', desc: 'CI/CD 파이프라인 구축 및 멀티 클라우드 기반 생성형 AI 기술 등 현업 필수 기술 습득' }
    ],
    details: [
      '🎯 <strong>교육 대상 :</strong> ICT 관련 업계 재직자 및 경력자',
      '💻 <strong>주요 기술 :</strong> Kubernetes, OpenStack, 생성형 AI, Ansible, Terraform, Private/Multi Cloud, CI/CD 등',
      '📌 <strong>추진 배경 :</strong> 제3차 클라우드컴퓨팅 기본계획 기반, 클라우드 대전환을 통한 디지털 선도국가 도약'
    ]
  },
  recruit: {
    target: '미취업자',
    title: '채용연계형 SW전문인재양성 사업',
    intro: '단순 이론을 넘어, 현업에서 즉시 필요로 하는 클라우드, 빅데이터, 인공지능 기술 능력을 완벽하게 보유한 기업 맞춤형 ‘클라우드 융합 SW 기술인재’를 양성합니다.',
    cards: [
      { icon: '☁️', title: '클라우드 생태계', desc: 'DevOps 및 SRE 구현을 위한 클라우드 인프라와 컨테이너 생태계, 리눅스/DB/미들웨어 실무' },
      { icon: '🧠', title: 'AI 융합 서비스', desc: '머신러닝, 딥러닝, 자연어처리(NLP)를 활용하여 실제 비즈니스에 적용 가능한 인공지능 서비스 개발' },
      { icon: '🌍', title: '디지털 트윈', desc: '현실 세계의 장비와 사물을 가상 세계에 동일하게 구현하고 연동하는 최신 SW 기술 습득' }
    ],
    details: [
      '🎯 <strong>교육 대상 :</strong> 클라우드 분야 취업을 희망하는 미취업자',
      '💻 <strong>주요 분야 :</strong> 클라우드 플랫폼 프론트엔드/백엔드 개발, AI 및 빅데이터 융합, 디지털 트윈',
      '🤝 <strong>채용 연계 :</strong> 교육 수료 후 수요 기업과의 매칭을 통한 다이렉트 채용 지원'
    ]
  },
  univ: {
    target: '미취업자',
    title: '대학·기업 협력형 SW아카데미',
    intro: '최근 기술 동향에 맞춰 클라우드 및 AI 기술이 결합된 실무 융합 프로젝트를 통해, 기업 수요를 반영한 클라우드向 AI 융합 DBMS 전문가를 양성합니다.',
    cards: [
      { icon: '🗄️', title: '핵심 DBMS 실무', desc: '티베로(Tibero) DBMS 활용 및 구축 실습, SQL 실무 중심의 데이터베이스 전문가 교육' },
      { icon: '💻', title: '운영체제 및 프로그래밍', desc: 'Ubuntu 환경에서의 시스템 프로그래밍과 데이터베이스 구현/시연을 위한 Python 심화 교육' },
      { icon: '🔥', title: '모듈형 실무 프로젝트', desc: '단순 이론이 아닌, 각 교육 단계마다 현업과 유사한 모듈형 실습 프로젝트를 직접 기획 및 수행' }
    ],
    details: [
      '🎯 <strong>교육 대상 :</strong> 기업 맞춤형 SW 융합 DX 기술을 배우고자 하는 미취업자',
      '📚 <strong>주요 커리큘럼 :</strong> 티베로 DBMS ➔ SQL 실습 ➔ Ubuntu OS ➔ AI 입문 및 Python ➔ 실무 종합 프로젝트',
      '💡 <strong>프로젝트 목표 :</strong> 단순 DB 관리자를 넘어 클라우드와 AI 생태계를 이해하는 융합형 개발자 양성'
    ]
  },
  sesac: {
    target: '미취업자',
    title: '청년 취업사관학교 새싹(SeSAC)',
    intro: '전 세계적으로 수요가 폭증하는 중·고급 클라우드 아키텍트를 양성하기 위해, AWS Korea와 협력하여 체계적이고 혁신적인 실무 교육 및 취업 컨설팅을 제공합니다.',
    cards: [
      { icon: 'aws', title: 'AWS 핵심 특화 교육', desc: 'AWS 직원 강사가 직접 진행하는 글로벌 표준 컨텐츠 교육 및 혁신 사례 체험' },
      { icon: '🤖', title: 'AI 기반 클라우드 구축', desc: 'ChatGPT, Copilot, Gemini 등 최신 생성형 AI를 활용한 IaC(Terraform) 완전 자동화 및 CI/CD 파이프라인 구현' },
      { icon: '🏅', title: '자격증 및 포트폴리오', desc: '가상화 인프라부터 퍼블릭 클라우드 설계까지, 취업에 직접적으로 활용 가능한 인증 및 포트폴리오 완성' }
    ],
    details: [
      '🎯 <strong>과정명 :</strong> AWS Korea와 함께하는 AI 활용 클라우드 아키텍트 과정 (동대문캠퍼스)',
      '📚 <strong>커리큘럼 요약 :</strong> 가상화 기술 ➔ AWS 아키텍팅 ➔ AI 활용 클라우드 네이티브 실무 ➔ 기업 탐방 ➔ 최종 프로젝트',
      '💼 <strong>취업 지원 :</strong> 자소서/포트폴리오 첨삭, 모의 면접, 코딩테스트 대비 및 오케스트로, 메가존클라우드 등 주요 기업 탐방'
    ]
  }
};

const Edu = () => {
  const { eduType } = useParams();

  // URL 파라미터가 없거나 잘못되었으면 첫 번째 탭(전문인력)으로 강제 이동
  if (!eduType || !eduData[eduType]) {
    return <Navigate to="/business/edu/expert" replace />;
  }

  const currentData = eduData[eduType];

  return (
    <SubLayout mainCategory="주요사업" subCategory="교육">
      <div className="biz-container">
        
        {/* 🚀 1. 상단 탭 (4개 사업명으로 분리) */}
        <div className="biz-tab-menu">
          <Link to="/business/edu/expert" className={`biz-tab-item ${eduType === 'expert' ? 'active' : ''}`}>전문인력</Link>
          <Link to="/business/edu/recruit" className={`biz-tab-item ${eduType === 'recruit' ? 'active' : ''}`}>채용연계형</Link>
          <Link to="/business/edu/univ" className={`biz-tab-item ${eduType === 'univ' ? 'active' : ''}`}>대학·기업협력형</Link>
          <Link to="/business/edu/sesac" className={`biz-tab-item ${eduType === 'sesac' ? 'active' : ''}`}>새싹(SeSAC)</Link>
        </div>

        {/* 2. 타이틀 및 요약 박스 */}
        <div className="biz-intro-box">
          <span style={{ 
            display: 'inline-block', 
            backgroundColor: currentData.target === '재직자' ? '#f3e8ff' : '#e0f2fe', 
            color: currentData.target === '재직자' ? '#9333ea' : '#0284c7', 
            fontSize: '13px', 
            fontWeight: '800', 
            padding: '4px 12px', 
            borderRadius: '50px', 
            marginBottom: '12px' 
          }}>
            {currentData.target} 과정
          </span>
          <h4 style={{ marginBottom: '15px' }}>{currentData.title}</h4>
          <p style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>{currentData.intro}</p>
        </div>

        {/* 3. 핵심 과정 및 특징 (카드 UI) */}
        <div className="biz-section">
          <h3 className="biz-section-title">핵심 교육 역량</h3>
          <div className="biz-card-grid">
            {currentData.cards.map((card, idx) => (
              <div className="biz-card" key={idx}>
                {/* 🚀 AWS 아이콘 텍스트 처리 예외 */}
                <div className="biz-card-icon" style={card.icon === 'aws' ? { fontSize: '24px', fontWeight: '800', color: '#FF9900' } : {}}>
                  {card.icon === 'aws' ? 'AWS' : card.icon}
                </div>
                <h5>{card.title}</h5>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. 세부 정보 (리스트 박스) */}
        <div className="biz-section">
          <h3 className="biz-section-title">주요 교육 내용</h3>
          <div className="biz-intro-box" style={{ backgroundColor: '#ffffff', textAlign: 'left', border: '1px solid #e2e8f0' }}>
            <ul style={{ lineHeight: '2.4', color: '#334155', fontSize: '15px', margin: 0, padding: '10px 10px 10px 20px', listStyleType: 'none' }}>
              {currentData.details.map((detail, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: detail }}></li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Edu;