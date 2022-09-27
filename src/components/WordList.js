import React from 'react'
import vocabList from '../vocablist'

export default function WordList() {
    return (
        <div className="layout">
            <h1>There are currently {vocabList.length} words in the list</h1>
        </div>
    )
}