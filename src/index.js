import React, { useState, useEffect, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from '../src/components/ScrollToTop'
import './index.css'
import { Layout } from './pages/layout'
import { Mots } from './pages/mots'
import { MotsHomePage } from 'pages/mots/motshome'
import AddWordPage from './pages/mots/addword'
import { ViewWord } from './pages/mots/viewword'
import WordFlashCard from './pages/mots/wordflashcards'
import Significatifs from './pages/mots/significatifs'
import { FullWordList } from './pages/mots/fullwordlist'
import Verbes from './pages/verbes'
import VerbFlashCards from './pages/verbes/verbflashcards'
import Temps from './pages/verbes/temps'
import FullVerbList from './pages/verbes/fullverblist'
import AddVerbPage from './pages/verbes/addverb'
import ViewVerb from './pages/verbes/viewverb'
import HomePage from './pages/home'
import { Recherche } from './pages/recherche'
import NoPage from './pages/nopage'
import { TestEnv } from './pages/testenv'

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/testenv" element={<TestEnv />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="mots" element={<Mots />}>
            <Route path="" element={<MotsHomePage />} />
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
          <Route path="recherche" element={<Recherche />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>

)


