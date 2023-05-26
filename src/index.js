import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './index.scss';

import Cheader from './components/parts/Cheader';
import Homepage from './components/view/homepage';
import Contact from './components/view/contact';
import CaseStudies from './components/view/caseStudies';
import Adrenaline from './components/view/caseStudy/adrenaline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Cheader />
    <main>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/caseStudies' element={<CaseStudies />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/caseStudies/adrenaline' element={<Adrenaline />} />
      </Routes>
    </main>
  </BrowserRouter>
);

