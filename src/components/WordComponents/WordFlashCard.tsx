import Cookies from "js-cookie"
import { MobileContext } from "pages/layout"
import { Word, DefinitionObject } from "pages/mots"
import { useState, useContext, useEffect } from "react"
import { Spinner } from "../Spinner"
import { FlashcardArray } from "react-quizlet-flashcard"
import france from '../../images/france.png'
import unitedstates from '../../images/united-states.png'
import { ObjectId } from "mongodb"
import { toast, ToastContainer } from 'react-toastify'

type FlashCard = {
    id: number,
    frontHTML: string | JSX.Element,
    backHTML: string | JSX.Element
}

type GroupsObject = {
    [key: string]: ObjectId[]
}

export const WordFlashCard = () => {
    const [wordGroups, setWordGroups] = useState<GroupsObject>()
    const [userWordArrayWithGender, setUserWordArrayWithGender] = useState<Word[]>([])
    const [currentWord, setCurrentWord] = useState<Word>()
    const [fetchingData, setFetchingData] = useState(true)
    const [flashCardArray, setFlashCardArray] = useState<FlashCard[]>([])

    const isMobile = useContext(MobileContext)

    const user = localStorage.getItem('user') as string
    const userToken = Cookies.get('token') as string

    //Words are fetched from MongoDB on render
    //Gender articles for each word are added to beginning of word
    //New gendered word array is set and loaded into flashcard array
    //Page renders and flashcard is shown
    // if no user logged in, return all word groups logged under 'master'
    useEffect(() => {
        if (!user) {
            toast.info('Inscrivez-vous pour créer vos propres groupes!', {
                theme: 'dark',
                position: 'top-center',
                toastId: 'GenericGroups'
            })
            fetchUserWordGroups('master')
            return
        }
        fetchUserWordGroups(user)
    }, [])

    useEffect(() => {
        handleFetchWordArray("All")
    }, [wordGroups])

    useEffect(() => {
        if (userWordArrayWithGender.length === 0) {
            return
        }
        fillFlashCardArray(userWordArrayWithGender)
        setCurrentWord(userWordArrayWithGender[0])
    }, [userWordArrayWithGender])

    const setGenderArticles = (wordArray: Word[]) => {
        const upperOrLowerCaseWord = (word: Word) => {
            if (word.GrammarTerm === 'Noun') {
                return word.Word.toLowerCase()
            }
            return word.Word
        }

        const returnUpdatedWord = (word: Word) => {
            if (word.hasTwoForms) {
                return `${word.Forms.Masculine}/${word.Forms.Feminine}`
            }
            return getArticleForNoun(word) + upperOrLowerCaseWord(word)
        }

        const newWordGenderArray = wordArray.map(word => ({
            ...word,
            Word: returnUpdatedWord(word),
            Plural: `${word.GrammarTerm === 'Noun' ? `Les ${word.Plural.toLowerCase()}` : word.Plural}`,
            GrammarTerm: word.GrammarTerm.split(/(?=[A-Z])/).join(" ")
        }))

        return newWordGenderArray
    }

    const getArticleForNoun = (currentWord: Word): string => {
        if (currentWord.GrammarTerm !== 'Noun') {
            return ''
        }

        const beginswithVowelOrH = /^[aàâäæeèéêëhiîïoôœuùûü]/i.test(currentWord.Word)

        return beginswithVowelOrH ? 'L\'' : (currentWord.Definitions[0].Gender === 'Masculine') ? 'Le ' : 'La '
    }

    const fillFlashCardArray = (wordArray: Word[]) => {
        const newFlashCardArray: FlashCard[] = []

        wordArray.forEach((word, index) => {
            const { front, back } = createFrontandBackHTML(word)
            const newFlashCard: FlashCard = {
                id: index,
                frontHTML: front,
                backHTML: back
            }
            newFlashCardArray.push(newFlashCard)
        })
        setFlashCardArray(newFlashCardArray)
        setFetchingData(false)
    }

    const createFrontandBackHTML = (currentWord: Word) => {
        const front = (
            <div className="container h-100 justify-content-center pt-2">
                <div className="row justify-content-end">
                    <div className="col-2">
                        <img src={france} id="flashcard-icon" alt="French Flag" />
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col">
                        {currentWord.Word}
                    </div>
                </div>
                {currentWord.Plural.length > 4 &&
                    <div className="row pt-2">
                        <div className="col">
                            {currentWord.Plural}
                        </div>
                    </div>
                }
                <div className="row pt-5">
                    <div className="col fst-italic fs-4">
                        {currentWord.GrammarTerm}
                    </div>
                </div>

            </div>)

        const back = (
            <div className="container h-100 justify-content-center pt-2">
                <div className="row justify-content-end">
                    <div className="col-2">
                        <img src={unitedstates} id="flashcard-icon" alt="United States Flag" />
                    </div>
                </div>
                {currentWord.Definitions.map((def, index) => {
                    return (
                        <div className="row pt-4" key={index}>
                            <div className="col">
                                {def.Definition} <span className="fst-italic fs-4">{getDefinitionGender(def)}</span>
                            </div>
                        </div>
                    )
                })}
            </div>)

        return { front: front, back: back }
    }

    const getDefinitionGender = (def: DefinitionObject) => {
        if (def.Gender === '') {
            return def.Gender
        }
        return def.Gender === 'Masculine' ? ' (m)' : ' (f)'
    }

    const handleCardChange = (id: number) => {
        setCurrentWord(userWordArrayWithGender[id])
        console.log(currentWord)
    }


    const fetchUserWordGroups = (username: string) => {
        setFetchingData(true)
        fetch('http://localhost:5000/users/groups/' + username, {
            method: "GET",
            headers: { 'content-type': 'application/json' }
        })
            .then((response) => {
                if (!response.ok) {
                    console.error(response)
                    return
                }
                return response.json()
            })
            .then((data) => {
                setWordGroups(data.groups)
                setFetchingData(false)
            })
    }

    const returnSpecificWordGroupOrAll = (e: React.MouseEvent<HTMLButtonElement> | string) => {
        if (typeof e === 'string') {
            return e
        }
        return e.currentTarget.name
    }

    const handleFetchWordArray = (e: React.MouseEvent<HTMLButtonElement> | string) => {
        if (wordGroups) {
            const chosenGroup = returnSpecificWordGroupOrAll(e)
            setFetchingData(true)

            fetch('http://localhost:5000/users/database', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    'authorization': 'Bearer ' + userToken
                },
                body: JSON.stringify(wordGroups[chosenGroup])
            })
                .then((response) => {
                    if (!response.ok) {
                        console.error(response)
                        return
                    }
                    return response.json()
                })
                .then((data) => {
                    setUserWordArrayWithGender(setGenderArticles(data.wordArray))
                })
        }
    }


    return (
        (fetchingData) ?
            <div className="container pt-5">
                <Spinner color="light" buttonSpinner={false} />
            </div>
            :
            <div className="container text-white text-center pt-5">
                <ToastContainer style={{ fontSize: '17px' }} />
                <div className="row pt-5">
                    <div className={`col d-flex justify-content-center ${isMobile ? 'p-0' : 'pt-5'}`}>
                        <FlashcardArray cards={flashCardArray} onCardChange={handleCardChange} cycle={true} />
                    </div>
                </div>
                <div className="container justify-content-center">
                    <div className={`row ${isMobile ? 'w-100' : 'w-50'} pt-3 mx-auto`}>
                        {wordGroups && Object.keys(wordGroups).map((group, index) => {
                            return (
                                <div className="col" key={index}>
                                    <button
                                        className="btn border border-2 border-dark rounded"
                                        id="term-button" name={group}
                                        onClick={handleFetchWordArray}>
                                        {group.split(/(?=[A-Z])/).join(" ")}
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
    )
}
