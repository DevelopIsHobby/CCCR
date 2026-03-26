디렉토리 구조
src/
├── components/
│   ├── Header.jsx          
│   ├── Header.css  
│   ├── MainCarousel.jsx     // 페이지 상단 메인 배너  
│   ├── MainCarousel.css  
│   ├── QuickMenu.jsx          
│   ├── QuickMenu.css            
│   ├── BoardSection.jsx     // 공지사항, 행사소식, TabIR, 주요일정(달력, 다가오는 일정)   
│   ├── BoardSection.css 
│   ├── EduSection.jsx        // 교육 프로그램(CCCR 아카데미 링크로 이동)
│   ├── EduSection.css              
│   ├── MemberSpace.jsx        // 최신 뉴스(클라우드,AI,데이터센터, 양자, 통신, 자율주행 --> 네이버 뉴스 API로 가져올 것)
│   ├── MemberSpace.css                
│   ├── Footer.jsx          
│   └── Footer.css         
│
├── layouts/
│   ├── SubLayout.jsx       
│   └── SubLayout.css       
│
├── pages/
│   ├── business/
│   │   ├── Business.css   
│   │   ├── Rnd.jsx         
│   │   ├── Standard.jsx    
│   │   ├── Edu.jsx    
│   │   ├── Cooperation.jsx 
│   │   ├── Pr.jsx          
│   │   └── Support.jsx 
│   │
│   ├── academy/            
│   │   ├── Academy.css     
│   │   ├── Training.jsx    // 교육과정 소개
│   │   ├── Apply.jsx       // 재직자 교육, 미취업자 교육 탭으로 나눠서 신청
│   │   ├── Schedule.jsx    // 교육 일정에 따른 교육용 달력
│   │   ├── Inquiry.jsx     // 교육 사업별 담당자 연락처
│   │   └── Suggest.jsx    // 제안자 정보(기업/기관명, 담당자 성명, 직급, 연락처, 이메일) + 제안서 등록(제안 교육명, 제안서 첨부, 기타 요청사항, 개인정보 수집이용동의)
│   │
│   ├── news/            
│   │   ├── Board.css       
│   │   ├── Notice.jsx       // 공지사항 게시판(번호, 제목, 첨부, 작성자, 작성일, 조회수) + 검색기능(제목/내용/작성자)
│   │   ├── NoticeDetail.jsx    // 공지사항 상세내용(제목, 작성자, 작성일, 조회수, 첨부파일)
│   │   ├── Event.jsx        // 행사 게시판(상태, 행사명, 신청기간, 행사일, 사전등록 신청폼) + 검색(행사명, 상태)
│   │   ├── EventApply.jsx      // 신청행사정보(행사명, 행사일시, 행사장소) + 신청자 정보(이름, 소속, 직급, 연락처, 이메일, 주차필요여부, 기타의견및질문, 개인정보수집및이용동의서)
│   │   ├── EventDetail.jsx    // 상태, 제목, 신청기간, 행사일, 조회수, 첨부파일
│   │   ├── Trend.jsx    // 게시판(NO, 제목, 첨부, 등록일, 조회수) + 검색
│   │   ├── TrendDetail.jsx    // 게시판(제목, 작성일, 조회수, 첨부파일)
│   │   ├── Law.jsx    // 게시판(분류, 제목, 첨부, 등록일)
│   │   ├── LawDetail.jsx    // 게시판(제목, 소관부처, 작성일, 조회수)
│   │   ├── NewsLetter.jsx  // 게시판(번호, 제목, 등록일, 조회수) + 검색
│   │   ├── NewsLetterDetail.jsx  // 게시판(제목, 등록일, 조회수)
│   │   ├── TabIR.jsx    // 게시판(번호, 제목, 첨부, 작성일, 조회수) + 검색
│   │   ├── TabIRDetail.jsx    // 제목, 작성일, 조회수, 첨부파일
│   │   ├── Policy.jsx    // 탭구분(전체,과학기술정보통신부,산업통상부, 중소벤처기업부, 기타정부부처, NIPA, NIA) + 게시판(상태, 제목, 신청기간, 작성자) + 검색
│   │   ├── PolicyDetail.jsx    // 제목, 작성자, 신청기간, 작성일, 첨부파일
│   │   └── Latest.jsx  // 탭(전체, 클라우드, 데이터센터, AI, 양자, 통신, 자율주행, 로봇) + 게시판(분야, 언론사, 기사제목, 등록일) + 검색
│   │ 
│   ├── members/            
│   │   ├── Members.css       
│   │   ├── Join.jsx    
│   │   ├── Info.jsx  
│   │   ├── News.jsx      // 탭(회사뉴스, 회사소개) + 회사뉴스 게시판(NO, 회사명, 제목, 등록일, 조회수) + 회사소개 게시판(NO, 로고, 회사명, 기업소개)
│   │   ├── Pr.jsx    // 탭(전체, 클라우드, SaaS/SW, 보안/네트워크, AI/빅데이터) + 카드(로고, 회사명, 솔루션명, 설명, 태그) + 검색
│   │   └── Service.jsx    
│   │ 
│   ├── news/            
│   │   ├── About.css       
│   │   ├── Greeting.jsx    
│   │   ├── History.jsx    
│   │   ├── Presidents.jsx    
│   │   ├── Directors.jsx      
│   │   ├── Organization.jsx    
│   │   ├── Location.jsx    
│   │   └── CI.jsx  
│   │ 
│   └── auth/            
│       ├── Auth.css        
│       ├── Login.jsx      
│       ├── Join.jsx    
│       ├── JoinGeneral.jsx        # 일반회원가입
│       ├── JoinCorporation.jsx    # 기업회원가입
│       ├── JoinAssociation.jsx    # 회원사 가입
│       └── TermsModal.jsx         # 개인정보처리방침 등 팜업
│
└── App.js                  
