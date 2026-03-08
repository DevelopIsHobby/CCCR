// src/pages/academy/Apply.jsx
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Academy.css'; // 🚀 오직 Academy.css만 사용!

const Apply = () => {
  const { type } = useParams();

  if (!type || (type !== 'incumbent' && type !== 'jobseeker')) {
    return <Navigate to="/academy/apply/incumbent" replace />;
  }

  const applyList = [
    { id: 4, category: 'incumbent', status: 'ing', title: '[재직자] 쿠버네티스(K8s) 기반 컨테이너 오케스트레이션 심화', period: '2026.04.10 ~ 04.12', time: '18:00~21:00' },
    { id: 3, category: 'jobseeker', status: 'ing', title: '[KDT] 2026 클라우드 아키텍트 양성 부트캠프 (6개월)', period: '2026.05.01 ~ 10.31', time: '09:00~18:00' },
    { id: 2, category: 'incumbent', status: 'ready', title: '[재직자] AWS 공인 솔루션스 아키텍트(SAA) 자격 취득 과정', period: '2026.06.05 ~ 06.07', time: '10:00~17:00' },
    { id: 1, category: 'jobseeker', status: 'end', title: '[KDT] 빅데이터 플랫폼 구축 및 분석 1기', period: '2026.01.10 ~ 06.30', time: '09:00~18:00' },
  ];

  const filteredList = applyList.filter(item => item.category === type);

  const getStatusInfo = (status) => {
    switch (status) {
      case 'ing': return { text: '모집중', className: 'ing' };
      case 'ready': return { text: '예정', className: 'ready' };
      case 'end': return { text: '마감', className: 'end' };
      default: return { text: '', className: '' };
    }
  };

  return (
    <SubLayout mainCategory="인재양성" subCategory="교육신청">
      <div className="academy-container">
        
    
        <div className="academy-content">
          {/* 상단 탭 메뉴 */}
          <div className="academy-tab-menu">
            <Link to="/academy/apply/incumbent" className={`academy-tab-item ${type === 'incumbent' ? 'active' : ''}`}>재직자 교육</Link>
            <Link to="/academy/apply/jobseeker" className={`academy-tab-item ${type === 'jobseeker' ? 'active' : ''}`}>미취업자 교육</Link>
          </div>

          <div className="academy-table-wrap">
            <table className="academy-table">
              <colgroup>
                <col style={{ width: '10%' }} />  {/* 상태 */}
                <col style={{ width: 'auto' }} /> {/* 교육명 */}
                <col style={{ width: '22%' }} />  {/* 교육기간 */}
                <col style={{ width: '15%' }} />  {/* 교육시간 */}
                <col style={{ width: '12%' }} />  {/* 신청버튼 */}
              </colgroup>
              <thead>
                <tr>
                  <th>상태</th>
                  <th>교육명</th>
                  <th>교육기간</th>
                  <th>교육시간</th>
                  <th>수강신청</th>
                </tr>
              </thead>
              <tbody>
                {filteredList.length > 0 ? (
                  filteredList.map((item) => {
                    const statusInfo = getStatusInfo(item.status);
                    return (
                      <tr key={item.id}>
                        <td><span className={`academy-badge ${statusInfo.className}`}>{statusInfo.text}</span></td>
                        <td className="title-col" style={{ fontWeight: '600' }}>{item.title}</td>
                        <td>{item.period}</td>
                        <td>{item.time}</td>
                        <td>
                          {item.status === 'ing' ? (
                            <Link to="#none" className="academy-btn" onClick={() => alert('신청 페이지로 이동합니다.')}>신청하기</Link>
                          ) : (
                            <button className="academy-btn" disabled>{item.status === 'ready' ? '오픈예정' : '신청마감'}</button>
                          )}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="5" style={{ padding: '50px 0', textAlign: 'center', color: '#888' }}>
                      해당 카테고리에 등록된 교육 과정이 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </SubLayout>
  );
};

export default Apply;