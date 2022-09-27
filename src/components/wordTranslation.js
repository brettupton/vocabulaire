import './layout.css';
import { useState } from 'react'
import vocabList from "../vocablist"


export default function WordTranslation() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentWordGender, setCurrentWordGender] = useState('')

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * vocabList.length)
        checkGender(vocabList[randomIndex])
        setCurrentWordIndex(randomIndex)
    }

    function startsWithVowelOrH(word) {
        const vowels = ("AÀÂÄÆEÈÉÊËHIÎÏOÔŒUÙÛÜ");
        return vowels.indexOf(word[0]) !== -1;
    }

    const checkGender = (currentWord) => {
        if (currentWord.GrammarType === 'Noun') {
            if (startsWithVowelOrH(currentWord.French)) {
                setCurrentWordGender("L'")
            } else if (currentWord.MascOrFemme === 'Masculine') {
                setCurrentWordGender('Le ')
            } else {
                setCurrentWordGender('La ')
            }
        } else {
            setCurrentWordGender('')
        }
    }

    return (
        <div className="layout">
            <div className="lesmots-div">
                <div className="container" id="translation-container">
                    <div className="row">
                        <div className="col">
                            <h5>French:</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {vocabList[currentWordIndex].GrammarType === 'Noun'
                                ? <p>{currentWordGender}{vocabList[currentWordIndex].French.toLowerCase()}</p>
                                : <p>{currentWordGender}{vocabList[currentWordIndex].French}</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h5>English:</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{vocabList[currentWordIndex].English}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Random Word</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}