import { Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import verbes from '../images/verbes.png'
import frlogo from '../images/frlogo.png'
import sacrecoeur from '../images/sacrecoeur.png'
import house from '../images/house.png'
import question from '../images/icons/question-lg.svg'

function VerbeHome() {

    const [width, setWidth] = useState(window.innerWidth)

    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    const isMobile = width <= 768

    return (
        <div className="container min-vh-100 text-center pt-5">
            <div className="row pt-5">
                <div className="col">
                    <img src={isMobile ? frlogo : verbes} height="60%" alt="Page Title" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Card imageSrc={sacrecoeur} header={"Flashcards"} link={"flashcards"} />
                </div>
                <div className="col">
                    <Card imageSrc={house} header={"Temps"} link={"temps"} />
                </div>
                <div className="col">
                    <Card imageSrc={question} header={"Liste de verbes"} link={"#"} />
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