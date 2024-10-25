import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Alapvető CSS stílusok importálása
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS importálása
import App from './App'; // Fő alkalmazás komponens importálása
import reportWebVitals from './reportWebVitals'; // Teljesítménymutatók importálása

// Gyökérelem létrehozása, amelybe az alkalmazás betöltődik
const root = ReactDOM.createRoot(document.getElementById('root'));

// Az alkalmazás renderelése a gyökérelembe
root.render(
  <React.StrictMode>
    <App /> {/* Fő alkalmazás komponens */}
  </React.StrictMode>
);

// Ez mi?
reportWebVitals();

