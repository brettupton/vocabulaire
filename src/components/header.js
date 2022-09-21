import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/lesmots" className="nav-link">Word Translations</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Verb Conjugations</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}