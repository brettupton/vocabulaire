import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import flag from '../images/fheart.ico'

export default function Header() {
    const [open, setOpen] = useState(true);
    const location = useLocation()

    useEffect(() => {
        if (open) {
            setOpen(false)
        }
    }, [location])

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top d-none d-lg-block">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={flag} alt="french-heart" width="28" height="28" />
                </Link>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/lesmots" className="nav-link">Traductions de mots</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/verbe" className="nav-link">Conjugaisons des verbes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/traduire" className="nav-link">Traduire</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav className="navbar navbar-dark bg-dark d-lg-none fixed-top">
            <button className="btn" type="button" onClick={() => setOpen(!open)} aria-controls="navSidebarContainer" aria-expanded={open}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
        </nav>
            <Collapse in={open}>
                <div id="navSidebarContainer" >
                    <h4 className="text-white text-center">Vers où ?</h4>
                    <ul className="list-group list-group-flush text-center bg-transparent">
                        <li className="list-group-item list-group-item-dark bg-transparent">
                            <Link to="/" className="btn btn-success w-50">Accueil</Link>
                        </li>
                        <li className="list-group-item list-group-item-dark bg-transparent">
                            <Link to="/lesmots" className="btn btn-success w-50">Traductions de mots</Link>
                        </li>
                        <li className="list-group-item list-group-item-dark bg-transparent">
                            <Link to="/verbe" className="btn btn-success w-50">Conjugaisons des verbes</Link>
                        </li>
                        <li className="list-group-item list-group-item-dark bg-transparent">
                            <Link to="/traduire" className="btn btn-success w-50">Traduire</Link>
                        </li>
                    </ul>
                </div>
            </Collapse>
        </div>
    )
}