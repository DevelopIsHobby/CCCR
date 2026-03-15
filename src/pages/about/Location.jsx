// src/pages/about/Location.jsx
import React, { useState, useEffect } from 'react';
import SubLayout from '../../layouts/SubLayout';
import './About.css';

const Location = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('samsung');

  const locationData = {
    samsung: {
      title: '삼성 사무국 (본사)',
      address: '서울특별시 강남구 삼성로86길 11, 거봉INC빌딩 5층',
      postcode: '06178',
      phone: '02-2052-0156',
      fax: '02-2052-0158',
      naverMapLink: 'https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%82%BC%EC%84%B1%EB%A1%9C86%EA%B8%B8%2011',
      // 🚀 실제 네이버 지도를 캡처한 이미지 파일로 나중에 교체해 주세요!
      mapImage: 'https://placehold.co/1000x400/e2e8f0/94a3b8?text=Map+Image+(Samsung)',
      subway: [
        { line: '2호선', station: '삼성역', desc: '4번 출구에서 포스코사거리 방향으로 약 600m 직진 (도보 10분)' }
      ],
      bus: [
        { type: '간선(파랑)', nums: '360', stop: '한국무역센터, 삼성역 하차' },
        { type: '지선(초록)', nums: '3411, 2416', stop: '한국무역센터, 삼성역 하차' }
      ]
    },
    guro: {
      title: '구로 교육장 (CCCR 아카데미)',
      address: '서울특별시 구로구 디지털로33길 50, 벽산디지털밸리7차 2층 / 14층',
      postcode: '08377',
      phone: '02-3644-7355',
      fax: '02-3644-7351',
      naverMapLink: 'https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C33%EA%B8%B8%2050',
      // 🚀 실제 네이버 지도를 캡처한 이미지 파일로 나중에 교체해 주세요!
      mapImage: 'https://placehold.co/1000x400/e2e8f0/94a3b8?text=Map+Image+(Guro)',
      subway: [
        { line: '2호선', station: '구로디지털단지역', desc: '3번 출구에서 대림 방향으로 약 900m (도보 15분)' },
        { line: '7호선', station: '남구로역', desc: '1번 출구 이용' }
      ],
      bus: [
        { type: '지선(초록)', nums: '5616', stop: '디지털산업1단지 정류장 하차' },
        { type: '마을버스', nums: '구로09', stop: '에이스테크노타워 정류장 하차' }
      ]
    }
  };

  const currentData = locationData[activeTab];

  return (
    <SubLayout mainCategory="조합안내" subCategory="오시는 길">
      <div className="premium-location-wrapper">
        
        <section className="location-header-section">
          <p className="premium-lead">
            한국클라우드컴퓨팅연구조합 사무국 및 교육장 위치를 안내해 드립니다.
          </p>
          <div className="location-tabs">
            <button className={`loc-tab-btn ${activeTab === 'samsung' ? 'active' : ''}`} onClick={() => setActiveTab('samsung')}>🏢 삼성 사무국</button>
            <button className={`loc-tab-btn ${activeTab === 'guro' ? 'active' : ''}`} onClick={() => setActiveTab('guro')}>🎓 구로 교육장</button>
          </div>
        </section>

        {/* 🚀 2. 지도 이미지 & 오버레이 링크 영역 */}
        <section className="map-info-section fade-in-keyframe" key={activeTab}>
          
          <div className="map-image-container">
            <a href={currentData.naverMapLink} target="_blank" rel="noopener noreferrer" className="map-link-wrapper">
              
              {/* 여기에 진짜 지도처럼 보이는 이미지가 들어갑니다 */}
              <img src={currentData.mapImage} alt={`${currentData.title} 지도`} className="static-map-image" />
              
              {/* 마우스 오버 시 나타나는 세련된 클릭 유도 버튼 */}
              <div className="map-overlay">
                <span className="overlay-btn">🔍 네이버 지도 크게 보기</span>
              </div>
            </a>
          </div>

          <div className="address-bar">
            <div className="address-main">
              <span className="badge-loc">{currentData.title}</span>
              <h4 className="address-text">{currentData.address} <span className="postcode">(우: {currentData.postcode})</span></h4>
            </div>
            <div className="contact-details">
              <span><strong>TEL.</strong> {currentData.phone}</span>
              <span className="divider">|</span>
              <span><strong>FAX.</strong> {currentData.fax}</span>
            </div>
          </div>
        </section>

        {/* 3. 대중교통 안내 영역 (기존 유지) */}
        <section className="transport-section fade-in-keyframe" key={`trans-${activeTab}`}>
          <h4 className="transport-title">대중교통 안내</h4>
          <div className="transport-grid">
            <div className="trans-card">
              <div className="trans-icon subway-icon">🚇 지하철</div>
              <div className="trans-content">
                {currentData.subway.map((sub, idx) => (
                  <div key={idx} className="trans-row">
                    <span className={`line-badge line-${sub.line.charAt(0)}`}>{sub.line}</span>
                    <div className="trans-text"><strong>{sub.station}</strong><p>{sub.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="trans-card">
              <div className="trans-icon bus-icon">🚌 버스</div>
              <div className="trans-content">
                {currentData.bus.map((b, idx) => (
                  <div key={idx} className="trans-row">
                    <span className={`bus-badge ${b.type.includes('파랑') ? 'blue' : 'green'}`}>{b.type}</span>
                    <div className="trans-text"><strong>{b.nums}</strong><p>{b.stop}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </SubLayout>
  );
};

export default Location;