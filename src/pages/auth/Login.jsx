// src/pages/auth/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Auth.css';

const Login = () => {
  return (
    <SubLayout mainCategory="멤버십" subCategory="로그인">
      <div className="auth-layout-wrapper">
        <div className="login-container">
          <h2 className="auth-title">로그인</h2>
          <p className="auth-subtitle" style={{ marginBottom: '30px' }}>
            서비스 이용을 위해 로그인해 주세요.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="auth-input-group">
              <label htmlFor="userId">아이디 (이메일)</label>
              <input 
                type="text" 
                id="userId" 
                className="auth-input" 
                placeholder="아이디를 입력해주세요" 
              />
            </div>
            
            <div className="auth-input-group">
              <label htmlFor="userPw">비밀번호</label>
              <input 
                type="password" 
                id="userPw" 
                className="auth-input" 
                placeholder="비밀번호를 입력해주세요" 
              />
            </div>
            
            <button type="submit" className="auth-btn" style={{ marginTop: '10px' }}>
              로그인
            </button>
          </form>
          
          <div className="auth-links">
            {/* 👇 아까 맞춰둔 회원가입 경로입니다 */}
            <Link to="/auth/joincccr">회원가입</Link>
            <span className="divider">|</span>
            <Link to="#none">아이디 찾기</Link>
            <span className="divider">|</span>
            <Link to="#none">비밀번호 찾기</Link>
          </div>

          {/* 🚀 소셜 로그인 영역 복구! */}
          <div className="social-login-wrap">
            <div className="social-divider">또는 소셜 계정으로 로그인</div>
            
            <button className="social-btn kakao">
              <span className="icon">💬</span> 카카오 로그인
            </button>
            
            <button className="social-btn naver">
              <span className="icon">N</span> 네이버 로그인
            </button>
            
            <button className="social-btn google">
              <span className="icon">G</span> 구글 로그인
            </button>
          </div>

        </div>
      </div>
    </SubLayout>
  );
};

export default Login;