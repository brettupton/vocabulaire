import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from './pages/layout'
import LesMots from './pages/lesmots'
import Words from './pages/words'
import FullWordList from './pages/fullwordlist'
import Verb from './pages/verbe'
import HomePage from './pages/home'
import NoPage from './pages/nopage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="lesmots" element={<LesMots />}>
            <Route path="words" element={<Words />} />
            <Route path="wordlist" element={<FullWordList />} />
          </Route>
          <Route path="verbe" element={<Verb />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


