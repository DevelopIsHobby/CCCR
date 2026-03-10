import React from 'react';
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Auth.css';

const Login = () => {
  return (
    <SubLayout mainCategory="멤버십" subCategory="로그인">
      <div className="auth-layout-wrapper">
        <div className="login-container">
          
          {/* 🚀 중복 타이틀 제거 & 세련된 환영 배너 추가 */}
          <div className="login-header">
            <span className="welcome-badge">WELCOME</span>
            <h2 className="login-main-text">
              서비스 이용을 위해<br />
              로그인해 주세요.
            </h2>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="auth-input-group">
              <label htmlFor="userId">아이디 (이메일)</label>
              <input 
                type="text" 
                id="userId" 
                className="auth-input" 
                placeholder="가입하신 이메일을 입력해 주세요" 
              />
            </div>
            
            <div className="auth-input-group">
              <label htmlFor="userPw">비밀번호</label>
              <input 
                type="password" 
                id="userPw" 
                className="auth-input" 
                placeholder="비밀번호를 입력해 주세요" 
              />
            </div>
            
            {/* 🚀 UX 디테일: 아이디 저장 체크박스 (우리가 만든 커스텀 디자인 활용!) */}
            <div className="login-options">
              <label className="agree-checkbox">
                <input type="checkbox" className="custom-checkbox" />
                <span className="checkbox-text" style={{ fontSize: '14px', color: '#64748b' }}>아이디 저장</span>
              </label>
            </div>
            
            <button type="submit" className="auth-btn login-btn">
              로그인
            </button>
          </form>
          
          <div className="auth-links">
            {/* 🚀 경로를 우리가 만든 회원가입 첫 화면(유형 선택)으로 연결 */}
            <Link to="/auth/joincccr">회원가입</Link>
            <span className="divider">|</span>
            <Link to="#none">아이디 찾기</Link>
            <span className="divider">|</span>
            <Link to="#none">비밀번호 찾기</Link>
          </div>

          {/* 🚀 소셜 로그인 영역 */}
          <div className="social-login-wrap">
            <div className="social-divider">
              <span>또는 소셜 계정으로 로그인</span>
            </div>
            
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