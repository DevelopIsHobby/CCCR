import React from 'react';
import { FiBriefcase, FiCheckSquare, FiBookOpen, FiAward, FiHeadphones, FiFolder } from 'react-icons/fi';
import './QuickMenu.css';

const QuickMenu = () => {
  const quickServices = [
    { id: 1, title: '연구개발 현황', icon: <FiBriefcase />, link: '#register' },
    { id: 2, title: '미취업자 교육', icon: <FiCheckSquare />, link: '#cert' },
    { id: 3, title: '재직자 교육', icon: <FiBookOpen />, link: '#edu' },
    { id: 4, title: '온·오프라인 홍보', icon: <FiAward />, link: '#issue' },
    { id: 5, title: '뉴스레터 신청', icon: <FiHeadphones />, link: '#cs' },
    { id: 6, title: '회원사 가입안내', icon: <FiFolder />, link: '#archive' },
  ];

  return (
    <div className="quick-menu-widget">
      <ul className="quick-menu-grid">
        {quickServices.map((service) => (
          <li key={service.id} className="quick-menu-item">
            <a href={service.link}>
              <div className="icon-box">{service.icon}</div>
              <span className="service-title">{service.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickMenu;