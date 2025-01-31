import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Layout from './Pages/Layout/Layout';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
