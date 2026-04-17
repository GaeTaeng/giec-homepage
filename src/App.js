import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import CompanyGreetingPage from './pages/CompanyGreetingPage';
import CompanyHistoryPage from './pages/CompanyHistoryPage';
import CompanyLocationPage from './pages/CompanyLocationPage';
import FreeBoardDetailPage from './pages/FreeBoardDetailPage';
import FreeBoardListPage from './pages/FreeBoardListPage';
import FreeBoardWritePage from './pages/FreeBoardWritePage';
import HomePage from './pages/HomePage';
import NoticeDetailPage from './pages/NoticeDetailPage';
import NoticeListPage from './pages/NoticeListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductHubPage from './pages/ProductHubPage';
import TechnologyPage from './pages/TechnologyPage';

const App = () => (
  <HashRouter>
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<Navigate to="/company/greeting" replace />} />
        <Route path="/company/greeting" element={<CompanyGreetingPage />} />
        <Route path="/company/history" element={<CompanyHistoryPage />} />
        <Route path="/company/location" element={<CompanyLocationPage />} />
        <Route path="/product" element={<ProductHubPage />} />
        <Route path="/product/:productSlug" element={<ProductDetailPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/board" element={<Navigate to="/board/notice" replace />} />
        <Route path="/board/notice" element={<NoticeListPage />} />
        <Route path="/board/notice/:postId" element={<NoticeDetailPage />} />
        <Route path="/board/free" element={<FreeBoardListPage />} />
        <Route path="/board/free/write" element={<FreeBoardWritePage />} />
        <Route path="/board/free/:postId" element={<FreeBoardDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default App;
