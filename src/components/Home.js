import { useState, useEffect } from 'react'
import './layout.css'
import Card from './Card'
import eiffeltower from '../images/eiffel.png'
import logotower from '../images/logotower.png'
import pontdugard from '../images/pont.png'
import louvre from '../images/louvre.png'
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
        <>
            <div className="container text-center min-vh-100 pt-5">
                <div className="row pt-5">
                    <div className="col">
                        <img src={isMobile ? logotower : vocabulaire} height="60%" alt="Page Title" />
                    </div>
                </div>
                <div className="row pb-5">
                    <div className={`col${isMobile ? '-12' : ''}`}>
                        <Card imageSrc={eiffeltower} header={"Mots"} link={"lesmots"} isMobile={isMobile} />
                    </div>
                    <div className={`col${isMobile ? '-12' : ''}`}>
                        <Card imageSrc={pontdugard} header={"Verbes"} link={"verbe"} isMobile={isMobile} />
                    </div>
                    <div className={`col${isMobile ? '-12' : ''}`}>
                        <Card imageSrc={louvre} header={"Traduire"} link={"traduire"} isMobile={isMobile} />
                    </div>
                </div>
                <div className="container text-white pt-5" style={{ minWidth: '83vw' }}>
                    <div className="row fs-6 text-end pt-3">
                        <div className="col">
                            Data provided by<a className="badge badge-info" href="https://francais.lingolia.com/en" target="_blank" rel="noreferrer">francais.lingolia.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}