import React from 'react';
import './EduSection.css';

const EduSection = () => {
  // 나중에 Spring Boot API에서 가져올 임시 교육 데이터
  const eduList = [
    { 
      id: 1, 
      status: '모집중', 
      title: '2026년 CCCR 클라우드 네이티브 전문가 양성 과정', 
      date: '2026.03.15 ~ 2026.04.30', 
      target: '재직자 및 구직자',
      isRecruiting: true 
    },
    { 
      id: 2, 
      status: '모집중', 
      title: '소프트웨어 품질 관리(QA) 실무자 교육', 
      date: '2026.04.01 ~ 2026.04.15', 
      target: 'SW 관련 기업 재직자',
      isRecruiting: true 
    },
    { 
      id: 3, 
      status: '마감임박', 
      title: 'AI 기반 데이터 분석 역량 강화 캠프', 
      date: '2026.03.10 ~ 2026.03.31', 
      target: '대학생 및 취업준비생',
      isRecruiting: true 
    },
    { 
      id: 4, 
      status: '모집마감', 
      title: 'CCCR 인증 심사원 양성 기본 과정', 
      date: '2026.02.01 ~ 2026.02.28', 
      target: '인증 심사원 희망자',
      isRecruiting: false 
    }
  ];

  return (
    <div className="edu-section-wrapper">
      <div className="edu-grid-full">
        {/* 섹션 타이틀 영역 */}
        <div className="edu-header">
          <div className="edu-title-box">
            <h2>교육 프로그램</h2>
            <p>실무 중심의 맞춤형 인재 양성 과정을 만나보세요.</p>
          </div>
          <a href="#more-edu" className="edu-more-btn">전체보기 +</a>
        </div>

        {/* 카드 리스트 영역 */}
        <div className="edu-card-list">
          {eduList.map((edu) => (
            <div className="edu-card" key={edu.id}>
              {/* 모집 상태 뱃지 */}
              <div className={`edu-badge ${edu.isRecruiting ? 'active' : 'closed'}`}>
                {edu.status}
              </div>
              
              {/* 교육 정보 */}
              <h3 className="edu-card-title">{edu.title}</h3>
              <ul className="edu-card-info">
                <li><strong>교육기간</strong> {edu.date}</li>
                <li><strong>교육대상</strong> {edu.target}</li>
              </ul>
              
              {/* 신청 버튼 */}
              <button 
                className={`edu-apply-btn ${!edu.isRecruiting ? 'disabled' : ''}`}
                disabled={!edu.isRecruiting}
              >
                {edu.isRecruiting ? '수강신청' : '마감되었습니다'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EduSection;