// src/pages/Home.jsx
import React from 'react';
import MainCarousel from '../components/MainCarousel';
import QuickMenu from '../components/QuickMenu';
import BoardSection from '../components/BoardSection';
import EduSection from '../components/EduSection';
import MemberSpace from '../components/MemberSpace';

const Home = () => {
  return (
    <main className="main-content">
      <section className="hero-and-quick-section">
        <div className="hero-layout-full">
          <div className="hero-left">
            <MainCarousel />
          </div>
          <div className="hero-right">
            <QuickMenu />
          </div>
        </div>
      </section>

      <section className="board-section">
        <BoardSection />
      </section>

      <section className="edu-section">
        <EduSection />
      </section>

      <section className="member-section">
        <MemberSpace />
      </section>
    </main>
  );
};

export default Home;
