// src/pages/academy/Training.jsx
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Academy.css'; // 🚀 이제 Business.css 대신 Academy.css 사용!

const trainingData = {
  incumbent: {
    title: '교육소개',
    subtitle: '재직자 교육',
    intro: 'CCCR은 4차 산업혁명을 선도할 클라우드/SW 재직자의 직무 역량 강화를 위해 최신 기술 트렌드를 반영한 심화 실무 교육을 제공합니다.',
    cards: [
      { icon: '🏢', title: '기업 맞춤형 방문 교육', desc: '회원사 및 수요 기업의 요구사항에 맞춰 현장으로 찾아가는 맞춤형 교육 제공' },
      { icon: '☁️', title: '클라우드 네이티브 전환', desc: '기존 온프레미스 인프라를 클라우드로 전환하기 위한 MSA 및 쿠버네티스 실무' },
      { icon: '🛡️', title: '보안 및 인프라 운영', desc: '제로 트러스트 아키텍처 기반의 클라우드 보안 및 데브섹옵스(DevSecOps) 전문가 양성' }
    ]
  },
  jobseeker: {
    title: '교육소개',
    subtitle: '미취업자 교육 (K-Digital Training)',
    intro: '클라우드 산업의 인력 난을 해소하고 청년 구직자의 취업 경쟁력을 높이기 위해, 기업이 직접 설계한 프로젝트 기반의 집중 부트캠프를 운영합니다.',
    cards: [
      { icon: '💻', title: '클라우드 엔지니어 부트캠프', desc: '비전공자도 6개월 만에 현업 수준의 엔지니어로 성장할 수 있는 합숙/비합숙 몰입형 훈련' },
      { icon: '🤝', title: '현업 멘토링 프로젝트', desc: '단순 이론을 넘어, 현업 재직자 멘토와 함께 실제 기업의 문제를 해결하는 팀 프로젝트 수행' },
      { icon: '🎯', title: '100% 채용 연계 지원', desc: '수료 후 CCCR 우수 회원사 우선 추천, 이력서 컨설팅 및 모의 면접(Job Fair) 지원' }
    ]
  }
};

const Training = () => {
  const { type } = useParams();

  if (!type || !trainingData[type]) {
    return <Navigate to="/academy/training/incumbent" replace />;
  }

  const currentData = trainingData[type];

  return (
    <SubLayout mainCategory="인재양성" subCategory="교육훈련">
      <div className="academy-container">
        
        {/* 상단 탭 메뉴 */}
        <div className="academy-tab-menu">
          <Link to="/academy/training/incumbent" className={`academy-tab-item ${type === 'incumbent' ? 'active' : ''}`}>재직자 교육</Link>
          <Link to="/academy/training/jobseeker" className={`academy-tab-item ${type === 'jobseeker' ? 'active' : ''}`}>미취업자 교육</Link>
        </div>

        {/* 안내 박스를 위한 간단한 인라인 스타일 (필요시 CSS로 빼셔도 됩니다) */}
        <div style={{ marginBottom: '40px', padding: '30px', backgroundColor: '#fcfcfc', border: '1px solid #eee', borderRadius: '8px' }}>
          <h4 style={{ fontSize: '20px', color: '#111', marginBottom: '10px' }}>{currentData.title} : {currentData.subtitle}</h4>
          <p style={{ color: '#555', lineHeight: '1.6' }}>{currentData.intro}</p>
        </div>

        {/* 주요 프로그램 안내 (카드 UI는 간단히 Flex로 구현) */}
        <div className="academy-content">
          <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px', borderBottom: '2px solid #222', paddingBottom: '10px' }}>주요 프로그램 안내</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {currentData.cards.map((card, idx) => (
              <div key={idx} style={{ flex: '1 1 calc(33.333% - 20px)', minWidth: '250px', padding: '25px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                <div style={{ fontSize: '30px', marginBottom: '15px' }}>{card.icon}</div>
                <h5 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px', color: '#004ecc' }}>{card.title}</h5>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Training;