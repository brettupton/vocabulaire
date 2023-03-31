import { Spinner } from "components/Spinner"
import { MobileContext } from "pages/layout"
import { ObjectId } from "mongodb"
import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"


type UserRegisterResponse = {
    _id: ObjectId,
    username: string,
    role: string,
    dateCreated: Date,
    wordGroups: string[]
}

export const UserRegister = () => {
    const [registerUserInfo, setRegisterUserInfo] = useState({
        username: '',
        password: ''
    })
    const [loadingSubmit, setLoadingSubmit] = useState(false)
    const [passwordMatched, setPasswordMatched] = useState(false)
    const [passwordMatchErrorText, setPasswordMatchErrorText] = useState('')

    const navigate = useNavigate()
    const isMobile = useContext(MobileContext)

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            navigate('/')
        }
    }, [])

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const id = e.currentTarget.id
        const value = e.currentTarget.value

        setRegisterUserInfo((values) => ({ ...values, [id]: value }))
    }

    const handleRegisterUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (passwordMatched) {
            setLoadingSubmit(true)
            fetch('http://localhost:5000/users/register',
                {
                    method: 'POST',
                    credentials: "include",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(registerUserInfo)
                })
                .then((response) => {
                    if (!response.ok) {
                        response.json()
                            .then((message) => {
                                const code = message.error.code

                                if (code === 11000) {
                                    toast.error('Username already exists', {
                                        theme: 'dark',
                                        position: 'top-center'
                                    })
                                }
                            })
                        setLoadingSubmit(false)
                    }
                    else (
                        response.json()
                            .then(data => {
                                setUserLocalStorage(data)
                                setLoadingSubmit(false)
                            })
                    )
                })
                .catch((err) => {
                    console.error('Something has gone wrong', err)
                })
        }
    }

    const setUserLocalStorage = (userData: UserRegisterResponse) => {
        localStorage.setItem('user', userData.username)
        localStorage.setItem('userRole', userData.role)
        window.location.reload()
    }

    const handlePasswordMatch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const passwordInput = document.getElementById('password')?.textContent
        const matchAttempt = e.currentTarget.value

        if (matchAttempt !== passwordInput) {
            setPasswordMatchErrorText('Les mots de passe doivent correspondre')
            setPasswordMatched(false)
            return
        }
        setPasswordMatched(true)
    }

    return (
        <div className="container min-vh-100 text-center text-white fs-5 pt-5">
            <ToastContainer style={{ fontSize: '17px' }} />
            <div className="row pt-5">
                <div className="col">
                    Bienvenue!
                </div>
            </div>
            <div className="row pt-1">
                <div className="col">
                    Créer un nom d'utilisateur et un mot de passe
                </div>
            </div>
            <div className="row pt-5 justify-content-center">
                <div className={`col-${isMobile ? '9' : '3'}`}>
                    <form onSubmit={handleRegisterUserSubmit} autoComplete="off">
                        <div className="form-group">
                            <label htmlFor="username">Nom d'utilisateur</label>
                            <input type="text"
                                className="form-control"
                                id="username"
                                onChange={handleInputChange}
                                placeholder="Nom d'utilisateur" />
                        </div>
                        <div className="form-group pt-3">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="text"
                                className="form-control"
                                id="password"
                                onChange={handleInputChange}
                                // Checks that a password has a minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces 
                                pattern="^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$"
                                title="Au moins six caractères, une majuscule, une minuscule et un chiffre"
                                placeholder="Mot de passe"
                                required />
                        </div>
                        <div className="form-group pt-3">
                            <label htmlFor="verify-pass">Vérifier le mot de passe</label>
                            <input type="text" className="form-control" id="verify-pass" onBlur={handlePasswordMatch} placeholder="Vérifier" />
                            <div className="row pt-1 fs-6 text-danger">
                                <div className="col">
                                    <small>{passwordMatchErrorText}</small>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn border border-2 border-dark rounded mt-4" id="term-button" disabled={loadingSubmit}>
                            {loadingSubmit ?
                                <Spinner color="light" buttonSpinner={true} />
                                : 'Enregistrer'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}