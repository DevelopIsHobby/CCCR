// src/pages/business/Rnd.jsx
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Business.css';

const rndData = {
  medical: {
    title: '유연의료',
    subtitle: '클라우드 기반 맞춤형 원격 진료 및 의료 데이터 시스템 연구',
    intro: 'CCCR은 흩어져 있는 의료 데이터를 안전하게 통합하고, 언제 어디서나 유연하게 접근할 수 있는 클라우드 네이티브 기반의 차세대 의료 정보 아키텍처를 연구합니다.',
    cards: [
      { icon: '🏥', title: '의료 데이터 통합 풀링', desc: '분산된 병원/환자 데이터를 표준화하여 안전하게 통합하는 클라우드 데이터 레이크 구축 연구' },
      { icon: '🩺', title: '초저지연 원격 진료', desc: '의료 소외 지역을 위한 5G/MEC 기반의 끊김 없는 고화질 원격 진료 인프라 기술 개발' },
      { icon: '🔒', title: '의료보안 규제 준수', desc: '민감한 개인정보 보호를 위한 HIPAA 등 국내외 의료 클라우드 보안 가이드라인 및 암호화 연구' }
    ],
    plans: [
      '✅ <strong>산학연 연계:</strong> 주요 대형 병원 및 디지털 헬스케어 스타트업과의 공동 R&D 수행',
      '✅ <strong>표준화 추진:</strong> 유연의료 클라우드 상호운용성 확보를 위한 국내 표준 규격 제안'
    ]
  },
  thirdparty: {
    title: '써드파티',
    subtitle: '안전하고 확장 가능한 서드파티 클라우드 생태계 구축',
    intro: '다양한 외부 솔루션(서드파티)이 메인 클라우드 플랫폼과 충돌 없이 안전하게 연동될 수 있도록, 개방형 API 및 하이브리드 클라우드 연동 기술을 연구합니다.',
    cards: [
      { icon: '🔗', title: '개방형 API 게이트웨이', desc: '서드파티 서비스의 원활한 연동을 위한 대규모 트래픽 분산 및 통합 API 관리 기술' },
      { icon: '🧩', title: 'SaaS 호환성 검증', desc: '다양한 서드파티 SaaS 솔루션의 클라우드 네이티브 호환성 자동 검증 프레임워크 연구' },
      { icon: '🛡️', title: '제로 트러스트 연동', desc: '외부 솔루션 접근 시 발생할 수 있는 보안 위협을 원천 차단하는 제로 트러스트 보안 모델 적용' }
    ],
    plans: [
      '✅ <strong>생태계 확장:</strong> 국내 우수 중소/벤처기업의 서드파티 솔루션 발굴 및 클라우드 온보딩 지원',
      '✅ <strong>오픈소스 기여:</strong> 서드파티 연동을 위한 오픈소스 프로젝트 주도 및 기술 공유'
    ]
  },
  autonomous: {
    title: '자율행동체',
    subtitle: '로봇, 드론 등 자율행동체를 위한 초연결 클라우드 제어 기술',
    intro: '수많은 무인 자율행동체(로봇, 드론, 자율주행차 등)가 클라우드와 실시간으로 통신하며 군집 주행 및 미션을 수행할 수 있는 초저지연 클라우드 인프라를 연구합니다.',
    cards: [
      { icon: '🚁', title: '군집 제어 클라우드', desc: '수천 대의 드론 및 로봇을 클라우드 상에서 동시에 모니터링하고 제어하는 스케일 아웃 아키텍처' },
      { icon: '⚡', title: '초저지연 통신 최적화', desc: '자율행동체의 돌발 상황 대응을 위한 5G 코어 및 클라우드 네트워크 슬라이싱 기술 연구' },
      { icon: '📍', title: '디지털 트윈 연계', desc: '클라우드 상에 현실과 동일한 가상 환경을 구축하여 자율행동체의 경로를 시뮬레이션 및 최적화' }
    ],
    plans: [
      '✅ <strong>실증 사업:</strong> 스마트 시티 및 스마트 항만 등 실환경 기반 자율행동체 클라우드 실증',
      '✅ <strong>안전 기준 마련:</strong> 자율행동체의 통신 두절 시 클라우드 페일오버(Fail-over) 안전 기준 연구'
    ]
  },
  pooling: {
    title: '자원풀링',
    subtitle: 'AI/빅데이터 시대를 위한 동적 클라우드 자원 할당 최적화',
    intro: '폭발적으로 증가하는 컴퓨팅 수요에 대응하기 위해, 유휴 자원을 하나로 모으고(Pooling) 필요한 곳에 실시간으로 재분배하는 고효율 자원 관리 기술을 연구합니다.',
    cards: [
      { icon: '🧠', title: 'GPU/NPU 동적 할당', desc: 'AI 모델 학습에 필요한 고비용 가속기(GPU/NPU) 자원을 워크로드에 따라 동적으로 분할 및 할당' },
      { icon: '♻️', title: '유휴 자원 회수 최적화', desc: '사용량이 적은 컨테이너의 자원을 실시간으로 회수하여 고부하 서비스로 재배치하는 스케줄링 기술' },
      { icon: '🌍', title: '멀티 클라우드 자원 연동', desc: '이종 클라우드(AWS, Azure, 네이버 등) 간의 자원을 하나의 풀처럼 사용하는 통합 관리 기술' }
    ],
    plans: [
      '✅ <strong>비용 절감 실증:</strong> 회원사를 대상으로 자원 풀링 기술을 적용하여 클라우드 운영 비용 절감 효과 분석',
      '✅ <strong>AI 기반 스케줄러:</strong> 머신러닝을 활용한 수요 예측 기반의 선제적 자원 할당 알고리즘 개발'
    ]
  },
  edgeai: {
    title: '엣지 AI',
    subtitle: '데이터 발생지에서 즉시 반응하는 초경량 엣지 컴퓨팅',
    intro: '중앙 클라우드로 모든 데이터를 보내지 않고, 사용자와 가까운 엣지(Edge) 장비에서 AI 모델을 경량화하여 실시간으로 추론하는 하이브리드 AI 기술을 연구합니다.',
    cards: [
      { icon: '📲', title: '온디바이스 AI 경량화', desc: '제한된 성능의 엣지 기기에서도 동작 가능한 양자화(Quantization) 및 가지치기(Pruning) 기술 연구' },
      { icon: '🔄', title: '연합 학습 (Federated Learning)', desc: '원본 데이터를 클라우드로 전송하지 않고 각 엣지에서 학습한 모델 가중치만 공유하는 보안 AI 기술' },
      { icon: '⏱️', title: '실시간 영상 분석', desc: '스마트 팩토리 및 자율주행의 즉각적인 위험 감지를 위한 엣지 기반 초저지연 비전 AI 파이프라인 구축' }
    ],
    plans: [
      '✅ <strong>핵심 기술 내재화:</strong> 국내 환경에 맞는 엣지 특화 AI 추론 프레임워크 개발',
      '✅ <strong>B2B 적용:</strong> 제조, 스마트팜 등 데이터 지연에 민감한 산업군 대상 엣지 AI 도입 가이드 제공'
    ]
  },
  crisis: {
    title: '위기대응',
    subtitle: '국가적 재난 및 트래픽 폭주에 대비한 무중단 클라우드',
    intro: '대규모 자연재해, 해킹, 혹은 예기치 못한 트래픽 폭주 상황에서도 클라우드 서비스가 중단 없이 유지되고 신속하게 복구될 수 있는 생존 기술을 연구합니다.',
    cards: [
      { icon: '🔥', title: '멀티 리전 재해복구(DR)', desc: '특정 데이터센터 전체가 마비되어도 다른 지역(Region)에서 즉시 서비스를 재개하는 자동 페일오버 연구' },
      { icon: '📈', title: '초대규모 오토스케일링', desc: '재난 문자, 예방접종 예약 등 갑작스러운 트래픽 폭주 시 수초 내에 인프라를 확장하는 기술' },
      { icon: '🦠', title: '사이버 위협 자동 격리', desc: '클라우드 인프라 내 맬웨어 확산을 감지하고, 감염된 노드를 실시간으로 자동 격리하는 AI 보안 기술' }
    ],
    plans: [
      '✅ <strong>재난 훈련:</strong> 매년 정기적인 클라우드 셧다운 및 복구 모의 훈련(Chaos Engineering) 수행',
      '✅ <strong>공공 서비스 안정화:</strong> 대국민 공공 클라우드 서비스의 위기 대응 아키텍처 표준안 마련'
    ]
  }
};

