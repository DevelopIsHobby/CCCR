// src/pages/news/TrendDetail.jsx
import React, { useState, useEffect } from 'react'; // 🚀 훅 추가
import { useParams, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const TrendDetail = () => {
  const { id } = useParams(); // URL에서 글 번호(id) 가져오기
  
  // 🚀 백엔드에서 받아올 진짜 데이터를 담을 바구니 (처음엔 텅 빈 상태)
  const [trendData, setTrendData] = useState(null);

  // 🚀 화면이 켜질 때, 백엔드에 "id번 글 하나만 줘!" 라고 요청하기
  useEffect(() => {
    fetch(`http://localhost:8080/api/boards/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("받아온 상세 데이터:", data);
        setTrendData(data); // 바구니에 담기
      })
      .catch((error) => console.error("상세 데이터 가져오기 실패:", error));
  }, [id]);

  // 데이터가 아직 안 왔으면 로딩 화면 보여주기
  if (!trendData) return <div style={{textAlign: 'center', padding: '100px'}}>데이터를 불러오는 중입니다...</div>;

  return (
    <SubLayout mainCategory="알림마당" subCategory="기술동향">
      <div className="board-container">
        
        <div className="board-detail-wrap">
          
          {/* 1. 제목 및 메타 정보 */}
          <div className="board-detail-header">
            <h2 className="board-detail-title">{trendData.title}</h2>
            <div className="board-detail-info">
              {/* 날짜 포맷 자르기 */}
              <span><strong>등록일</strong> : {trendData.createdAt.substring(0, 10)}</span>
              <span><strong>조회수</strong> : {trendData.views}</span>
            </div>
          </div>

          {/* 2. 첨부파일 영역 (데이터가 있을 때만 렌더링) */}
          {trendData.files && trendData.files.length > 0 && (
            <div className="board-detail-file">
              <span style={{ fontWeight: '600', color: '#333' }}>💾 첨부파일 : </span>
              {trendData.files.map((file, idx) => (
                <a href="#none" key={idx} style={{ marginLeft: '8px' }}>
                  {file.originalFileName} ({file.fileSize}){idx < trendData.files.length - 1 ? ',' : ''}
                </a>
              ))}
            </div>
          )}

          {/* 3. 본문 영역 */}
          <div 
            className="board-detail-content"
            dangerouslySetInnerHTML={{ __html: trendData.content }}
          ></div>

          {/* 4. 댓글 영역 (보너스!) */}
          {trendData.comments && trendData.comments.length > 0 && (
            <div style={{ padding: '20px 40px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
              <h4 style={{ marginBottom: '15px', color: '#0f172a' }}>💬 댓글 ({trendData.comments.length})</h4>
              {trendData.comments.map(comment => (
                <div key={comment.id} style={{ marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px dashed #cbd5e1' }}>
                  <strong>{comment.author}</strong> <span style={{fontSize: '12px', color: '#94a3b8'}}>{comment.createdAt.substring(0, 10)}</span>
                  <p style={{ margin: '5px 0 0 0', color: '#475569' }}>{comment.content}</p>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* 5. 하단 목록 버튼 */}
        <div className="board-detail-btns">
          <Link to="/news/trend" className="btn-list">목록으로 돌아가기</Link>
        </div>

      </div>
    </SubLayout>
  );
};

export default TrendDetail;