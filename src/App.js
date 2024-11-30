import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import ProductIntroduction from './components/ProductIntroduction';
import Technology from './components/Technology';
import CompanyInfo from './components/companyInfo/CompanyInfo';
import Board from './components/Board';
import Footer from './components/Footer';
import CompanyHistory from './components/companyInfo/CompanyHistory';
import Menu_v2 from './components/Menu_v2';
import { useState } from 'react';

const App = () => {
  const [isNewMenu, setIsNewMenu] = useState(true);

  return (
    <Router basename="/giec-homepage">
      <div>
        {isNewMenu ? (
          <Menu_v2 isNewMenu={isNewMenu} setIsNewMenu={setIsNewMenu} />
        ) : (
          <Menu isNewMenu={isNewMenu} setIsNewMenu={setIsNewMenu} />
        )}

        <Routes>
          <Route path="/" element={<CompanyInfo />} />
          <Route path="/company" element={<CompanyInfo />} />
          <Route path="/company/history" element={<CompanyHistory />} />
          <Route path="/product" element={<ProductIntroduction />} />
          <Route path="/tech" element={<Technology />} />
          <Route path="/board" element={<Board />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
