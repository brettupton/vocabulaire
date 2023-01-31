import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Modal } from 'bootstrap'
import Login from '../../components/Login'
import useToken from '../../components/useToken'
import Alert from '../../components/Alert'
import Spinner from '../../components/Spinner'

export default function EditWord() {

    const url = 'https://vocabulairehost.onrender.com/'

    const [width, setWidth] = useState(window.innerWidth)
    const [word, setWord] = useState({})
    const [updatedWord, setUpdatedWord] = useState({})
    const [postResponse, setPostResponse] = useState({
        message: '',
        received: false
    })
    const [loading, setLoading] = useState(false)
    const [fetchingData, setFetchingData] = useState(true)
    const [deleteModal, setDeleteModal] = useState('')

    const { token, setToken } = useToken()
    const isMobile = (width <= 768)
    const { wordId } = useParams()
    const navigate = useNavigate()

    const requestOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updatedWord)
    }

    useEffect(() => {
        getWordData()
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    // Waiting for page to load with data so modal is not undefined
    useEffect(() => {
        if (!fetchingData && token) {
            setDeleteModal(new Modal(document.getElementById('deletemodal')))
        } else {
            setDeleteModal('')
        }

    }, [fetchingData])

    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }

    function getWordData() {
        setFetchingData(true)
        fetch(url + `words/getword/${wordId}`)
            .then((response) => response.json())
            .then((word) => {
                setWord(word)
                setUpdatedWord(word)
                setFetchingData(false)
            })
            .catch((error) => console.log(error))
    }

    function resetInputData() {
        const inputs = {
            'French': document.getElementById('French'),
            'English': document.getElementById('English'),
            'Gender': document.getElementById('Gender'),
            'Term': document.getElementById('Term')
        }

        inputs.French.value = ''
        inputs.English.value = ''
        inputs.Gender.value = ''
        inputs.Term.value = ''
    }

    function toggleModal() {
        deleteModal.toggle()
    }

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
        toggleModal()
        const response = e.target.name
        if (response === 'Yes') {
            handleDelete()
        }
    }

    const handleDelete = () => {
        toggleModal()
        fetch(url + `words/delete/${wordId}`)
            .then((response) => response.json())
            .then((data) => {
                setPostResponse({
                    message: data.message,
                    received: true
                })
                setTimeout(() => {
                    navigate('/mots/flashcards')
                }, 3000)
            })
    }

    if (!token || token === 'undefined') {
        return <Login setToken={setToken} />
    }

    return (
        fetchingData ?
            <div className="min-vh-100 text-center">
                <Spinner color="light" topOfPage={true} size={''} />
            </div>
            : <div className={`container min-vh-100 text-center fs-6 ${isMobile ? 'w-100' : 'w-25'}`}>
                <div className="modal fade" id="deletemodal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" onClick={toggleModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="row pb-3 pt-2">
                                    <div className="col fs-6">
                                        Are you sure you'd like to delete this word?
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" name="Yes" onClick={checkDelete}>Yes</button>
                                <button type="button" className="btn btn-secondary" onClick={toggleModal}>No</button>
                            </div>
                        </div>
                    </div>
                </div>
                {postResponse.received ? <Alert message={postResponse.message} /> : ''}
                <div className="row justify-content-end pt-5">
                    <div className="col-2">
                        <button className="btn px-0" onClick={toggleModal}>
                            <img id="delete-icon" alt="Delete Icon" />
                        </button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit} autoComplete="off">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="French">Français</label>
                                            <input type="text" name="French"
                                                onChange={handleChange} className="form-control form-control-sm" id="French" placeholder={word.French} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="English">Anglais</label>
                                            <input type="text" name="English"
                                                onChange={handleChange} className="form-control form-control-sm" id="English" placeholder={word.English} />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mt-2">
                                        <div className="col">
                                            Sexe
                                            <select className="form-select form-select-sm" defaultValue={word.Gender} onChange={handleChange} name="Gender">
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
                                            <select className="form-select form-select-sm" defaultValue={word.Term} onChange={handleChange} name="Term">
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
                                            <button type="submit" className="btn btn-primary mt-2">
                                                {loading
                                                    ? <Spinner color="light" topOfPage={false} size={'-sm'} />
                                                    : 'Update'}
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