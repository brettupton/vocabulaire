import franceflag from '../images/france.png'
import usflag from '../images/united-states.png'
import rightarrow from '../images/icons/arrow-right-circle.svg'
import leftarrow from '../images/icons/arrow-left-circle.svg'
import flipbutton from '../images/icons/arrow-counterclockwise.svg'
import SpeechButton from './SpeechButton'

export default function FlashCard(props) {

    const { wordArray, wordIndex, gender, flip, shuffle, handleNextClick, handlePrevClick, handleFlipClick, handleShuffleClick, handleInputChange } = props

    return (
        <div className="layout">
            <div className="card text-center" id="word-flashcard">
                <div className="card-body p-0">
                    <div className="container p-0">
                        <div className="row justify-content-start m-1">
                            <div className="col-2">
                                {flip ? <img src={franceflag} id="word-flashcard-icon" /> : <img src={usflag} id="word-flashcard-icon" />}
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col">
                                <p className="card-text">{flip && wordArray[wordIndex].GrammarType === "Noun"
                                    ? gender + wordArray[wordIndex].French.toLowerCase()
                                    : flip ? gender + wordArray[wordIndex].French
                                        : wordArray[wordIndex].English}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className="mt-5" onClick={handleFlipClick} id="button-styling">
                                    <img src={flipbutton} id="arrow-button" />
                                </button>
                            </div>
                        </div>
                        <div className="row justify-content-between mt-5">
                            <div className="col">
                                <button onClick={handlePrevClick} id="button-styling">
                                    <img src={leftarrow} alt="leftarrow" id="arrow-button" />
                                </button>
                            </div>
                            <div className="col">
                                <button onClick={handleShuffleClick} id="shuffle-button">
                                    {shuffle
                                        ? <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-shuffle" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z" />
                                            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                                        </svg>
                                        : <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="lightgray" className="bi bi-shuffle" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z" />
                                            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                                        </svg>}
                                </button>
                            </div>
                            <div className="col">
                                <SpeechButton word={gender + wordArray[wordIndex].French} />
                            </div>
                            <div className="col">
                                <button onClick={handleNextClick} id="button-styling">
                                    <img alt="rightarrow" src={rightarrow} id="arrow-button" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="container p-0" id="word-flashcard-input-container">
                        <div className="row justify-content-end mt-4" style={{ fontSize: "15px" }}>
                            <div className="col-4">
                                <input onChange={handleInputChange} placeholder={wordIndex + 1} type="number" id="flashcard-input" /><p>/ {wordArray.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5 mr-3 text-white" id="word-flashcard-index">
                        <div className="row">
                            <div className="col">
                                {wordIndex + 1} / {wordArray.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}