const Rnd = () => {
  const { projectId } = useParams();

  if (!projectId || !rndData[projectId]) {
    return <Navigate to="/business/rnd/medical" replace />;
  }

  const currentData = rndData[projectId];

  return (
    <SubLayout mainCategory="주요사업" subCategory="연구개발">
      <div className="biz-container">
        
        {/* 🚀 1. 상단 탭 (Tab) 메뉴 - 알약 형태 */}
        <div className="biz-tab-menu">
          <Link to="/business/rnd/medical" className={`biz-tab-item ${projectId === 'medical' ? 'active' : ''}`}>유연의료</Link>
          <Link to="/business/rnd/thirdparty" className={`biz-tab-item ${projectId === 'thirdparty' ? 'active' : ''}`}>써드파티</Link>
          <Link to="/business/rnd/autonomous" className={`biz-tab-item ${projectId === 'autonomous' ? 'active' : ''}`}>자율행동체</Link>
          <Link to="/business/rnd/pooling" className={`biz-tab-item ${projectId === 'pooling' ? 'active' : ''}`}>자원풀링</Link>
          <Link to="/business/rnd/edgeai" className={`biz-tab-item ${projectId === 'edgeai' ? 'active' : ''}`}>엣지 AI</Link>
          <Link to="/business/rnd/crisis" className={`biz-tab-item ${projectId === 'crisis' ? 'active' : ''}`}>위기대응</Link>
        </div>

        {/* 2. 소개 요약 박스 */}
        <div className="biz-intro-box">
          <h4>{currentData.title} : {currentData.subtitle}</h4>
          <p>{currentData.intro}</p>
        </div>

        {/* 3. 상세 내용 섹션 (3D 플로팅 카드) */}
        <div className="biz-section">
          <h3 className="biz-section-title">주요 연구 분야</h3>
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

        {/* 4. 추진 체계 섹션 (리스트 박스) */}
        <div className="biz-section">
          {/* 🚀 plan-title 클래스 추가하여 영문 Kicker 변경 */}
          <h3 className="biz-section-title plan-title">추진 방향</h3>
          
          {/* 🚀 지저분한 style={{}} 인라인 코드를 지우고 CSS 클래스로 연결! */}
          <div className="biz-plan-box">
            <ul className="biz-plan-list">
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

export default Rnd;