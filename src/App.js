import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu'; 
import ProductIntroduction from './components/ProductIntroduction';  // 기존의 ProductIntroduction 사용
import TechStatus from './components/TechStatus';
import CompanyInfo from './components/companyInfo/CompanyInfo';
import Board from './components/Board';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/company" element={<CompanyInfo />} />
          <Route path="/product" element={<ProductIntroduction />} /> {/* 기존 ProductIntroduction 컴포넌트 사용 */}
          <Route path="/tech" element={<TechStatus />} />
          <Route path="/board" element={<Board />} />
          <Route path="" element={<CompanyInfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
