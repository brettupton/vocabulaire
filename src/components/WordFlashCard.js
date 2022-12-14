import ReactCardFlip from 'react-card-flip'
import { useState, useEffect } from 'react'
import WordFlashCardDisplayFront from './WordFlashCardDisplayFront'
import WordFlashCardDisplayBack from './WordFlashCardDisplayBack'
import Spinner from './Spinner'


export default function WordFlashCard() {

    const [wordIndex, setWordIndex] = useState(0)
    const [prevWordIndex, setPrevWordIndex] = useState(0)
    const [flip, setFlip] = useState(true)
    const [wordGender, setWordGender] = useState('')
    const [shuffle, setShuffle] = useState(false)
    const [wordArray, setWordArray] = useState([])
    const [width, setWidth] = useState(window.innerWidth)

    const isMobile = (width <= 768)
    const url = 'https://vocabulairehost.onrender.com/'

    useEffect(() => {
        fetchAllData()
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    const fetchAllData = () => {
        fetch(url + `words/getwords/all`)
            .then((response) => response.json())
            .then((data) => { setWordArray(data) })
            .then(checkGender(wordArray[wordIndex]))
    }

    const fetchTypeData = (type) => {
        fetch(`${url}words/types/${type}`)
            .then((response) => response.json())
            .then((data) => setWordArray(data))
    }

    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }

    const getRandomIndex = () => {
        const randomIndex = Math.floor(Math.random() * wordArray.length)
        return randomIndex
    }

    function startsWithVowelOrH(word) {
        const vowels = ("AÀÂÄÆEÈÉÊËHIÎÏOÔŒUÙÛÜ");
        return vowels.indexOf(word[0]) !== -1;
    }

    const checkGender = (currentWord) => {
        if (currentWord === undefined) {
            setWordGender('Le ')
            return
        }
        if (currentWord.Term === 'Noun') {
            if (startsWithVowelOrH(currentWord.French)) {
                setWordGender("L'")
            } else if (currentWord.Gender === 'Masculine') {
                setWordGender('Le ')
            } else {
                setWordGender('La ')
            }
        } else {
            setWordGender('')
        }
    }

    const handleClick = (type) => {
        switch (type.currentTarget.value) {
            case 'next':
                if (!shuffle) {
                    if (wordIndex + 1 < wordArray.length) {
                        checkGender(wordArray[wordIndex + 1])
                        setWordIndex((prevIndex) => prevIndex + 1)
                    } else {
                        checkGender(wordArray[0])
                        setWordIndex(0)
                    }
                } else {
                    const randomIndex = getRandomIndex()
                    checkGender(wordArray[randomIndex])
                    setPrevWordIndex(wordIndex)
                    setWordIndex(randomIndex)
                }
                break
            case 'prev':
                if (!shuffle) {
                    if (wordIndex - 1 < 0) {
                        checkGender(wordArray[wordArray.length - 1])
                        setWordIndex(wordArray.length - 1)
                    } else {
                        checkGender(wordArray[wordIndex - 1])
                        setWordIndex((prevIndex) => prevIndex - 1)
                    }
                } else {
                    checkGender(wordArray[prevWordIndex])
                    setWordIndex(prevWordIndex)
                    setShuffle(false)
                }
                break
            case 'flip':
                setFlip(!flip)
                break
            case 'shuffle':
                setShuffle(!shuffle)
                break
            default:
                break
        }
    }

    const handleTypeClick = (e) => {
        if (e.currentTarget.value === 'all') {
            setWordIndex(0)
            fetchAllData()
        } else {
            setWordIndex(0)
            setWordGender('')
            fetchTypeData(e.currentTarget.value)
        }
    }

    return (
        wordArray.length === 0 ?
            <Spinner color="light" topOfPage={true} size={''} />
            : <div className="min-vh-100 text-center" style={{ paddingTop: "2%" }}>
                <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                    <WordFlashCardDisplayFront
                        wordArray={wordArray}
                        wordIndex={wordIndex}
                        prevWordIndex={prevWordIndex}
                        gender={wordGender}
                        shuffle={shuffle}
                        handleClick={handleClick}
                        isMobile={isMobile} />
                    <WordFlashCardDisplayBack
                        wordArray={wordArray}
                        wordIndex={wordIndex}
                        prevWordIndex={prevWordIndex}
                        gender={wordGender}
                        shuffle={shuffle}
                        handleClick={handleClick}
                        isMobile={isMobile} />
                </ReactCardFlip>
                <div className="container text-center d-flex flex-column align-items-center justify-content-center">
                    <div className="row text-white">
                        <div className="col">
                            {wordIndex + 1} / {wordArray.length}
                        </div>
                    </div>
                    <div className={`row pb-5 w-${isMobile ? '100' : '50'}`}>
                        <div className="col">
                            <button className="type-button w-100" value="all" onClick={handleTypeClick}>All</button>
                        </div>
                        <div className="col">
                            <button className="type-button w-100" value="noun" onClick={handleTypeClick}>Nouns</button>
                        </div>
                        <div className="col">
                            <button className="type-button w-100" value="adjective" onClick={handleTypeClick}>Adjectives</button>
                        </div>
                        <div className="col">
                            <button className="type-button w-100" value="pronoun" onClick={handleTypeClick}>Pronouns</button>
                        </div>
                        <div className="col">
                            <button className="type-button w-100" value="phrase" onClick={handleTypeClick}>Phrases</button>
                        </div>
                        <div className="col">
                            <button className="type-button w-100" value="adverb" onClick={handleTypeClick}>Adverbs</button>
                        </div>
                        <div className="col">
                            <button className="type-button w-75" value="preposition" onClick={handleTypeClick}>Prepositions</button>
                        </div>
                        <div className="col">
                            <button className="type-button w-75" value="exclamation" onClick={handleTypeClick}>Exclamations</button>
                        </div>
                    </div>
                </div>
            </div>
    )

}