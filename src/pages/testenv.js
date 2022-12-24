import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import Spinner from '../components/Spinner'


export default function TestENV() {

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

    const URL = 'https://vocabulairehost.onrender.com/'

    useEffect(() => {
        const handleKeyDown = (event) => {
            const searchButton = document.getElementById('search-button')
            if (event.key === "Enter") {
                searchButton.click()
            }
        }
        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    function handleSearchChange(e) {
        const query = e.target.value
        setSearchQuery(query)

        if (!query) {
            setEmptyQuery(true)
            return
        }

        setDataIsBeingFetched(true)
        fetch(URL + `words/search/${query}`)
            .then(response => response.json())
            .then(data => {
                setQueryResult(data)
                setEmptyQuery(false)
                setDataIsBeingFetched(false)
            })
            .catch(err => console.warn(err))
    }

    const [boldedArray, setBoldedArray] = useState([])
    function includesSimiliar(query, result) {
        query = 'an'.toLowerCase()
        result = [
            {
                French: 'Francais',
                English: 'French'
            },
            {
                French: 'Croissant',
                English: 'Croissant'
            }
        ]
        let resultsArray = []

        for (const i in result) {
            let resultWord = result[i].French.toLowerCase()
            if (resultWord.includes(query)) {
                let startingIndex = resultWord.indexOf(query)
                let endingIndex = startingIndex + query.length
                let foundWord = result[i].French.substring(startingIndex, endingIndex)
                if (isCapitalized(foundWord)) {
                    let resultWordCapital = resultWord.charAt(0).toUpperCase() + resultWord.slice(1)
                    let resultObject =
                    {
                        French: resultWordCapital.replace(foundWord, `<b>${foundWord}</b>`),
                        English: result[i].English
                    }
                    resultsArray.push(resultObject)
                } else {
                    let resultObject =
                    {
                        French: result[i].French.replace(foundWord, `<b>${foundWord}</b>`),
                        English: result[i].English
                    }
                    resultsArray.push(resultObject)
                }
            } else {
                console.log(false)
            }
        }
        console.log(resultsArray)
        setBoldedArray(resultsArray)
    }

    function isCapitalized(str) {
        // Get the first character of the string
        let firstChar = str.charAt(0);

        // Check if the first character is uppercase
        if (firstChar.toUpperCase() !== firstChar) {
            return false;
        }

        // Get the rest of the string
        let rest = str.substring(1);

        // Check if the rest of the string is lowercase
        if (rest.toLowerCase() !== rest) {
            return false;
        }

        return true;
    }

    return (
        <div className="container min-vh-100 text-center pt-5 text-white">
            <div className="row">
                <div className="col">
                    Testing Environment
                </div>
            </div>
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
                        ? <Spinner color="light" topOfPage={false} size={'-sm'} />
                        : emptyQuery
                            ? ' '
                            : !queryResult || queryResult.length === 0
                                ? <div className="container pt-3">
                                    <div className="row">
                                        <div className="col">
                                            Désolé, aucun résultat
                                        </div>
                                    </div>
                                </div>
                                : <div className={`container bg-white text-black rounded fs-${isMobile ? '6' : '5'}`}>
                                    {/* {queryResult.map((resultWord, index) => {
                                        if (index >= 10) {
                                            return
                                        }
                                        return (
                                            <Link to={`/mots/editword/${resultWord._id}`} style={{ color: 'black', textDecoration: 'none' }}>
                                                <div className="row text-start" key={resultWord._id} id="query-result-row">
                                                    <div className="col">
                                                        {resultWord.French + ' - ' + resultWord.English}

                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })} */}
                                </div>
                    }
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {boldedArray.map(word => {
                        return (
                            <div>
                                {parse(word.French)}
                            </div>
                        )
                    })}
                    <button className="btn btn-light" onClick={includesSimiliar}>Find</button>
                </div>
            </div>
        </div >
    )
}