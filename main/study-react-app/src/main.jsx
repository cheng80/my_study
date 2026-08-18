import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  // 개발 환경에서만 StrictMode를 활성화하고, 배포 환경에서는 비활성됨. 개발 하면선 React의 잠재적인 문제를 조기에 발견 하기 위함
  // 모든 리엑트 페이지들, 기능들, 전부 이곳에서 가성의 Dom으로 랜더링 됩니다.
  <StrictMode>
    <App />
  </StrictMode>,
)
