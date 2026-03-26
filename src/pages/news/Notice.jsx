// src/pages/news/Notice.jsx
import React, { useState, useEffect } from 'react'; // 🚀 1. 추가
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const Notice = () => {
  // 🚀 2. 바구니 준비
  const [noticeList, setNoticeList] = useState([]);

  // 🚀 3. 백엔드에서 데이터 가져오기 (주소 끝에 ?category=NOTICE 주목!)
  useEffect(() => {
    fetch('http://localhost:8080/api/boards?category=NOTICE')
      .then((response) => response.json())
      .then((data) => {
        setNoticeList(data); // 이제 백엔드에서 필터링해서 주니까 바로 담으면 끝!
      })
      .catch((error) => console.error("데이터 가져오기 실패:", error));
  }, []);

  return (
    <SubLayout mainCategory="알림마당" subCategory="공지사항">
      <div className="board-container">
        
        {/* 상단 검색 영역 */}
        <div className="board-search-wrap">
          <select className="board-select">
            <option value="title">제목</option>
            <option value="content">내용</option>
            <option value="author">작성자</option>
          </select>
          <input type="text" className="board-input" placeholder="검색어를 입력하세요" />
          <button className="board-search-btn">검색</button>
        </div>

        {/* 게시판 테이블 */}
        <div className="board-table-wrap">
          <table className="board-table">
            <colgroup>
              <col style={{ width: '10%' }} /> 
              <col style={{ width: 'auto' }} /> 
              <col style={{ width: '8%' }} className="hide-on-mobile" />  
              <col style={{ width: '12%' }} className="hide-on-mobile" /> 
              <col style={{ width: '15%' }} /> 
              <col style={{ width: '10%' }} className="hide-on-mobile" /> 
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th className="hide-on-mobile">첨부</th>
                <th className="hide-on-mobile">작성자</th>
                <th>작성일</th>
                <th className="hide-on-mobile">조회수</th>
              </tr>
            </thead>
            <tbody>
              {/* 🚀 4. 화면 그리기 */}
              {noticeList.length > 0 ? (
                noticeList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td className="title-col">
                      <Link to={`/news/notice/${item.id}`}>
                        {item.title}
                        {/* 댓글 수 표시 */}
                        {item.comments && item.comments.length > 0 && (
                          <span style={{ color: '#ea580c', marginLeft: '6px', fontSize: '14px', fontWeight: 'bold' }}>
                            [{item.comments.length}]
                          </span>
                        )}
                      </Link>
                    </td>
                    <td className="hide-on-mobile">
                      {item.files && item.files.length > 0 && <span className="file-icon">💾</span>}
                    </td>
                    <td>{item.author}</td>
                    <td>{item.createdAt.substring(0, 10)}</td>
                    <td>{item.views}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ padding: '40px 0', color: '#94a3b8' }}>등록된 공지사항이 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 하단 페이지네이션 */}
        <div className="pagination">
          <button className="page-btn">&lt;&lt;</button>
          <button className="page-btn">&lt;</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">&gt;</button>
          <button className="page-btn">&gt;&gt;</button>
        </div>

      </div>
    </SubLayout>
  );
};

export default Notice;