export function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Word Translations</a>
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