// src/pages/members/News.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import '../news/Board.css'; 
import './Members.css';

const News = () => {
  // 🚀 1. 전체 회원사 기본 정보 (소개글 포함)
  const companyInfo = [
    { name: '메가존클라우드(주)', intro: '아시아 최대 규모의 클라우드 관리 서비스 제공사(MSP)입니다.' },
    { name: '오케스트로(주)', intro: '지능형 클라우드 오케스트레이션 플랫폼을 제공하는 기업입니다.' },
    { name: '(주)틸론', intro: '가상화 기술 기반의 클라우드 컴퓨팅 및 메타버스 전문 기업입니다.' },
    { name: '이노뎁(주)', intro: 'AI 기반 스마트시티 영상 관제 및 데이터 플랫폼 기업입니다.' },
    { name: '(주)소프트웍스', intro: '(주)소프트웍스는 인공지능 기반 데이터 분석 및 클라우드 인프라 구축 전문 기업입니다. 공공 및 금융 분야에서 다수의 성공 사례를 보유하고 있습니다.' } // 👈 뉴스가 없는 테스트용 기업
  ];

  // 🚀 2. 회원사 뉴스 데이터
  const newsList = [
    { id: 10, company: '메가존클라우드(주)', title: '2026년 신규 클라우드 보안 솔루션 전격 출시', date: '2026-03-08', views: 342, isNew: true },
    { id: 9, company: '오케스트로(주)', title: '멀티 하이브리드 클라우드 플랫폼 3.0 업데이트 완료', date: '2026-03-05', views: 120, isNew: true },
    { id: 8, company: '(주)틸론', title: '메타버스 오피스 플랫폼 Vstation 글로벌 진출', date: '2026-02-28', views: 250, isNew: false },
    { id: 7, company: '메가존클라우드(주)', title: '글로벌 파트너십 체결을 통한 해외 시장 진출 본격화', date: '2026-02-15', views: 215, isNew: false },
    { id: 6, company: '이노뎁(주)', title: 'AI 기반 스마트시티 영상 관제 솔루션 선봬', date: '2026-02-10', views: 188, isNew: false },
    { id: 5, company: '메가존클라우드(주)', title: '클라우드 네이티브 세미나 성황리 종료', date: '2026-01-20', views: 180, isNew: false },
  ];

  // 🚀 3. 상태 관리 (검색 관련)
  const [searchType, setSearchType] = useState('title');
  const [searchInput, setSearchInput] = useState('');
  const [appliedSearch, setAppliedSearch] = useState({ type: 'all', keyword: '' });

  // 검색 버튼 클릭 시
  const handleSearch = () => {
    setAppliedSearch({ type: searchType, keyword: searchInput.trim() });
  };

  // 엔터 키 입력 시 검색 실행
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // 🚀 4. 검색 필터링 로직
  let filteredNews = newsList;
  let noNewsCompanyIntro = null; // 뉴스가 없을 때 띄울 회사 소개 데이터

  if (appliedSearch.keyword) {
    if (appliedSearch.type === 'company') {
      // 회사명으로 검색했을 때
      filteredNews = newsList.filter(news => news.company.includes(appliedSearch.keyword));
      
      // 검색 결과가 0건인데, 실제로 존재하는 회원사인지 확인
      if (filteredNews.length === 0) {
        const foundCompany = companyInfo.find(comp => comp.name.includes(appliedSearch.keyword));
        if (foundCompany) {
          noNewsCompanyIntro = foundCompany; // 소개글 세팅
        }
      }
    } else if (appliedSearch.type === 'title') {
      filteredNews = newsList.filter(news => news.title.includes(appliedSearch.keyword));
    }
  }

  return (
    <SubLayout mainCategory="회원공간" subCategory="회원소식">
      <div className="board-container">
        
        {/* 상단 검색 영역 */}
        <div className="board-search-wrap">
          <select 
            className="board-select" 
            value={searchType} 
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="title">제목</option>
            <option value="company">회사명</option>
          </select>
          <input 
            type="text" 
            className="board-search-input" 
            placeholder="검색어를 입력하세요 (예: 소프트웍스)" 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="board-search-btn" onClick={handleSearch}>검색</button>
        </div>

        {/* 🚀 5. 결과 화면 렌더링 (뉴스 O vs 뉴스 X + 회사소개 O vs 뉴스 X + 회사소개 X) */}
        
        {/* 케이스 A: 뉴스가 있을 때 (정상 게시판) */}
        {filteredNews.length > 0 ? (
          <>
            <div className="board-table-wrap">
              <table className="board-table">
                <colgroup>
                  <col style={{ width: '8%' }} /> 
                  <col style={{ width: '18%' }} /> 
                  <col style={{ width: 'auto' }} /> 
                  <col style={{ width: '12%' }} className="hide-on-mobile" /> 
                  <col style={{ width: '10%' }} className="hide-on-mobile" /> 
                </colgroup>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>회사명</th>
                    <th>제목</th>
                    <th className="hide-on-mobile">등록일</th>
                    <th className="hide-on-mobile">조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredNews.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
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
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pagination">
              <button className="page-btn active">1</button>
            </div>
          </>
        ) : (
          /* 케이스 B & C: 뉴스가 없을 때 */
          noNewsCompanyIntro ? (
            /* 케이스 B: 검색한 회사의 뉴스는 없지만 '회사 소개' 데이터는 있는 경우 (예: 소프트웍스 검색 시) */
            <div className="company-intro-fallback">
              <div className="fallback-icon">🏢</div>
              <h4 className="fallback-title">{noNewsCompanyIntro.name}</h4>
              <p className="fallback-desc">{noNewsCompanyIntro.intro}</p>
              <div className="fallback-notice">
                <span style={{ color: '#94a3b8', fontSize: '14px' }}>
                  아직 등록된 최신 소식이 없습니다.<br className="show-on-mobile"/>
                  조만간 유익한 소식으로 찾아뵙겠습니다!
                </span>
              </div>
            </div>
          ) : (
            /* 케이스 C: 아예 검색 결과도 없고 등록된 회원사도 아닌 경우 */
            <div className="board-table-wrap">
              <table className="board-table">
                <tbody>
                  <tr>
                    <td style={{ padding: '80px 0', textAlign: 'center', color: '#64748b' }}>
                      검색된 소식이 없습니다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        )}

      </div>
    </SubLayout>
  );
};

export default News;