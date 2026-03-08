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
      {/* 🚀 상단 여백을 줄이기 위해 컨테이너의 padding-top을 인라인으로 조절할 수 있습니다 (필요 시) */}
      <div className="academy-container" style={{ paddingTop: 0 }}>
        
        {/* 🚀 중복되던 <h2 className="academy-title">교육제안</h2> 는 삭제했습니다! */}
        
        <div className="academy-content">
          
          {/* 1. 안내 및 양식 다운로드 영역 */}
          <div style={{ marginBottom: '30px', padding: '30px', backgroundColor: '#f5f8ff', borderRadius: '8px', border: '1px solid #e0e9ff' }}>
            <h4 style={{ color: '#004ecc', marginBottom: '15px', fontSize: '18px' }}>💡 신규 교육 과정 제안 안내</h4>
            <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
              CCCR은 산업계의 목소리에 귀 기울입니다. 기업 현장에 필요한 신규 클라우드/SW 교육 과정이 있다면 제안해 주세요.<br/>
              아래의 <strong>'교육 제안서 양식'</strong>을 다운로드하여 작성하신 후, 첨부파일로 등록해 주시기 바랍니다.
            </p>
            <a href="#none" className="academy-btn" style={{ padding: '10px 20px', fontSize: '14px', backgroundColor: '#fff', border: '2px solid #004ecc', color: '#004ecc', fontWeight: '700' }} onClick={(e) => { e.preventDefault(); alert('제안서 양식(HWP/DOC)이 다운로드 됩니다.'); }}>
              📥 교육 제안서 양식 다운로드
            </a>
          </div>
          
          <form onSubmit={handleSubmit}>
            
            {/* 🚀 필수 항목 안내 문구 추가 */}
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
                  {/* 🚀 직급 입력칸 추가 (선택 사항으로 두거나 required를 붙여 필수로 만들 수 있습니다) */}
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
                    <td><input type="email" className="academy-input" placeholder="예: admin@company.com" required /></td>
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
                    <th>제안서 파일 첨부 <span className="required-mark">*</span></th>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
                          style={{ cursor: 'pointer', margin: 0 }}
                        >
                          파일 선택
                        </label>
                        <span style={{ fontSize: '14px', color: fileName ? '#333' : '#999' }}>
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

            {/* 4. 개인정보 수집 동의 */}
            <section className="academy-form-section" style={{ marginTop: '30px' }}>
              <div style={{ padding: '20px', backgroundColor: '#fcfcfc', border: '1px solid #ddd', fontSize: '13px', color: '#666', lineHeight: '1.6', marginBottom: '10px', height: '100px', overflowY: 'auto' }}>
                한국전파진흥협회(이하 "협회")는 교육 과정 제안 접수 및 검토를 위하여 아래와 같이 개인정보를 수집 및 이용합니다.<br/><br/>
                1. 수집하는 개인정보 항목: 기업/기관명, 담당자 성명, 연락처, 이메일<br/>
                2. 개인정보의 수집 및 이용 목적: 제안 내용 검토, 결과 안내, 필요 시 추가 협의<br/>
                3. 개인정보의 보유 및 이용 기간: <strong>제안 검토 완료 후 1년 이내 파기</strong>
              </div>
              <div style={{ textAlign: 'right' }}>
                <label style={{ fontSize: '15px', fontWeight: '500', cursor: 'pointer', color: '#333' }}>
                  <input type="checkbox" required style={{ marginRight: '8px', accentColor: '#004ecc' }} />
                  개인정보 수집 및 이용에 동의합니다. <span className="required-mark">*</span>
                </label>
              </div>
            </section>

            {/* 5. 하단 버튼 */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <button type="submit" className="academy-submit-btn">제안서 제출하기</button>
            </div>
            
          </form>
        </div>

      </div>
    </SubLayout>
  );
};

export default Suggest;