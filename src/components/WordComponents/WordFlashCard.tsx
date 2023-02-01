import ReactCardFlip from 'react-card-flip'
import { useState, useEffect, useContext } from 'react'
import { Word } from 'pages/mots'
import { WordFlashCardDisplayFront } from './WordFlashCardDisplayFront'
import { WordFlashCardDisplayBack } from './WordFlashCardDisplayBack'
import Spinner from '../Spinner'
import { MobileContext } from 'pages/layout'

export const WordFlashCard = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [indexArray, setIndexArray] = useState<number[]>([0])
    const [flip, setFlip] = useState(true)
    const [shuffle, setShuffle] = useState(false)
    const [wordArray, setWordArray] = useState<Word[]>([])
    const [genderedWordArray, setGenderedWordArray] = useState<Word[]>([])

    const isMobile = useContext(MobileContext)
    const url = new URL('https://vocabulairehost.onrender.com/')


    useEffect(() => {
        fetchAllData()
    }, [])

    useEffect(() => {
        let newGenderArray: Word[] = []

        wordArray.forEach((word) => {
            newGenderArray.push({
                _id: word._id,
                French: word.Term === 'Noun'
                    ? checkGender(word) + word.French.toLowerCase()
                    : word.French,
                English: word.English,
                Gender: word.Gender,
                Term: word.Term
            })
        })

        setGenderedWordArray(newGenderArray)
    }, [wordArray])

    const fetchAllData = () => {
        fetch(url + `words/getwords/all`)
            .then((response) => response.json())
            .then((data) => setWordArray(data))
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

    const checkGender = (currentWord: Word): string => {
        if (currentWord.Term !== 'Noun') {
            return ''
        }
        if (startsWithVowelOrH(currentWord.French)) {
            return "L'"
        } else if (currentWord.Gender === 'Masculine') {
            return 'Le '
        } else {
            return 'La '
        }
    }

    const handleClick = (type: React.MouseEvent<HTMLButtonElement>) => {
        switch (type.currentTarget.value) {
            case 'next':
                if (shuffle) {
                    if (!indexArray.length || indexArray.length >= 1) {
                        setIndexArray(prevArray => [...prevArray, currentIndex])
                        setCurrentIndex(getRandomIndex)
                    }
                } else {
                    setIndexArray([])
                    setCurrentIndex(currentIndex < genderedWordArray.length - 1 ? currentIndex + 1 : 0)
                }
                break
            case 'prev':
                if (shuffle) {
                    if (!indexArray.length || indexArray[indexArray.length - 1] === 0) {
                        setShuffle(!shuffle)
                    } else {
                        setCurrentIndex(indexArray[indexArray.length - 1])
                        removeFromIndexArray()
                    }
                } else {
                    setIndexArray([])
                    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : genderedWordArray.length - 1)
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
            setCurrentIndex(0)
            setIndexArray([])
            fetchAllData()
        } else {
            setCurrentIndex(0)
            setIndexArray([])
            fetchTypeData(event.currentTarget.value)
        }
    }

    const removeFromIndexArray = () => {
        const copyArr = [...indexArray]
        copyArr.pop()
        setIndexArray(copyArr)
    }

    return (
        (!genderedWordArray.length) ?
            <div className="container pt-5">
                <Spinner color="light" topOfPage={true} size={''} />
            </div>
            : <div className="min-vh-100 text-center" style={{ paddingTop: "2%" }}>
                <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                    <WordFlashCardDisplayFront
                        currentWord={genderedWordArray[currentIndex]}
                        shuffle={shuffle}
                        handleClick={handleClick}
                        isMobile={isMobile} />
                    <WordFlashCardDisplayBack
                        currentWord={genderedWordArray[currentIndex]}
                        shuffle={shuffle}
                        handleClick={handleClick}
                        isMobile={isMobile} />
                </ReactCardFlip>
                <div className="container text-center d-flex flex-column align-items-center justify-content-center">
                    <div className="row text-white">
                        <div className="col">
                            {currentIndex + 1} / {wordArray.length}
                        </div>
                    </div>
                    <div className={`row row-cols-3 w-${isMobile ? '100' : '50'}`}>
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
                    </div>
                    <div className={`row row-cols-2 pb-5 w-${isMobile ? '100' : '50'}`}>
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