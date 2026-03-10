import React from 'react';
import { Link } from 'react-router-dom';
import SubLayout from '../../layouts/SubLayout';
import './Members.css'; // 🚀 기존에 있던 Member.css를 그대로 사용합니다!

const Join = () => { // 🚀 컴포넌트 이름도 Join으로 변경
  return (
    <SubLayout mainCategory="회원공간" subCategory="가입안내">
      <div className="guide-layout-wrapper">
        <div className="guide-container">
          
          <div className="guide-welcome-header">
            <span className="welcome-badge">JOIN ASSOCIATION</span>
            <p className="welcome-main-text">
              대한민국 클라우드 산업의 미래를 <br />
              함께 이끌어갈 <strong>기업 및 기관</strong>을 모십니다.
            </p>
            <p className="welcome-sub-text">
              한국클라우드컴퓨팅연구조합 회원사 가입 자격 및 혜택 안내입니다.
            </p>
          </div>
          {/* 1. 회원 자격 및 회비 안내 (테이블) */}
          <section className="guide-section">
            <h3 className="guide-section-title">회원 자격 및 회비 안내</h3>
            <div className="table-responsive">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th className="th-type">회원 구분</th>
                    <th className="th-target">가입 대상</th>
                    <th className="th-fee">가입비</th>
                    <th className="th-fee">연회비</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan="4" className="td-highlight"><strong>정회원</strong></td>
                    <td className="td-left"><strong>임원사</strong> (이사회 선임)</td>
                    <td><strong>200만원</strong> 이상</td>
                    <td><strong>300만원</strong> 이상</td>
                  </tr>
                  <tr>
                    <td className="td-left"><strong>일반회원사</strong> (대기업)</td>
                    <td>100만원</td>
                    <td>100만원</td>
                  </tr>
                  <tr>
                    <td className="td-left"><strong>일반회원사</strong> (중소기업)</td>
                    <td>50만원</td>
                    <td>50만원</td>
                  </tr>
                  <tr>
                    <td className="td-left"><strong>대학 및 연구소</strong></td>
                    <td className="fee-exempt">면제</td>
                    <td className="fee-exempt">면제</td>
                  </tr>
                  <tr>
                    <td className="td-highlight"><strong>준회원</strong></td>
                    <td colSpan="3" className="td-left associate-desc">
                      조합 주도 과제에 참여하는 기업 및 기관은 <strong>별도 가입절차 및 가입비 없이</strong> 조합 회원으로 자동 가입됩니다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 2. 가입 절차 (가로 스텝바) */}
          <section className="guide-section bg-gray">
            <h3 className="guide-section-title">가입 절차</h3>
            <div className="process-bar-wrap">
              <div className="process-step">
                <div className="process-icon">📄</div>
                <div className="process-num">STEP 01</div>
                <div className="process-name">관련서류 제출</div>
              </div>
              <div className="process-arrow">&gt;</div>
              <div className="process-step">
                <div className="process-icon">💳</div>
                <div className="process-num">STEP 02</div>
                <div className="process-name">가입비 및 연회비 입금</div>
              </div>
              <div className="process-arrow">&gt;</div>
              <div className="process-step">
                <div className="process-icon">🤝</div>
                <div className="process-num">STEP 03</div>
                <div className="process-name">조합 승인</div>
              </div>
              <div className="process-arrow">&gt;</div>
              <div className="process-step">
                <div className="process-icon">✅</div>
                <div className="process-num">STEP 04</div>
                <div className="process-name">회원번호 부여</div>
              </div>
            </div>
          </section>

          {/* 3. 제출 서류 안내 */}
          <section className="guide-section">
            <h3 className="guide-section-title">가입 시 제출 서류</h3>
            <div className="doc-box">
              <ul className="doc-list">
                <li><span className="check-icon">✓</span> 가입신청서 (소정 양식) <button className="download-btn">양식 다운로드</button></li>
                <li><span className="check-icon">✓</span> 법인등기부등본 1부</li>
                <li><span className="check-icon">✓</span> 사업자등록증 사본 1부</li>
                <li><span className="check-icon">✓</span> 대표자 이력서 1부 (증명사진 또는 인쇄된 사진 포함)</li>
                <li><span className="check-icon">✓</span> 회사소개 브로슈어 1부</li>
              </ul>
              <div className="doc-notice">
                <p>※ 우편 송부 또는 직접 방문 제출 부탁드립니다. (온라인 가입 시 일부 파일 첨부 가능)</p>
                <p>※ 임원사 희망 기관은 연구조합 담당자에게 개별 문의해 주시기 바랍니다.</p>
              </div>
            </div>
          </section>

          {/* 4. 입금 계좌 및 문의처 */}
          <section className="guide-section flex-cards">
            <div className="info-card bank-card">
              <div className="info-icon">🏦</div>
              <h4>가입비 및 연회비 입금계좌</h4>
              <div className="info-content">
                <p className="bank-name">우리은행</p>
                <p className="bank-account">1005-901-454240</p>
                <p className="bank-holder"><strong>예금주:</strong> 한국클라우드컴퓨팅연구조합</p>
              </div>
            </div>
            <div className="info-card contact-card">
              <div className="info-icon">📞</div>
              <h4>문의처</h4>
              <div className="info-content">
                <p><strong>담당자 :</strong> 조합회원 입회 담당자</p>
                <p><strong>주소 :</strong> 서울특별시 강남구 논현로 422 키움YES저축은행 7층</p>
                <p className="contact-numbers">
                  <span><strong>TEL.</strong> 02-2052-0156</span>
                  <span className="divider">|</span>
                  <span><strong>FAX.</strong> 02-2052-0158</span>
                </p>
                <p><strong>E-mail :</strong> <a href="mailto:admin@cccr.or.kr">admin@cccr.or.kr</a></p>
              </div>
            </div>
          </section>

          {/* 5. 하단 버튼 */}
          <div className="guide-footer-btn">
            {/* 🚀 경로를 새롭게 만들 회원사 가입 폼으로 연결합니다! */}
            <Link to="/auth/joinassociation" className="auth-btn">회원사 가입 신청하기</Link>
          </div>

        </div>
      </div>
    </SubLayout>
  );
};

export default Join;