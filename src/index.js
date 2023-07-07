import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './index.scss';

import Cheader from './components/parts/Cheader';
import Homepage from './components/view/homepage';
import Contact from './components/view/contact';
import CaseStudies from './components/view/caseStudies';
import Adrenaline from './components/view/caseStudy/adrenaline';
import SwissTchoukball from './components/view/caseStudy/swissTchoukball';
import VolleyFinalFour from './components/view/caseStudy/volleyFinalFour';

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
        <Route path='/caseStudies/swissTchoukball' element={<SwissTchoukball />} />
        <Route path='/caseStudies/VolleyFinalFour' element={<VolleyFinalFour />} />
      </Routes>
    </main>
  </BrowserRouter>
);

