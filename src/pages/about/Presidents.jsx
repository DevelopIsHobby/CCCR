// src/pages/about/Presidents.jsx
import React, { useEffect } from 'react';
import SubLayout from '../../layouts/SubLayout';
import './About.css';

const Presidents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const presidentsData = [
    {
      generation: '제 5대 (현재)',
      name: '이 동 기',
      title: 'SK텔레콤 본부장',
      period: '2023. 03 ~ 현재',
      image: 'https://placehold.co/300x400/0f172a/ffffff?text=5th+CEO'
    },
    {
      generation: '제 4대',
      name: '홍 승 균',
      title: 'SK텔레콤 그룹장',
      period: '2019. 03 ~ 2023. 03',
      image: 'https://placehold.co/300x400/e2e8f0/64748b?text=4th+CEO'
    },
    {
      generation: '제 3대',
      name: 'O O O',
      title: '소속 및 직함',
      period: '201X. XX ~ 2019. 03',
      image: 'https://placehold.co/300x400/e2e8f0/64748b?text=3rd+CEO'
    },
    {
      generation: '제 2대',
      name: '임 종 태',
      title: 'SK텔레콤 기술원 원장',
      period: '2010. 05 ~ 201X. XX',
      image: 'https://placehold.co/300x400/e2e8f0/64748b?text=2nd+CEO'
    },
    {
      generation: '초대 (1대)',
      name: '한 재 선',
      title: '넥스알 대표이사',
      period: '2008. 12 ~ 2010. 05',
      image: 'https://placehold.co/300x400/e2e8f0/64748b?text=1st+CEO'
    }
  ];

  return (
    <SubLayout mainCategory="조합안내" subCategory="역대 조합장">
      <div className="premium-history-wrapper">
        
        {/* 🚀 완전히 독립된 '명예의 전당' 전용 프리미엄 다크 배너 */}
        <section className="hall-of-fame-hero">
          <div className="hero-content">
            <span className="hero-kicker">HALL OF FAME</span>
            <h3 className="hero-title">역대 이사장</h3>
            <p className="hero-desc">
              대한민국 클라우드 산업의 기반을 다지고<br className="hide-on-mobile"/>
              CCCR의 발전을 이끌어주신 역대 이사장님들을 소개합니다.
            </p>
          </div>
        </section>

        {/* 명예의 전당 갤러리 그리드 */}
        <div className="presidents-gallery">
          {presidentsData.map((person, index) => (
            <div key={index} className={`president-card ${index === 0 ? 'current-president' : ''}`}>
              
              <div className="president-photo-wrap">
                <img src={person.image} alt={`${person.generation} ${person.name}`} />
                {index === 0 && <span className="current-badge">CURRENT</span>}
              </div>
              
              <div className="president-info">
                <span className="p-generation">{person.generation}</span>
                <h4 className="p-name">{person.name}</h4>
                <p className="p-title">{person.title}</p>
                <div className="p-period">
                  <span className="period-label">임기</span>
                  {person.period}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </SubLayout>
  );
};

export default Presidents;