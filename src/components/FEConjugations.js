export default function FEConjugations(props) {
    const { verbArray, verbIndex } = props

    function startsWithVowelOrH(word) {
        const vowels = ("aàâäæeèéêëhiîïoôœuùûü");
        return vowels.indexOf(word[0]) !== -1;
    }

    const currentTense = Object.keys(verbArray[verbIndex])[3]

    return (
        <div className="container" id="verb-conjugation-mobile-container">
            <div className="row">
                <div className="col">
                    ({currentTense} Tense)
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {startsWithVowelOrH(verbArray[verbIndex][currentTense].Je) 
                    ? <div>J'{verbArray[verbIndex][currentTense].Je}</div>
                    : <div>Je {verbArray[verbIndex][currentTense].Je}</div>}
                </div>
                <div className="col">
                    Nous {verbArray[verbIndex][currentTense].Nous}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Tu {verbArray[verbIndex][currentTense].Tu}
                </div>
                <div className="col">
                    Vous {verbArray[verbIndex][currentTense].Vous}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Il {verbArray[verbIndex][currentTense].Il}
                </div>
                <div className="col">
                    Ils {verbArray[verbIndex][currentTense].Ils}
                </div>
            </div>
        </div>
    )
}