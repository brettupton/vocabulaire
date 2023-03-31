import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import { Word } from "../../pages/mots"
import { Spinner } from "components/Spinner"
import { MobileContext } from "pages/layout"

import alphasort from '../../images/icons/sort-alpha-down.svg'
import numericsort from '../../images/icons/sort-numeric-down.svg'
import { ObjectId } from "mongodb"

export const WordList = () => {

    const [wordArray, setWordArray] = useState<Word[]>([])
    const [wordArrayCopy, setWordArrayCopy] = useState<Word[]>([])
    const [isSortedAlpha, setIsSortedAlpha] = useState(false)
    const [fetchingData, setFetchingData] = useState(true)

    const isMobile = useContext(MobileContext)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/words', {
            method: "GET",
            headers: { 'content-type': 'application/json' }
        })
            .then((response) => {
                if (!response.ok) {
                    console.error('error here')
                    return
                }
                return response.json()
            })
            .then((data) => {
                setWordArray(data)
                setFetchingData(false)
            })
    }, [])

    const getDate = (date: string) => {
        const dateObj = new Date(date)
        const year = dateObj.getFullYear()
        const month = dateObj.getMonth() + 1
        const day = dateObj.getDate()

        return `${month}-${day}-${year}`
    }

    const handleTableSort = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLImageElement>) => {
        if (e.currentTarget.id === 'alpha') {
            if (!isSortedAlpha) {
                setIsSortedAlpha(true)
                setWordArrayCopy([...wordArray])
                const sortedArray = wordArray

                sortedArray.sort((a, b) => {
                    let wa = a.Word.toLowerCase()
                    let wb = b.Word.toLowerCase()

                    if (wa < wb) {
                        return -1
                    }
                    if (wb > wa) {
                        return 1
                    }
                    return 0
                })

                setWordArray([...sortedArray])
            } else {
                setIsSortedAlpha(false)
                setWordArray([...wordArrayCopy])
            }
        }
        else if (e.currentTarget.id === 'date') {
            const currentArray = wordArray

            currentArray.sort((a, b) => {
                return (new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime())
            })

            setWordArray([...currentArray])
        }
    }

    const handleSearch = () => {
        toast.info('Fonctionnalité à venir', {
            position: "top-center",
            theme: "dark",
            toastId: "View"
        })
    }

    const handleViewWord = (wordId: ObjectId | undefined) => {
        if (wordId) {
            navigate('/mots/vue/' + wordId)
        }
    }

    return (
        (fetchingData) ?
            <div className="container">
                <Spinner color="light" buttonSpinner={false} />
            </div>
            : <>
                <div className="container pt-5">
                    <ToastContainer style={{ fontSize: '17px' }} />
                    <div className={`row ${isMobile ? 'w-75' : 'w-25'}`}>
                        <div className="col input-group">
                            <input type="text" className="form-control" placeholder="Recherche" />
                            <button className="btn btn-outline-secondary" type="button" onClick={handleSearch} style={{ zIndex: '0' }}>Allez</button>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col">
                            <div className="table-responsive">
                                <table className="table table-light table-hover table-bordered border-dark fs-3 table-striped text-center">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>Mot <img src={alphasort} onClick={handleTableSort} id="alpha" /></th>
                                            <th>1<sup>re</sup> Déf.</th>
                                            <th className="d-none d-lg-table-cell">2<sup>de</sup> Déf.</th>
                                            <th className="d-none d-lg-table-cell">Terme</th>
                                            <th className="d-none d-lg-table-cell">Date Ajoutée <img src={numericsort} onClick={handleTableSort} id="date" /></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {wordArray.map((word, index) => {
                                            return (
                                                <tr id="word-table-row" key={index} onClick={() => handleViewWord(word._id)}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{word.Word}</td>
                                                    <td>{word.Definitions[0].Definition}</td>
                                                    <td className="d-none d-lg-table-cell">{word.Definitions[1] ? word.Definitions[1].Definition : " "}</td>
                                                    <td className="d-none d-lg-table-cell">{word.GrammarTerm.split(/(?=[A-Z])/).join(" ")}</td>
                                                    <td className="d-none d-lg-table-cell">{getDate(word.dateAdded)}</td>

                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}