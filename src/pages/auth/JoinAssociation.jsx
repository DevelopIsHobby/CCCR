import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import TermsModal from './TermsModal'; 
import './Auth.css'; 

const JoinAssociation = () => {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState(null);

  // 🚀 1. 커스텀 드롭다운(Select) 상태 관리
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMemberType, setSelectedMemberType] = useState("");

  const memberTypes = [
    { value: '임원사', label: '정회원 - 임원사 (이사회 선임)' },
    { value: '일반대기업', label: '정회원 - 일반회원사 (대기업)' },
    { value: '일반중소', label: '정회원 - 일반회원사 (중소기업)' },
    { value: '대학연구소', label: '정회원 - 대학 및 연구소' },
    { value: '준회원', label: '준회원 (조합 과제 참여 기관)' }
  ];

  // 🚀 2. 첨부파일 6종 상태 관리
  const [fileNames, setFileNames] = useState({
    appForm: '',
    corpRegister: '',
    bizLicense: '',
    ceoResume: '',
    brochure: '',
    logo: ''
  });

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFileNames(prev => ({
      ...prev,
      [fieldName]: file ? file.name : ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMemberType) {
      alert('회원 구분을 선택해 주세요.');
      return;
    }
    alert('회원사 가입 신청서가 제출되었습니다! 서류 검토 및 승인 후 안내해 드리겠습니다.');
    navigate('/');
  };

  return (
    <SubLayout mainCategory="멤버십" subCategory="회원사 가입">
      <div className="auth-layout-wrapper">
        <div className="register-container">
          
          <div className="join-step-bar">
            <div className="step-item done">
              <span className="step-num">✓</span>
              <span className="step-text">유형 선택</span>
            </div>
            <div className="step-divider done"></div>
            <div className="step-item active">
              <span className="step-num">2</span>
              <span className="step-text">가입 신청서 작성</span>
            </div>
            <div className="step-divider"></div>
            <div className="step-item">
              <span className="step-num">3</span>
              <span className="step-text">서류 및 승인대기</span>
            </div>
          </div>

          <h2 className="auth-prompt-title">회원사(조합원) 가입 신청</h2>
          <p className="auth-prompt-desc">한국클라우드컴퓨팅연구조합의 정식 회원사가 되기 위한 기업 정보를 입력해 주세요.</p>

          <form className="register-form" onSubmit={handleSubmit}>
            
            {/* 1. 가입 유형 선택 (🚀 예쁜 커스텀 아코디언 드롭다운 적용!) */}
            <div className="form-section">
              <h3 className="form-section-title">가입 유형 구분</h3>
              <div className="auth-input-group relative-group">
                <label>회원 구분 <span className="req">*</span></label>
                
                <div className="custom-select-box" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <div className={`custom-select-trigger ${selectedMemberType ? 'selected' : ''}`}>
                    {selectedMemberType ? memberTypes.find(t => t.value === selectedMemberType).label : '가입하실 회원 구분을 선택해 주세요'}
                    <span className={`select-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
                  </div>
                  
                  {isDropdownOpen && (
                    <ul className="custom-select-options">
                      {memberTypes.map((type) => (
                        <li 
                          key={type.value} 
                          className={selectedMemberType === type.value ? 'active' : ''}
                          onClick={() => {
                            setSelectedMemberType(type.value);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {type.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* 2. 기업 기본 정보 */}
            <div className="form-section">
              <h3 className="form-section-title">기업/기관 정보</h3>
              
              <div className="auth-input-group">
                <label>회사명 (기업/기관명) <span className="req">*</span></label>
                <input type="text" className="auth-input" placeholder="정식 회사명을 입력해 주세요" required />
              </div>

              {/* 🚀 텍스트 수정: 국세청 사업자인증 -> 사업자인증 */}
              <div className="auth-input-group">
                <label>사업자등록번호 <span className="req">*</span></label>
                <div className="input-with-btn">
                  <input type="text" className="auth-input" placeholder="- 없이 숫자만 입력" required />
                  <button type="button" className="auth-btn outline small">사업자인증</button>
                </div>
              </div>

              <div className="auth-input-group">
                <label>대표자명 <span className="req">*</span></label>
                <input type="text" className="auth-input" placeholder="대표자 이름을 입력해 주세요" required />
              </div>

              <div className="auth-input-group">
                <label>설립일 <span className="req">*</span></label>
                <input type="date" className="auth-input" required />
              </div>

              <div className="auth-input-group">
                <label>대표 전화번호 <span className="req">*</span></label>
                <input type="tel" className="auth-input" placeholder="- 없이 숫자만 입력" required />
              </div>

              <div className="auth-input-group">
                <label>주소 <span className="req">*</span></label>
                <div className="input-with-btn" style={{ marginBottom: '8px' }}>
                  <input type="text" className="auth-input" placeholder="우편번호" readOnly required />
                  <button type="button" className="auth-btn outline small">주소 검색</button>
                </div>
                <input type="text" className="auth-input" placeholder="기본 주소" readOnly style={{ marginBottom: '8px' }} required />
                <input type="text" className="auth-input" placeholder="상세 주소를 입력해 주세요" required />
              </div>
            </div>

            {/* 3. 기업 부가 정보 */}
            <div className="form-section">
              <h3 className="form-section-title">기업 부가 정보</h3>
              <div className="auth-input-group">
                <div className="consent-row">
                  <div className="consent-half">
                    <label>업태 (선택)</label>
                    <input type="text" className="auth-input" placeholder="예: 서비스업, 제조업" />
                  </div>
                  <div className="consent-half">
                    <label>종목 (선택)</label>
                    <input type="text" className="auth-input" placeholder="예: 소프트웨어 개발" />
                  </div>
                </div>
              </div>
              <div className="auth-input-group">
                <div className="consent-row">
                  <div className="consent-half">
                    <label>자본금 <span className="req">*</span></label>
                    <div className="currency-input-wrap">
                      <input type="number" className="auth-input" placeholder="0" required />
                      <span className="currency-unit">원</span>
                    </div>
                  </div>
                  <div className="consent-half">
                    <label>매출액 <span className="req">*</span></label>
                    <div className="currency-input-wrap">
                      <input type="number" className="auth-input" placeholder="0" required />
                      <span className="currency-unit">원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. 서류 첨부 (🚀 요청하신 6개 서류 리스트 적용) */}
            <div className="form-section">
              <h3 className="form-section-title">서류 및 이미지 첨부</h3>
              
              {/* 1. 가입신청서 */}
              <div className="auth-input-group">
                <label>1. 가입신청서 (소정양식) <span className="req">*</span></label>
                <div className="custom-file-upload">
                  <input type="text" className="auth-input file-name-display" placeholder="첨부파일을 선택해 주세요" value={fileNames.appForm} readOnly required />
                  <label className="auth-btn outline small file-upload-btn">
                    찾아보기
                    <input type="file" accept=".pdf,.doc,.docx,.hwp" onChange={(e) => handleFileChange(e, 'appForm')} required />
                  </label>
                </div>
              </div>

              {/* 2. 법인등기부등본 */}
              <div className="auth-input-group">
                <label>2. 법인등기부등본 1부 <span className="req">*</span></label>
                <div className="custom-file-upload">
                  <input type="text" className="auth-input file-name-display" placeholder="첨부파일을 선택해 주세요" value={fileNames.corpRegister} readOnly required />
                  <label className="auth-btn outline small file-uplad-btn">o
                    찾아보기
                    <input type="file" accept=".pdf,.jpg,.png" onChange={(e) => handleFileChange(e, 'corpRegister')} required />
                  </label>
                </div>
              </div>

              {/* 3. 사업자등록증사본 */}
              <div className="auth-input-group">
                <label>3. 사업자등록증사본 1부 <span className="req">*</span></label>
                <div className="custom-file-upload">
                  <input type="text" className="auth-input file-name-display" placeholder="첨부파일을 선택해 주세요" value={fileNames.bizLicense} readOnly required />
                  <label className="auth-btn outline small file-upload-btn">
                    찾아보기
                    <input type="file" accept=".pdf,.jpg,.png" onChange={(e) => handleFileChange(e, 'bizLicense')} required />
                  </label>
                </div>
              </div>

              {/* 4. 대표자 이력서 */}
              <div className="auth-input-group">
                <label>4. 대표자 이력서 1부 <span className="req">*</span></label>
                <p className="input-help-text" style={{ margin: '-4px 0 8px 0' }}>* 대표자 사진 필수 (증명사진 없을 시 사진 인쇄도 가능)</p>
                <div className="custom-file-upload">
                  <input type="text" className="auth-input file-name-display" placeholder="첨부파일을 선택해 주세요" value={fileNames.ceoResume} readOnly required />
                  <label className="auth-btn outline small file-upload-btn">
                    찾아보기
                    <input type="file" accept=".pdf,.doc,.docx,.hwp" onChange={(e) => handleFileChange(e, 'ceoResume')} required />
                  </label>
                </div>
              </div>

              {/* 5. 회사소개 브로슈어 */}
              <div className="auth-input-group">
                <label>5. 회사소개 브로슈어 1부 <span className="req">*</span></label>
                <div className="custom-file-upload">
                  <input type="text" className="auth-input file-name-display" placeholder="첨부파일을 선택해 주세요" value={fileNames.brochure} readOnly required />
                  <label className="auth-btn outline small file-upload-btn">
                    찾아보기
                    <input type="file" accept=".pdf,.ppt,.pptx" onChange={(e) => handleFileChange(e, 'brochure')} required />
                  </label>
                </div>
              </div>

              {/* 6. 기업 로고 이미지 */}
              <div className="auth-input-group">
                <label>6. 기업 로고 이미지 <span className="req">*</span></label>
                <p className="input-help-text" style={{ margin: '-4px 0 8px 0' }}>* 홈페이지 파트너사에 노출될 고해상도 로고(AI, PNG)를 첨부해 주세요.</p>
                <div className="custom-file-upload">
                  <input type="text" className="auth-input file-name-display" placeholder="첨부파일을 선택해 주세요" value={fileNames.logo} readOnly required />
                  <label className="auth-btn outline small file-upload-btn">
                    찾아보기
                    <input type="file" accept=".png,.ai,.eps" onChange={(e) => handleFileChange(e, 'logo')} required />
                  </label>
                </div>
              </div>

            </div>

            {/* 5. 약관 동의 */}
            <div className="form-section">
              <h3 className="form-section-title">약관 동의</h3>
              <div className="terms-box">
                <label className="agree-checkbox all-agree">
                  <input type="checkbox" className="custom-checkbox" />
                  <span className="checkbox-text"><strong>전체 약관에 동의합니다.</strong></span>
                </label>
                <hr className="terms-divider" />
                <label className="agree-checkbox">
                  <input type="checkbox" className="custom-checkbox" required />
                  <span className="checkbox-text">
                    [필수] 조합원 가입 규정 및 이용약관 동의 
                    <button type="button" className="terms-link-btn" onClick={() => setModalType('tos')}>(전문보기)</button>
                  </span>
                </label>
                <label className="agree-checkbox">
                  <input type="checkbox" className="custom-checkbox" required />
                  <span className="checkbox-text">
                    [필수] 개인정보 수집 및 이용 동의 
                    <button type="button" className="terms-link-btn" onClick={() => setModalType('privacy')}>(전문보기)</button>
                  </span>
                </label>
              </div>
            </div>

            <div className="register-btn-group">
              <button type="button" className="auth-btn outline" onClick={() => navigate(-1)}>취소</button>
              <button type="submit" className="auth-btn">가입 신청서 제출</button>
            </div>

          </form>
        </div>
      </div>

      <TermsModal 
        isOpen={modalType !== null} 
        type={modalType} 
        onClose={() => setModalType(null)} 
      />
    </SubLayout>
  );
};

export default JoinAssociation;