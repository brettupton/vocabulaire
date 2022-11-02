import React from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import notredame from '../images/notredame.png'
import Card from '../components/Card'
import '../components/layout.css'

function LesMotsHome() {
    return (
        <div className="layout">
            <div className="container">
                <div className="row">
                    <div className="col">
                        Bienvenue pour apprendre des mots !  
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Qu'est-ce que tu aimerais faire ? 
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <Card image={notredame} header={"Flashcards"} link={"flashcards"} imageHeight={"100px"} imageWidth={"100px"}/>
                    </div>
                    <div className="col">
                        <Card image={notredame} header={"Significatifs"} link={"significatifs"} imageHeight={"100px"} imageWidth={"100px"}/>
                    </div>
                    <div className="col">
                        <Card image={notredame} header={"Liste de mots"} link={"wordlist"} imageHeight={"100px"} imageWidth={"100px"}/>
                    </div>
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