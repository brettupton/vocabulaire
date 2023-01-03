import { useState } from "react"
import VerbRow from "./rows/VerbRow"
import verbList from "../lists/verblist"

export default function VerbList() {
    const [currentTense, setCurrentTense] = useState('Présent')

    function handleSelectChange(e) {
        setCurrentTense(e.target.value)
    }

    return (
        <div className="container min-vh-100 text-center">
            <div className="row justify-content-end pt-5">
                <div className="col-3">
                    <select className="form-select d-none d-lg-grid" onChange={handleSelectChange}>
                        <option value="Présent">Présent</option>
                        <option value="Imparfait">Imparfait</option>
                        <option value="PasséComposé">Passé Composé</option>
                        <option value="FuturSimple">Futur Simple</option>
                        <option value="ConditionnelPrésent">Conditionnel Présent</option>
                        <option value="PrésentDuSubjonctif">Présent du Subjonctif</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered text-center fs-4">
                            <thead>
                                <tr className="table-dark">
                                    <th scope="col" className="d-none d-lg-table-cell">#</th>
                                    <th scope="col">Verb</th>
                                    <th scope="col">Translation</th>
                                    <th scope="col" className="d-none d-lg-table-cell">Je</th>
                                    <th scope="col" className="d-none d-lg-table-cell">Tu</th>
                                    <th scope="col" className="d-none d-lg-table-cell">Il/Elle</th>
                                    <th scope="col" className="d-none d-lg-table-cell">Nous</th>
                                    <th scope="col" className="d-none d-lg-table-cell">Vous</th>
                                    <th scope="col" className="d-none d-lg-table-cell">Ils/Elles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {verbList.map((verb, index) => {
                                    return <VerbRow verb={verb} currentTense={currentTense} index={index} key={index} />
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}