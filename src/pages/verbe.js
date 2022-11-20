import { Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import verbes from '../images/verbes.png'
import frlogo from '../images/frlogo.png'
import sacrecoeur from '../images/sacrecoeur.png'
import question from '../images/icons/question-lg.svg'

function VerbeHome() {

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    return (
        <div className="layout">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={isMobile ? frlogo : verbes} height="60%" alt="Page Title"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Card imageSrc={sacrecoeur} header={"Flashcards"} link={"flashcards"} imageHeight={"100px"} imageWidth={"100px"}/>
                    </div>
                    <div className="col">
                        <Card imageSrc={question} header={"Liste de verbes"} link={"#"} imageHeight={"100px"} imageWidth={"100px"}/>
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