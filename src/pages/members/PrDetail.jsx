// src/pages/members/PrDetail.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Members.css';

const PrDetail = () => {
  // 실제로는 useParams()로 id를 받아와서 백엔드나 배열에서 데이터를 찾습니다.
  // const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 진입 시 최상단으로 스크롤
  }, []);

  // 🚀 브로슈어용 가상 더미 데이터
  const productData = {
    category: '클라우드(IaaS/PaaS)',
    company: '메가존클라우드(주)',
    title: 'SpaceONE 클라우드 관리 플랫폼',
    subTitle: '멀티 클라우드 환경을 하나의 대시보드에서 완벽하게 통제하세요.',
    tags: ['#CMP', '#비용최적화', '#멀티클라우드'],
    img: 'https://placehold.co/800x500/f0f9ff/0ea5e9?text=SpaceONE+Dashboard',
    content: `SpaceONE은 흩어져 있는 멀티 클라우드 자원을 단일 대시보드에서 통합 관리할 수 있도록 지원하는 지능형 클라우드 관리 플랫폼(CMP)입니다. 
    복잡한 인프라 현황을 시각화하여 직관적으로 파악하고, AI 기반의 분석을 통해 불필요한 클라우드 비용을 최대 30%까지 절감할 수 있습니다. 
    또한, 강력한 보안 컴플라이언스 점검 기능을 통해 기업의 자산을 안전하게 보호합니다.`,
    features: [
      { icon: '📊', title: '통합 대시보드', desc: 'AWS, Azure, GCP 등 다양한 클라우드 자원을 한 화면에서 모니터링' },
      { icon: '💰', title: '비용 최적화', desc: 'AI 알고리즘이 미사용 자원을 식별하고 최적의 요금제를 자동 추천' },
      { icon: '🛡️', title: '자동 컴플라이언스', desc: 'ISMS, ISO27001 등 국내외 보안 규정 준수 여부를 실시간으로 점검' }
    ],
    contact: {
      name: '클라우드사업부 영업팀',
      tel: '02-1234-5678',
      email: 'sales@megazone.com',
      website: 'https://www.megazone.com'
    }
  };

  return (
    <SubLayout mainCategory="회원공간" subCategory="회원홍보">
      <div className="news-container">
        
        <div className="pr-detail-wrap">
          {/* 1. 상단 브로슈어 헤더 (이미지 + 타이틀) */}
          <div className="pr-detail-hero">
            <div className="pr-hero-img-box">
              <img src={productData.img} alt={productData.title} className="pr-hero-img" />
              <span className="pr-hero-category">{productData.category}</span>
            </div>
            
            <div className="pr-hero-info">
              <div className="pr-hero-company">{productData.company}</div>
              <h2 className="pr-hero-title">{productData.title}</h2>
              <p className="pr-hero-subtitle">{productData.subTitle}</p>
              
              <div className="pr-tags">
                {productData.tags.map((tag, idx) => (
                  <span key={idx} className="pr-tag">{tag}</span>
                ))}
              </div>

              {/* 액션 버튼 */}
              <div className="pr-hero-actions">
                <a href={productData.contact.website} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  공식 홈페이지 방문 ↗
                </a>
                <button className="btn-secondary">브로슈어 다운로드 ⬇</button>
              </div>
            </div>
          </div>

          {/* 2. 제품 상세 소개 텍스트 */}
          <div className="pr-detail-section">
            <h3 className="pr-section-title">서비스 개요</h3>
            <p className="pr-section-desc">{productData.content}</p>
          </div>

          {/* 3. 핵심 기능 (3열 그리드) */}
          <div className="pr-detail-section bg-gray">
            <h3 className="pr-section-title">핵심 특장점</h3>
            <div className="pr-feature-grid">
              {productData.features.map((feat, idx) => (
                <div key={idx} className="pr-feature-card">
                  <div className="pr-feature-icon">{feat.icon}</div>
                  <h4 className="pr-feature-title">{feat.title}</h4>
                  <p className="pr-feature-desc">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. 도입 문의 (담당자 연락처) */}
          <div className="pr-detail-section pr-contact-box">
            <h3 className="pr-section-title">도입 문의</h3>
            <ul className="pr-contact-list">
              <li><strong>담당부서 :</strong> {productData.contact.name}</li>
              <li><strong>전화번호 :</strong> {productData.contact.tel}</li>
              <li><strong>이메일 :</strong> <a href={`mailto:${productData.contact.email}`}>{productData.contact.email}</a></li>
            </ul>
          </div>

          {/* 목록으로 돌아가기 */}
          <div className="pr-detail-footer">
            <Link to="/members/pr" className="btn-list">목록으로 돌아가기</Link>
          </div>

        </div>

      </div>
    </SubLayout>
  );
};

export default PrDetail;