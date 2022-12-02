import { useState, useEffect } from 'react'

export default function Login(props) {
    const { setToken } = props

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const [postResponse, setPostResponse] = useState({
        message: '',
        received: false
    })

    const url = 'https://vocabulairehost.onrender.com/'

    useEffect(() => {
        if (postResponse.received) {
            if (!postResponse.token) {
                alert(`${postResponse.message}`)
                window.location.reload()
            }
            setToken(postResponse.token)
            alert(`${postResponse.message}`)
            window.location.reload()
        }
    }, [postResponse])

    async function loginUser(credentials) {
        return fetch(url + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
            .then(response => setPostResponse({
                token: response.token,
                message: response.message,
                received: true
            }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await loginUser({
            username,
            password
        })
    }

    const handleChange = (e) => {
        switch (e.target.id) {
            case 'username':
                setUsername(e.target.value)
                break
            case 'password':
                setPassword(e.target.value)
                break
            case 'default':
                break
        }
    }

    return (
        <div className="container min-vh-100 text-center pt-5 text-white fs-5">
            <div className="row pt-5">
                <div className="col">
                    This content is restricted. Please log in to continue.
                </div>
            </div>
            <div className="row pt-5 justify-content-center">
                <div className="col-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" onChange={handleChange} aria-describedby="userHelp" placeholder="Enter username" />
                        </div>
                        <div className="form-group pt-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" onChange={handleChange} placeholder="Password" autoComplete="login-section password" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}