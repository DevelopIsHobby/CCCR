// src/pages/business/Pr.jsx
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Business.css';

const prData = {
  info: {
    title: '정보서비스',
    subtitle: '클라우드 산업 동향 및 심층 분석 리포트 제공',
    intro: '글로벌 클라우드 시장 트렌드, 최신 기술 동향, 그리고 정부 정책 정보를 신속하고 정확하게 분석하여 회원사와 산업계에 제공합니다.',
    cards: [
      { icon: '📊', title: '산업 동향 리포트 발간', desc: '국내외 클라우드 및 SW 산업의 주요 이슈와 시장 규모를 분석한 정기 리포트 배포' },
      { icon: '📚', title: '백서 및 가이드라인 배포', desc: '클라우드 도입 성공 사례, 보안 가이드라인 등 실무에 즉시 적용 가능한 기술 백서 제공' },
      { icon: '🌐', title: '글로벌 인사이트 번역', desc: '해외 유수 리서치 기관 및 테크 미디어의 핵심 클라우드 아티클 큐레이션 및 번역 제공' }
    ],
    plans: [
      '✅ <strong>제공 대상:</strong> CCCR 회원사 및 일반 국민 (일부 프리미엄 자료는 회원사 한정)',
      '✅ <strong>발간 주기:</strong> 주간 동향, 월간 심층 리포트, 연간 산업 백서 발행'
    ]
  },
  forum: {
    title: '포럼',
    subtitle: '산·학·연·관 전문가 네트워킹 및 정책 토론의 장',
    intro: '클라우드 컴퓨팅 산업의 당면 과제를 논의하고, 산업 발전을 위한 정책 및 법제도 개선 방안을 모색하는 다양한 형태의 포럼을 개최합니다.',
    cards: [
      { icon: '🎤', title: 'CCCR 리더스 포럼', desc: '클라우드 산업계 주요 CEO 및 정부 관계자가 참석하는 고위급 네트워킹 및 정책 조찬 포럼' },
      { icon: '💡', title: '기술 세미나 및 밋업', desc: '특정 기술(AI, 보안, 엣지 등)을 주제로 현업 개발자와 엔지니어들이 지식을 교류하는 밋업' },
      { icon: '⚖️', title: '법제도 개선 간담회', desc: '클라우드 확산을 저해하는 규제 발굴 및 해소를 위한 정부 부처 합동 간담회 개최' }
    ],
    plans: [
      '✅ <strong>참여 혜택:</strong> 업계 오피니언 리더와의 네트워킹, 최신 정책 방향 조기 파악',
      '✅ <strong>개최 정보:</strong> 알림마당 > 행사소식 게시판을 통해 사전등록 접수 및 안내'
    ]
  },
  newsletter: {
    title: '뉴스레터',
    subtitle: 'CCCR과 회원사의 생생한 소식을 매월 메일함으로',
    intro: '협회의 주요 활동 성과, 다가오는 행사 일정, 그리고 우수 회원사의 비즈니스 소식과 인터뷰를 담은 월간 뉴스레터를 발행합니다.',
    cards: [
      { icon: '📬', title: '협회 주요 소식 안내', desc: '진행 중인 정부 R&D 과제 현황, 교육생 모집 일정, 정책 건의 결과 등 협회 동향 공유' },
      { icon: '🌟', title: '이달의 회원사 인터뷰', desc: '우수한 솔루션을 보유한 회원사를 선정하여 심층 인터뷰를 진행하고 전 회원사에 홍보 지원' },
      { icon: '🎁', title: '회원사 프로모션 소개', desc: '회원사 간의 B2B 할인 혜택, 신제품 출시 이벤트 등 비즈니스 시너지 창출 창구 역할' }
    ],
    plans: [
      '✅ <strong>구독 대상:</strong> 홈페이지 가입 회원 및 뉴스레터 구독 신청자',
      '✅ <strong>발송 일정:</strong> 매월 마지막 주 수요일 (정기 메일링)',
      '✅ <strong>광고 제휴:</strong> 회원사에 한해 뉴스레터 내 솔루션 홍보 배너 무상 지원'
    ]
  }
};

const Pr = () => {
  const { prType } = useParams();

  if (!prType || !prData[prType]) {
    return <Navigate to="/business/pr/info" replace />;
  }

  const currentData = prData[prType];

  return (
    <SubLayout mainCategory="주요사업" subCategory="홍보">
      <div className="biz-container">
        
        {/* 상단 탭 (Tab) 메뉴 (3개가 1/3 크기로 꽉 찹니다) */}
        <div className="biz-tab-menu">
          <Link to="/business/pr/info" className={`biz-tab-item ${prType === 'info' ? 'active' : ''}`}>정보서비스</Link>
          <Link to="/business/pr/forum" className={`biz-tab-item ${prType === 'forum' ? 'active' : ''}`}>포럼</Link>
          <Link to="/business/pr/newsletter" className={`biz-tab-item ${prType === 'newsletter' ? 'active' : ''}`}>뉴스레터</Link>
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

export default Pr;