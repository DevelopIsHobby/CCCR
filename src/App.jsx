// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// 페이지 컴포넌트 불러오기
import Home from './pages/Home';
import Rnd from './pages/business/Rnd';
import Standard from './pages/business/Standard'; // 🚀 여기 추가!

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
          <Route path="/business/standard" element={<Standard />} /> {/* 🚀 여기 추가! */}
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;