import { useState } from 'react'
import vocabList from '../vocablist'
import WordTranslation from '../components/WordTranslation'

function LesMots() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentWordGender, setCurrentWordGender] = useState('')

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * vocabList.length)
    checkGender(vocabList[randomIndex])
    setCurrentWordIndex(randomIndex)
  }

  function startsWithVowelOrH(word){
    const vowels = ("AÀÂÄÆEÈÉÊËHIÎÏOÔŒUÙÛÜ"); 
    return vowels.indexOf(word[0]) !== -1;
 }

  const checkGender = (currentWord) => {
    if (currentWord.GrammarType === 'Noun') {
      if (startsWithVowelOrH(currentWord.French)) {
        setCurrentWordGender("L'")
      } else if (currentWord.MascOrFemme === 'Masculine') {
        setCurrentWordGender('Le ')
      } else {
        setCurrentWordGender('La ')
      }
    } else {
      setCurrentWordGender('')
    }
  }

  return (
      <WordTranslation 
        handleClick={handleClick} 
        index={currentWordIndex} 
        gender={currentWordGender}/>
  );
}

export default LesMots;