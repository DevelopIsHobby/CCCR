// src/pages/academy/Inquiry.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Academy.css'; 

const Inquiry = () => {
  // 🚀 실제 담당자 연락처 데이터로 업데이트
  const inquiryData = [
    { 
      category: '재직자 교육', 
      badge: '과기부 지정',
      program: '클라우드컴퓨팅 전문인력 양성기관 지원사업', 
      team: '기획팀', 
      phone: '02-6344-7348', 
      email: 'edu@cccr.or.kr' 
    },
    { 
      category: '미취업자 교육', 
      badge: '채용연계형',
      program: '채용연계형 SW전문인재양성 사업', 
      team: '기획팀 담당자', 
      phone: '02-6344-7345', 
      email: 'edu@cccr.or.kr' 
    },
    { 
      category: '미취업자 교육', 
      badge: '산학협력형',
      program: '대학·기업 협력형 SW아카데미 (TABA)', 
      team: '기획팀 담당자', 
      phone: '02-6344-7352', 
      email: 'mskim@cccr.or.kr' 
    },
    { 
      category: '미취업자 교육', 
      badge: '서울시 지원',
      program: '서울시 청년취업사관학교 (SeSAC)', 
      team: '기획팀 담당자', 
      phone: '02-6344-7352', 
      email: 'mskim@cccr.or.kr' 
    }
  ];

  return (
    <SubLayout mainCategory="인재양성" subCategory="교육문의">
      <div className="academy-container">
        <div className="academy-content">
          
          {/* 상단 안내 메시지 박스 (디자인 고도화) */}
          <div className="academy-form-section" style={{ marginBottom: '40px', padding: '30px', backgroundColor: '#f0f9ff', border: '1px solid #e0f2fe', borderRadius: '16px' }}>
            <h4 style={{ color: '#0ea5e9', fontSize: '20px', fontWeight: '800', marginBottom: '15px' }}>
              📞 CCCR 교육센터 문의 안내
            </h4>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
              <strong style={{ color: '#1e293b' }}>[운영 시간]</strong> 평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00 / 주말 및 공휴일 휴무)<br/>
              각 교육 사업별 전담 담당자에게 연락해 주시면 더욱 빠르고 정확한 안내를 받으실 수 있습니다.
            </p>
          </div>

          {/* 🚀 문의처 리스트 (표 대신 직관적인 카드 그리드 형태로 변경) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
            {inquiryData.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '16px', 
                  padding: '25px', 
                  boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* 상단: 사업명 */}
                <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px dashed #e2e8f0' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                    <span className="academy-badge" style={{ backgroundColor: item.category === '재직자 교육' ? '#e0f2fe' : '#ecfdf5', color: item.category === '재직자 교육' ? '#0284c7' : '#059669' }}>
                      {item.category}
                    </span>
                    <span style={{ backgroundColor: '#f1f5f9', color: '#64748b', fontSize: '13px', fontWeight: '700', padding: '6px 10px', borderRadius: '6px' }}>
                      {item.badge}
                    </span>
                  </div>
                  <h5 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                    {item.program}
                  </h5>
                </div>

                {/* 하단: 연락처 정보 */}
                <div>
                  <div style={{ fontSize: '15px', color: '#475569', fontWeight: '600', marginBottom: '15px' }}>
                    한국클라우드컴퓨팅연구조합 {item.team}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ display: 'inline-block', width: '30px', fontSize: '18px' }}>📞</span>
                      <a href={`tel:${item.phone}`} style={{ fontSize: '18px', fontWeight: '800', color: '#0ea5e9', textDecoration: 'none' }}>
                        {item.phone}
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ display: 'inline-block', width: '30px', fontSize: '18px' }}>✉️</span>
                      <a href={`mailto:${item.email}`} style={{ fontSize: '16px', fontWeight: '500', color: '#64748b', textDecoration: 'none' }}>
                        {item.email}
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* 하단 추가 안내 (FAQ 유도 등) */}
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <p style={{ color: '#94a3b8', fontSize: '14px' }}>
              * 메일로 문의하실 경우, 성함과 연락처, 문의 내용을 함께 남겨주시면 더욱 빠른 처리가 가능합니다.
            </p>
          </div>

        </div>
      </div>
    </SubLayout>
  );
};

export default Inquiry;