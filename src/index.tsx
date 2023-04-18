import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import 'dragula/dist/dragula.css'
import { Layout } from './pages/layout'
import { HomePage } from './pages/home'
import { Mots } from './pages/mots'
import { MotsHomePage } from 'pages/mots/motshome'
import { AddWordPage } from './pages/mots/addword'
import { ViewWord } from './pages/mots/viewword'
import { WordFlashCards } from './pages/mots/wordflashcards'
import { FullWordList } from './pages/mots/fullwordlist'
// import Verbes from './pages/verbes'
// import VerbFlashCards from './pages/verbes/verbflashcards'
// import Temps from './pages/verbes/temps'
// import FullVerbList from './pages/verbes/fullverblist'
// import AddVerbPage from './pages/verbes/addverb'
// import ViewVerb from './pages/verbes/viewverb'
// import { Recherche } from './pages/recherche'
import { Login } from 'pages/user/login'
import { Logout } from 'pages/user/logout'
import { Register } from 'pages/user/register'
import { WordGroupsPage } from 'pages/user/wordgroups'
import { NoPage } from './pages/nopage'
import { TestEnv } from './pages/testenv'

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/testenv" element={<TestEnv />} />
          <Route index element={<HomePage />} />
          <Route path="mots" element={<Mots />}>
            <Route path="" element={<MotsHomePage />} />
            <Route path="flashcards" element={<WordFlashCards />} />
            <Route path="liste" element={<FullWordList />} />
            <Route path="ajouter" element={<AddWordPage />} />
            <Route path="vue/:wordId" element={<ViewWord />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          {/* <Route path="verbes" element={<Verbes />}>
            <Route path="flashcards" element={<VerbFlashCards />} />
            <Route path="temps" element={<Temps />} />
            <Route path="liste" element={<FullVerbList />} />
            <Route path="ajouter" element={<AddVerbPage />} />
            <Route path="vue/:verbId" element={<ViewVerb />} />
            <Route path="*" element={<NoPage />} />
          </Route> */}
          {/* <Route path="recherche" element={<Recherche />} /> */}
          <Route path="user">
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="register" element={<Register />} />
            <Route path="wordgroups" element={<WordGroupsPage />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
)


