import { useState, useEffect } from 'react'
import plusbutton from '../images/icons/plus-circle.svg'

export default function Add() {

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    const [postResponse, setPostResponse] = useState({
        message: '',
        received: false
    })
    const [newWord, setNewWord] = useState(
        {
            French: '',
            English: '',
            MascOrFemme: '',
            GrammarType: ''
        }
    )

    const [newWordArray, setNewWordArray] = useState([])

    const [multiAdd, setMultiAdd] = useState(false)

    const url = multiAdd ? 'http://localhost:5000/multiaddword' : 'http://localhost:5000/addword'

    const requestOptions = multiAdd 
        ? {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newWordArray)
          } 
        : {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newWord)
          } 

    useEffect(() => {
        if (postResponse.received) {
            multiAdd 
            ? alert(`${postResponse.message}! New words added`)
            : alert(`${postResponse.message}! New word added`)
            window.location.reload()
        }
    }, [postResponse])

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setNewWord(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => setPostResponse({
                message: data.message,
                received: true
            }))
            .catch(error => console.log('Form submit error', error))
    }

    const handlePlusClick = () => {
        setNewWordArray(values => ([...values, newWord]))
        setNewWord({
            French: '',
            English: '',
            MascOrFemme: '',
            GrammarType: ''
        })
        setMultiAdd(true)
    }

    return (
            <div className={`container min-vh-100 text-center pt-5 fs-6 ${isMobile ? 'w-100' : 'w-25'}`}>
                <div className="row justify-content-center mb-5 pt-5">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit} autoComplete="off">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="French">French</label>
                                            <input type="text" name="French" onChange={handleChange} value={newWord.French} className="form-control form-control-sm" id="French" placeholder="French" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="English">English</label>
                                            <input type="text" name="English" onChange={handleChange} value={newWord.English} className="form-control form-control-sm" id="English" placeholder="English" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="MascOrFemme">Masc or Femme</label>
                                        <input className="form-control form-control-sm" name="MascOrFemme" onChange={handleChange} id="MascOrFemme" value={newWord.MascOrFemme} placeholder="Masculine or Feminine" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="GrammarType">Grammar Type</label>
                                        <input type="text" name="GrammarType" onChange={handleChange} value={newWord.GrammarType} className="form-control form-control-sm" id="GrammarType" placeholder="Grammar Type" />
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-5">
                                            <button type="submit" className="btn btn-primary m-2">{multiAdd ? 'Submit All' : 'Submit'}</button>
                                        </div>
                                        <div className="col-4 mt-1">
                                            <button className="btn" onClick={handlePlusClick} type="button">
                                                <img src={plusbutton} height="34px" width="34px" alt="Plus Button"/>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col">
                                        <small>Press + to add another word</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-white">
                    <div className="col">
                        {multiAdd 
                        ? "New words: [" + newWordArray.map((word) => {
                            return (` ${word.French} - ${word.English}`) 
                        }) + " ]" 
                        : ""}
                    </div>
                </div>
            </div>
    )
}