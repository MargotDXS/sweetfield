import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Cheader from './components/parts/Cheader';
import Cfooter from './components/parts/Cfooter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cheader />
    <Cfooter />
  </React.StrictMode>
);

