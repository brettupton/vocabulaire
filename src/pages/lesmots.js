import { useState, useEffect} from "react"
import { Outlet, useLocation } from 'react-router-dom'
import notredame from '../images/notredame.png'
import triomphe from '../images/triomphe.png'
import moulin from '../images/moulin.png'
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
                        <img src={isMobile ? frlogo : mots} height="60%" alt="Page Title"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Card imageSrc={notredame} header={"Flashcards"} link={"flashcards"} imageWidth={"100px"}/>
                    </div>
                    <div className="col">
                        <Card imageSrc={triomphe} header={"Significatifs"} link={"significatifs"} imageWidth={"100px"}/>
                    </div>
                    <div className="col">
                        <Card imageSrc={moulin} header={"Liste de mots"} link={"wordlist"} imageWidth={"100px"}/>
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