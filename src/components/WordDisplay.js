import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import SpeechButton from './SpeechButton'
import Spinner from "./Spinner"

export default function WordDisplay() {

    // Mobile Check
    const [width, setWidth] = useState(window.innerWidth)
    const isMobile = width <= 768

    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    // View/Edit Component
    const [inEditMode, setInEditMode] = useState(false)
    const [viewModeDisplay, setViewModeDisplay] = useState('block')
    const [editModeDisplay, setEditModeDisplay] = useState('none')
    const [word, setWord] = useState({})
    const [fetchingInitialData, setFetchingInitialData] = useState(true)
    const [wordHasBeenEdited, setWordHasBeenEdited] = useState(false)

    const url = "https://vocabulairehost.onrender.com/"
    const { wordId } = useParams()

    function getWordData() {
        setFetchingInitialData(true)
        fetch(`${url}words/getword/${wordId}`)
            .then(response => response.json())
            .then(word => {
                setWord(word)
                setFetchingInitialData(false)
            })
    }

    useEffect(() => {
        getWordData()
    }, [])

    useEffect(() => {
        if (inEditMode) {
            setViewModeDisplay('none')
            setEditModeDisplay('block')
        } else {
            if (wordHasBeenEdited) {
                submitNewWord()
            }
            setViewModeDisplay('block')
            setEditModeDisplay('none')
        }
    }, [inEditMode])

    function checkLoginStatus() {
        //Before edit, check if logged in
    }

    function switchCurrentMode(e) {
        const modeClicked = e.target.id
        switch (modeClicked) {
            case 'edit':
                setInEditMode(true)
                break
            case 'view':
                setInEditMode(false)
                break
            default:
                break
        }
    }

    function handleInputChange(e) {
        setWordHasBeenEdited(true)
        const name = e.target.name
        const value = e.target.value

        setWord(
            (values => ({ ...values, [name]: value }))
        )
    }

    function submitNewWord() {
        const requestOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(word)
        }

        fetch(`${url}words/editword/${word._id}`, requestOptions)
            .then(() => {
                setWordHasBeenEdited(false)
                getWordData()
            })
    }

    return (
        <div className="row justify-content-center pt-5">
            {fetchingInitialData
                ? <Spinner color="light" topOfPage={true} />
                :
                <div className={`col-${isMobile ? '10' : '5'}`}>
                    {/* VIEW MODE */}
                    <div className={`card text-black text-start d-${viewModeDisplay} py-1`}>
                        <div className="card-header" style={{ fontSize: '13px' }}>
                            <ul className="nav nav-tabs card-header-tabs justify-content-end">
                                <li className="nav-item">
                                    <button className='nav-link active'>
                                        View
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" id="edit" onClick={switchCurrentMode}>
                                        Edit
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className={`col-${isMobile ? '8' : '6'}`}>
                                    <h4 className="card-title m-0">{word.French}</h4>
                                </div>
                            </div>
                            <div className="row justify-content-start">
                                <div className="col-1">
                                    <SpeechButton word={word.French} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="card-text fs-5">{word.Gender === 'Neither' ? '' : word.Gender} {word.Term}</p>
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col">
                                    <p className="card-text fs-6 fst-italic">Def.</p>
                                </div>
                            </div>
                            <div className={`row w-${isMobile ? '75' : '50'} justify-content-end`}>
                                <div className="col-10">
                                    <p className="card-text fs-5">{word.English}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* EDIT MODE */}
                    <div className={`card text-black text-start d-${editModeDisplay} py-1`}>
                        <div className="card-header" style={{ fontSize: '13px' }}>
                            <ul className="nav nav-tabs card-header-tabs justify-content-end">
                                <li className="nav-item">
                                    <button className="nav-link" id="view" onClick={switchCurrentMode}>
                                        View
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active">
                                        Edit
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className={`col-${isMobile ? '8' : '3'}`}>
                                    <div className="input-div">
                                        <input className="edit-input" name="French" value={word.French} onChange={handleInputChange} placeholder="Français" type="text" autoComplete="off" />
                                        <span className="edit-input-border"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-start">
                                <div className="col-1">
                                    <SpeechButton word={word.French} />
                                </div>
                            </div>
                            <div className="row fs-6">
                                <div className={`col-${isMobile ? '4' : '3'}`}>
                                    <select className="border border-0" name="Gender" defaultValue={word.Gender} onChange={handleInputChange}>
                                        <option value="Masculine">Masculine</option>
                                        <option value="Feminine">Feminine</option>
                                        <option value="Plural">Plural</option>
                                        <option value="Neither">Neither</option>
                                    </select>
                                </div>
                                <div className="col-3">
                                    <select className="border border-0" name="Term" defaultValue={word.Term} onChange={handleInputChange}>
                                        <option value="Noun">Noun</option>
                                        <option value="Adjective">Adjective</option>
                                        <option value="Pronoun">Pronoun</option>
                                        <option value="Phrase">Phrase</option>
                                        <option value="Adverb">Adverb</option>
                                        <option value="Preposition">Preposition</option>
                                        <option value="Exclamation">Exclamation</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col">
                                    <p className="card-text fs-6 fst-italic">Def.</p>
                                </div>
                            </div>
                            <div className="row w-50 justify-content-end">
                                <div className="col-10">
                                    <div className="input-div">
                                        <input className="edit-input" name="English" value={word.English} onChange={handleInputChange} placeholder="Anglais" type="text" autoComplete="off" />
                                        <span className="edit-input-border"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}