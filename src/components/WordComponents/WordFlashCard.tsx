import ReactCardFlip from 'react-card-flip'
import { useState, useEffect, useContext } from 'react'
import { Word } from 'pages/mots'
import { WordFlashCardDisplayFront } from './WordFlashCardDisplayFront'
import { WordFlashCardDisplayBack } from './WordFlashCardDisplayBack'
import Spinner from '../Spinner'
import { MobileContext } from 'pages/layout'

export const WordFlashCard = () => {

    const [nextIndex, setNextIndex] = useState(1)
    const [indexArray, setIndexArray] = useState<number[]>([0])
    const [flip, setFlip] = useState(true)
    const [wordGender, setWordGender] = useState('')
    const [shuffle, setShuffle] = useState(false)
    const [wordArray, setWordArray] = useState<Word[]>([])

    const isMobile = useContext(MobileContext)
    const url = new URL('https://vocabulairehost.onrender.com/')
    const indexArrayLength = indexArray.length
    const wordArrayLength = wordArray.length
    const latestIndex = indexArray[indexArrayLength - 1]

    useEffect(() => {
        fetchAllData()
    }, [])

    useEffect(() => {
        if (indexArrayLength === 0) {
            setNextIndex(1)
        }
    }, [indexArrayLength])

    useEffect(() => {
        checkGender(wordArray[latestIndex])
    }, [wordArray])

    const fetchAllData = () => {
        fetch(url + `words/getwords/all`)
            .then((response) => response.json())
            .then((data) => { setWordArray(data) })
    }

    const fetchTypeData = (type: string) => {
        fetch(`${url}words/types/${type}`)
            .then((response) => response.json())
            .then((data) => setWordArray(data))
    }

    const getRandomIndex = () => {
        const randomIndex = Math.floor(Math.random() * wordArray.length)
        return randomIndex
    }

    function startsWithVowelOrH(word: string) {
        const vowels: string = ("AÀÂÄÆEÈÉÊËHIÎÏOÔŒUÙÛÜ")
        return vowels.indexOf(word[0]) !== -1
    }

    const checkGender = (currentWord: Word) => {
        if (currentWord === undefined) {
            setWordGender('La ')
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

    // Initially checks for if shuffle is on
    // If it is, it checks if the Index Array is getting too long, which resets the array if so
    // If not, get a randomIndex and set the nextIndex and push to the Index Array
    // If shuffle is not on, we check if the nextIndex is going to be larger than the length of the Word Array
    // If it is, we set nextIndex to 0 and reset the Index Array
    // If not, we increment nextIndex by 1 and push to the Index Array
    const handleClick = (type: React.MouseEvent<HTMLButtonElement>) => {
        switch (type.currentTarget.value) {
            case 'next':
                if (shuffle) {
                    if (indexArrayLength >= wordArrayLength) {
                        setNextIndex(getRandomIndex())
                        checkGender(wordArray[nextIndex])
                        setIndexArray([])
                    } else {
                        setNextIndex(getRandomIndex())
                        checkGender(wordArray[nextIndex])
                        setIndexArray(prevArray => [...prevArray, nextIndex])
                    }
                } else {
                    if (nextIndex <= wordArrayLength - 1) {
                        setNextIndex(prevIndex => prevIndex += 1)
                        checkGender(wordArray[nextIndex])
                        setIndexArray(prevArray => [...prevArray, nextIndex])
                    } else {
                        setNextIndex(1)
                        setIndexArray([0])
                    }

                }
                break
            case 'prev':
                if (shuffle) {
                    if (indexArrayLength > 1) {
                        setNextIndex(latestIndex)
                        checkGender(wordArray[indexArray[indexArrayLength - 2]])
                        removeFromIndexArray()
                    }
                } else {
                    if (indexArrayLength > 1) {
                        setNextIndex(prevIndex => prevIndex - 1)
                        checkGender(wordArray[indexArray[indexArrayLength - 2]])
                        removeFromIndexArray()
                    }
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

    const handleTypeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget.value === 'all') {
            setNextIndex(0)
            setIndexArray([0])
            fetchAllData()
        } else {
            setNextIndex(0)
            setIndexArray([0])
            setWordGender('')
            fetchTypeData(event.currentTarget.value)
        }
    }

    const removeFromIndexArray = () => {
        const copyArr = [...indexArray]
        copyArr.pop()
        setIndexArray(copyArr)
    }

    return (
        (!wordArray.length) ?
            <Spinner color="light" topOfPage={true} size={''} />
            : <div className="min-vh-100 text-center" style={{ paddingTop: "2%" }}>
                <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                    <WordFlashCardDisplayFront
                        currentWord={wordArray[latestIndex]}
                        gender={wordGender}
                        shuffle={shuffle}
                        handleClick={handleClick}
                        isMobile={isMobile} />
                    <WordFlashCardDisplayBack
                        currentWord={wordArray[latestIndex]}
                        gender={wordGender}
                        shuffle={shuffle}
                        handleClick={handleClick}
                        isMobile={isMobile} />
                </ReactCardFlip>
                <div className="container text-center d-flex flex-column align-items-center justify-content-center">
                    <div className="row text-white">
                        <div className="col">
                            {latestIndex + 1} / {wordArray.length}
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