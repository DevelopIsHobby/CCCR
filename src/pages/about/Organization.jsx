// src/pages/about/Organization.jsx
import React, { useEffect } from 'react';
import SubLayout from '../../layouts/SubLayout';
import './About.css';

const Organization = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🚀 실제 홈페이지에 있는 부서별 연락처 데이터 적용
  const contactData = [
    { name: '사무국', phone: '02-2052-0156', email: 'admin@cccr.or.kr', desc: '조합 총괄 및 대외 협력 지원' },
    { name: '기획팀', phone: '02-2052-0155', email: 'mhshin@cccr.or.kr', desc: '사업 기획 및 신규 프로젝트 발굴' },
    { name: '연구개발팀', phone: '02-2052-0132', email: 'dwkim@cccr.or.kr', desc: '클라우드 핵심 기술 R&D 수행' },
    { name: '총무팀', phone: '02-2052-0156', email: 'admin@cccr.or.kr', desc: '인사, 예산 및 일반 행정 업무' },
    { name: '연구비관리팀', phone: '02-2052-0156', email: 'hjsong@cccr.or.kr', desc: '정부 과제 및 연구비 정산 관리' }
  ];

  return (
    <SubLayout mainCategory="조합안내" subCategory="조직도">
      <div className="premium-org-wrapper">
        
        {/* 🚀 1. 조직도 헤더 및 슬로건 (기존 홈페이지 문구 활용) */}
        <section className="org-header-section">
          <h3 className="premium-title">조직도</h3>
          <p className="premium-lead">
            <strong className="text-blue">고객과 함께하는 Consortium of World-Class Research</strong><br/>
            한국 클라우드 컴퓨팅이 세계적인 수준으로 도약할 수 있도록 최선을 다하겠습니다.
          </p>
        </section>

        {/* 🚀 2. 순수 CSS로 구현한 고급스러운 트리형 조직도 */}
        <section className="org-tree-section">
          <div className="org-tree">
            <ul>
              <li>
                <span className="node-basic">총회</span>
                <ul>
                  <li>
                    <span className="node-basic">이사회</span>
                    <ul>
                      <li>
                        <span className="node-primary">이사장</span>
                        <ul>
                          <li>
                            <span className="node-dark">사무국</span>
                            <ul>
                              <li><span className="node-team">기획팀</span></li>
                              <li><span className="node-team">연구개발팀</span></li>
                              <li><span className="node-team">총무팀</span></li>
                              <li><span className="node-team">연구비관리팀</span></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <div className="premium-divider"></div>

        {/* 🚀 3. 부서별 연락처 (모던 명함 카드 그리드) */}
        <section className="org-contact-section">
          <h4 className="contact-main-title">부서별 연락처</h4>
          
          <div className="contact-grid">
            {contactData.map((contact, index) => (
              <div key={index} className="contact-card">
                
                <div className="contact-header">
                  <h5 className="contact-name">{contact.name}</h5>
                  <span className="contact-desc">{contact.desc}</span>
                </div>
                
                <div className="contact-body">
                  <div className="info-line">
                    <span className="info-icon">📞</span>
                    <span className="info-text">{contact.phone}</span>
                  </div>
                  <div className="info-line">
                    <span className="info-icon">✉️</span>
                    <a href={`mailto:${contact.email}`} className="info-text link">
                      {contact.email}
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>
    </SubLayout>
  );
};

export default Organization;