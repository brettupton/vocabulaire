import { React, useState, useEffect } from 'react'
import VerbFlashCardDisplay from './VerbFlashCardDisplay'

export default function VerbFlashCard() {
    const [verbIndex, setVerbIndex] = useState(0)
    const [verbArray, setVerbArray] = useState([])
    const [flip, setFlip] = useState(true)
    const [shuffle, setShuffle] = useState(false)

    const fetchData = () => {
        fetch(`https://vocabulairehost.herokuapp.com/getverbs`)
          .then((response) => response.json())
          .then((data) => setVerbArray(data))
      }

      useEffect(() => {
        fetchData()
      }, [])

    const getRandomIndex = () => {
        const randomIndex = Math.floor(Math.random() * verbArray.length)
        return randomIndex
    }

    const handleFlipClick = () => {
        setFlip(!flip)
    }

    const handleNextClick = () => {
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
    }

    const handlePrevClick = () => {
        if (verbIndex === 0) {
            setVerbIndex(verbArray.length - 1)
        } else {
            setVerbIndex((prevIndex) => prevIndex - 1)
        }
    }

    const handleShuffleClick = () => {
        setShuffle(!shuffle)
    }

    return (
        verbArray.length === 0 ? 
            <div className="layout">
                <div className="spinner-border text-light" role="status">
                    <span className="sr-only">&nbsp;</span>
                </div>
            </div>
        : <VerbFlashCardDisplay 
            verbArray={verbArray}
            verbIndex={verbIndex}
            flip={flip} 
            shuffle={shuffle}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
            handleFlipClick={handleFlipClick}
            handleShuffleClick={handleShuffleClick}
        />
    )
}