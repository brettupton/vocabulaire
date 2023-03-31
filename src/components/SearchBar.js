import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import { Spinner } from '../components/Spinner'

export default function SearchBar() {

    // Mobile Check
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

    // Search Component
    const [searchQuery, setSearchQuery] = useState('')
    const [queryResult, setQueryResult] = useState([])
    const [emptyQuery, setEmptyQuery] = useState(true)
    const [dataIsBeingFetched, setDataIsBeingFetched] = useState(false)
    const [boldedArray, setBoldedArray] = useState([])

    const URL = 'https://vocabulairehost.onrender.com/'

    function handleSearchChange(e) {
        const query = e.target.value
        setSearchQuery(query)

        if (!query || query.length === 0) {
            setEmptyQuery(true)
            setDataIsBeingFetched(false)
            setBoldedArray([])
            return
        }

        setDataIsBeingFetched(true)
        fetch(URL + `words/search/${query}`)
            .then(response => response.json())
            .then(data => {
                setQueryResult(data)
                setEmptyQuery(false)
                setDataIsBeingFetched(false)
                setSearchQuery(query)
                setBoldedArray([])
            })
            .catch(err => console.warn(err))
    }

    useEffect(() => {
        includesSimiliar(searchQuery, queryResult)
    }, [queryResult])

    //Finds the search query in the result word object, French or English, and returns the word
    //with the query bolded, to make it easier for user to see what was found 
    //Need to refactor this eventually
    function includesSimiliar(query, result) {
        query = query.toLowerCase()

        let resultsArray = []

        for (const i in result) {
            let resultWordEnglish = result[i].English.toLowerCase()
            let resultWordFrench = result[i].French.toLowerCase()
            if (resultWordFrench.includes(query)) {
                let startingIndex = resultWordFrench.indexOf(query)
                let endingIndex = startingIndex + query.length
                let foundWord = result[i].French.substring(startingIndex, endingIndex)
                if (isCapitalized(foundWord)) {
                    let resultWordCapital = resultWordFrench.charAt(0).toUpperCase() + resultWordFrench.slice(1)
                    let resultObject =
                    {
                        _id: result[i]._id,
                        French: resultWordCapital.replace(foundWord, `<strong>${foundWord}</strong>`),
                        English: result[i].English,
                        Gender: result[i].Gender,
                        Term: result[i].Term

                    }
                    resultsArray.push(resultObject)
                } else {
                    let resultObject =
                    {
                        _id: result[i]._id,
                        French: result[i].French.replace(foundWord, `<strong>${foundWord}</strong>`),
                        English: result[i].English,
                        Gender: result[i].Gender,
                        Term: result[i].Term
                    }
                    resultsArray.push(resultObject)
                }
            } else if (resultWordEnglish.includes(query)) {
                let startingIndex = resultWordEnglish.indexOf(query)
                let endingIndex = startingIndex + query.length
                let foundWord = result[i].English.substring(startingIndex, endingIndex)
                if (isCapitalized(foundWord)) {
                    let resultWordCapital = resultWordEnglish.charAt(0).toUpperCase() + resultWordEnglish.slice(1)
                    let resultObject =
                    {
                        _id: result[i]._id,
                        French: result[i].French,
                        English: resultWordCapital.replace(foundWord, `<strong>${foundWord}</strong>`),
                        Gender: result[i].Gender,
                        Term: result[i].Term
                    }
                    resultsArray.push(resultObject)
                } else {
                    let resultObject =
                    {
                        _id: result[i]._id,
                        French: result[i].French,
                        English: result[i].English.replace(foundWord, `<strong>${foundWord}</strong>`),
                        Gender: result[i].Gender,
                        Term: result[i].Term
                    }
                    resultsArray.push(resultObject)
                }
            } else {
                return
            }
        }
        setBoldedArray(resultsArray)
    }

    function isCapitalized(str) {
        let firstChar = str.charAt(0)
        if (firstChar.toUpperCase() !== firstChar) {
            return false
        }
        let rest = str.substring(1)

        if (rest.toLowerCase() !== rest) {
            return false
        }
        return true
    }

    return (
        <>
            <div className="row pt-5 justify-content-center">
                <div className="col">
                    <div className="input-group">
                        <input type="text" className="form-control rounded" onChange={handleSearchChange} placeholder="Start typing to search" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {dataIsBeingFetched
                        ?
                        <div className="container bg-white rounded">
                            <div className="row">
                                <div className="col">
                                    <Spinner color="dark" buttonSpinner={false} size={'-sm'} />
                                </div>
                            </div>
                        </div>
                        : emptyQuery
                            ? ' '
                            : !queryResult || queryResult.length === 0
                                ? <div className={`container pt-3 text-black text-start bg-white fs-5 rounded fs-${isMobile ? '6' : '5'}`}>
                                    <div className="row justify-content-start">
                                        <div className="col">
                                            Désolé, aucun résultat. Voulez-vous <Link to="/mots/ajouter">ajouter</Link> un nouveau mot?
                                        </div>
                                    </div>
                                </div>
                                : <div className={`container bg-white text-black rounded fs-${isMobile ? '6' : '5'}`}
                                    style={{ position: 'absolute', zIndex: '1', width: `${isMobile ? '94%' : '86%'}` }}>
                                    {boldedArray.map((resultWord, index) => {
                                        if (index >= 10) {
                                            return
                                        }
                                        return (
                                            <Link to={`/mots/vue/${resultWord._id}`} style={{ color: 'black', textDecoration: 'none' }}>
                                                <div className="row text-start" key={resultWord._id} id="query-result-row">
                                                    <div className="col">
                                                        {parse(resultWord.French)} - {parse(resultWord.English)}
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                    }
                </div>
            </div>
        </>
    )
}