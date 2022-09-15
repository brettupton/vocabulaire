import './App.css';
import { vocabList } from './vocablist'
import { useState } from 'react'

function App() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentWordGender, setCurrentWordGender] = useState('')

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * vocabList.length)
    checkGender(vocabList[randomIndex])
    setCurrentWordIndex(randomIndex)
  }

  const checkGender = (currentWord) => {
    if (currentWord.GrammarType === 'Noun') {
      if (currentWord.MascOrFemme === 'Masculine') {
        setCurrentWordGender('Le')
      } else {
        setCurrentWordGender('La')
      }
    } else {
      setCurrentWordGender('')
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h5>French:</h5>
        {vocabList[currentWordIndex].GrammarType === 'Noun' 
        ? <p>{currentWordGender} {vocabList[currentWordIndex].French.toLowerCase()}</p> 
        : <p>{currentWordGender} {vocabList[currentWordIndex].French}</p>}
        <h5>English:</h5>
        <p>{vocabList[currentWordIndex].English}</p>
        <button onClick={handleClick}>New Word</button>
      </header>
    </div>
  );
}

export default App;
