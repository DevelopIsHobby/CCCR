import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import TermsModal from './TermsModal';
import './Auth.css';

const JoinGeneral = () => {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState(null);

  // 폼 제출 이벤트
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
    navigate('/auth/login');
  };

  return (
    <SubLayout mainCategory="멤버십" subCategory="개인회원 가입">
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
              <span className="step-text">정보 입력</span>
            </div>
            <div className="step-divider"></div>
            <div className="step-item">
              <span className="step-num">3</span>
              <span className="step-text">가입 완료</span>
            </div>
          </div>

          <h2 className="auth-prompt-title">개인회원 정보를 입력해 주세요.</h2>
          <p className="auth-prompt-desc">서비스 이용을 위해 필수 정보를 정확하게 입력해 주시기 바랍니다.</p>

          <form className="register-form" onSubmit={handleSubmit}>
            
            {/* 1. 기본 정보 입력 섹션 */}
            <div className="form-section">
              <h3 className="form-section-title">기본 정보 입력</h3>

              <div className="auth-input-group">
                <label>이름 <span className="req">*</span></label>
                <input type="text" className="auth-input" placeholder="이름을 입력해 주세요" required />
              </div>

              <div className="auth-input-group">
                <label>아이디 (이메일) <span className="req">*</span></label>
                <div className="input-with-btn">
                  <input type="email" className="auth-input" placeholder="example@cccr.or.kr" required />
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
                <label>휴대폰 번호 <span className="req">*</span></label>
                <input type="tel" className="auth-input" placeholder="- 없이 숫자만 입력" required />
              </div>

              {/* 🚀 추가된 부분: 소속 및 직급 */}
              <div className="auth-input-group">
                <label>소속 (선택)</label>
                <input type="text" className="auth-input" placeholder="회사명 또는 학교명 입력" />
              </div>

              <div className="auth-input-group">
                <label>직급 (선택)</label>
                <input type="text" className="auth-input" placeholder="직급 입력 (예: 사원, 팀장 등)" />
              </div>

              {/* 🚀 수정된 부분: 수신 여부를 한 줄(flex)로 묶음 */}
              <div className="auth-input-group">
                <div className="consent-row">
                  
                  {/* SMS 수신여부 */}
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

                  {/* 이메일 수신여부 */}
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

            {/* 2. 약관 동의 섹션 */}
            <div className="form-section">
              <h3 className="form-section-title">약관 동의</h3>
              <div className="terms-box">
                <label className="agree-checkbox all-agree">
                  <input type="checkbox" />
                  <span className="checkbox-text"><strong>전체 약관에 동의합니다.</strong></span>
                </label>
                
                <hr className="terms-divider" />
                
                <label className="agree-checkbox">
                  <input type="checkbox" className="custom-checkbox" required />
                  <span className="checkbox-text">
                    [필수] 이용약관 동의 
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
                  <input type="checkbox" />
                  <span className="checkbox-text">[선택] 이벤트 및 마케팅 정보 수신 동의</span>
                </label>
              </div>
            </div>

            {/* 3. 하단 버튼 그룹 */}
            <div className="register-btn-group">
              <button type="button" className="auth-btn outline" onClick={() => navigate(-1)}>취소</button>
              <button type="submit" className="auth-btn">가입하기</button>
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

export default JoinGeneral;