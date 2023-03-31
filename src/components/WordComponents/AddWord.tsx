import Cookies from "js-cookie"
import { DefinitionObject } from "pages/mots"
import { MobileContext } from "pages/layout"
import { useState, useContext } from "react"
import { ToastContainer, toast } from "react-toastify"

type WordNoDate = {
    Word: string,
    Definitions: DefinitionObject[],
    hasTwoForms: boolean,
    Forms: {
        Masculine: string,
        Feminine: string
    },
    GrammarTerm: string,
    Plural: string
}

export const AddWord = () => {
    const [newWord, setNewWord] = useState<WordNoDate>({
        Word: '',
        Definitions: [],
        hasTwoForms: false,
        Forms: {
            Masculine: '',
            Feminine: ''
        },
        GrammarTerm: 'Noun',
        Plural: ''
    })
    const [hasTwoForms, setHasTwoForms] = useState(false)

    const isMobile = useContext(MobileContext)
    const userToken = Cookies.get('token')
    const username = localStorage.getItem('user')

    const handleInputChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => {
        const { name, id, value } = e.currentTarget

        if (name.includes("Definition") || name.includes("Gender")) {
            const defIndex = Number(name.charAt(name.length - 1))
            const nameWithNoIndex = name.substring(0, name.length - 1)

            setNewWord((prev) => {
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
            setNewWord(prev => ({ ...prev, ["Forms"]: { ...prev.Forms, [id]: value } }))
            return
        }

        setNewWord(prev => ({ ...prev, [name]: value }))
    }

    const handleTwoFormsChange = (e: React.FormEvent<HTMLInputElement>) => {
        const isChecked = e.currentTarget.checked

        setHasTwoForms(isChecked)
        setNewWord((values) => ({ ...values, hasTwoForms: isChecked }))
    }

    const resetWordInputs = () => {
        const form = document.getElementById('word-form') as HTMLFormElement
        form.reset()
        setNewWord({
            Word: '',
            Definitions: [],
            hasTwoForms: false,
            Forms: {
                Masculine: '',
                Feminine: ''
            },
            GrammarTerm: 'Noun',
            Plural: ''
        })
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        fetch('http://localhost:5000/words/add/' + username, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + userToken
            },
            body: JSON.stringify(newWord)
        })
            .then((response) => {
                if (!response.ok) {
                    toast.error('Something went wrong', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: 'dark'
                    })
                }
                return response.json()
            })
            .then((data) => {
                toast.success(data.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                })
                resetWordInputs()
            })
    }

    return (
        <>
            <ToastContainer toastStyle={{ fontSize: '15px' }} />
            <div className="container text-black text-center pt-5">
                <div className={`container text-start fs-6 ${isMobile ? 'w-100' : 'w-50'} pt-5`}>
                    <div className="row justify-content-center mb-5 pt-5">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <form autoComplete="off" onSubmit={handleFormSubmit} id="word-form">
                                        <div className="row">
                                            <div className="col-4">
                                                New Word
                                            </div>
                                            <div className="col-5">
                                                Definition
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <input type="text" className="edit-input" name="Word" onChange={handleInputChange} />
                                            </div>
                                            <div className="col-5">
                                                <input type="text"
                                                    className="edit-input"
                                                    name={`Definition0`}
                                                    id="Definition"
                                                    onChange={handleInputChange} />
                                            </div>
                                            <div className="col-3">
                                                <div className="row pt-2">
                                                    <div className="col">
                                                        <input className="edit-radio"
                                                            type="radio"
                                                            name={`Gender0`}
                                                            value="Masculine"
                                                            id="Masculine"
                                                            onChange={handleInputChange} />
                                                        <label className="form-check-label" htmlFor="Masculine">
                                                            Masculine
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <input className="edit-radio"
                                                            type="radio"
                                                            name={`Gender0`}
                                                            value="Feminine"
                                                            id="Feminine"
                                                            onChange={handleInputChange} />
                                                        <label className="form-check-label" htmlFor="Feminine">
                                                            Feminine
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row pt-3">
                                            <div className="col-4">
                                                Plural Form
                                            </div>
                                            <div className="col-5">
                                                Definition
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <input type="text" className="edit-input" name="Plural" onChange={handleInputChange} />
                                            </div>
                                            <div className="col-5">
                                                <input type="text"
                                                    className="edit-input"
                                                    name={`Definition1`}
                                                    id="Definition"
                                                    onChange={handleInputChange} />
                                            </div>
                                            <div className="col-3">
                                                <div className="row pt-2">
                                                    <div className="col">
                                                        <input className="edit-radio"
                                                            type="radio"
                                                            name={`Gender1`}
                                                            value="Masculine"
                                                            id="Masculine"
                                                            onChange={handleInputChange} />
                                                        <label className="form-check-label" htmlFor="Masculine">
                                                            Masculine
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <input className="edit-radio"
                                                            type="radio"
                                                            name={`Gender1`}
                                                            value="Feminine"
                                                            id="Feminine"
                                                            onChange={handleInputChange} />
                                                        <label className="form-check-label" htmlFor="Feminine">
                                                            Feminine
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mt-2">
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="hasTwoForms" checked={hasTwoForms} onChange={handleTwoFormsChange} />
                                                    <label className="form-check-label" htmlFor="hasTwoForms">
                                                        Two forms?
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {hasTwoForms &&
                                            <div className="row pt-1">
                                                <div className="col">
                                                    <label htmlFor="MasculineForm">Masculine</label>
                                                    <input type="text" className="edit-input" id="Masculine" name="Forms" onChange={handleInputChange} />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="FeminineForm">Feminine</label>
                                                    <input type="text" className="edit-input" id="Feminine" name="Forms" onChange={handleInputChange} />
                                                </div>
                                            </div>
                                        }
                                        <div className="row mt-2">
                                            <div className="col">
                                                Grammar Term
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <select className="edit-input" defaultValue="Noun" name="GrammarTerm" onChange={handleInputChange}>
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
                                        <div className="row justify-content-center">
                                            <div className="col-3">
                                                <button type="submit" className="btn btn-primary mt-4">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}