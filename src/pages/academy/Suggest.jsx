// src/pages/academy/Suggest.jsx
import React, { useState } from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Academy.css';

const Suggest = () => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('교육 제안서가 성공적으로 접수되었습니다. 담당자 검토 후 연락드리겠습니다.');
  };

  return (
    <SubLayout mainCategory="인재양성" subCategory="교육제안">
      <div className="academy-container" style={{ paddingTop: 0 }}>
        
        <div className="academy-content">
          
          {/* 1. 안내 및 양식 다운로드 영역 (디자인 고도화) */}
          <div style={{ marginBottom: '40px', padding: '30px', backgroundColor: '#f0f9ff', borderRadius: '16px', border: '1px solid #e0f2fe' }}>
            <h4 style={{ color: '#0ea5e9', marginBottom: '15px', fontSize: '20px', fontWeight: '800' }}>
              💡 신규 교육 과정 제안 안내
            </h4>
            <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '25px', fontSize: '15px' }}>
              CCCR은 산업계의 목소리에 귀 기울입니다. 기업 현장에 필요한 신규 클라우드/SW 교육 과정이 있다면 제안해 주세요.<br/>
              아래의 <strong>'교육 제안서 양식'</strong>을 다운로드하여 작성하신 후, 첨부파일로 등록해 주시기 바랍니다.
            </p>
            <a 
              href="#none" 
              style={{ 
                display: 'inline-block', padding: '12px 24px', fontSize: '15px', 
                backgroundColor: '#ffffff', border: '1px solid #0ea5e9', color: '#0ea5e9', 
                fontWeight: '700', borderRadius: '50px', textDecoration: 'none',
                boxShadow: '0 4px 6px rgba(14, 165, 233, 0.1)', transition: 'all 0.3s'
              }} 
              onClick={(e) => { e.preventDefault(); alert('제안서 양식(HWP/DOC)이 다운로드 됩니다.'); }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#0ea5e9'; e.currentTarget.style.color = '#ffffff'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#0ea5e9'; }}
            >
              📥 교육 제안서 양식 다운로드
            </a>
          </div>
          
          <form onSubmit={handleSubmit}>
            
            <div className="required-info">
              <span className="required-mark" style={{ marginLeft: 0, marginRight: '4px' }}>*</span>
              표시는 필수 입력 사항입니다.
            </div>

            {/* 2. 제안자 정보 */}
            <section className="academy-form-section">
              <h3 className="academy-form-title">제안자 정보</h3>
              <table className="academy-form-table">
                <tbody>
                  <tr>
                    <th>기업/기관명 <span className="required-mark">*</span></th>
                    <td><input type="text" className="academy-input" placeholder="기업/기관명을 입력해 주세요" required /></td>
                  </tr>
                  <tr>
                    <th>담당자 성명 <span className="required-mark">*</span></th>
                    <td><input type="text" className="academy-input" placeholder="성명을 입력해 주세요" required /></td>
                  </tr>
                  <tr>
                    <th>직급</th>
                    <td><input type="text" className="academy-input" placeholder="예: 선임, 책임, 팀장 등" /></td>
                  </tr>
                  <tr>
                    <th>연락처 <span className="required-mark">*</span></th>
                    <td><input type="tel" className="academy-input" placeholder="예: 010-1234-5678" required /></td>
                  </tr>
                  <tr>
                    <th>이메일 <span className="required-mark">*</span></th>
                    <td><input type="email" className="academy-input" placeholder="예: admin@cccr.or.kr" required /></td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* 3. 제안서 파일 첨부 */}
            <section className="academy-form-section">
              <h3 className="academy-form-title">제안서 등록</h3>
              <table className="academy-form-table">
                <tbody>
                  <tr>
                    <th>제안 교육명 <span className="required-mark">*</span></th>
                    <td><input type="text" className="academy-input" style={{ maxWidth: '100%' }} placeholder="희망하시는 교육 과정명을 간략히 입력해 주세요" required /></td>
                  </tr>
                  <tr>
                    <th>제안서 첨부 <span className="required-mark">*</span></th>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                        <input 
                          type="file" 
                          id="proposalFile" 
                          style={{ display: 'none' }} 
                          onChange={handleFileChange}
                          accept=".hwp, .doc, .docx, .pdf"
                          required
                        />
                        <label 
                          htmlFor="proposalFile" 
                          className="academy-btn" 
                          style={{ cursor: 'pointer', margin: 0, padding: '10px 20px', borderRadius: '8px' }}
                        >
                          파일 선택
                        </label>
                        <span style={{ fontSize: '14px', color: fileName ? '#0f172a' : '#94a3b8', fontWeight: fileName ? '600' : '400' }}>
                          {fileName || '선택된 파일이 없습니다. (HWP, DOC, PDF)'}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>기타 요청사항</th>
                    <td>
                      <textarea className="academy-textarea" placeholder="추가로 남기실 말씀이나 요청사항이 있다면 자유롭게 적어주세요. (선택사항)"></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* 4. 개인정보 수집 동의 (🚀 기관명 수정 완료) */}
            <section className="academy-form-section">
              <h3 className="academy-form-title" style={{ fontSize: '18px', marginBottom: '15px' }}>개인정보 수집 및 이용 동의</h3>
              <div style={{ padding: '20px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', fontSize: '13px', color: '#475569', lineHeight: '1.7', marginBottom: '15px', height: '120px', overflowY: 'auto' }}>
                <strong>한국클라우드컴퓨팅연구조합(이하 "조합")</strong>은 교육 과정 제안 접수 및 검토를 위하여 아래와 같이 개인정보를 수집 및 이용합니다.<br/><br/>
                1. 수집하는 개인정보 항목: 기업/기관명, 담당자 성명, 직급, 연락처, 이메일<br/>
                2. 개인정보의 수집 및 이용 목적: 제안 내용 검토, 결과 안내, 필요 시 추가 협의 진행<br/>
                3. 개인정보의 보유 및 이용 기간: <strong>제안 검토 완료 후 1년 이내 파기</strong>
              </div>
              <div style={{ textAlign: 'right' }}>
                <label style={{ fontSize: '15px', fontWeight: '600', cursor: 'pointer', color: '#1e293b' }}>
                  <input type="checkbox" required style={{ marginRight: '8px', accentColor: '#0ea5e9', width: '16px', height: '16px' }} />
                  개인정보 수집 및 이용에 동의합니다. <span className="required-mark">*</span>
                </label>
              </div>
            </section>

            {/* 5. 하단 버튼 */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
              <button type="submit" className="academy-submit-btn">제안서 제출하기</button>
            </div>
            
          </form>
        </div>

      </div>
    </SubLayout>
  );
};

export default Suggest;