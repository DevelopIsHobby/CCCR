// src/pages/news/EventApply.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Board.css';

const EventApply = () => {
  // URL에서 행사 ID(번호)를 가져옵니다. 나중에 이 ID로 스프링부트에서 상세 정보를 조회합니다!
  const { id } = useParams();

  // 테스트용 가짜 데이터 (원래는 id를 이용해 서버에서 가져옵니다)
  const eventInfo = {
    title: '2026 CCCR 클라우드 네트워킹 데이 및 세미나',
    eventDate: '2026.04.15 (목) 14:00 ~ 17:00',
    location: '코엑스 컨퍼런스룸 401호'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 스프링부트로 데이터를 전송하는 로직이 들어갈 자리입니다!
    alert('사전등록 신청이 완료되었습니다.');
  };

  return (
    <SubLayout mainCategory="알림마당" subCategory="행사소식">
      <div className="board-container">
        
        <form onSubmit={handleSubmit}>
          {/* 1. 신청 행사 정보 영역 (읽기 전용) */}
          <section className="apply-section">
            <h3 className="apply-section-title">신청 행사 정보</h3>
            <table className="apply-table">
              <tbody>
                <tr>
                  <th>행사명</th>
                  <td style={{ fontWeight: '600', color: '#003a8c' }}>{eventInfo.title}</td>
                </tr>
                <tr>
                  <th>행사 일시</th>
                  <td>{eventInfo.eventDate}</td>
                </tr>
                <tr>
                  <th>행사 장소</th>
                  <td>{eventInfo.location}</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 2. 신청자 정보 입력 영역 */}
          <section className="apply-section">
            <h3 className="apply-section-title">신청자 정보</h3>
            <table className="apply-table">
              <tbody>
                <tr>
                  <th>이름 (필수)</th>
                  <td>
                    <input type="text" className="apply-input" placeholder="이름을 입력해 주세요" required />
                  </td>
                </tr>
                <tr>
                  <th>소속 (회사/기관명)</th>
                  <td>
                    <input type="text" className="apply-input" placeholder="소속을 입력해 주세요" />
                  </td>
                </tr>
                
                {/* 🚀 직급 추가 */}
                <tr>
                  <th>직급</th>
                  <td>
                    <input type="text" className="apply-input" placeholder="직급을 입력해 주세요" />
                  </td>
                </tr>

                <tr>
                  <th>연락처 (필수)</th>
                  <td>
                    <input type="tel" className="apply-input" placeholder="예: 010-1234-5678" required />
                  </td>
                </tr>
                <tr>
                  <th>이메일 (필수)</th>
                  <td>
                    <input type="email" className="apply-input" placeholder="예: cccr@cccr.or.kr" required />
                  </td>
                </tr>

                {/* 🚀 주차 필요 여부 추가 */}
                <tr>
                  <th>주차 필요 여부</th>
                  <td>
                    <div className="apply-radio-wrap">
                      <label className="apply-radio-label">
                        <input type="radio" name="parking" value="yes" className="apply-radio" />
                        <span>필요함 (차량 이용)</span>
                      </label>
                      <label className="apply-radio-label">
                        {/* 기본값으로 '필요 없음' 선택 처리 */}
                        <input type="radio" name="parking" value="no" className="apply-radio" defaultChecked />
                        <span>필요 없음 (대중교통 이용)</span>
                      </label>
                    </div>
                  </td>
                </tr>

                {/* 🚀 기타 의견 추가 */}
                <tr>
                  <th>기타 의견 및 질문</th>
                  <td>
                    <textarea 
                      className="apply-textarea" 
                      placeholder="행사 관련 사전 질문이나 기타 남기실 말씀을 자유롭게 적어주세요."
                    ></textarea>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </section>

          {/* 3. 개인정보 수집 동의 영역 */}
          <section className="apply-section">
            <h3 className="apply-section-title">개인정보 수집 및 이용 동의</h3>
            <div className="terms-box">
              한국전파진흥협회(이하 "협회")는 행사 사전등록 및 운영을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.<br/><br/>
              1. 수집하는 개인정보 항목: 이름, 소속, 연락처, 이메일<br/>
              2. 개인정보의 수집 및 이용 목적: 행사 본인 확인, 안내 사항 전달, 행사 관련 통계<br/>
              3. 개인정보의 보유 및 이용 기간: <strong>행사 종료 후 1년 이내 파기</strong><br/><br/>
              귀하는 개인정보 수집 및 이용에 동의하지 않을 권리가 있으나, 미동의 시 행사 사전등록이 제한될 수 있습니다.
            </div>
            <div className="terms-agree-wrap">
              <input type="checkbox" id="agreeTerms" required />
              <label htmlFor="agreeTerms">위 개인정보 수집 및 이용에 동의합니다. (필수)</label>
            </div>
          </section>

          {/* 4. 하단 버튼 영역 */}
          <div className="apply-btn-wrap">
            <Link to="/news/event" className="btn-cancel">취소</Link>
            <button type="submit" className="btn-submit">사전등록 완료</button>
          </div>
          
        </form>

      </div>
    </SubLayout>
  );
};

export default EventApply;