import './layout.css';
import franceflag from '../images/france.png'
import usflag from '../images/united-states.png'
import { useState } from 'react'
import vocabList from "../vocablist"

export default function WordFlashCard() {
    const [wordIndex, setWordIndex] = useState(0)
    const [flip, setFlip] = useState(true)
    const [wordGender, setWordGender] = useState('')
    const [shuffle, setShuffle] = useState(false)

    const getRandomIndex = () => {
        const randomIndex = Math.floor(Math.random() * vocabList.length)
        return randomIndex
    }

    const handleNextClick = () => {
        if (!shuffle) {
            if (wordIndex < vocabList.length) {
                checkGender(vocabList[wordIndex + 1])
                setWordIndex((prevIndex) => prevIndex + 1)
            } else {
                setWordIndex(0)
            }
        } else {
            const randomIndex = getRandomIndex()
            checkGender(vocabList[randomIndex])
            setWordIndex(randomIndex)
        }
    }

    const handlePrevClick = () => {
        if (wordIndex - 1 < 0) {
            setWordIndex(0)
        } else {
            checkGender(vocabList[wordIndex - 1])
            setWordIndex((prevIndex) => prevIndex - 1)
        }
    }

    const handleFlipClick = () => {
        setFlip(!flip)
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
        if (0 <= inputValue && inputValue <= vocabList.length) {
            checkGender(vocabList[inputValue])
            setWordIndex(inputValue)
        } else {
            setWordIndex(0)
        }
    }

    const handleShuffleClick = () => {
        setShuffle(!shuffle)
    }

    return (
        <div className="layout">
        <div className="card text-center" style={{width: "36rem", height: "24rem", color: "black"}}>
            <div className="card-body p-0">
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-3">
                            {flip ? <img src={franceflag} id="flashcard-image"/> : <img src={usflag} id="flashcard-image"/>}
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <p className="card-text">{flip && vocabList[wordIndex].GrammarType === "Noun" 
                            ? wordGender + vocabList[wordIndex].French.toLowerCase()
                            : flip ? wordGender + vocabList[wordIndex].French 
                            :  vocabList[wordIndex].English}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="mt-5" onClick={handleFlipClick} id="arrow-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                                    </svg>
                            </button>
                        </div>
                    </div>
                    <div className="row justify-content-between mt-5">
                        <div className="col">
                            <button onClick={handlePrevClick} id="arrow-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                                    </svg>
                            </button>
                        </div>
                        <div className="col">
                            <button onClick={handleShuffleClick} id="arrow-button">
                                {shuffle 
                                ? <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-shuffle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z" />
                                    <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="lightgray" className="bi bi-shuffle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z" />
                                    <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                                </svg>}
                            </button>
                        </div>
                        <div className="col">
                                <button onClick={handleNextClick} id="arrow-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                    </svg>
                                </button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-end mt-4" style={{fontSize: "15px"}}>
                        <div className="col-5">
                            <input onChange={handleInputChange} placeholder={wordIndex + 1}type="number" id="flashcard-input"/><p>/ {vocabList.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}