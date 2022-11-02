import { useState, useEffect } from 'react'

export default function Add() {

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

    useEffect(() => {
        if (postResponse.received) {
            alert(`${postResponse.message}! New word added`)
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

        const url = 'http://localhost:5000/addword'
        const requestOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newWord)
        }
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => setPostResponse({
                message: data.message,
                received: true
            }))
            .catch(error => console.log('Form submit error', error))
    }

    return (
        <div className="layout">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="French">French</label>
                        <input type="text" name="French" onChange={handleChange} value={newWord.French} className="form-control" id="French" placeholder="French" />
                    </div>
                    <div className="col">
                        <label htmlFor="English">English</label>
                        <input type="text" name="English" onChange={handleChange} value={newWord.English} className="form-control" id="English" placeholder="English" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="MascOrFemme">Masc or Femme</label>
                    <input className="form-control" name="MascOrFemme" onChange={handleChange} id="MascOrFemme" value={newWord.MascOrFemme} />
                </div>
                <div className="form-group">
                    <label htmlFor="GrammarType">Grammar Type</label>
                    <input type="text" name="GrammarType" onChange={handleChange} value={newWord.GrammarType} className="form-control" id="GrammarType" placeholder="Grammar Type" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}