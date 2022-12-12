import { useEffect, useState } from 'react'
import WordListDisplay from './WordListDisplay'
import Spinner from './Spinner'
import search from '../images/icons/search.svg'

export default function WordList() {
    const [wordArray, setWordArray] = useState([])
    const [width, setWidth] = useState(window.innerWidth)
    const [fetchingData, setFetchingData] = useState(true)
    const [searched, setSearched] = useState(false)

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

    const fetchAllData = () => {
        setFetchingData(true)
        fetch(url + `words/getwords/all`)
            .then((response) => response.json())
            .then((data) => {
                setWordArray(data)
                setFetchingData(false)
                setSearched(false)
            })
    }

    useEffect(() => {
        fetchAllData()
        const handleKeyDown = (event) => {
            const searchButton = document.getElementById('search-button')
            if (event.key === "Enter") {
                searchButton.click()
            }
        };
        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    const [searchQuery, setSearchQuery] = useState('')

    function handleSearchChange(e) {
        const query = e.target.value
        setSearchQuery(query)
    }

    function handleSearch() {
        if (searchQuery === '') {
            setWordArray([])
            fetchAllData()
        } else {
            setFetchingData(true)
            fetch(url + `words/search/${searchQuery}`)
                .then(response => response.json())
                .then(data => {
                    setWordArray(data)
                    setFetchingData(false)
                    setSearched(true)
                })
        }
    }

    return (
        (fetchingData)
            ? <Spinner color="light" topOfPage={true} />
            :
            <div className="container min-vh-100 pt-5">
                <div className="row py-4 justify-content-end px-2">
                    <div className="col-8 pt-2">
                        <input type="text" onChange={handleSearchChange} className="form-control" />
                    </div>
                    <div className="col-2">
                        <button className="btn" onClick={handleSearch} id="search-button">
                            <img src={search} />
                        </button>
                    </div>
                </div>
                {wordArray.length === 0 ?
                    <div className="row text-center text-white">
                        <div className="col">
                            No results found
                        </div>
                    </div> :
                    <WordListDisplay wordArray={wordArray} isMobile={isMobile} searched={searched} />
                }
            </div>
    )
}