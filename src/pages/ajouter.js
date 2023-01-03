import { useState, useEffect } from 'react'
import Login from '../components/Login'
import useToken from '../components/useToken'
import Alert from '../components/Alert'
import Spinner from '../components/Spinner'
import FrenchInput from '../components/FrenchInput'

export default function Ajouter() {

    const [width, setWidth] = useState(window.innerWidth)
    const [loading, setLoading] = useState(false)
    const [postResponse, setPostResponse] = useState({
        message: '',
        received: false
    })
    const [newWord, setNewWord] = useState(
        {
            French: '',
            English: '',
            Gender: 'Masculine',
            Term: 'Noun'
        }
    )

    const isMobile = width <= 768
    const baseUrl = 'https://vocabulairehost.onrender.com/'
    const { token, setToken } = useToken()

    const url = baseUrl + 'words/add/addword'

    const requestOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newWord)
    }

    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    const handleChange = (event) => {
        const frenchInputElement = document.getElementById('French')
        const name = event.target.name
        const value = event.target.value
        setNewWord(values => ({ ...values, [name]: value }))
        setNewWord(values => ({ ...values, French: frenchInputElement.value }))
    }

    const handleSubmit = (event) => {

        event.preventDefault()
        setLoading(true)

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                setPostResponse({
                    message: data.message,
                    received: true
                })
                setNewWord({
                    French: '',
                    English: '',
                    Gender: '',
                    Term: ''
                })
                setLoading(false)
            })
            .catch(error => console.log('Form submit error', error))
    }

    if (!token || token === 'undefined') {
        return <Login setToken={setToken} />
    }

    return (
        <div className={`container min-vh-100 text-center fs-6 ${isMobile ? 'w-100' : 'w-25'}`}>
            {postResponse.received ?
                <Alert message={`${postResponse.message}!`} />
                : ''}
            <div className="row justify-content-center mb-5 pt-5">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="French">Français</label>
                                        <FrenchInput handleChange={handleChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="English">Anglais</label>
                                        <input type="text" name="English"
                                            onChange={handleChange}
                                            placeholder="Anglais"
                                            className="form-control form-control-sm" id="English" />
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-2">
                                    <div className="col">
                                        Sexe
                                        <select className="form-select form-select-sm" defaultValue="Masculine" onChange={handleChange} name="Gender">
                                            <option value="Masculine">Masculine</option>
                                            <option value="Feminine">Feminine</option>
                                            <option value="Plural">Plural</option>
                                            <option value="Neither">Neither</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-2">
                                    <div className="col">
                                        Partie du discours
                                        <select className="form-select form-select-sm" defaultValue="Noun" onChange={handleChange} name="Term">
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
                                <div className="row justify-content-center">
                                    <div className="col-5">
                                        <button type="submit" className="btn btn-primary m-2">
                                            {loading
                                                ? <Spinner color="light" topOfPage={false} size={'-sm'} />
                                                : 'Submit'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}