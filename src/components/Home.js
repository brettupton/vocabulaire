import { useState, useEffect} from 'react'
import './layout.css'
import Card from './Card'
import eiffeltower from '../images/eiffeltower.png'
import logotower from '../images/logotower.png'
import pontdugard from '../images/pontdugard.png'
import louvre from '../images/louvre.png'
import nimes from '../images/nimes.png'
import vocabulaire from '../images/vocabulaire.png'

export default function Home() {

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
            <div className="container text-center min-vh-100 pt-5">
                <div className="row pt-5">
                    <div className="col">
                        <img src={isMobile ? logotower : vocabulaire} height="60%" alt="Page Title"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Card imageSrc={eiffeltower} header={"Mots"} link={"lesmots"} imageWidth={"100px"}/>
                    </div>
                    <div className="col">
                        <Card imageSrc={pontdugard} header={"Verbes"} link={"verbe"} imageWidth={"200px"}/>
                    </div>
                    <div className="col">
                        <Card imageSrc={louvre} header={"Traduire"} link={"traduire"} imageWidth={"180px"}/>
                    </div>
                    <div className="col">
                        <Card imageSrc={nimes} header={"Ajouter"} link={"lesmots/add"} imageWidth={"180px"}/>
                    </div>
                </div>
            </div>
    )
}