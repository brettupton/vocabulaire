import { useEffect, useState } from 'react'
import WordRow from './rows/WordRow'

export default function WordList() {
    const [wordArray, setWordArray] = useState([])
    const [width, setWidth] = useState(window.innerWidth)

    const isMobile = width <= 768
    const url = 'https://vocabulairehost.onrender.com/'

    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    const fetchData = () => {
        fetch(url + `words/getwords`)
            .then((response) => response.json())
            .then((data) => setWordArray(data))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        wordArray.length === 0
            ?
            <div className="container min-vh-100 text-center pt-5 mt-3">
                <div className="spinner-border text-light" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
            : <div className="container min-vh-100 pt-5">
                <div className="row py-4 px-0">
                    <div className="col">
                        <div className="table-responsive">
                            <table className={`table table-sm table-hover table-bordered text-center ${isMobile ? '' : 'fs-3'}`}>
                                <thead>
                                    <tr className="table-dark">
                                        <th scope="col" className="d-none d-lg-table-cell">#</th>
                                        <th scope="col">French</th>
                                        <th scope="col">English</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Grammar Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wordArray.map((word, key) => {
                                        return <WordRow word={word} index={key} key={word._id} />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    )
}