import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from '../src/components/ScrollToTop'
import './index.css'
import Layout from './pages/layout'
import Mots from './pages/mots'
import AddWordPage from './pages/addword'
import ViewWord from './pages/viewword'
import WordFlashCard from './pages/wordflashcards'
import Significatifs from './pages/significatifs'
import FullWordList from './pages/fullwordlist'
import Verbes from './pages/verbes'
import VerbFlashCards from './pages/verbflashcards'
import Temps from './pages/temps'
import FullVerbList from './pages/fullverblist'
import AddVerbPage from './pages/addverb'
import ViewVerb from './pages/viewverb'
import HomePage from './pages/home'
import Rapide from './pages/rapide'
import NoPage from './pages/nopage'
import TestENV from './pages/testenv'

export default function App() {

  return (
    <Routes>
      <Route path="/testenv" element={<TestENV />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="mots" element={<Mots />}>
          <Route path="flashcards" element={<WordFlashCard />} />
          <Route path="liste" element={<FullWordList />} />
          <Route path="significatifs" element={<Significatifs />} />
          <Route path="ajouter" element={<AddWordPage />} />
          <Route path="vue/:wordId" element={<ViewWord />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="verbes" element={<Verbes />}>
          <Route path="flashcards" element={<VerbFlashCards />} />
          <Route path="temps" element={<Temps />} />
          <Route path="liste" element={<FullVerbList />} />
          <Route path="ajouter" element={<AddVerbPage />} />
          <Route path="vue/:verbId" element={<ViewVerb />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="rapide" element={<Rapide />} />
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


