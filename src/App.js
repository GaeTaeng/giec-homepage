import { useState } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Board from './components/Board';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Menu_v2 from './components/Menu_v2';
import ProductIntroduction from './components/ProductIntroduction';
import Technology from './components/Technology';
import CompanyHistory from './components/companyInfo/CompanyHistory';
import CompanyInfo from './components/companyInfo/CompanyInfo';

const App = () => {
  const [isNewMenu, setIsNewMenu] = useState(true);

  return (
    <Router>
      <div >
        <Menu_v2 isNewMenu={isNewMenu} setIsNewMenu={setIsNewMenu} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
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