import { useState, useEffect } from "react"
import { Outlet, useLocation } from 'react-router-dom'
import notredame from '../images/notre-dame.png'
import triomphe from '../images/triomphe.png'
import moulin from '../images/moulin.png'
import nimes from '../images/nimes.png'
import mots from '../images/mots.png'
import frlogo from '../images/frlogo.png'
import Card from '../components/Card'

function LesMotsHome() {

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
        <div className="container min-vh-100 text-center pt-5">
            <div className="row pt-5">
                <div className="col">
                    <img src={isMobile ? frlogo : mots} height="60%" alt="Page Title" />
                </div>
            </div>
            <div className="row pb-5">
                <div className={`col${isMobile ? '-12' : ''}`}>
                    <Card imageSrc={notredame} header={"Flashcards"} link={"flashcards"} />
                </div>
                <div className={`col${isMobile ? '-12' : ''}`}>
                    <Card imageSrc={triomphe} header={"Significatifs"} link={"significatifs"} />
                </div>
                <div className={`col${isMobile ? '-12' : ''}`}>
                    <Card imageSrc={moulin} header={"Liste de mots"} link={"wordlist"} />
                </div>
                <div className={`col${isMobile ? '-12' : ''}`}>
                    <Card imageSrc={nimes} header={"Ajouter"} link={"addword"} isMobile={isMobile} />
                </div>
            </div>

        </div>
    )
}

function LesMots() {
    const location = useLocation()

    return (
        <div>
            {location.pathname === "/lesmots"
                ? <LesMotsHome />
                : <Outlet />}
        </div>
    )
}

export default LesMots;