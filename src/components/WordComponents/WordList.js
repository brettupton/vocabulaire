import { useEffect, useState } from 'react'
import WordListDisplay from './WordListDisplay'
import Spinner from '../Spinner'
import SearchBar from '../SearchBar'

export default function WordList() {
    const [wordArray, setWordArray] = useState([])
    const [width, setWidth] = useState(window.innerWidth)
    const [fetchingData, setFetchingData] = useState(true)

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

    useEffect(() => {
        fetchAllData()
    }, [])

    const fetchAllData = () => {
        setFetchingData(true)
        fetch(url + `words/getwords/all`)
            .then((response) => response.json())
            .then((data) => {
                setWordArray(data)
                setFetchingData(false)
            })
    }

    return (
        (fetchingData)
            ? <Spinner color="light" topOfPage={true} size={''} />
            :
            <div className="container min-vh-100">
                <SearchBar />
                <WordListDisplay wordArray={wordArray} isMobile={isMobile} />
            </div>
    )
}