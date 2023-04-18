import { useState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import { Spinner } from "../Spinner"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { ObjectId } from "mongodb"

type UserResponse = {
    username: string,
    dateCreated: string,
    role: string,
    _id: ObjectId
}

export const UserLogin = () => {

    const [userProfile, setUserProfile] = useState({
        username: '',
        password: ''
    })

    const [loadingSubmit, setLoadingSubmit] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false)

    const navigate = useNavigate()
    const { state } = useLocation()

    // Checks if user already logged in, navigates to home page if so
    useEffect(() => {
        const user = localStorage.getItem('user')

        if (user) {
            navigate(state.prevURL)
        }
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.id
        const value = e.currentTarget.value

        setUserProfile(values => ({ ...values, [name]: value }))
    }

    //Fetches login on backend, cookie with token is set and local storage with username and role is set
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setLoadingSubmit(true)
        setButtonDisabled(true)
        fetch('http://localhost:5000/users/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userProfile)
        })
            .then((response) => {
                if (!response.ok) {
                    toast.error('Invalid credentials. Please try again', {
                        theme: 'dark',
                        position: 'top-center'
                    })
                    setUserProfile(values => ({ ...values, password: "" }))
                    setLoadingSubmit(false)
                    setButtonDisabled(false)
                }
                return response.json()
            })
            .then((data) => {
                setUserLocalStorage(data.userInfo)
                setLoadingSubmit(false)
                setButtonDisabled(false)
            })
            .catch((err) => {
                console.error('Something has gone wrong', err)
            })
    }

    const setUserLocalStorage = (userData: UserResponse) => {
        localStorage.setItem('user', userData.username)
        localStorage.setItem('userRole', userData.role)
        window.location.reload()
    }

    return (
        <div className="container min-vh-100 text-center text-white fs-5 pt-5">
            <ToastContainer style={{ fontSize: '17px' }} />
            <div className="row pt-5">
                <div className="col">
                    Welcome back
                </div>
            </div>
            <div className="row pt-4 justify-content-center">
                <div className="col-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" onChange={handleInputChange} placeholder="Username" />
                        </div>
                        <div className="form-group pt-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" onChange={handleInputChange} placeholder="Password" autoComplete="off" />
                        </div>
                        <button type="submit" className="btn border border-2 border-dark rounded mt-3" id="term-button" disabled={buttonDisabled}>
                            {loadingSubmit ?
                                <Spinner color="light" buttonSpinner={true} />
                                : 'Log in'}
                        </button>
                    </form>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col">
                    New?
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Click the button below to sign up!
                </div>
            </div>
            <div className="row pt-1 justify-content-center">
                <div className="col-auto">
                    <Link to={"/user/register"}>
                        <button className="btn border border-2 border-dark rounded mt-3" id="term-button">Register</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}