// src/pages/about/Directors.jsx
import React, { useEffect } from 'react';
import SubLayout from '../../layouts/SubLayout';
import './About.css';

const Directors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🚀 분류 없이 하나로 통합된 20명 이사진 데이터
  const directorsData = [
    { company: 'SK텔레콤', name: '이 동 기', role: '클라우드사업부 상무' },
    { company: 'KT', name: '이 우 드', role: '인프라혁신팀 팀장' },
    { company: '네이버클라우드', name: '박 엔 트', role: '기술총괄 이사' },
    { company: '카카오엔터프라이즈', name: '최 카 카', role: 'AI B2B 부문장' },
    { company: '안랩', name: '정 시 큐', role: '클라우드보안 본부장' },
    { company: '더존비즈온', name: '강 더 존', role: '플랫폼개발 총괄' },
    { company: '메가존클라우드', name: '조 메 가', role: '전략기획실 실장' },
    { company: '베스핀글로벌', name: '윤 베 스', role: '고객성공그룹 전무' },
    { company: 'LG CNS', name: '홍 엘 지', role: '클라우드전략담당' },
    { company: '삼성SDS', name: '김 삼 성', role: '클라우드서비스사업부장' },
    { company: 'NHN클라우드', name: '이 엔 에', role: '공공사업본부장' },
    { company: '가비아', name: '박 가 비', role: '클라우드사업부문장' },
    { company: '스마일서브', name: '최 스 마', role: 'IDC운영본부장' },
    { company: '이노그리드', name: '정 이 노', role: '클라우드R&D 센터장' },
    { company: '티맥스소프트', name: '강 티 맥', role: '클라우드사업본부 상무' },
    { company: '영림원소프트랩', name: '조 영 림', role: 'ERP SaaS사업부장' },
    { company: '한글과컴퓨터', name: '윤 한 컴', role: '웹오피스개발실장' },
    { company: '마이다스아이티', name: '홍 마 이', role: '플랫폼기획 파트장' },
    { company: '웹케시', name: '김 웹 케', role: 'B2B핀테크본부장' },
    { company: '지란지교시큐리티', name: '이 지 란', role: '클라우드보안솔루션팀장' }
  ];

  return (
    <SubLayout mainCategory="조합안내" subCategory="이사 소개">
      <div className="directors-premium-wrapper">
        
        {/* 🚀 상단 이사진 공동 다짐(Quote) 메시지 유지 */}
        <section className="board-quote-section">
          <div className="quote-mark">“</div>
          <h3 className="board-quote-text">
            대한민국 클라우드 생태계의 건강한 성장을 위해,<br />
            <strong>산업계의 목소리를 하나로 모으고 혁신의 방향을 제시</strong>하겠습니다.
          </h3>
          <p className="board-quote-sub">CCCR 제 5기 임원진 일동</p>
        </section>

        {/* 🚀 차별 없이 모든 이사가 한 번에 펼쳐지는 통합 그리드 */}
        <div className="directors-grid">
          {directorsData.map((director, index) => (
            <div key={index} className="director-mini-card">
              <div className="dir-initial">
                {director.company.charAt(0)}
              </div>
              <div className="dir-info">
                <span className="dir-company">{director.company}</span>
                <h4 className="dir-name">{director.name}</h4>
                <p className="dir-role">{director.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </SubLayout>
  );
};

export default Directors;