import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import notredame from '../images/notredame.png'
import triomphe from '../images/triomphe.png'
import moulin from '../images/moulin.png'
import mots from '../images/mots.png'
import Card from '../components/Card'
import '../components/layout.css'

function LesMotsHome() {
    return (
        <div className="layout">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={mots} height="200px" />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <Card image={notredame} header={"Flashcards"} link={"flashcards"} imageHeight={"100px"} imageWidth={"100px"}/>
                    </div>
                    <div className="col">
                        <Card image={triomphe} header={"Significatifs"} link={"significatifs"} imageHeight={"100px"} imageWidth={"100px"}/>
                    </div>
                    <div className="col">
                        <Card image={moulin} header={"Liste de mots"} link={"wordlist"} imageHeight={"100px"} imageWidth={"100px"}/>
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