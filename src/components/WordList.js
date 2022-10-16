import React from 'react'
import './layout.css'
import vocabList from '../vocablist'
import WordRow from './WordRow'

export default function WordList() {
    return (
        <div className="layout">
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
                        {vocabList.map((word, i) => {
                            return (
                                <WordRow word={word} index={i+1}/>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}