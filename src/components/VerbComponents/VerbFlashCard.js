import { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip'
import VerbFlashCardDisplayFront from './VerbFlashCardDisplayFront'
import VerbFlashCardDisplayBack from './VerbFlashCardDisplayBack'
import VerbTenseButtons from './VerbTenseButtons'
import { Spinner } from '../Spinner'

export default function VerbFlashCardDisplay() {
    const [verbArray, setVerbArray] = useState([])
    const [verbIndex, setVerbIndex] = useState(0)
    const [flip, setFlip] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const [currentTense, setCurrentTense] = useState('Présent')
    const [fetchingData, setFetchingData] = useState(true)

    const url = new URL('https://vocabulairehost.onrender.com/')
    const isMobile = (width <= 768)

    useEffect(() => {
        fetchData()
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    function fetchData() {
        fetch(`${url}verbs`)
            .then(response => response.json())
            .then(data => {
                setVerbArray(data)
                setFetchingData(false)
            })
    }

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
        fetchingData ?
            <Spinner color="light" buttonSpinner={false} size={''} />
            :
            <div className="min-vh-100 text-center" style={{ paddingTop: "2%" }}>
                <ReactCardFlip isFlipped={flip} flipDirection="horizontal" >
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
                <VerbTenseButtons
                    verbArray={verbArray}
                    verbIndex={verbIndex}
                    isMobile={isMobile}
                    handleTenseChangeClick={handleTenseChangeClick} />
            </div>
    )
}