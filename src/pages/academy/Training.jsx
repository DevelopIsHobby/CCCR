// src/pages/academy/Training.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Academy.css'; // 인재양성 전용 CSS

const Training = () => {
  return (
    <SubLayout mainCategory="인재양성" subCategory="교육훈련">
      <div className="academy-container">
        
        {/* 1. 핵심 사업 소개 섹션 */}
        <div className="academy-form-section" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="academy-badge ing" style={{ marginBottom: '15px' }}>과학기술정보통신부 지정</div>
          <h2 className="academy-form-title" style={{ alignItems: 'center' }}>
            클라우드컴퓨팅 전문인력 양성기관 지원사업
          </h2>
          <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '17px', wordBreak: 'keep-all', maxWidth: '920px', margin: '0 auto' }}>
            클라우드컴퓨팅 교육훈련을 실시하는 기관 중 지정요건을 충족하는 기관을 선발하여 
            <strong>“전문인력 양성기관”</strong>으로 운영함으로써 대한민국 클라우드 산업의 
            핵심 인재 육성 및 기술 자질 향상을 선도합니다.
          </p>
        </div>

        {/* 2. 상세 정보 요약 (Academy Table 활용) */}
        <div className="academy-table-wrap">
          <table className="academy-table">
            <thead>
              <tr>
                <th style={{ width: '220px' }}>구분</th>
                <th>상세 내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="title-col">사업 및 지정 정보</td>
                <td style={{ textAlign: 'left' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2' }}>
                    <li>• <strong>지정기간 :</strong> 3년(2023~2025) + 6년(2017~2022)</li>
                    <li>• <strong>주관부처 :</strong> 과학기술정보통신부 / <strong>전담기관 :</strong> 정보통신산업진흥원</li>
                    <li>• <strong>지정기관 :</strong> 한국클라우드컴퓨팅연구조합 (CCCR)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="title-col">근거 법령</td>
                <td style={{ textAlign: 'left' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2' }}>
                    <li>• 「클라우드컴퓨팅 발전 및 이용자 보호에 관한 법률」 제14조</li>
                    <li>• 동법 시행령 제12조 (전문인력 양성기관 지정 등)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="title-col">교육 대상 선발 기준</td>
                <td style={{ textAlign: 'left' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
                    <span className="academy-badge ing">1순위: 중소기업 재직자 (50% 이상)</span>
                    <span className="academy-badge ready">2순위: 중견/대기업 재직자</span>
                  </div>
                  <span className="academy-badge end">3순위: 공공기관 및 비영리 기관 종사자 등</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3. 안내 및 외부 링크 액션 카드 */}
        <div className="academy-form-section" style={{ backgroundColor: '#f0f9ff', borderColor: '#e0f2fe', padding: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '15px' }}>🎓 수강 안내</h4>
              <p style={{ margin: 0, fontSize: '15px', color: '#475569', lineHeight: '2' }}>
                ✅ <strong>교 육 비 :</strong> 전액 무료 지원<br/>
                ✅ <strong>교육장소 :</strong> 한국클라우드컴퓨팅연구조합 (서울 구로디지털단지 소재)<br/>
                <span style={{ fontSize: '13px', color: '#64748b' }}>※ 상세 주소: 서울시 구로구 디지털로 33길 50 벽산7차 204호</span>
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ marginBottom: '20px', fontWeight: '700', color: '#1e293b' }}>최신 교육과정 확인 및 온라인 신청</p>
              <a 
                href="https://www.cccr-edu.or.kr/main/page.jsp?code=eduinfo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="academy-submit-btn"
                style={{ textDecoration: 'none', margin: '0 auto', display: 'inline-block' }}
              >
                CCCR 아카데미 바로가기 ↗
              </a>
            </div>
          </div>
        </div>

        {/* 4. 하단 문의처 연락처 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px 40px', backgroundColor: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0', marginTop: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h5 style={{ margin: '0 0 4px 0', color: '#0f172a', fontSize: '18px', fontWeight: '800' }}>교육 사업 및 접수 문의</h5>
            <p style={{ margin: 0, color: '#64748b', fontSize: '15px' }}>한국클라우드컴퓨팅연구조합 기획팀</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '20px', fontWeight: '800', color: '#0ea5e9', marginBottom: '4px' }}>📞 02-6344-7348</div>
            <div style={{ color: '#475569', fontWeight: '500', fontSize: '15px' }}>✉️ edu@cccr.or.kr</div>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Training;