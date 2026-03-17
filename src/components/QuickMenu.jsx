// src/components/QuickMenu/QuickMenu.jsx
import React from 'react';
import { FiBriefcase, FiCheckSquare, FiBookOpen, FiAward, FiHeadphones, FiFolder } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // 🚀 페이지 이동을 위한 훅 추가
import './QuickMenu.css';

const QuickMenu = () => {
  const navigate = useNavigate(); // 🚀 네비게이트 함수 활성화

  // 🚀 사용자님이 요청하신 정확한 라우터 경로로 수정했습니다.
  // 뉴스레터는 특별히 '#newsletter'라는 임시 식별자를 줍니다.
  const quickServices = [
    { id: 1, title: '주요사업 현황', icon: <FiBriefcase />, link: '/business/rnd' },
    { id: 2, title: '미취업자 교육', icon: <FiCheckSquare />, link: '/academy/apply' },
    { id: 3, title: '재직자 교육', icon: <FiBookOpen />, link: '/academy/apply' },
    { id: 4, title: '온·오프라인 홍보', icon: <FiAward />, link: '/members/service' },
    { id: 5, title: '뉴스레터 신청', icon: <FiHeadphones />, link: '#newsletter' }, 
    { id: 6, title: '회원사 가입안내', icon: <FiFolder />, link: '/members/join' },
  ];

  // 🚀 클릭 이벤트를 통제하는 함수
  const handleMenuClick = (e, link) => {
    e.preventDefault(); // 기본 <a> 태그 이동 방지

    if (link === '#newsletter') {
      // 🚀 Header에게 "팝업 열어!" 라고 신호를 쏩니다 (커스텀 이벤트)
      window.dispatchEvent(new Event('openNewsletter'));
    } else {
      // 일반 메뉴는 해당 페이지로 이동하고 스크롤을 맨 위로 올립니다.
      navigate(link);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="qm-widget">
      <ul className="qm-grid">
        {quickServices.map((service) => (
          <li key={service.id} className="qm-item">
            {/* 🚀 href 대신 onClick 이벤트를 사용합니다 */}
            <a href={service.link} onClick={(e) => handleMenuClick(e, service.link)}>
              <div className="qm-icon-box">{service.icon}</div>
              <span className="qm-text">{service.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickMenu;