import React from 'react'
import './layout.css'
import vocabList from '../vocablist'
import WordRow from './WordRow'

export default function WordList() {
    return (
        <div className="layout">
            <div className="table-fixed">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>French</th>
                            <th>English</th>
                            <th>Gender</th>
                            <th>Grammar Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vocabList.map((e, i) => {
                            return (
                                <WordRow word={e} index={i}/>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}