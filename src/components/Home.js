import './layout.css'
import { useState, useEffect, useContext } from 'react'
import { MobileContext } from '../pages/layout'
import Card from './Card'
import eiffeltower from '../images/eiffel.png'
import logotower from '../images/logotower.png'
import pontdugard from '../images/pont.png'
import louvre from '../images/louvre.png'
import vocabulaire from '../images/vocabulaire.png'

export const Home = () => {

    const isMobile = useContext(MobileContext)

    return (
        <>
            <div className="container text-center min-vh-100 pt-5">
                <div className="row pt-5">
                    <div className="col">
                        <img src={isMobile ? logotower : vocabulaire} height="60%" alt="Page Title" />
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-sm">
                        <Card imageSrc={eiffeltower} header={"Mots"} link={"mots"} />
                    </div>
                    <div className="col-sm">
                        <Card imageSrc={pontdugard} header={"Verbes"} link={"verbes"} />
                    </div>
                    <div className="col-sm">
                        <Card imageSrc={louvre} header={"Recherche Rapide"} link={"rapide"} />
                    </div>
                </div>
            </div>
        </>
    )
}