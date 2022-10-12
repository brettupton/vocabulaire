import React from 'react'
import { Link } from 'react-router-dom'
import './layout.css'
import eiffeltower from '../images/eiffeltower.png'

export default function Home() {
    return (
        <>
            <div className="layout">
                <div id="home-container">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <img src={eiffeltower} alt="eiffel-tower" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h1>Bienvenue dans le Vocabulaire !</h1>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <Link to="/lesmots" className="btn btn-success">Traductions de mots</Link>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <Link to="/verbe" className="btn btn-success">Conjugaisons des verbes</Link>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <Link to="/traduire" className="btn btn-success">Traduire</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}