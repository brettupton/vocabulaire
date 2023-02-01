import { useEffect, useState, useContext } from 'react'
import { MobileContext } from 'pages/layout'
import { Word } from 'pages/mots'
import WordListDisplay from './WordListDisplay'
import Spinner from '../Spinner'
import SearchBar from '../SearchBar'


export const WordList = () => {
    const [wordArray, setWordArray] = useState<Word[]>([])
    const [fetchingData, setFetchingData] = useState(true)

    const url = new URL('https://vocabulairehost.onrender.com/')
    const isMobile = useContext(MobileContext)

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
            ? <Spinner color="light" topOfPage={true} />
            :
            <div className="container min-vh-100 pt-5">
                <SearchBar />
                <WordListDisplay wordArray={wordArray} isMobile={isMobile} />
            </div>
    )
}