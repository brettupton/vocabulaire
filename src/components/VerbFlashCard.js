import { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip'
import VerbFlashCardDisplayFront from './VerbFlashCardDisplayFront'
import VerbFlashCardDisplayBack from './VerbFlashCardDisplayBack'
import Spinner from './Spinner'
import verbList from '../lists/verblist'

export default function VerbFlashCard() {
    const [verbIndex, setVerbIndex] = useState(0)
    const [verbArray, setVerbArray] = useState(verbList)
    const [flip, setFlip] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const [currentTense, setCurrentTense] = useState('Présent')

    const isMobile = (width <= 768)

    // const fetchData = () => {
    //     fetch(`https://vocabulairehost.onrender.com//getverbs`)
    //         .then((response) => response.json())
    //         .then((data) => setVerbArray(data))
    // }

    useEffect(() => {
        // fetchData()
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }

    const getRandomIndex = () => {
        const randomIndex = Math.floor(Math.random() * verbArray.length)
        return randomIndex
    }

    function handleTenseChangeClick(tense) {
        setCurrentTense(tense.currentTarget.value)
        setFlip(true)
    }

    const handleClick = (type) => {
        setFlip(false)
        switch (type.currentTarget.value) {
            case 'next':
                if (!shuffle) {
                    if (verbIndex + 1 < verbArray.length) {
                        setVerbIndex((prevIndex) => prevIndex + 1)
                    } else {
                        setVerbIndex(0)
                    }
                } else {
                    const randomIndex = getRandomIndex()
                    setVerbIndex(randomIndex)
                }
                break
            case 'prev':
                if (verbIndex === 0) {
                    setVerbIndex(verbArray.length - 1)
                } else {
                    setVerbIndex((prevIndex) => prevIndex - 1)
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

    return (
        verbArray.length === 0 ?
            <Spinner color="light" topOfPage={true} size={''} />
            :
            <div className="min-vh-100 text-center" style={{ paddingTop: "8%" }}>
                <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                    <VerbFlashCardDisplayFront
                        currentVerb={verbArray[verbIndex]}
                        shuffle={shuffle}
                        handleClick={handleClick}
                        isMobile={isMobile} />
                    <VerbFlashCardDisplayBack
                        currentVerb={verbArray[verbIndex]}
                        shuffle={shuffle}
                        handleClick={handleClick}
                        isMobile={isMobile}
                        currentTense={currentTense} />
                </ReactCardFlip>
                <div className="container text-center d-flex flex-column align-items-center justify-content-center">
                    <div className="row text-white">
                        <div className="col">
                            {verbIndex + 1} / {verbArray.length}
                        </div>
                    </div>
                    <div className={`row text-white w-${isMobile ? '100' : '75'} py-1`}>
                        <div className="col">
                            <button className={`btn btn-primary w-100`} value='Présent' onClick={handleTenseChangeClick}>Présent</button>
                        </div>
                        <div className="col">
                            <button className={`btn btn-primary w-100`} value='Imparfait' onClick={handleTenseChangeClick}>Imparfait</button>
                        </div>
                    </div>
                    <div className={`row text-white w-${isMobile ? '100' : '75'} py-1`}>
                        <div className="col">
                            <button className="btn btn-primary w-100" value='PasséComposé' onClick={handleTenseChangeClick}>Passé composé</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary w-100" value='FuturSimple' onClick={handleTenseChangeClick}>Futur simple</button>
                        </div>
                    </div>
                    <div className={`row text-white w-${isMobile ? '100' : '75'} py-1`}>
                        <div className="col">
                            <button className="btn btn-primary w-100" value='ConditionnelPrésent' onClick={handleTenseChangeClick}>Conditionnel présent</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary w-100" value='PrésentDuSubjonctif' onClick={handleTenseChangeClick}>Présent du subjonctif</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}