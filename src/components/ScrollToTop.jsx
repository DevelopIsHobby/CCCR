// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // 현재 주소창의 경로를 감지

  useEffect(() => {
    // 경로가 바뀔 때마다 스크롤을 맨 위로 부드럽게(또는 즉시) 올림
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // 화면에 그릴 UI는 없으므로 null 반환
};

export default ScrollToTop;