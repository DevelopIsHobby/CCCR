import React from 'react';
import Header from './components/Header';
import MainCarousel from './components/MainCarousel';
import QuickMenu from './components/QuickMenu';
import BoardSection from './components/BoardSection';
import Footer from './components/Footer';
import EduSection from './components/EduSection';
import MemberSpace from './components/MemberSpace';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        {/* 1. 메인 비주얼 & 퀵메뉴 통합 섹션 */}
        <section className="hero-and-quick-section">
          {/* 변경됨: inner-container 클래스를 지워서 1200px 제한을 없앱니다! */}
          <div className="hero-layout-full">
            
            {/* 좌측: 메인 배너 (70%) */}
            <div className="hero-left">
              <MainCarousel />
            </div>

            {/* 우측: 퀵메뉴 위젯 (30%) */}
            <div className="hero-right">
              <QuickMenu />
            </div>

          </div>
        </section>

        {/* 2. 게시판 영역 */}
        <section className="board-section">
          <BoardSection />
        </section>

        {/* 3. 교육 프로그램 영역 (새로 추가됨!) */}
        <section className="edu-section">
          <EduSection />
        </section>

        {/* 4. CCCR 회원 공간 (새로 추가됨!) */}
        <section className="member-section">
          <MemberSpace />
        </section>
      </main>

      {/* 푸터 임시 영역 */}
      <footer className="temp-section" style={{ backgroundColor: '#343a40', color: 'white', height: '150px' }}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;