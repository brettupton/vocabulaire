import { Link } from 'react-router-dom'
import flag from '../images/3200118.ico'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={flag} alt="french-flag" width="28" height="24" />
                </Link>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/lesmots" className="nav-link">Word Translations</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/verbe" className="nav-link">Verb Conjugations</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}