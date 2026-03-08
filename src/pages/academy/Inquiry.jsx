// src/pages/academy/Inquiry.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Academy.css'; // 🚀 오직 Academy.css만 사용!

const Inquiry = () => {
  const inquiryData = [
    { category: '재직자 교육', program: '클라우드 네이티브 전환 및 인프라 심화', name: '김철수 선임', phone: '02-1234-5671', email: 'edu1@cccr.or.kr' },
    { category: '재직자 교육', program: '보안 및 공공 클라우드 가이드라인 과정', name: '이영희 책임', phone: '02-1234-5672', email: 'edu2@cccr.or.kr' },
    { category: '미취업자 교육', program: 'K-Digital Training 부트캠프 (서울)', name: '박지민 매니저', phone: '02-1234-5673', email: 'kdt_seoul@cccr.or.kr' },
    { category: '미취업자 교육', program: 'K-Digital Training 부트캠프 (판교)', name: '최동훈 매니저', phone: '02-1234-5674', email: 'kdt_pg@cccr.or.kr' },
    { category: '공통 문의', program: '수강 신청 시스템 및 결제/환급 문의', name: '행정지원팀', phone: '02-1234-5600', email: 'admin@cccr.or.kr' },
  ];

  return (
    <SubLayout mainCategory="인재양성" subCategory="교육문의">
      <div className="academy-container">
              
        <div className="academy-content">
          <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#f5f8ff', border: '1px solid #e0e9ff', borderRadius: '8px' }}>
            <h4 style={{ color: '#004ecc', marginBottom: '10px' }}>📞 CCCR 교육센터 문의 안내</h4>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>
              운영 시간 : 평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00 / 주말 및 공휴일 휴무)<br/>
              각 교육 과정별 담당자에게 연락해주시면 더욱 빠르고 정확한 안내를 받으실 수 있습니다.
            </p>
          </div>

          <div className="academy-table-wrap">
            <table className="academy-table">
              <colgroup>
                <col style={{ width: '15%' }} />
                <col style={{ width: 'auto' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '20%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>교육 프로그램(분야)</th>
                  <th>담당자</th>
                  <th>전화번호</th>
                  <th>이메일</th>
                </tr>
              </thead>
              <tbody>
                {inquiryData.map((item, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: '600', color: '#004ecc' }}>{item.category}</td>
                    <td className="title-col" style={{ fontWeight: '500' }}>{item.program}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td><a href={`mailto:${item.email}`} style={{ color: '#555', textDecoration: 'none' }}>{item.email}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Inquiry;