import { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MobileContext } from 'pages/layout'
import heart from '../images/fheart.ico'

export const Navbar = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true)

    const location = useLocation()
    const isMobile = useContext(MobileContext)

    useEffect(() => {
        setIsNavCollapsed(true)
    }, [location])

    function handleNavCollapse() {
        setIsNavCollapsed(!isNavCollapsed)
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark fs-6 position-absolute w-100 top-0 z-1">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={heart} height="28" width="28" />
                </Link>
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
                            <Link to="/" className="nav-link">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/mots" className="nav-link">
                                Mots
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/verbes" className="nav-link">
                                Verbes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/recherche" className="nav-link">
                                Recherche
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}