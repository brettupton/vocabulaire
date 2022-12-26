import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import heart from '../images/fheart.ico'

export default function Navbar() {

    const [width, setWidth] = useState(window.innerWidth)

    const isMobile = (width <= 768)

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }

    const [isNavCollapsed, setIsNavCollapsed] = useState(true)

    function handleNavCollapse() {
        setIsNavCollapsed(!isNavCollapsed)
    }

    return (
        <nav className={`navbar navbar-dark navbar-expand-lg bg-dark sticky-top fs-${isMobile ? '6' : '5'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={heart} height="28" width="28" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#vocabNavbar"
                    aria-controls="vocabNavbar" aria-expanded={!isNavCollapsed ? true : false}
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
                            <Link to="/rapide" className="nav-link">
                                Recherche
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}