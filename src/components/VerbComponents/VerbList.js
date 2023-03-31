import { useState, useEffect } from "react"
import VerbRow from "../rows/VerbRow"
import { Spinner } from '../Spinner'

export default function VerbList() {
    const [currentTense, setCurrentTense] = useState('Présent')
    const [fetchingData, setFetchingData] = useState(true)
    const [verbArray, setVerbArray] = useState([])

    const url = new URL('https://vocabulairehost.onrender.com/verbs')

    function handleSelectChange(e) {
        setCurrentTense(e.target.value)
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setVerbArray(data)
                setFetchingData(false)
            }
            )
    }, [])

    return (
        fetchingData ?
            <Spinner color="light" buttonSpinner={false} size={''} />
            :
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
                                    {verbArray.map((verb, index) => {
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