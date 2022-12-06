import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Login from '../components/Login'
import useToken from '../components/useToken'
import Alert from '../components/Alert'

export default function EditWord() {

    const url = 'http://localhost:5000/'

    const [width, setWidth] = useState(window.innerWidth)
    const [word, setWord] = useState({})
    const [updatedWord, setUpdatedWord] = useState({})
    const [postResponse, setPostResponse] = useState({
        message: '',
        received: false
    })
    const [loading, setLoading] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const { token, setToken } = useToken()
    const isMobile = (width <= 768)

    const { wordId } = useParams()

    const requestOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updatedWord)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }

    function getWordData() {
        fetch(url + `words/${wordId}`)
            .then((response) => response.json())
            .then((word) => {
                setWord(word)
                setUpdatedWord(word)
            })
            .catch((error) => console.log(error))
    }

    function resetInputData() {
        const inputs = {
            'French': document.getElementById('French'),
            'English': document.getElementById('English'),
            'MascOrFemme': document.getElementById('MascOrFemme'),
            'GrammarType': document.getElementById('GrammarType')
        }

        inputs.French.value = ''
        inputs.English.value = ''
        inputs.MascOrFemme.value = ''
        inputs.GrammarType.value = ''
    }

    useEffect(() => {
        getWordData()
    }, [])

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setUpdatedWord(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setLoading(true)

        fetch(url + `words/editword/${wordId}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setPostResponse({
                    message: data.message,
                    received: true
                })
                getWordData()
                setLoading(false)
                resetInputData()
            })
            .catch(error => console.log('Form submit error', error))
    }

    const checkDelete = (e) => {
        const response = e.target.name
        if (response === 'Yes') {
            handleDelete()
        } else {
            setDeleting(false)
        }
    }

    const handleDelete = () => {
        fetch(url + `words/delete/${wordId}`)
            .then((response) => response.json())
            .then((message) => {
                alert(`${message.message}: Word deleted`)
                window.location = ('/lesmots/flashcards')
            })
    }

    if (!token || token === 'undefined') {
        return <Login setToken={setToken} />
    }

    return (
        word === '' ?
            <div className="min-vh-100 text-center pt-5">
                <div className="spinner-border text-light pt-5" role="status">
                    <span className="sr-only">&nbsp;</span>
                </div>
            </div>
            : <div className={`container min-vh-100 text-center pt-5 fs-6 ${isMobile ? 'w-100' : 'w-25'}`}>
                {postResponse.received ? <Alert message={`${postResponse.message}! Word updated`} /> : ''}
                <div className="row justify-content-end pt-5">
                    <div className="col-2">
                        <btn className="btn" onClick={() => setDeleting(true)}>
                            <img id="delete-icon" alt="Delete Icon" />
                        </btn>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit} autoComplete="off">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="French">French</label>
                                            <input type="text" name="French" className="form-control form-control-sm" onChange={handleChange} id="French" placeholder={word.French} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="English">English</label>
                                            <input type="text" name="English" className="form-control form-control-sm" onChange={handleChange} id="English" placeholder={word.English} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="MascOrFemme">Masc or Femme</label>
                                        <input className="form-control form-control-sm" name="MascOrFemme" onChange={handleChange} id="MascOrFemme" placeholder={word.MascOrFemme} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="GrammarType">Grammar Type</label>
                                        <input type="text" name="GrammarType" className="form-control form-control-sm" onChange={handleChange} id="GrammarType" placeholder={word.GrammarType} />
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-5">
                                            <button type="submit" className="btn btn-primary mt-2">
                                                {loading
                                                    ? <div className="spinner-border text-light spinner-border-sm" role="status">
                                                        <span className="visually-hidden"></span>
                                                    </div>
                                                    : 'Update'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {deleting
                    ?
                    <div className={`container bg-white rounded mt-3 ${isMobile ? 'w-50' : 'w-75'}`}>
                        <div className="row pb-3 pt-2">
                            <div className="col fs-6">
                                Are you sure you'd like to delete this word?
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col">
                                <button className="btn btn-primary" name="Yes" onClick={checkDelete}>Yes</button>
                            </div>
                            <div className="col">
                                <button className="btn btn-primary" name="No" onClick={checkDelete}>No</button>
                            </div>
                        </div>
                    </div>
                    : ''}
            </div>
    )
}