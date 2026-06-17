import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { NotFoundPage, SitemapPage } from './pages/RoutePages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sitemap" element={<SitemapPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
          {/* 404 Route */}
  <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
