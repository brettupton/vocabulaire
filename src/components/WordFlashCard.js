import './layout.css';
import { useState, useEffect } from 'react'
import FlashCard from './FlashCard'


export default function WordFlashCard() {
    const [wordIndex, setWordIndex] = useState(0)
    const [flip, setFlip] = useState(false)
    const [wordGender, setWordGender] = useState('')
    const [shuffle, setShuffle] = useState(false)
    const [wordArray, setWordArray] = useState([])

    const fetchData = () => {
        fetch(`https://vocabulairehost.herokuapp.com/getwords`)
          .then((response) => response.json())
          .then((data) => setWordArray(data))
      }

    useEffect(() => {
        fetchData()
      }, [])

    const getRandomIndex = () => {
        const randomIndex = Math.floor(Math.random() * wordArray.length)
        return randomIndex
    }

    function startsWithVowelOrH(word) {
        const vowels = ("AÀÂÄÆEÈÉÊËHIÎÏOÔŒUÙÛÜ");
        return vowels.indexOf(word[0]) !== -1;
    }

    const checkGender = (currentWord) => {
        if (currentWord.GrammarType === 'Noun') {
            if (startsWithVowelOrH(currentWord.French)) {
                setWordGender("L'")
            } else if (currentWord.MascOrFemme === 'Masculine') {
                setWordGender('Le ')
            } else {
                setWordGender('La ')
            }
        } else {
            setWordGender('')
        }
    }

    const handleInputChange = (e) => {
        const inputValue = parseInt(e.target.value) - 1
        if (0 <= inputValue && inputValue <= wordArray.length) {
            checkGender(wordArray[inputValue])
            setWordIndex(inputValue)
        } else {
            setWordIndex(0)
        }
    }

    const handleNextClick = () => {
        if (!shuffle) {
            if (wordIndex + 1 < wordArray.length) {
                checkGender(wordArray[wordIndex + 1])
                setWordIndex((prevIndex) => prevIndex + 1)
            } else {
                setWordIndex(0)
            }
        } else {
            const randomIndex = getRandomIndex()
            checkGender(wordArray[randomIndex])
            setWordIndex(randomIndex)
        }
    }

    const handlePrevClick = () => {
        if (wordIndex - 1 < 0) {
            setWordIndex(wordArray.length - 1)
        } else {
            checkGender(wordArray[wordIndex - 1])
            setWordIndex((prevIndex) => prevIndex - 1)
        }
    }

    const handleFlipClick = () => {
        setFlip(!flip)
    }

    const handleShuffleClick = () => {
        setShuffle(!shuffle)
    }

    return (
        wordArray.length === 0 ? 
            <div className="layout">
                <div className="spinner-border text-light" role="status">
                    <span class="sr-only">&nbsp;</span>
                </div>
            </div>
        : <FlashCard 
            wordArray={wordArray}
            wordIndex={wordIndex}
            gender={wordGender} 
            flip={flip} 
            shuffle={shuffle}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
            handleFlipClick={handleFlipClick}
            handleShuffleClick={handleShuffleClick}
            handleInputChange={handleInputChange}  />
    )
    
}