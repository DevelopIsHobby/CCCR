// src/pages/news/Trend.jsx
import React, { useState, useEffect } from 'react'; // 🚀 useState, useEffect 추가
import SubLayout from '../../layouts/SubLayout';
import { Link } from 'react-router-dom';
import './Board.css'; 

const Trend = () => {
  // 🚀 1. 백엔드에서 받아올 데이터를 담을 빈 바구니 준비
  const [trendList, setTrendList] = useState([]);

  // 🚀 2. 화면이 켜질 때 딱 한 번, 스프링 부트(8080)에 데이터 요청하기
  useEffect(() => {
    fetch('http://localhost:8080/api/boards')
      .then((response) => response.json()) // "데이터 온 거 JSON으로 예쁘게 까봐!"
      .then((data) => {
        console.log("백엔드에서 온 데이터:", data);
        // 받아온 데이터를 바구니에 담기 (단, TREND 카테고리만 필터링하면 더 좋습니다)
        const trendData = data.filter(item => item.category === 'TREND');
        setTrendList(trendData);
      })
      .catch((error) => console.error("데이터 가져오기 실패:", error));
  }, []);

  return (
    <SubLayout mainCategory="알림마당" subCategory="기술동향">
      <div className="board-container">
        
        {/* 상단 검색 영역 (생략, 기존과 동일) */}
        <div className="board-search-wrap">
          <select className="board-select"><option>제목</option></select>
          <input type="text" className="board-search-input" placeholder="검색어를 입력하세요" />
          <button className="board-search-btn">검색</button>
        </div>

        {/* 게시판 테이블 영역 */}
        <div className="board-table-wrap">
          <table className="board-table">
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: 'auto' }} />
              <col style={{ width: '10%' }} className="hide-on-mobile" />
              <col style={{ width: '15%' }} />
              <col style={{ width: '10%' }} />
            </colgroup>
            <thead>
              <tr>
                <th>NO</th>
                <th>제목</th>
                <th className="hide-on-mobile">첨부</th>
                <th>등록일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {/* 🚀 3. 바구니에 담긴 백엔드 데이터로 화면 그리기 */}
              {trendList.length > 0 ? (
                trendList.map((item) => (
                  <tr key={item.id}>
                    
                    {/* 1번 칸: NO */}
                    <td>{item.id}</td>
                    
                    {/* 2번 칸: 제목 (댓글 수 포함) */}
                    <td className="title-col">
                      <Link to={`/news/trend/${item.id}`}>
                        {item.title}
                        {item.comments && item.comments.length > 0 && (
                          <span style={{ color: '#ea580c', marginLeft: '6px', fontSize: '14px', fontWeight: 'bold' }}>
                            [{item.comments.length}]
                          </span>
                        )}
                      </Link>
                    </td>

                    {/* 🚀 3번 칸: 첨부 (제가 빼먹었던 바로 그 부분입니다!) */}
                    <td className="hide-on-mobile">
                      {item.files && item.files.length > 0 && <span className="file-icon">💾</span>}
                    </td>

                    {/* 4번 칸: 등록일 */}
                    <td>{item.createdAt.substring(0, 10)}</td>
                    
                    {/* 5번 칸: 조회수 */}
                    <td>{item.views}</td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ padding: '40px 0', color: '#94a3b8', textAlign: 'center' }}>
                    게시글이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 하단 페이지네이션 (생략) */}
      </div>
    </SubLayout>
  );
};

export default Trend;