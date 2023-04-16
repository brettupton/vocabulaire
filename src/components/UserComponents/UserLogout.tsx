import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'

export const UserLogout = () => {

    const navigate = useNavigate()
    const { state } = useLocation()

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (!user) {
            navigate(state.prevURL)
        }
    }, [])

    //Deletes user from localStorage and deletes token cookie
    const handleLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('userRole')
        Cookies.remove('token')
        window.location.reload()
    }

    return (
        <div className="container min-vh-100 text-center text-white fs-5 pt-5">
            <div className="row pt-5 justify-content-center">
                <div className="col">
                    Do you really want to logout?
                </div>
            </div>
            <div className="row justify-content-center pt-5">
                <div className="col-2">
                    <button className="btn btn-primary" onClick={handleLogout}>Yes</button>
                </div>
            </div>
        </div>
    )
}