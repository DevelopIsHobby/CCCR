import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import tabaImg from '../assets/TABA_7기.jpg';
import sassaakImg from '../assets/새싹_3기.png';
import recruitImg from '../assets/채용_4기.jpg';

import './MainCarousel.css';

const MainCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0); 
  const swiperRef = useRef(null);

  // 재생/일시정지 토글 함수 (안전장치 추가)
  const togglePlay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isPlaying) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // 👇 새롭게 추가하는 이전 배너 넘기기 함수
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // 👇 새롭게 추가하는 다음 배너 넘기기 함수
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slides = [
{
      id: 1,
      title: "TABA 7기 교육생 모집",
      desc: "클라우드 전문가로 거듭나는 지름길, TABA 7기 교육이 시작됩니다.",
      img: tabaImg
    },
    {
      id: 2,
      title: "새싹(SeSAC) 3기 과정 안내",
      desc: "실무 중심의 SW 인재 양성 프로젝트, 새싹 3기에 도전하세요.",
      img: sassaakImg
    },
    {
      id: 3,
      title: "2026 하반기 신입/경력 채용",
      desc: "CCCR과 함께 클라우드 미래를 선도할 역량 있는 인재를 찾습니다.",
      img: recruitImg
    }
  ];

  return (
    <div className="main-carousel-wrapper">
      
      {/* 1. 상단 배너 이미지 영역 */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="kosa-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* 부모 상자에서는 style을 뺍니다! */}
            <div className="slide-content">
              
              {/* 🚀 1. 흐린 배경을 담당할 레이어 */}
              <div 
                className="slide-bg-blur" 
                style={{ backgroundImage: `url(${slide.img})` }} 
              />
              
              {/* 🚀 2. 선명한 원본 이미지를 담당할 레이어 */}
              <div 
                className="slide-bg-clear" 
                style={{ backgroundImage: `url(${slide.img})` }} 
              />

              {/* 텍스트 영역은 그대로 유지 */}
              <div className="slide-text-overlay">
                <div className="text-content-wrapper">
                  <div className="text-line-1">{slide.title}</div>
                  <div className="text-line-2">{slide.desc}</div>
                </div>
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 2. 새롭게 추가된 배너 하단 정보 & 컨트롤 바 */}
      <div className="carousel-info-bar">
        <div className="inner-container">
          
          {/* 왼쪽: 소제목 */}
          <div className="info-desc">
            {slides[activeIndex].desc}
          </div>

          {/* 오른쪽: [현재번호-전체번호] + [ < || ▶ > ] */}
          <div className="info-controls">
            
            {/* 3-5 형태의 페이지 번호 */}
            <div className="pagination-fraction">
              <span className="current">{activeIndex + 1}</span>
              <span className="dash">-</span>
              <span className="total">{slides.length}</span>
            </div>
            
            {/* 컨트롤 버튼들 */}
            <div className="control-btns">
              {/* 👇 onClick={handlePrev} 추가 */}
              <button 
                className="custom-prev" 
                aria-label="이전 슬라이드" 
                onClick={handlePrev}
              >
                &lt;
              </button>
              
              <button 
                className="play-pause-btn" 
                onClick={togglePlay}
                aria-label={isPlaying ? "슬라이드 일시정지" : "슬라이드 재생"}
              >
                {isPlaying ? "||" : "▶"}
              </button>
              
              {/* 👇 onClick={handleNext} 추가 */}
              <button 
                className="custom-next" 
                aria-label="다음 슬라이드" 
                onClick={handleNext}
              >
                &gt;
              </button>
            </div>

          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default MainCarousel;