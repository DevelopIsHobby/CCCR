import React, { useState, useRef } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import './BoardSection.css';

import tabaImg from '../assets/TABA_7기.jpg';
import sassaakImg from '../assets/새싹_3기.png';
import recruitImg from '../assets/채용_4기.jpg';

const BoardSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const allBoardData = [
    { id: 1, category: 'notice', categoryLabel: '공지사항', title: '[안내] 2026년 CCCR 상반기 교육 일정 안내', date: '2026-03-03' },
    { id: 2, category: 'event', categoryLabel: '행사소식', title: 'CCCR, 지역 IT 인재 양성을 위한 MOU 체결', date: '2026-03-02' },
    { id: 3, category: 'notice', categoryLabel: '공지사항', title: '웹사이트 리뉴얼 작업에 따른 서비스 일시 중단 안내', date: '2026-03-01' },
    { id: 4, category: 'notice', categoryLabel: '공지사항', title: '소프트웨어 산업 발전 유공자 포상 신청 안내', date: '2026-02-28' },
    { id: 5, category: 'event', categoryLabel: '행사소식', title: '2025년 최우수 인증 기업 시상식 성료', date: '2026-02-20' },
    { id: 6, category: 'event', categoryLabel: '행사소식', title: '소프트웨어 산업 동향 세미나 개최 결과', date: '2026-02-10' },
  ];

  const sortByDateDesc = (a, b) => new Date(b.date) - new Date(a.date);

  let filteredData = [];
  if (activeTab === 'all') {
    const noticeList = allBoardData.filter(item => item.category === 'notice').sort(sortByDateDesc).slice(0, 3);
    const eventList = allBoardData.filter(item => item.category === 'event').sort(sortByDateDesc).slice(0, 3);
    filteredData = [...noticeList, ...eventList]; 
  } else {
    filteredData = allBoardData.filter(item => item.category === activeTab).sort(sortByDateDesc).slice(0, 6);
  }

  const [isPromoPlaying, setIsPromoPlaying] = useState(true);
  const [activePromoIndex, setActivePromoIndex] = useState(0); 
  const promoSwiperRef = useRef(null);

  const promoSlides = [
    { id: 1, img: tabaImg },
    { id: 2, img: sassaakImg },
    { id: 3, img: recruitImg }
  ];

  const togglePromoPlay = () => {
      if (promoSwiperRef.current && promoSwiperRef.current.swiper) {
        if (isPromoPlaying) {
          promoSwiperRef.current.swiper.autoplay.stop();
        } else {
          promoSwiperRef.current.swiper.autoplay.start();
        }
        setIsPromoPlaying(!isPromoPlaying);
      }
    };

  const handlePromoPrev = () => {
    if (promoSwiperRef.current && promoSwiperRef.current.swiper) {
      promoSwiperRef.current.swiper.slidePrev();
    }
  };

  const handlePromoNext = () => {
    if (promoSwiperRef.current && promoSwiperRef.current.swiper) {
      promoSwiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="board-section-wrapper">
      <div className="board-grid-full">

        {/* 좌측: 모던 스타일 게시판 영역 */}
        <div className="board-tabs-area">
          
          <div className="board-header">
            <h2 className="board-main-title">CCCR <span className="highlight-blue">새소식</span></h2>
            
            <div className="board-controls">
              {/* 🚀 iOS 스타일의 모던 탭 버튼 컨테이너 */}
              <div className="tab-buttons">
                <button 
                  className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveTab('all')}
                >전체</button>
                <button 
                  className={`tab-btn ${activeTab === 'notice' ? 'active' : ''}`}
                  onClick={() => setActiveTab('notice')}
                >공지사항</button>
                <button 
                  className={`tab-btn ${activeTab === 'event' ? 'active' : ''}`}
                  onClick={() => setActiveTab('event')}
                >행사소식</button>
              </div>

              {/* 🚀 텍스트 기반의 세련된 더보기 버튼 */}
              <Link 
                to={activeTab === 'event' ? '/news/event' : '/news/notice'} 
                className="more-btn-modern" 
              >
                더보기 <span className="more-arrow">+</span>
              </Link>
            </div>
          </div>

          {/* 게시물 리스트 영역 */}
          <div className="tab-content">
            <ul className="board-list">
              {filteredData.map((item) => (
                <li key={item.id} className="board-item">
                  <a href={`/board/${item.category}/${item.id}`}>
                    <div className="board-title-group">
                      <span className={`category-tag ${item.category}`}>
                        {item.categoryLabel}
                      </span>
                      <span className="board-title">{item.title}</span>
                    </div>
                    {/* 🚀 날짜와 호버용 화살표를 묶어주는 우측 그룹 */}
                    <div className="board-right-group">
                      <span className="board-date">{item.date}</span>
                      <span className="hover-arrow">&rarr;</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 우측: 알림판 (미니 슬라이드 배너) */}
        <div className="board-banner-area">
          <div className="promo-header">
            <h2 className="promo-title">HOT 이슈</h2>
          </div>

          <div className="promo-carousel-container">
            <Swiper
              ref={promoSwiperRef}
              modules={[Autoplay, A11y]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              onSlideChange={(swiper) => setActivePromoIndex(swiper.realIndex)}
              className="promo-swiper"
            >
              {promoSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div 
                    className="promo-slide-bg" 
                    style={{ backgroundImage: `url("${slide.img}")` }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="promo-controls-wrapper">
              <span className="promo-pagination">
                <span className="current">{activePromoIndex + 1}</span>
                <span className="dash">/</span>
                <span className="total">{promoSlides.length}</span>
              </span>
              
              <div className="promo-btn-group">
                <button className="promo-ctrl-btn" onClick={handlePromoPrev}>&lt;</button>
                <button className="promo-ctrl-btn play-pause" onClick={togglePromoPlay}>
                  {isPromoPlaying ? '||' : '▶'}
                </button>
                <button className="promo-ctrl-btn" onClick={handlePromoNext}>&gt;</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BoardSection;