import React from 'react';
import { FiBriefcase, FiCheckSquare, FiBookOpen, FiAward, FiHeadphones, FiFolder } from 'react-icons/fi';
import './QuickMenu.css';

const QuickMenu = () => {
  // 짝수(6개)로 맞추어 2열 배치 최적화
  const quickServices = [
    { id: 1, title: '기업/기관 등록', icon: <FiBriefcase />, link: '#register' },
    { id: 2, title: '인증 안내', icon: <FiCheckSquare />, link: '#cert' },
    { id: 3, title: '교육 신청', icon: <FiBookOpen />, link: '#edu' },
    { id: 4, title: '증명서 발급', icon: <FiAward />, link: '#issue' },
    { id: 5, title: '고객지원', icon: <FiHeadphones />, link: '#cs' },
    { id: 6, title: '자료실', icon: <FiFolder />, link: '#archive' },
  ];

  return (
    <div className="quick-menu-widget">
      <div className="quick-menu-header">
        <h2>자주 찾는 서비스</h2>
      </div>
      
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