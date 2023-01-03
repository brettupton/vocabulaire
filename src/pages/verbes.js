import { Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import verbes from '../images/verbes.png'
import frlogo from '../images/frlogo.png'
import sacrecoeur from '../images/sacrecoeur.png'
import house from '../images/house.png'
import baroque from '../images/baroque.png'

function VerbesHome() {

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
        <div className="container min-vh-100 text-center">
            <div className="row pt-5">
                <div className="col">
                    <img src={isMobile ? frlogo : verbes} height="60%" alt="Page Title" />
                </div>
            </div>
            <div className="row">
                <div className={`col${isMobile ? '-12' : ''}`}>
                    <Card imageSrc={sacrecoeur} header={"Flashcards"} link={"flashcards"} />
                </div>
                <div className={`col${isMobile ? '-12' : ''}`}>
                    <Card imageSrc={house} header={"Temps"} link={"temps"} />
                </div>
                <div className={`col${isMobile ? '-12' : ''}`}>
                    <Card imageSrc={baroque} header={"Liste de verbes"} link={"liste"} />
                </div>
            </div>
        </div>
    )
}

function Verbes() {
    const location = useLocation()

    return (
        <div>
            {location.pathname === "/verbes"
                ? <VerbesHome />
                : <Outlet />}
        </div>
    )
}

export default Verbes;