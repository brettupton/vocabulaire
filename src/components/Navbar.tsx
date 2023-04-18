import { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MobileContext } from 'pages/layout'
import heart from '../images/fheart.ico'

export const Navbar = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true)

    const location = useLocation()
    const isMobile = useContext(MobileContext)
    const user = localStorage.getItem('user')

    useEffect(() => {
        setIsNavCollapsed(true)
    }, [location])

    function handleNavCollapse() {
        setIsNavCollapsed(!isNavCollapsed)
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark fs-6 position-absolute w-100 top-0 z-1">
            <div className="container-fluid">
                {isMobile
                    ?
                    <Link to={{ pathname: `/user/${user ? 'logout' : 'login'}` }}>
                        <img id="user-nav-icon" />
                    </Link>
                    :
                    <Link className="navbar-brand" to="/">
                        <img src={heart} height="28" width="28" />
                    </Link>
                }
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse"
                    data-target="#vocabNavbar"
                    aria-controls="vocabNavbar"
                    aria-expanded={isNavCollapsed}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse text-end`} id="vocabNavbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/mots" className="nav-link">
                                Mots
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link">
                                Verbes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link">
                                Recherche
                            </Link>
                        </li>
                    </ul>
                    <span className={`navbar-text ${isMobile ? 'd-none' : ''}`}>
                        <div className="row">
                            <div className="col">
                                <img id="user-nav-icon" />
                            </div>
                            <div className="col">
                                <Link to="/user/login" state={{ prevURL: location.pathname }} id='user-link'>
                                    {user ? user : 'Login'}
                                </Link>
                            </div>
                            {!user &&
                                <div className="col">
                                    <Link to="/user/register" id="user-link">
                                        Register
                                    </Link>
                                </div>
                            }
                            {user &&
                                <div className="col">
                                    <Link to="/user/logout" state={{ prevURL: location.pathname }} id='user-link'>
                                        Logout
                                    </Link>
                                </div>
                            }
                        </div>
                    </span>
                </div>
            </div>
        </nav>
    )
}