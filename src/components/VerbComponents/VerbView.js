import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import VerbViewDisplay from "./VerbViewDisplay"

export default function VerbView() {
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

    // Edit Verb Component
    const [verb, setVerb] = useState({})
    const [currentTenseSelected, setCurrentTenseSelected] = useState('Présent')
    const [inEditMode, setInEditMode] = useState(false)
    const [viewModeDisplay, setViewModeDisplay] = useState('block')
    const [editModeDisplay, setEditModeDisplay] = useState('none')
    const [fetchingInitialData, setFetchingInitialData] = useState(true)
    const [postResponse, setPostResponse] = useState({
        message: '',
        received: false
    })
    const [verbHasBeenEdited, setVerbHasBeenEdited] = useState(false)
    const [verbUpdateSubmitted, setVerbUpdateSubmitted] = useState(false)

    const url = new URL('https://vocabulairehost.onrender.com/')
    const { verbId } = useParams()
    const isSubjunctive = (currentTenseSelected === 'PrésentDuSubjonctif')
    const navigate = useNavigate()

    useEffect(() => {
        fetchVerbData()
    }, [])

    useEffect(() => {
        if (inEditMode) {
            setViewModeDisplay('none')
            setEditModeDisplay('block')
        } else {
            if (verbHasBeenEdited) {
                handleSubmit()
            }
            setViewModeDisplay('block')
            setEditModeDisplay('none')
        }
    }, [inEditMode])

    useEffect(() => {
        if (postResponse.message === 'Success') {
            setVerbUpdateSubmitted(true)
            fetchVerbData()
        }
    }, [postResponse])

    function fetchVerbData() {
        setPostResponse({
            message: '',
            received: false
        })

        fetch(`${url}verbs/get/${verbId}`)
            .then(response => {
                if (!response.ok) {
                    return console.error('Something went wrong...')
                }
                return response.json()
            })
            .then(data => {
                setVerb(data)
                setFetchingInitialData(false)
            })
            .catch(error => console.error(error))
    }

    function switchCurrentMode(e) {
        const modeClicked = e.target.id
        switch (modeClicked) {
            case 'edit':
                setVerbUpdateSubmitted(false)
                setInEditMode(true)
                break
            case 'view':
                setInEditMode(false)
                break
            default:
                break
        }
    }

    function handleSelectChange(e) {
        const { value } = e.target

        setCurrentTenseSelected(value)
    }

    function handleInputChange(e) {
        setVerbHasBeenEdited(true)
        const { name, value } = e.target

        if (name === 'Verb' || name === 'Translation') {
            setVerb(values => ({ ...values, [name]: value }))
        } else {
            setVerb(values => ({ ...values, [currentTenseSelected]: { ...values[currentTenseSelected], [name]: value } }))
        }
    }

    function handleSubmit() {
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(verb)
        }

        fetch(`${url}verbs/edit/${verbId}`, options)
            .then(response => {
                if (!response.ok) {
                    return console.error('Something went wrong: ', response)
                }
                return response.json()
            })
            .then(data => {
                setPostResponse({
                    message: data.message,
                    received: true
                })
                setVerbHasBeenEdited(false)
            })
            .catch(error => console.error(error))
    }

    function handleGoBack() {
        navigate(-1)
    }

    function startsWithVowelOrH(word) {
        const vowels = ("aàâäæeèéêëhiîïoôœuùûü")
        return vowels.indexOf(word[0]) !== -1
    }

    // Check if the verb begins with a vowel or 'h' and if subjunctive
    function returnJeConjugation(verb) {
        if (isSubjunctive) {
            if (startsWithVowelOrH(verb.Je)) {
                return 'Que j\''
            } else {
                return 'Que je '
            }
        } else {
            if (startsWithVowelOrH(verb.Je)) {
                return 'J\''
            } else {
                return 'Je '
            }
        }
    }

    // Fifty percent chance to return either il or elle in conjugations
    // Don't want to display both at the same time so relatively fair way of choosing
    // Returns inputs if in edit mode
    function returnIlOrElle() {
        const randomNumber = Math.random()
        if (randomNumber < .5 && !verbHasBeenEdited) {
            if (inEditMode) {
                return (
                    <div className="row pt-3">
                        <div className="col">
                            {isSubjunctive ? 'Que il' : 'Il'}
                        </div>
                        <div className={`col${isMobile ? '-4' : ''}`}>
                            <div className="input-group input-group-sm">
                                <input className="form-control" value={verb[currentTenseSelected]['Il']} name='Il' onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="col">
                            {isSubjunctive ? 'Que ils' : 'Ils'}
                        </div>
                        <div className={`col${isMobile ? '-4' : ''}`}>
                            <div className="input-group input-group-sm">
                                <input className="form-control" value={verb[currentTenseSelected]['Ils']} name='Ils' onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                )
            }
            return (
                <div className="row pt-3">
                    <div className="col">
                        {isSubjunctive ? 'Que il' : 'Il'} {verb[currentTenseSelected]['Il']}
                    </div>
                    <div className="col">
                        {isSubjunctive ? 'Que ils' : 'Ils'} {verb[currentTenseSelected]['Ils']}
                    </div>
                </div>
            )
        } else {
            if (inEditMode) {
                return (
                    <div className="row pt-3">
                        <div className="col">
                            {isSubjunctive ? 'Que elle' : 'Elle'}
                        </div>
                        <div className="col">
                            <div className="input-group input-group-sm">
                                <input className="form-control" value={verb[currentTenseSelected]['Il']} name='Il' onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="col">
                            {isSubjunctive ? 'Que elles' : 'Elles'}
                        </div>
                        <div className="col">
                            <div className="input-group input-group-sm">
                                <input className="form-control" value={verb[currentTenseSelected]['Ils']} name='Ils' onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                )
            }
            return (
                <div className="row pt-3">
                    <div className="col">
                        {isSubjunctive ? 'Que elle' : 'Elle'} {verb[currentTenseSelected]['Il']}
                    </div>
                    <div className="col">
                        {isSubjunctive ? 'Que elles' : 'Elles'} {verb[currentTenseSelected]['Ils']}
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <VerbViewDisplay
                isMobile={isMobile}
                fetchingInitialData={fetchingInitialData}
                isSubjunctive={isSubjunctive}
                verbUpdateSubmitted={verbUpdateSubmitted}
                verb={verb}
                currentTenseSelected={currentTenseSelected}
                viewModeDisplay={viewModeDisplay}
                editModeDisplay={editModeDisplay}
                switchCurrentMode={switchCurrentMode}
                handleSelectChange={handleSelectChange}
                handleInputChange={handleInputChange}
                returnJeConjugation={returnJeConjugation}
                returnIlOrElle={returnIlOrElle} />
            <div className="row">
                <div className="col">
                    <button className="type-button" onClick={handleGoBack}>Retourner</button>
                </div>
            </div>
        </>
    )
}