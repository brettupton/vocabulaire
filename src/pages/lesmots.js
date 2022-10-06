import React from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import notredame from '../images/notredame.png'
import '../components/layout.css'

function LesMotsHome() {
    return (
        <div className="layout">
            <div className="container">
                <img src={notredame} height="400px" width="400px"/>
                <div className="row">
                    <div className="col">
                        Bienvenue pour apprendre des mots ! Qu'est-ce que tu aimerais faire ?  
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="flashcards">
                            <button className="btn btn-success mt-4">Flashcards</button>
                        </Link> 
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="quiz">
                            <button className="btn btn-success mt-4">Questionnaire</button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="wordlist">
                            <button className="btn btn-success mt-4">Liste de mots</button>
                        </Link>
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