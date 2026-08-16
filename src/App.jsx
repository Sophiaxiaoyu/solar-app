import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { History } from './pages/History';
import TermDetail from './pages/TermDetail';
import { SpiritualValue } from './pages/SpiritualValue';
import { PracticalValue } from './pages/PracticalValue';
import { TermStandards } from './pages/TermStandards';
import { ThemeToggle } from './components/ThemeToggle';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <ThemeToggle />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/term/:termName" element={<TermDetail />} />
            <Route path="/value/spiritual" element={<SpiritualValue />} />
            <Route path="/value/practical" element={<PracticalValue />} />
            <Route path="/term-standards" element={<TermStandards />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;