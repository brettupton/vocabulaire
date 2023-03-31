import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner } from 'components/Spinner'
import { Word } from '../../pages/mots'
import { ToastContainer, toast } from 'react-toastify'
import Cookies from 'js-cookie'

export const WordDisplay = () => {

    const [wordGroups, setWordGroups] = useState<string[]>([])
    const [currentWord, setCurrentWord] = useState<Word>(
        {
            Word: '',
            Definitions: [],
            hasTwoForms: false,
            Forms: {
                Masculine: '',
                Feminine: ''
            },
            GrammarTerm: '',
            Plural: '',
            dateAdded: '',
            lastUpdate: ''
        }
    )
    const [submittingData, setSubmittingData] = useState(false)
    const [inEditMode, setInEditMode] = useState(false)
    const [inDeleteMode, setInDeleteMode] = useState(false)
    const [wordHasBeenEdited, setWordHasBeenEdited] = useState(false)

    const { wordId } = useParams()
    const navigate = useNavigate()
    const username = localStorage.getItem('user')
    const userToken = Cookies.get('token')

    useEffect(() => {
        if (username) {
            getWordData()
        }
    }, [])

    useEffect(() => {
        if (!inEditMode && wordHasBeenEdited) {
            handleEditedWordSubmit()
        }
    }, [inEditMode])

    const getWordData = async () => {
        await fetch('http://localhost:5000/words/' + wordId + '/' + username)
            .then((response) => {
                if (!response.ok) {
                    console.error('put error here')
                    return
                }
                return response.json()
            })
            .then((data) => {
                setWordGroups(data.groups)
                setCurrentWord(data.word)
            })
    }

    const handleEditModeChange = () => {
        setInDeleteMode(false)
        setInEditMode(!inEditMode)
    }

    const handleDeleteModeChange = () => {
        setInDeleteMode(true)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setWordHasBeenEdited(true)
        const { name, id, value } = e.currentTarget

        if (name.includes("Definition") || name.includes("Gender")) {
            const defIndex = Number(name.charAt(name.length - 1))
            const nameWithNoIndex = name.substring(0, name.length - 1)

            setCurrentWord((prev) => {
                const newDefinitions = [...prev.Definitions]

                newDefinitions[defIndex] = {
                    ...newDefinitions[defIndex],
                    [nameWithNoIndex]: value,
                }

                return {
                    ...prev,
                    Definitions: newDefinitions,
                }
            })
            return
        }

        if (name === "Forms") {
            setCurrentWord(prev => ({ ...prev, ["Forms"]: { ...prev.Forms, [id]: value } }))
            return
        }

        setCurrentWord(prev => ({ ...prev, [name]: value }))
    }

    const handleFormChange = () => {
        setCurrentWord((prev) => ({ ...prev, ["Forms"]: { "Masculine": '', "Feminine": '' } }))
        setCurrentWord((prev) => ({ ...prev, ['hasTwoForms']: !currentWord.hasTwoForms }))
    }

    const handleEditedWordSubmit = () => {
        setSubmittingData(true)
        fetch("http://localhost:5000/words/" + currentWord._id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentWord)
        })
            .then((response) => {
                if (!response.ok) {
                    toast.error('Something has gone wrong, please reload the page', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: 'dark'
                    })
                    window.location.reload()
                }
                toast.success('Successfully modified', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'dark'
                })
                setSubmittingData(false)
                setWordHasBeenEdited(false)
            })
    }

    const handleDeleteWord = () => {
        fetch('http://localhost:5000/words/' + currentWord._id, {
            method: "DELETE",
            headers: {
                'authorization': 'Bearer ' + userToken
            }
        })
            .then((response) => {
                if (!response.ok) {
                    toast.error('Something has gone wrong, please reload the page', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: 'dark'
                    })
                    window.location.reload()
                }
                return (response.json())
            })
            .then((data) => {
                toast.success(data.message, {
                    toastId: "deleteToast",
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'dark'
                })
                toast.onChange((payload) => {
                    if (payload.status === 'removed' && payload.id === 'deleteToast') {
                        navigate('/mots')
                    }
                })
            })
    }


    if (currentWord == null) {
        return (
            <div className="container pt-5 text-center">
                <div className="row pt-5">
                    <div className="col">
                        <Spinner color="light" buttonSpinner={false} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container pt-5 fs-4">
            <ToastContainer toastStyle={{ fontSize: '15px' }} />
            <div className="row pt-5 justify-content-center">
                <div className="col-6">
                    {/* VIEW MODE */}
                    <div className={`card text-start ${inDeleteMode ? 'd-none' : inEditMode ? 'd-none' : 'd-block'}`}>
                        <div className="card-header fs-6">
                            <ul className="nav nav-tabs card-header-tabs justify-content-end">
                                <li className="nav-item">
                                    <button className="nav-link active" aria-current="true">Vue</button>
                                </li>
                                <li className="nav-item">
                                    {submittingData ?
                                        <button className="nav-link"><Spinner color="dark" buttonSpinner={true} /></button>
                                        :
                                        <button className="nav-link" onClick={handleEditModeChange} id="edit-nav">Modifier</button>
                                    }
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" id="edit-nav" onClick={handleDeleteModeChange}>Supprimer</button>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            Mot
                                        </div>
                                    </div>
                                    {!currentWord.hasTwoForms ?
                                        <div className="row fs-5 fw-light text-body">
                                            <div className="col">
                                                {currentWord.Word}
                                            </div>
                                        </div>
                                        : <div className="row fs-5 fw-light pt-2">
                                            <div className="col-5">
                                                <div className="row">
                                                    <div className="col">
                                                        {currentWord.Forms.Masculine}
                                                    </div>
                                                </div>
                                                <div className="row fs-6 fst-italic">
                                                    <div className="col">
                                                        Masculine
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="row">
                                                    <div className="col">
                                                        {currentWord.Forms.Feminine}
                                                    </div>
                                                </div>
                                                <div className="row fs-6 fst-italic">
                                                    <div className="col">
                                                        Feminine
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    <div className="row pt-3">
                                        <div className="col">
                                            Terme
                                        </div>
                                    </div>
                                    <div className="row fs-5 fw-light text-body">
                                        <div className="col">
                                            {currentWord.GrammarTerm.split(/(?=[A-Z])/).join(" ")}
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            Groupes
                                        </div>
                                    </div>
                                    {wordGroups.map((group, index) => {
                                        return (
                                            <div className="row fs-5 fw-light text-body" key={index}>
                                                <div className="col">
                                                    {group}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col">
                                    Définition{currentWord.Definitions[1] ? 's' : ''}
                                </div>
                            </div>
                            <div className="row fs-5 text-body">
                                {currentWord.Definitions.map((def, index) => {
                                    return (
                                        <div className="col-3" key={index}>
                                            <div className="row fw-light">
                                                <div className="col">
                                                    {def.Definition}
                                                </div>
                                            </div>
                                            <div className="row fs-6 fst-italic">
                                                <div className="col">
                                                    {def.Gender}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="row pt-3">
                                <div className="col">
                                    Date
                                </div>
                            </div>
                            <div className="row fs-5 fw-light text-body">
                                <div className="col">
                                    Ajoutée: {new Date(currentWord.dateAdded).toDateString()}
                                </div>
                                <div className="col">
                                    Modifiée: {new Date(currentWord.lastUpdate).toDateString()}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* EDIT MODE */}
                    <div className={`card text-begin ${inDeleteMode ? 'd-none' : inEditMode ? 'd-block' : 'd-none'}`}>
                        <div className="card-header fs-6">
                            <ul className="nav nav-tabs card-header-tabs justify-content-end">
                                <li className="nav-item">
                                    <button className="nav-link" aria-current="true" onClick={handleEditModeChange} id="edit-nav">Vue</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active" aria-current="true">Modifier</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" id="edit-nav" onClick={handleDeleteModeChange}>Supprimer</button>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    Mot
                                </div>
                            </div>
                            <div className="row pt-2 fs-6">
                                <div className="col">
                                    <input className="edit-radio"
                                        type="radio"
                                        name="TwoForms"
                                        readOnly
                                        checked={currentWord.hasTwoForms}
                                        onClick={handleFormChange} />
                                    <label className="form-check-label" htmlFor="TwoForms">
                                        Deux Formes?
                                    </label>
                                </div>
                            </div>
                            {!currentWord.hasTwoForms ?
                                <div className="row fs-5 fw-light text-body">
                                    <div className="col-6">
                                        <input type="text"
                                            className="edit-input"
                                            name="Word"
                                            onChange={handleInputChange}
                                            value={currentWord.Word} />
                                    </div>
                                </div>
                                : <div className="row fs-5 fw-light pt-2">
                                    <div className="col-3">
                                        <div className="row">
                                            <div className="col">
                                                <input type="text"
                                                    className="edit-input"
                                                    id="Masculine"
                                                    name="Forms"
                                                    onChange={handleInputChange}
                                                    value={currentWord.Forms.Masculine} />
                                            </div>
                                        </div>
                                        <div className="row fs-6 fst-italic">
                                            <div className="col">
                                                Masculine
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="row">
                                            <div className="col">
                                                <input type="text"
                                                    className="edit-input"
                                                    id="Feminine"
                                                    name="Forms"
                                                    onChange={handleInputChange}
                                                    value={currentWord.Forms.Feminine} />
                                            </div>
                                        </div>
                                        <div className="row fs-6 fst-italic">
                                            <div className="col">
                                                Feminine
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="row pt-2">
                                <div className="col">
                                    Terme
                                </div>
                            </div>
                            <div className="row fs-5 fw-light text-body">
                                <div className="col-6">
                                    <select className="edit-input" defaultValue={currentWord.GrammarTerm} name="GrammarTerm" onChange={handleInputChange}>
                                        <option value="Adjective">Adjective</option>
                                        <option value="Adverb">Adverb</option>
                                        <option value="Article">Article</option>
                                        <option value="CompoundNoun">Compound Noun</option>
                                        <option value="Conjunction">Conjunction</option>
                                        <option value="Noun">Noun</option>
                                        <option value="Preposition">Preposition</option>
                                        <option value="Pronoun">Pronoun</option>
                                        <option value="Phrase">Phrase</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col">
                                    Définition{currentWord.Definitions[1] ? 's' : ''}
                                </div>
                            </div>
                            <div className="row fs-5 text-body">
                                {currentWord.Definitions.map((def, index) => {
                                    return (
                                        <div className="col-3" key={index}>
                                            <div className="row fw-light">
                                                <div className="col">
                                                    <input type="text"
                                                        className="edit-input"
                                                        name={`Definition${index}`}
                                                        id="Definition"
                                                        value={def.Definition}
                                                        onChange={handleInputChange} />
                                                </div>
                                            </div>
                                            <div className="row fs-6 fst-italic">
                                                <div className="col">
                                                    <input className="edit-radio"
                                                        type="radio"
                                                        name={`Gender${index}`}
                                                        value="Masculine"
                                                        id="Masculine"
                                                        checked={def.Gender === "Masculine"}
                                                        onChange={handleInputChange} />
                                                    <label className="form-check-label" htmlFor="Feminine">
                                                        Masculine
                                                    </label>
                                                </div>
                                                <div className="col">
                                                    <input className="edit-radio"
                                                        type="radio"
                                                        name={`Gender${index}`}
                                                        value="Feminine"
                                                        id="Feminine"
                                                        checked={def.Gender === "Feminine"}
                                                        onChange={handleInputChange} />
                                                    <label className="form-check-label" htmlFor="Feminine">
                                                        Feminine
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={`card text-start ${inDeleteMode ? 'd-block' : 'd-none'}`}>
                        <div className="card-header fs-6">
                            <ul className="nav nav-tabs card-header-tabs justify-content-end">
                                <li className="nav-item">
                                    <button className="nav-link" id="edit-nav" onClick={handleEditModeChange}>Vue</button>
                                </li>
                                <li className="nav-item">
                                    {submittingData ?
                                        <button className="nav-link"><Spinner color="dark" buttonSpinner={true} /></button>
                                        :
                                        <button className="nav-link" onClick={handleEditModeChange} id="edit-nav">Modifier</button>
                                    }
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active" aria-current="true" id="edit-nav">Supprimer</button>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    Are you sure? This cannot be undone
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button className="btn border border-2 border-dark rounded" id="term-button" onClick={handleDeleteWord}>Yes</button>
                                </div>
                                <div className="col">
                                    <button className="btn border border-2 border-dark rounded" id="term-button" onClick={handleEditModeChange}>No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}