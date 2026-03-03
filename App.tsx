import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Benefits from './pages/Benefits';
import TaxBenefits from './pages/TaxBenefits';
import SpecialMachinery from './pages/SpecialMachinery';
import PassengerCars from './pages/PassengerCars';
import Trucks from './pages/Trucks';
import RealEstate from './pages/RealEstate';
import Finansirovanie from './pages/Finansirovanie';
import AlternativaKreditu from './pages/AlternativaKreditu';
import DengiDlyaBiznesa from './pages/DengiDlyaBiznesa';
import CalculatorPage from './pages/CalculatorPage';
import Contacts from './pages/Contacts';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Consent from './pages/Consent';
import Apply from './pages/Apply';
import { LeadModalProvider } from './components/LeadModal';
import { CookieBanner } from './components/CookieBanner';

// Component to handle scrolling behavior
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash, scroll to it smoothly
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If no hash, scroll to top instantly
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <LeadModalProvider>
      <div className="antialiased text-slate-900 bg-white">
        <ScrollToTop />
        <CookieBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/tax-benefits" element={<TaxBenefits />} />
          <Route path="/passenger-cars" element={<PassengerCars />} />
          <Route path="/cargo-transport" element={<Trucks />} />
          <Route path="/special-machinery" element={<SpecialMachinery />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/finansirovanie-biznesa" element={<Finansirovanie />} />
          <Route path="/alternativa-kreditu" element={<AlternativaKreditu />} />
          <Route path="/dengi-dlya-biznesa" element={<DengiDlyaBiznesa />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/data-processing" element={<Consent />} />
        </Routes>
      </div>
    </LeadModalProvider>
  );
}

export default App;