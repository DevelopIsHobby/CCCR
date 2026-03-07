// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// 페이지 컴포넌트 불러오기
import Home from './pages/Home';

// Business
import Rnd from './pages/business/Rnd';
import Standard from './pages/business/Standard'; 
import Edu from './pages/business/Edu'; 
import Cooperation from './pages/business/Cooperation';
import Pr from './pages/business/Pr'; 
import Support from './pages/business/Support'; 

// Academy
import Training from './pages/academy/Training';
import Apply from './pages/academy/Apply';
import Schedule from './pages/academy/Schedule';
import Inquiry from './pages/academy/Inquiry';
import Suggest from './pages/academy/Suggest';

// News
import Notice from './pages/news/Notice';
import Event from './pages/news/Event';
import Trend from './pages/news/Trend';
import Law from './pages/news/Law';
import Newsletter from './pages/news/Newsletter';

// Members
import Join from './pages/members/Join';
import Info from './pages/members/Info';
import MembersNews from './pages/members/News'; // 혹시 news 폴더의 News와 겹칠 수 있으니 이름을 살짝 바꿨습니다!
import MembersPr from './pages/members/Pr';     // business 폴더의 Pr과 겹칠 수 있으니 이름을 살짝 바꿨습니다!
import Service from './pages/members/Service';

// About
import Greeting from './pages/about/Greeting';
import History from './pages/about/History';
import Presidents from './pages/about/Presidents';
import Directors from './pages/about/Directors';
import Organization from './pages/about/Organization';
import Location from './pages/about/Location';
import Ci from './pages/about/Ci';

// Auth
import JoinCCCR from './pages/auth/Join'
import Login from './pages/auth/Login'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 주요사업 카테고리 라우트 */}
          <Route path="/business/rnd" element={<Rnd />} />
          <Route path="/business/standard" element={<Standard />} /> 
          <Route path="/business/edu" element={<Edu />} />
          <Route path="/business/coop" element={<Cooperation />} />
          <Route path="/business/pr" element={<Pr />} /> 
          <Route path="/business/support" element={<Support />} />

          {/* 인재양성 카테고리 라우트 */}
          <Route path="/academy/training" element={<Training />} />
          <Route path="/academy/apply" element={<Apply />} />
          <Route path="/academy/schedule" element={<Schedule />} />
          <Route path="/academy/inquiry" element={<Inquiry />} />
          <Route path="/academy/suggest" element={<Suggest />} />

          {/* 알림마당 카테고리 라우트 */}
          <Route path="/news/notice" element={<Notice />} />
          <Route path="/news/event" element={<Event />} />
          <Route path="/news/trend" element={<Trend />} />
          <Route path="/news/law" element={<Law />} />
          <Route path="/news/newsletter" element={<Newsletter />} />
        
          {/* 👇 회원공간 카테고리 라우트 추가 */}
          <Route path="/members/join" element={<Join />} />
          <Route path="/members/info" element={<Info />} />
          <Route path="/members/news" element={<MembersNews />} />
          <Route path="/members/pr" element={<MembersPr />} />
          <Route path="/members/service" element={<Service />} />

          {/* 👇 조합안내 카테고리 라우트 추가 */}
          <Route path="/about/greeting" element={<Greeting />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/presidents" element={<Presidents />} />
          <Route path="/about/directors" element={<Directors />} />
          <Route path="/about/organization" element={<Organization />} />
          <Route path="/about/location" element={<Location />} />
          <Route path="/about/ci" element={<Ci />} />
        
          {/* 👇 회원가입 및 로그인 */}
          <Route path="/auth/joincccr" element={<JoinCCCR />} />
          <Route path="/auth/login" element={<Login />} />
          
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;