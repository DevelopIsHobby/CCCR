import React, { useRef, useState } from 'react';
// Swiper React 컴포넌트 임포트
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper 스타일 임포트
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// 사용할 Swiper 모듈 임포트
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import './MainCarousel.css';

const MainCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef(null);

  // 재생/일시정지 토글 함수
  const togglePlay = () => {
    if (isPlaying) {
      swiperRef.current.swiper.autoplay.stop();
    } else {
      swiperRef.current.swiper.autoplay.start();
    }
    setIsPlaying(!isPlaying);
  };

  // 임시 배너 데이터 (나중에 실제 이미지 경로로 변경)
  const slides = [
    {
      id: 1,
      title: "대한민국 소프트웨어의 미래를 엽니다",
      desc: "소프트웨어 산업 발전을 위한 KOSA의 다양한 지원 사업을 만나보세요.",
      bgColor: "#0056b3"
    },
    {
      id: 2,
      title: "2026년 SW기업 경쟁력 강화사업 공고",
      desc: "우수 SW기업의 혁신 성장을 지원합니다. (신청기간: ~3.31)",
      bgColor: "#007bff"
    },
    {
      id: 3,
      title: "SW 인재 양성 프로그램 참여자 모집",
      desc: "디지털 대전환 시대를 이끌어갈 핵심 인재를 양성합니다.",
      bgColor: "#17a2b8"
    }
  ];

  return (
    <div className="main-carousel-wrapper">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false, // 사용자 컨트롤 후에도 자동재생 유지
        }}
        loop={true}
        a11y={{
          prevSlideMessage: '이전 슬라이드',
          nextSlideMessage: '다음 슬라이드',
        }}
        className="kosa-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* 실제 구현 시에는 img 태그나 background-image를 사용합니다 */}
            <div 
              className="slide-content" 
              style={{ backgroundColor: slide.bgColor }}
            >
              <div className="slide-inner">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-desc">{slide.desc}</p>
                <button className="slide-btn">자세히 보기</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 접근성을 위한 커스텀 컨트롤러 (재생/일시정지) */}
      <div className="swiper-custom-controls">
        <button 
          className="play-pause-btn" 
          onClick={togglePlay}
          aria-label={isPlaying ? "슬라이드 일시정지" : "슬라이드 재생"}
        >
          {isPlaying ? "⏸" : "▶️"}
        </button>
      </div>
    </div>
  );
};

export default MainCarousel;