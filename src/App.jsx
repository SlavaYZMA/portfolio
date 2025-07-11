import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/[lang]/about';
import Works from './pages/[lang]/works';
import InProgress from './pages/[lang]/in-progress';
import Essays from './pages/[lang]/essays';
import CV from './pages/[lang]/cv';
import Contacts from './pages/[lang]/contacts';
import PrivacyPolicy from './pages/[lang]/privacy-policy';
import MainLayout from './layouts/MainLayout';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/:lang" element={<About />} />
          <Route path="/:lang/about" element={<About />} />
          <Route path="/:lang/works" element={<Works />} />
          <Route path="/:lang/in-progress" element={<InProgress />} />
          <Route path="/:lang/essays" element={<Essays />} />
          <Route path="/:lang/cv" element={<CV />} />
          <Route path="/:lang/contacts" element={<Contacts />} />
          <Route path="/:lang/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default App;
