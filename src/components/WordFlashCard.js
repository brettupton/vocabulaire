import ReactCardFlip from 'react-card-flip'
import { useState, useEffect } from 'react'
import WordFlashCardDisplayFront from './WordFlashCardDisplayFront'
import WordFlashCardDisplayBack from './WordFlashCardDisplayBack'


export default function WordFlashCard() {

    const [wordIndex, setWordIndex] = useState(0)
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
        fetch(url + `words/getwords`)
            .then((response) => response.json())
            .then((data) => { setWordArray(data) })
            .then(checkGender(wordArray[wordIndex]))
    }

    const fetchTypeData = (type) => {
        fetch(`${url}words/getwords/${type}`)
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
                    setWordIndex(randomIndex)
                }
                break
            case 'prev':
                if (wordIndex - 1 < 0) {
                    checkGender(wordArray.length - 1)
                    setWordIndex(wordArray.length - 1)
                } else {
                    checkGender(wordArray[wordIndex - 1])
                    setWordIndex((prevIndex) => prevIndex - 1)
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
            <div className="min-vh-100 text-center pt-5">
                <div className="spinner-border text-light mt-5" role="status">
                    <span className="sr-only">&nbsp;</span>
                </div>
            </div>
            : <div className="min-vh-100 text-center" style={{ paddingTop: "9%" }}>
                <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                    <WordFlashCardDisplayFront
                        wordArray={wordArray}
                        wordIndex={wordIndex}
                        gender={wordGender}
                        shuffle={shuffle}
                        handleClick={handleClick}
                        isMobile={isMobile} />
                    <WordFlashCardDisplayBack
                        wordArray={wordArray}
                        wordIndex={wordIndex}
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
                            <button className="btn btn-primary w-100" value="all" onClick={handleTypeClick}>All</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary w-100" value="noun" onClick={handleTypeClick}>Nouns</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary w-100" value="adjective" onClick={handleTypeClick}>Adjectives</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary w-100" value="pronoun" onClick={handleTypeClick}>Pronouns</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary w-100" value="phrase" onClick={handleTypeClick}>Phrases</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary w-100" value="adverb" onClick={handleTypeClick}>Adverbs</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary w-75" value="preposition" onClick={handleTypeClick}>Prepositions</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary w-75" value="exclamation" onClick={handleTypeClick}>Exclamations</button>
                        </div>
                    </div>
                </div>
            </div>
    )

}