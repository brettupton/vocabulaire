import { Outlet, useLocation, Link } from 'react-router-dom'
import sacrecoeur from '../images/sacrecoeur.png'

function VerbeHome() {
    return (
        <div className="layout">
            <div className="container">
                <img src={sacrecoeur} height="400px" width="400px"/>
                <div className="row">
                    <div className="col">
                    Bienvenue pour apprendre les verbes ! Qu'est-ce que tu aimerais faire ? 
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="flashcards">
                            <button className="btn btn-success mt-4">Flashcards</button>
                        </Link> 
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="#">
                            <button className="btn btn-success mt-4">Questionnaire</button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="#">
                            <button className="btn btn-success mt-4">Liste de verbes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Verbe() {
    const location = useLocation()
    
    return (
        <div>
            {location.pathname === "/verbe" 
            ? <VerbeHome />
            : <Outlet />}
        </div>
    )
}

export default Verbe;