// src/pages/members/Service.jsx
import React from 'react';
import SubLayout from '../../layouts/SubLayout';
import './Members.css';

const Service = () => {
  return (
    <SubLayout mainCategory="회원공간" subCategory="온·오프라인">
      <div className="members-container">
        <h2 className="members-title">온·오프라인</h2>
        <div className="members-content">
          <div className="members-card">
            <p>회원사 간의 네트워킹 및 온/오프라인 지원 서비스에 대한 정보를 제공합니다.</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Service;