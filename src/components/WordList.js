import { useEffect, useState } from 'react'
import WordRow from './rows/WordRow'

export default function WordList() {
    const [wordArray, setWordArray] = useState([])
    const [width, setWidth] = useState(window.innerWidth)

    const isMobile = width <= 768

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
        fetch(`https://vocabulairehost.herokuapp.com/getwords`)
            .then((response) => response.json())
            .then((data) => setWordArray(data))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        wordArray.length === 0
            ?
            <div className="container min-vh-100 text-center pt-5">
                <div className="spinner-border text-light" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
            : <div className="container min-vh-100 pt-5 min-vw-100">
                <div className="row">
                    <div className="col">
                        <div className="table-responsive">
                            <table className={`table table-sm table-hover table-bordered mt-5 text-center fs-${isMobile ? '6' : '4'}`}>
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
                                        return <WordRow word={word} index={key} />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    )
}