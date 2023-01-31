import { useState } from 'react'


export const TestEnv = () => {

    const [indexArray, setIndexArray] = useState<number[]>([])
    const [nextIndex, setNextIndex] = useState(0)
    const [shuffle, setShuffle] = useState(false)

    //Fake variables for testing
    const wordArray = ['C\'est la vie', 'Libre', 'Cahier', 'Merci']
    const wordArrayLength = wordArray.length
    //
    const indexArrayLength = indexArray.length
    const latestIndex = indexArray[indexArrayLength - 1]


    const getRandomIndex = () => {
        const randomIndex = Math.floor(Math.random() * wordArrayLength)
        return randomIndex
    }

    // Initially checks for if shuffle is on
    // If it is, it checks if the Index Array is getting too long, which resets the array it if so
    // If not, get a randomIndex and set the nextIndex and push to the Index Array
    // If shuffle is not on, we check if the nextIndex is going to be larger than the length of the Word Array
    // If it is, we set nextIndex to 0 and reset the Index Array
    // If not, we increment nextIndex by 1 and push to the Index Array
    const handleNextClick = () => {
        if (shuffle) {
            if (indexArrayLength >= wordArrayLength) {
                setIndexArray([])
                setNextIndex(getRandomIndex())
            } else {
                setNextIndex(getRandomIndex())
                setIndexArray(prevArray => [...prevArray, nextIndex])
            }
        } else {
            if (nextIndex <= wordArrayLength - 1) {
                setNextIndex(prevIndex => prevIndex += 1)
                setIndexArray(prevArray => [...prevArray, nextIndex])
            } else {
                setNextIndex(0)
                setIndexArray([])
            }

        }
    }

    const handlePrevClick = () => {
        if (!indexArray.length) {
            return
        }
        setNextIndex(latestIndex)
        removeFromIndexArray()
    }

    const handleShuffleClick = () => {
        setShuffle(!shuffle)
    }

    const removeFromIndexArray = () => {
        const copyArr = [...indexArray]
        copyArr.pop()
        setIndexArray(copyArr)
    }

    return (
        <div className="container text-white text-center">
            <div className="row py-4">
                <div className="col">
                    TestENV
                </div>
            </div>
            {!indexArray.length ?
                <div className="row">
                    <div className="col">
                        Bonjour
                    </div>
                </div>
                :
                <div className="row">
                    <div className="col">
                        {wordArray[latestIndex]}
                    </div>
                </div>
            }
            <div className="row pt-3 justify-content-center">
                <div className="col-3">
                    <button className="btn btn-primary" onClick={handlePrevClick}>Previous</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-primary" onClick={handleNextClick}>Next</button>
                </div>
            </div>
            <div className="row pt-3 justify-content-center">
                <div className="col-3">
                    <button className="btn btn-primary" onClick={handleShuffleClick}>Shuffle</button>
                </div>
                <div className="col-3">
                    {shuffle ? "Shuffle On" : "Shuffle Off"}
                </div>
            </div>
            <div className="row pt-3">
                <div className="col">
                    Next Index: {nextIndex}
                </div>
                <div className="col">
                    Index Array Length: {indexArray.length}
                </div>
                <div className="col">
                    Latest Index: {latestIndex}
                </div>
            </div>
            <div className="row pt-3 justify-content-center">
                {indexArray.map(index => {
                    return (
                        <div className="col-1">
                            {`${index} `}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}