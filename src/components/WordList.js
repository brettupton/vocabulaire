import React, { useEffect, useState } from 'react'
import WordRow from './rows/WordRow'

export default function WordList() {
    const [wordArray, setWordArray] = useState([])

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
            <div className="layout">
                <div className="spinner-border text-light" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        : <div className="layout">
            <div className="table-fixed mt-5">
                <table>
                    <thead>
                        <tr>
                            <th id="row-hidden">#</th>
                            <th>French</th>
                            <th>English</th>
                            <th>Gender</th>
                            <th>Grammar Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wordArray.map((word, i) => {
                            return (
                                <WordRow word={word} index={i} key={i}/>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}