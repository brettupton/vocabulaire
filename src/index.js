import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from '../src/components/ScrollToTop'
import './index.css'
import Layout from './pages/layout'
import LesMots from './pages/lesmots'
import AddWord from './pages/addword'
import EditWord from './pages/editword'
import WordFlashCard from './pages/wordflashcards'
import Significatifs from './pages/significatifs'
import FullWordList from './pages/fullwordlist'
import Verbe from './pages/verbe'
import VerbFlashCards from './pages/verbflashcards'
import Temps from './pages/temps'
import HomePage from './pages/home'
import Traduire from './pages/traduire'
import NoPage from './pages/nopage'

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="lesmots" element={<LesMots />}>
          <Route path="flashcards" element={<WordFlashCard />} />
          <Route path="wordlist" element={<FullWordList />} />
          <Route path="significatifs" element={<Significatifs />} />
          <Route path="addword" element={<AddWord />} />
          <Route path="editword/:wordId" element={<EditWord />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="verbe" element={<Verbe />}>
          <Route path="flashcards" element={<VerbFlashCards />} />
          <Route path="temps" element={<Temps />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="traduire" element={<Traduire />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode >
)


