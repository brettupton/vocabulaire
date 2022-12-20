import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'
import WordListDisplay from '../components/WordListDisplay'
import search from '../images/icons/search.svg'
import plusbutton from '../images/icons/plus-circle.svg'

export default function Rapide() {

    const [searchQuery, setSearchQuery] = useState('')
    const [wordQueried, setWordQueried] = useState('')
    const [responseArray, setResponseArray] = useState([])
    const [fetchingData, setFetchingData] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const [emptyQuery, setEmptyQuery] = useState(true)

    const url = 'https://vocabulairehost.onrender.com/'

    function handleSearchChange(e) {
        setSearchQuery(e.target.value)
    }

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

    function handleSearchClick() {
        if (searchQuery === '') {
            setEmptyQuery(true)
        } else {
            setEmptyQuery(false)
            setFetchingData(true)
            setWordQueried(searchQuery)
            fetch(url + `words/search/${searchQuery}`)
                .then((response) => response.json())
                .then(data => {
                    setResponseArray(data)
                    setFetchingData(false)
                })
        }
    }

    return (
        <div className="container min-vh-100 text-center pt-5 text-white">
            <div className="row pt-5 justify-content-center">
                <div className="col">
                    <div className="input-group">
                        <input type="text" className="form-control rounded" onChange={handleSearchChange} />
                        <button className="btn" type="button" onClick={handleSearchClick} id="search-button">
                            <img src={search} alt="Search Icon" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="row pt-5 justify-content-center">
                <div className="col">
                    {/* Check if data is being fetched, if so, return empty, if not, check if there was a response, if so, show array, if not, check if query was empty
                    If so, return empty, if not, return no results found  */}
                    {fetchingData ? '' :
                        !responseArray || !responseArray.length ?
                            emptyQuery ? '' :
                                <div className="container">
                                    <div className="row text-center text-white">
                                        <div className="col">
                                            {`Aucun résultat pour ${wordQueried}`}
                                        </div>
                                    </div>
                                    <div className="row text-center text-white">
                                        <div className="col">
                                            Nouveau mot? Ajoutez-le maintenant ! <Link to="/mots/addword"><img src={plusbutton} alt="Plus Button" /></Link>
                                        </div>
                                    </div>
                                </div>
                            : <WordListDisplay wordArray={responseArray} isMobile={isMobile} searched={true} />
                    }
                </div>
            </div>
            <div className="row pt-5">
                <div className="col">
                    {fetchingData ? <Spinner color="white" topOfPage={false} size={''} /> : ''}
                </div>
            </div>
        </div >
    )
}