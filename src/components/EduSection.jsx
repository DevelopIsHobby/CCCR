import React from 'react';
import './EduSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import tabaImg from '../assets/TABA_7기.jpg';
import sassaakImg from '../assets/새싹_3기.png';
import recruitImg from '../assets/채용_4기.jpg';

const EduSection = () => {
  const eduList = [
    { id: 1, status: '모집중', title: 'TABA 7기 클라우드 네이티브 전문가 양성 과정', applyDate: '2026.02.15 ~ 03.10', date: '2026.03.15 ~ 04.30', target: '재직자 및 구직자', isRecruiting: true, imgUrl: tabaImg },
    { id: 2, status: '모집중', title: '새싹(SeSAC) 3기 소프트웨어 실무자 교육', applyDate: '2026.03.01 ~ 03.25', date: '2026.04.01 ~ 04.15', target: 'SW 관련 기업 취준생', isRecruiting: true, imgUrl: sassaakImg },
    { id: 3, status: '마감임박', title: 'CCCR 채용연계형 4기 역량 강화 캠프', applyDate: '2026.02.01 ~ 03.05', date: '2026.03.10 ~ 03.31', target: '대학생 및 취준생', isRecruiting: true, imgUrl: recruitImg },
    { id: 4, status: '모집마감', title: 'CCCR 인증 심사원 양성 기본 과정', applyDate: '2026.01.01 ~ 01.20', date: '2026.02.01 ~ 02.28', target: '인증 심사원 희망자', isRecruiting: false, imgUrl: tabaImg },
    { id: 5, status: '모집마감', title: '2026 하반기 프론트엔드 개발자 부트캠프', applyDate: '2026.06.01 ~ 06.30', date: '2026.07.01 ~ 12.31', target: '전공자 및 비전공자', isRecruiting: false, imgUrl: sassaakImg },
    { id: 6, status: '모집예정', title: '실무 데이터베이스 아키텍처 설계', applyDate: '2026.08.01 ~ 08.15', date: '2026.09.01 ~ 09.30', target: 'DBA 희망자', isRecruiting: false, imgUrl: recruitImg }
  ];

  return (
    <div className="edu-section-wrapper">
      <div className="edu-grid-full">
        <div className="edu-header">
          <div className="edu-title-box">
            <h2 className="edu-main-title">CCCR <span className="edu-highlight-blue">교육 프로그램</span></h2>
            <p className="edu-main-desc">
              "SW인재 양성"을 위해 진행하는 조합의 맞춤형 교육을 안내드립니다.
            </p>
          </div>
          {/* 🚀 게시판과 동일한 + 애니메이션 버튼 적용 */}
          <a href="https://www.cccr-edu.or.kr/course/course_list.jsp?cid=4301&ch=course" className="edu-more-btn-modern" target="_blank" rel="noopener noreferrer">
            전체보기 <span className="more-arrow">+</span>
          </a>
        </div>

        <div className="edu-slider-container">
          <button className="edu-custom-nav edu-custom-prev">&#10094;</button>
          <button className="edu-custom-nav edu-custom-next">&#10095;</button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.edu-custom-prev',
              nextEl: '.edu-custom-next',
            }}
            loop={false} 
            spaceBetween={24} 
            slidesPerGroup={1} 
            breakpoints={{
              0: { slidesPerView: 1 },
              620 : { slidesPerView: 2 },
              812: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="edu-swiper"
          >
            {eduList.map((edu) => (
              <SwiperSlide key={edu.id}>
                {/* 🚀 모집 마감된 카드는 'closed-card' 클래스를 추가로 붙여줍니다! */}
                <div className={`edu-card ${!edu.isRecruiting ? 'closed-card' : ''}`}>
                  <div className="edu-card-img-box">
                    <div 
                      className="edu-card-img" 
                      style={{ backgroundImage: `url("${edu.imgUrl}")` }}
                      role="img"
                      aria-label={edu.title}
                    />
                    <div className={`edu-badge ${edu.isRecruiting ? 'active' : 'closed'} ${edu.status === '마감임박' ? 'warning' : ''}`}>
                      {edu.status}
                    </div>
                  </div>

                  <div className="edu-card-content">
                    <h3 className="edu-card-title">{edu.title}</h3>
                    <ul className="edu-card-info">
                      {/* 🚀 CSS로 정렬하기 쉽게 라벨과 값을 span으로 분리했습니다 */}
                      <li>
                        <span className="info-label">신청기간</span> 
                        <span className="info-value highlight-date">{edu.applyDate}</span>
                      </li>
                      <li>
                        <span className="info-label">교육기간</span> 
                        <span className="info-value">{edu.date}</span>
                      </li>
                      <li>
                        <span className="info-label">교육대상</span> 
                        <span className="info-value">{edu.target}</span>
                      </li>
                    </ul>
                    <button 
                      className={`edu-apply-btn ${!edu.isRecruiting ? 'disabled' : ''}`}
                      disabled={!edu.isRecruiting}
                    >
                      {edu.isRecruiting ? '수강신청 바로가기' : '모집이 마감되었습니다'}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default EduSection;