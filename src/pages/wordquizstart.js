import vocabList from '../vocablist'

export default function WordQuizStart() {
    const chosenindex = Math.floor(Math.random() * vocabList.length)
    const guessWord = vocabList[chosenindex].French
    const guess1 = Math.floor(Math.random() * vocabList.length)
    const guess2 = Math.floor(Math.random() * vocabList.length)
    const guess3 = Math.floor(Math.random() * vocabList.length)
    const guess4 = Math.floor(Math.random() * vocabList.length)

    return (
        <div className="layout">
            <div className="container" id="word-quiz-container">
            <div className="row">
                    <div className="col">
                        {guessWord}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {vocabList[guess1].English}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {vocabList[guess2].English}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {vocabList[chosenindex].English}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {vocabList[guess4].English}
                    </div>
                </div>
            </div>
        </div>
    )
}