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
          <h2 className="auth-title">회원가입</h2>
          <p className="auth-subtitle">
            CCCR에 오신 것을 환영합니다. 가입하실 회원 유형을 선택해 주세요.
          </p>
          
          <div className="join-cards-wrap">
            <div className="join-card">
              <div className="join-card-icon">👤</div>
              <h3 className="join-card-title">일반회원 가입</h3>
              <p className="join-card-desc">
                본인 명의의 휴대폰 번호로 인증 후 가입이 가능하며, 추후 교육 신청 등 서비스 이용 시 추가 정보 입력이 필요합니다.
              </p>
              <div className="join-card-btns">
                <Link to="#none" className="auth-btn outline">개인회원 가입</Link>
                <Link to="#none" className="auth-btn outline">기업회원 가입</Link>
              </div>
            </div>

            <div className="join-card highlight">
              <div className="join-card-icon">🏢</div>
              <h3 className="join-card-title">회원사 가입</h3>
              <p className="join-card-desc">
                한국클라우드컴퓨팅연구조합의 회원사가 되기 위해서는 회원 가입 및 가입 신청서, 관련 서류 제출이 필요합니다.
              </p>
              <div className="join-card-btns">
                <Link to="#none" className="auth-btn">회원사 가입</Link>
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