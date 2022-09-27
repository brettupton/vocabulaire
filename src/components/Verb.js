import React from 'react'
import verbList from '../verblist'
import './layout.css'

export default function Verb(props) {
    const {handleClick, index} = props
    
    return (
        <div className="layout">
            <div className="verbe">
                <div className="container" id="translation-container-verb">
                    <div className="row">
                        <div className="col">
                            <h5>French:</h5>{verbList[index].Verb}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h5>English:</h5>{verbList[index].Translation}
                        </div>
                    </div>
                    <div className="text-white">
                        <div className="row justify-content-between mt-5">
                            <div className="col-5">
                                Je {verbList[index].Je}
                            </div>
                            <div className="col-5">
                                Nous {verbList[index].Nous}
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-5">
                                Tu {verbList[index].Tu}
                            </div>
                            <div className="col-5">
                                Vous {verbList[index].Vous}
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-5">
                                Il/Elle {verbList[index].Il}
                            </div>
                            <div className="col-5">
                                Ils/Elles {verbList[index].Ils}
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary mt-5" onClick={handleClick}>Next Verb</button>
                </div>
            </div>
        </div>
    )
}