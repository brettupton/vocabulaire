import React from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import '../components/layout.css'

function LesMotsHome() {
    return (
        <div className="layout">
            <div className="container">
                <div className="row">
                    <div className="col">
                        Bonjour! Qu'est-ce que tu aimerais faire? 
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="words">
                            <button className="btn btn-primary">Words</button>
                        </Link> 
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="wordlist">
                            <button className="btn btn-primary">Full Word List</button>
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