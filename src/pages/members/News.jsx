// src/pages/members/News.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import '../news/Board.css'; 
import './Members.css';

const News = () => {
  // 🚀 1. 탭 상태 관리 ('news' 또는 'intro')
  const [activeTab, setActiveTab] = useState('news');

  // 🚀 2. 데이터 세팅
  // [회사소개 데이터]
  const companyList = [
    { id: 5, name: '메가존클라우드(주)', logo: 'https://placehold.co/120x60/f8fafc/64748b?text=MEGAZONE', intro: '아시아 최대 규모의 클라우드 관리 서비스 제공사(MSP)입니다. 클라우드 도입부터 운영까지 엔드투엔드 서비스를 제공합니다.' },
    { id: 4, name: '오케스트로(주)', logo: 'https://placehold.co/120x60/f8fafc/64748b?text=OKESTRO', intro: '지능형 클라우드 오케스트레이션 플랫폼을 제공하는 기업으로, 프라이빗부터 멀티 하이브리드 클라우드 환경을 통합 관리합니다.' },
    { id: 3, name: '(주)틸론', logo: 'https://placehold.co/120x60/f8fafc/64748b?text=TILON', intro: '가상화 기술 기반의 클라우드 컴퓨팅 및 메타버스 전문 기업입니다.' },
    { id: 2, name: '이노뎁(주)', logo: 'https://placehold.co/120x60/f8fafc/64748b?text=INNODEP', intro: 'AI 기반 스마트시티 영상 관제 및 데이터 플랫폼 기업입니다.' },
    { id: 1, name: '(주)소프트웍스', logo: 'https://placehold.co/120x60/f8fafc/64748b?text=SOFTWORKS', intro: '인공지능 기반 데이터 분석 및 클라우드 인프라 구축 전문 기업입니다. 공공 및 금융 분야에서 다수의 성공 사례를 보유하고 있습니다.' }
  ];

  // [회사뉴스 데이터]
  const newsList = [
    { id: 10, company: '메가존클라우드(주)', title: '2026년 신규 클라우드 보안 솔루션 전격 출시', date: '2026-03-08', views: 342, isNew: true },
    { id: 9, company: '오케스트로(주)', title: '멀티 하이브리드 클라우드 플랫폼 3.0 업데이트 완료', date: '2026-03-05', views: 120, isNew: true },
    { id: 8, company: '(주)틸론', title: '메타버스 오피스 플랫폼 Vstation 글로벌 진출', date: '2026-02-28', views: 250, isNew: false },
    { id: 7, company: '메가존클라우드(주)', title: '글로벌 파트너십 체결을 통한 해외 시장 진출 본격화', date: '2026-02-15', views: 215, isNew: false },
    { id: 6, company: '이노뎁(주)', title: 'AI 기반 스마트시티 영상 관제 솔루션 선봬', date: '2026-02-10', views: 188, isNew: false },
    { id: 5, company: '메가존클라우드(주)', title: '클라우드 네이티브 세미나 성황리 종료', date: '2026-01-20', views: 180, isNew: false },
  ];

  // 🚀 3. 검색 상태 관리
  const [searchType, setSearchType] = useState('company'); 
  const [searchInput, setSearchInput] = useState('');
  const [appliedSearch, setAppliedSearch] = useState({ type: 'all', keyword: '' });

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setSearchInput('');
    setAppliedSearch({ type: 'all', keyword: '' });
    setSearchType(tabName === 'news' ? 'title' : 'company');
  };

  const handleSearch = () => {
    setAppliedSearch({ type: searchType, keyword: searchInput.trim() });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  // 🚀 4. 검색 필터링 로직 적용
  let filteredNews = newsList;
  let filteredCompanies = companyList;

  if (appliedSearch.keyword) {
    if (activeTab === 'news') {
      if (appliedSearch.type === 'company') {
        filteredNews = newsList.filter(news => news.company.includes(appliedSearch.keyword));
      } else if (appliedSearch.type === 'title') {
        filteredNews = newsList.filter(news => news.title.includes(appliedSearch.keyword));
      }
    } else if (activeTab === 'intro') {
      if (appliedSearch.type === 'company') {
        filteredCompanies = companyList.filter(comp => comp.name.includes(appliedSearch.keyword));
      } else if (appliedSearch.type === 'content') {
        filteredCompanies = companyList.filter(comp => comp.intro.includes(appliedSearch.keyword));
      }
    }
  }

  return (
    <SubLayout mainCategory="회원공간" subCategory="회원소식">
      <div className="board-container">
        
        <div className="members-tab-menu">
          <button 
            className={`members-tab-item ${activeTab === 'news' ? 'active' : ''}`} 
            onClick={() => handleTabChange('news')}
          >
            회사뉴스
          </button>
          <button 
            className={`members-tab-item ${activeTab === 'intro' ? 'active' : ''}`} 
            onClick={() => handleTabChange('intro')}
          >
            회사소개
          </button>
        </div>

        <div className="board-search-wrap">
          <select 
            className="board-select" 
            value={searchType} 
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="company">회사명</option>
            {activeTab === 'news' ? (
              <option value="title">제목</option>
            ) : (
              <option value="content">소개내용</option>
            )}
          </select>
          <input 
            type="text" 
            className="board-search-input" 
            placeholder="검색어를 입력하세요" 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="board-search-btn" onClick={handleSearch}>검색</button>
        </div>

        {/* 🚀 5. 결과 테이블 렌더링 */}
        <div className="board-table-wrap">
            
            {/* --- [A] 회사뉴스 탭 --- */}
            {activeTab === 'news' && (
              <table className="board-table news-tab-table">
                <colgroup>
                  <col style={{ width: '8%' }} className="hide-on-mobile" /> 
                  <col style={{ width: '18%' }} className="mobile-company-col" /> 
                  <col style={{ width: 'auto' }} className="mobile-company-col" /> 
                  <col style={{ width: '12%' }} className="hide-on-mobile" /> 
                  <col style={{ width: '10%' }} className="hide-on-mobile" /> 
                </colgroup>
                <thead>
                  <tr>
                    <th className="hide-on-mobile">NO</th>
                    <th>회사명</th>
                    <th>제목</th>
                    <th className="hide-on-mobile">등록일</th>
                    <th className="hide-on-mobile">조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredNews.length > 0 ? (
                    filteredNews.map((item) => (
                      <tr key={item.id}>
                        <td className="hide-on-mobile">{item.id}</td>
                        <td style={{ color: '#475569', fontWeight: '500' }}>{item.company}</td>
                        <td className="title-col">
                          <Link to={`/members/news/${item.id}`}>
                            {item.title}
                            {item.isNew && <span className="new-badge" style={{ marginLeft: '8px' }}>N</span>}
                          </Link>
                        </td>
                        <td className="hide-on-mobile">{item.date}</td>
                        <td className="hide-on-mobile">{item.views}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" style={{ padding: '80px 0', textAlign: 'center', color: '#64748b' }}>
                        등록된 뉴스 소식이 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}

            {/* --- [B] 회사소개 탭 --- */}
            {activeTab === 'intro' && (
              <table className="board-table intro-tab-table">
                <colgroup>
                  <col style={{ width: '6%' }} className="hide-on-mobile" /> 
                  <col style={{ width: '15%' }} className="hide-on-mobile" /> 
                  <col style={{ width: '20%' }} className="mobile-company-col" /> 
                  <col style={{ width: 'auto' }} /> 
                </colgroup>
                <thead>
                  <tr>
                    <th className="hide-on-mobile">NO</th>
                    <th className="hide-on-mobile">로고</th>
                    <th>회사명</th>
                    <th>기업 소개</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCompanies.length > 0 ? (
                    filteredCompanies.map((comp) => (
                      <tr key={comp.id}>
                        <td className="hide-on-mobile">{comp.id}</td>
                        <td className="hide-on-mobile">
                          <img src={comp.logo} alt={`${comp.name} 로고`} className="company-logo-img" />
                        </td>
                        <td style={{ color: '#0f172a', fontWeight: '700' }}>{comp.name}</td>
                        <td style={{ textAlign: 'left', padding: '20px', lineHeight: '1.6', color: '#475569', wordBreak: 'keep-all' }}>
                          {comp.intro}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" style={{ padding: '80px 0', textAlign: 'center', color: '#64748b' }}>
                        검색된 회원사가 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}

        </div>

        <div className="pagination">
          <button className="page-btn active">1</button>
        </div>

      </div>
    </SubLayout>
  );
};

export default News;