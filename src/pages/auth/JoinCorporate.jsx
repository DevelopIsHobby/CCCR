import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import TermsModal from './TermsModal'; // 🚀 모달 컴포넌트 불러오기
import './Auth.css'; 

const JoinCorporate = () => {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('기업회원 가입이 완료되었습니다! 관리자 승인 후 이용 가능합니다.');
    navigate('/auth/login');
  };

  return (
    <SubLayout mainCategory="멤버십" subCategory="기업회원 가입">
      <div className="auth-layout-wrapper">
        <div className="register-container">
          
          {/* 🚀 스텝바 (2단계 활성화) */}
          <div className="join-step-bar">
            <div className="step-item done">
              <span className="step-num">✓</span>
              <span className="step-text">유형 선택</span>
            </div>
            <div className="step-divider done"></div>
            <div className="step-item active">
              <span className="step-num">2</span>
              <span className="step-text">정보 입력</span>
            </div>
            <div className="step-divider"></div>
            <div className="step-item">
              <span className="step-num">3</span>
              <span className="step-text">가입 완료</span>
            </div>
          </div>

          <h2 className="auth-prompt-title">기업/기관 정보를 입력해 주세요.</h2>
          <p className="auth-prompt-desc">담당자 확인 및 승인 절차를 거친 후 정상적인 서비스 이용이 가능합니다.</p>

          <form className="register-form" onSubmit={handleSubmit}>
            
            {/* 1. 기업 정보 입력 섹션 */}
            <div className="form-section">
              <h3 className="form-section-title">기업 정보</h3>

              <div className="auth-input-group">
                <label>기업/기관명 <span className="req">*</span></label>
                <input type="text" className="auth-input" placeholder="정식 기업/기관명을 입력해 주세요" required />
              </div>

              <div className="auth-input-group">
                <label>사업자등록번호 <span className="req">*</span></label>
                <div className="input-with-btn">
                  <input type="text" className="auth-input" placeholder="- 없이 숫자만 입력" required />
                  <button type="button" className="auth-btn outline small">인증하기</button>
                </div>
              </div>

              <div className="auth-input-group">
                <label>대표자명 <span className="req">*</span></label>
                <input type="text" className="auth-input" placeholder="대표자 이름을 입력해 주세요" required />
              </div>

              <div className="auth-input-group">
                <label>대표 전화번호 (선택)</label>
                <input type="tel" className="auth-input" placeholder="- 없이 숫자만 입력 (예: 0212345678)" />
              </div>
            </div>

            {/* 2. 담당자(계정) 정보 입력 섹션 */}
            <div className="form-section">
              <h3 className="form-section-title">담당자(계정) 정보</h3>

              <div className="auth-input-group">
                <label>담당자 이름 <span className="req">*</span></label>
                <input type="text" className="auth-input" placeholder="담당자 실명을 입력해 주세요" required />
              </div>

              <div className="auth-input-group">
                <label>아이디 (이메일) <span className="req">*</span></label>
                <div className="input-with-btn">
                  <input type="email" className="auth-input" placeholder="업무용 이메일을 입력해 주세요" required />
                  <button type="button" className="auth-btn outline small">중복확인</button>
                </div>
              </div>

              <div className="auth-input-group">
                <label>비밀번호 <span className="req">*</span></label>
                <input type="password" className="auth-input" placeholder="영문, 숫자, 특수문자 포함 8자 이상" required />
              </div>

              <div className="auth-input-group">
                <label>비밀번호 확인 <span className="req">*</span></label>
                <input type="password" className="auth-input" placeholder="비밀번호를 다시 입력해 주세요" required />
              </div>

              <div className="auth-input-group">
                <label>담당자 휴대폰 번호 <span className="req">*</span></label>
                <input type="tel" className="auth-input" placeholder="- 없이 숫자만 입력" required />
              </div>

              <div className="auth-input-group">
                <label>직급 (선택)</label>
                <input type="text" className="auth-input" placeholder="직급 입력 (예: 대리, 팀장 등)" />
              </div>

              {/* 🚀 수신여부 한 줄 배치 */}
              <div className="auth-input-group">
                <div className="consent-row">
                  <div className="consent-half inline-flex">
                    <label className="inline-label">SMS 수신여부 <span className="req">*</span></label>
                    <div className="radio-wrap">
                      <label className="radio-label">
                        <input type="radio" name="smsConsent" value="agree" className="custom-radio" defaultChecked required />
                        <span className="radio-text">수신함</span>
                      </label>
                      <label className="radio-label">
                        <input type="radio" name="smsConsent" value="disagree" className="custom-radio" />
                        <span className="radio-text">수신안함</span>
                      </label>
                    </div>
                  </div>

                  <div className="consent-half inline-flex">
                    <label className="inline-label">이메일 수신여부 <span className="req">*</span></label>
                    <div className="radio-wrap">
                      <label className="radio-label">
                        <input type="radio" name="emailConsent" value="agree" className="custom-radio" defaultChecked required />
                        <span className="radio-text">수신함</span>
                      </label>
                      <label className="radio-label">
                        <input type="radio" name="emailConsent" value="disagree" className="custom-radio" />
                        <span className="radio-text">수신안함</span>
                      </label>
                    </div>
                  </div>
                </div>
                <p className="input-help-text">* 수신 동의 시 조합의 다양한 소식을 해당 연락처로 발송해 드립니다.</p>
              </div>
            </div>

            {/* 3. 약관 동의 섹션 (🚀 모달 연결) */}
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
                    [필수] 기업회원 이용약관 동의 
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
                <label className="agree-checkbox">
                  <input type="checkbox" className="custom-checkbox" />
                  <span className="checkbox-text">[선택] 이벤트 및 마케팅 정보 수신 동의</span>
                </label>
              </div>
            </div>

            {/* 4. 하단 버튼 그룹 */}
            <div className="register-btn-group">
              <button type="button" className="auth-btn outline" onClick={() => navigate(-1)}>취소</button>
              <button type="submit" className="auth-btn">가입 신청하기</button>
            </div>

          </form>
        </div>
      </div>

      {/* 🚀 모달 컴포넌트 마운트 */}
      <TermsModal 
        isOpen={modalType !== null} 
        type={modalType} 
        onClose={() => setModalType(null)} 
      />
    </SubLayout>
  );
};

export default JoinCorporate;