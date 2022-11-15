import { Outlet, useLocation } from 'react-router-dom'
import Card from '../components/Card'
import verbes from '../images/verbes.png'
import sacrecoeur from '../images/sacrecoeur.png'
import question from '../images/icons/question-lg.svg'

function VerbeHome() {
    return (
        <div className="layout">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={verbes} height="200px" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Card image={sacrecoeur} header={"Flashcards"} link={"flashcards"} imageHeight={"100px"} imageWidth={"100px"}/>
                    </div>
                    <div className="col">
                        <Card image={question} header={"Liste de verbes"} link={"#"} imageHeight={"100px"} imageWidth={"100px"}/>
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