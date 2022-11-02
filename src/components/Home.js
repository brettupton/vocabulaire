import React from 'react'
import './layout.css'
import Card from './Card'
import eiffeltower from '../images/eiffeltower.png'

export default function Home() {
    return (
        <div className="layout">
            <div className="container">
                <div className="row">
                    <div className="col">
                        Bienvenue dans le Vocabulaire !  
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Sur quoi travaillez-vous aujourd'hui ?
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <Card image={eiffeltower} header={"Les Mots"} link={"lesmots"} imageHeight={"180px"} imageWidth={"100px"}/>
                    </div>
                    <div className="col">
                        <Card image={eiffeltower} header={"Verbes"} link={"verbe"} imageHeight={"180px"} imageWidth={"100px"}/>
                    </div>
                    <div className="col">
                        <Card image={eiffeltower} header={"Traduire"} link={"traduire"} imageHeight={"180px"} imageWidth={"100px"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}