// src/pages/auth/Join.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Auth.css';

const Join = () => {
  return (
    <SubLayout mainCategory="멤버십" subCategory="회원가입">
      <div className="auth-layout-wrapper">
        <div className="join-choice-container">

          {/* 🚀 1. 모던한 진행 단계(Step) 표시기 */}
          <div className="join-step-bar">
            <div className="step-item active">
              <span className="step-num">1</span>
              <span className="step-text">유형 선택</span>
            </div>
            <div className="step-divider"></div>
            <div className="step-item">
              <span className="step-num">2</span>
              <span className="step-text">정보 입력</span>
            </div>
            <div className="step-divider"></div>
            <div className="step-item">
              <span className="step-num">3</span>
              <span className="step-text">가입 완료</span>
            </div>
          </div>

          <h2 className="auth-prompt-title">어떤 회원으로 가입하시겠습니까?</h2>
          <p className="auth-prompt-desc">원하시는 가입 유형을 선택하시면 해당 정보 입력 페이지로 이동합니다.</p>

          <div className="join-cards-wrap">
            <div className="join-card">
              <div className="join-card-icon">👤</div>
              <h3 className="join-card-title">일반회원 가입</h3>
              <p className="join-card-desc">
                본인 명의의 휴대폰 번호로 인증 후 가입이 가능하며, 추후 교육 신청 등 서비스 이용 시 추가 정보 입력이 필요합니다.
              </p>
              <div className="join-card-btns">
                <Link to="/auth/joingeneral" className="auth-btn outline">개인회원 가입</Link>
                <Link to="/auth/joincorporate" className="auth-btn outline">기업회원 가입</Link>
              </div>
            </div>

            <div className="join-card highlight">
              <div className="join-card-icon">🏢</div>
              <h3 className="join-card-title">회원사 가입</h3>
              <p className="join-card-desc">
                한국클라우드컴퓨팅연구조합의 회원사가 되기 위해서는 회원 가입 및 가입 신청서, 관련 서류 제출이 필요합니다.
              </p>
              <div className="join-card-btns">
                <Link to="/auth/joinassociation" className="auth-btn">회원사 가입</Link>
                <Link to="/members/join" className="auth-btn text-only">회원사 가입안내 &gt;</Link>
              </div>
            </div>
          </div>

          <div className="auth-links">
            <span style={{ color: '#888' }}>이미 계정이 있으신가요?</span>
            <Link to="/auth/login" className="highlight-link">로그인하기</Link>
          </div>
          
        </div>
      </div>
    </SubLayout>
  );
};

export default Join;