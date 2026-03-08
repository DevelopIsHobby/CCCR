// src/pages/business/Edu.jsx
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Business.css';

const eduData = {
  incumbent: {
    title: '재직자 교육',
    subtitle: 'SW·클라우드 산업 종사자의 직무 역량 강화 및 기술 고도화',
    intro: '빠르게 변화하는 IT 환경 속에서, 현업 재직자들이 최신 클라우드 기술 트렌드를 습득하고 실무 역량을 높일 수 있도록 맞춤형 심화 교육을 제공합니다.',
    cards: [
      { icon: '🚀', title: '클라우드 네이티브 전환', desc: 'MSA 아키텍처, 쿠버네티스(K8s) 등 기존 시스템을 클라우드 환경으로 전환하기 위한 실무 교육' },
      { icon: '🛡️', title: '클라우드 보안 및 운영', desc: '제로 트러스트 아키텍처, 데브섹옵스(DevSecOps) 등 안전한 클라우드 운영을 위한 전문가 과정' },
      { icon: '🏢', title: '기업 맞춤형 방문 교육', desc: '회원사 및 수요 기업의 요구사항을 반영하여 전문가가 직접 찾아가는 맞춤형 현장 교육 지원' }
    ],
    plans: [
      '✅ <strong>교육 대상:</strong> 회원사 및 SW/클라우드 관련 기업 소속 재직자',
      '✅ <strong>교육 방식:</strong> 온·오프라인 병행, 실습 중심의 핸즈온(Hands-on) 훈련',
      '✅ <strong>지원 혜택:</strong> 고용보험 환급 과정 운영 및 협회 회원사 교육비 할인'
    ]
  },
  jobseeker: {
    title: '미취업자 교육',
    subtitle: '기업이 원하는 즉시 투입 가능한 실무형 핵심 인재 양성',
    intro: 'K-디지털 트레이닝(KDT) 및 국가기간전략산업직종훈련을 통해 청년 구직자를 SW·클라우드 산업의 핵심 인재로 성장시키고, 우수 회원사와의 채용 연계를 지원합니다.',
    cards: [
      { icon: '💻', title: '클라우드 인프라 부트캠프', desc: '비전공자도 6개월 만에 클라우드 엔지니어로 거듭날 수 있는 집중 합숙형 부트캠프' },
      { icon: '🧠', title: 'AI·빅데이터 활용 훈련', desc: '퍼블릭 클라우드 환경에서 AI 모델을 개발하고 데이터를 분석하는 융합형 인재 양성' },
      { icon: '🤝', title: '기업 연계 프로젝트', desc : '실제 기업에서 요구하는 기술 스택을 바탕으로 한 현업 멘토링 및 팀 프로젝트 수행' }
    ],
    plans: [
      '✅ <strong>교육 대상:</strong> 국민내일배움카드 발급이 가능한 미취업자 (졸업예정자 포함)',
      '✅ <strong>교육 혜택:</strong> 교육비 전액 무료, 매월 훈련 장려금 지급, 포트폴리오 제작 지원',
      '✅ <strong>채용 연계:</strong> 수료생 대상 협회 회원사 우선 추천 및 채용 박람회(Job Fair) 개최'
    ]
  }
};

const Edu = () => {
  const { eduType } = useParams();

  if (!eduType || !eduData[eduType]) {
    return <Navigate to="/business/edu/incumbent" replace />;
  }

  const currentData = eduData[eduType];

  return (
    <SubLayout mainCategory="주요사업" subCategory="교육">
      <div className="biz-container">
        
        {/* 상단 탭 (Tab) 메뉴 (2개가 1/2 크기로 꽉 찹니다) */}
        <div className="biz-tab-menu">
          <Link to="/business/edu/incumbent" className={`biz-tab-item ${eduType === 'incumbent' ? 'active' : ''}`}>재직자 교육</Link>
          <Link to="/business/edu/jobseeker" className={`biz-tab-item ${eduType === 'jobseeker' ? 'active' : ''}`}>미취업자 교육</Link>
        </div>

        <div className="biz-intro-box">
          <h4>{currentData.title} : {currentData.subtitle}</h4>
          <p>{currentData.intro}</p>
        </div>

        <div className="biz-section">
          <h3 className="biz-section-title">주요 내용</h3>
          <div className="biz-card-grid">
            {currentData.cards.map((card, idx) => (
              <div className="biz-card" key={idx}>
                <div className="biz-card-icon">{card.icon}</div>
                <h5>{card.title}</h5>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="biz-section">
          <h3 className="biz-section-title">운영 방향</h3>
          <div className="biz-intro-box" style={{ backgroundColor: '#fff', textAlign: 'left' }}>
            <ul style={{ lineHeight: '2', color: '#444' }}>
              {currentData.plans.map((plan, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: plan }}></li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Edu;