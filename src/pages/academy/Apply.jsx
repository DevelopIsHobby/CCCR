// src/pages/academy/Apply.jsx
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Academy.css';

const Apply = () => {
  const { type } = useParams();

  if (!type || (type !== 'incumbent' && type !== 'jobseeker')) {
    return <Navigate to="/academy/apply/incumbent" replace />;
  }

  // 🚀 데이터에 thumbnail과 location 추가!
  const applyList = [
    { 
      id: 5, category: 'incumbent', program: '전문인력 양성', status: 'ing', 
      title: '쿠버네티스(K8s) 기반 컨테이너 오케스트레이션 심화', 
      location: '오프라인 (서울 구로디지털단지)', // 📍 추가
      thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=400&auto=format&fit=crop', // 🖼️ 추가
      eduPeriod: '2026.04.10 ~ 04.12', regPeriod: '2026.03.01 ~ 03.31', time: '18:00~21:00' 
    },
    { 
      id: 4, category: 'incumbent', program: '전문인력 양성', status: 'ready', 
      title: 'AWS 공인 솔루션스 아키텍트(SAA) 자격 취득 과정', 
      location: '실시간 온라인 (Zoom)', 
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop',
      eduPeriod: '2026.06.05 ~ 06.07', regPeriod: '2026.05.01 ~ 05.30', time: '10:00~17:00' 
    },
    { 
      id: 3, category: 'jobseeker', program: '채용연계형', status: 'ing', 
      title: 'DevOps & SRE 엔지니어 부트캠프 8기', 
      location: '오프라인 (서울 서초구)', 
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop',
      eduPeriod: '2026.05.01 ~ 10.31', regPeriod: '2026.03.15 ~ 04.20', time: '09:00~18:00' 
    },
    { 
      id: 2, category: 'jobseeker', program: 'TABA', status: 'ing', 
      title: '빅데이터 및 AI SW융합개발자 양성 과정', 
      location: '오프라인 (단국대학교 죽전캠퍼스)', 
      thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop',
      eduPeriod: '2026.07.01 ~ 12.31', regPeriod: '2026.05.01 ~ 06.15', time: '09:00~18:00' 
    },
    { 
      id: 1, category: 'jobseeker', program: 'SeSAC', status: 'end', 
      title: '클라우드 기반 인공지능(AI) 핵심 기술 구현', 
      location: '오프라인 (청년취업사관학교)', 
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop',
      eduPeriod: '2026.01.10 ~ 06.30', regPeriod: '2025.12.01 ~ 12.20', time: '09:00~18:00' 
    },
  ];

  const filteredList = applyList.filter(item => item.category === type);

  const getStatusInfo = (status) => {
    switch (status) {
      case 'ing': return { text: '모집중', className: 'ing' };
      case 'ready': return { text: '접수예정', className: 'ready' };
      case 'end': return { text: '마감', className: 'end' };
      default: return { text: '', className: '' };
    }
  };

  return (
    <SubLayout mainCategory="인재양성" subCategory="교육신청">
      <div className="academy-container">
        <div className="academy-content">
          
          {/* 상단 탭 메뉴 */}
          <div className="academy-tab-menu" style={{ marginBottom: '30px' }}>
            <Link to="/academy/apply/incumbent" className={`academy-tab-item ${type === 'incumbent' ? 'active' : ''}`}>재직자 교육</Link>
            <Link to="/academy/apply/jobseeker" className={`academy-tab-item ${type === 'jobseeker' ? 'active' : ''}`}>미취업자 교육</Link>
          </div>

          {/* 타겟별 맞춤형 사업 안내 박스 (기존과 동일하게 유지) */}
          {type === 'incumbent' ? (
            <div className="academy-form-section" style={{ padding: '30px', marginBottom: '40px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                <span className="academy-badge" style={{ backgroundColor: '#e0f2fe', color: '#0284c7' }}>과기부 지정</span>
                <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: 0 }}>클라우드컴퓨팅 전문인력 양성기관 지원사업</h4>
              </div>
              <p style={{ margin: 0, color: '#475569', fontSize: '15px', lineHeight: '1.7' }}>
                과학기술정보통신부 지정 전문 교육기관으로서 중소·대기업 재직자의 직무 역량 강화를 위한 최신 클라우드 기술 교육을 전액 무료로 제공합니다.
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
              <div style={{ padding: '25px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                <span className="academy-badge" style={{ backgroundColor: '#e0f2fe', color: '#0284c7', marginBottom: '10px' }}>채용연계형</span>
                <h5 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '0 0 10px 0' }}>SW전문인재양성</h5>
                <p style={{ margin: 0, color: '#64748b', fontSize: '14px', lineHeight: '1.6' }}>기업 컨소시엄 기반의 특화 실무 교육 진행 후, 수료 시 멤버십 기업으로 즉시 채용을 연계합니다.</p>
              </div>
              <div style={{ padding: '25px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                <span className="academy-badge" style={{ backgroundColor: '#ecfdf5', color: '#059669', marginBottom: '10px' }}>산학협력형</span>
                <h5 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '0 0 10px 0' }}>TABA 아카데미</h5>
                <p style={{ margin: 0, color: '#64748b', fontSize: '14px', lineHeight: '1.6' }}>단국대-오케스트로 연계를 통해 재학생 학점 인정 및 현직자 밀착 멘토링을 제공합니다.</p>
              </div>
              <div style={{ padding: '25px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                <span className="academy-badge" style={{ backgroundColor: '#f3e8ff', color: '#7e22ce', marginBottom: '10px' }}>서울시 지원</span>
                <h5 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '0 0 10px 0' }}>청년취업사관학교 SeSAC</h5>
                <p style={{ margin: 0, color: '#64748b', fontSize: '14px', lineHeight: '1.6' }}>개발자를 꿈꾸는 청년들의 현업 데뷔를 돕기 위한 서울시 특화 실무 교육 프로그램입니다.</p>
              </div>
            </div>
          )}

          {/* 🚀 <table> 대신 모던한 Rich List UI 적용 */}
          <div className="academy-rich-list-wrap">
            {filteredList.length > 0 ? (
              filteredList.map((item) => {
                const statusInfo = getStatusInfo(item.status);
                return (
                  <div className="rich-list-item" key={item.id}>
                    {/* 썸네일 영역 */}
                    <div className="item-thumb">
                      <img src={item.thumbnail} alt={item.title} />
                      <div className={`thumb-badge ${statusInfo.className}`}>{statusInfo.text}</div>
                    </div>

                    {/* 중앙 정보 영역 */}
                    <div className="item-body">
                      <div className="item-program-tag">{item.program}</div>
                      <h4 className="item-title">{item.title}</h4>
                      
                      <div className="item-meta">
                        <span className="meta-info">📍 {item.location}</span>
                        <span className="meta-info">📅 교육일정: {item.eduPeriod} ({item.time})</span>
                      </div>
                    </div>

                    {/* 우측 액션 영역 */}
                    <div className="item-action">
                      <div className="action-reg-period">
                        <span style={{ fontSize: '12px', color: '#64748b', display: 'block', marginBottom: '4px' }}>신청기간</span>
                        <strong style={{ color: '#0f172a', fontSize: '14px' }}>{item.regPeriod}</strong>
                      </div>
                      
                      {item.status === 'ing' ? (
                        <Link to="#none" className="academy-btn" onClick={() => alert('신청 폼 페이지로 이동합니다.')}>
                          수강 신청하기
                        </Link>
                      ) : (
                        <button className="academy-btn" disabled>
                          {item.status === 'ready' ? '접수 오픈예정' : '접수 마감'}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={{ padding: '80px 0', textAlign: 'center', color: '#94a3b8', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
                현재 등록된 교육 과정이 없습니다.
              </div>
            )}
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Apply;