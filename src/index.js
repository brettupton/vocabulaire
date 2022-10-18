import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './pages/layout'
import LesMots from './pages/lesmots'
import WordFlashCard from './pages/wordflashcards'
import Significatifs from './pages/significatifs'
import FullWordList from './pages/fullwordlist'
import Verbe from './pages/verbe'
import VerbFlashCards from './pages/verbflashcards';
import HomePage from './pages/home'
import Traduire from './pages/traduire'
import NoPage from './pages/nopage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="lesmots" element={<LesMots />}>
            <Route path="flashcards" element={<WordFlashCard />} />
            <Route path="wordlist" element={<FullWordList />} />
            <Route path="significatifs" element={<Significatifs />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="verbe" element={<Verbe />}> 
            <Route path="flashcards" element={<VerbFlashCards />} />
          </Route>
          <Route path="traduire" element={<Traduire />} />
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


