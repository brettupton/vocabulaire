export default function FEConjugations(props) {
    const { verbArray, verbIndex } = props

    function startsWithVowelOrH(word) {
        const vowels = ("aàâäæeèéêëhiîïoôœuùûü");
        return vowels.indexOf(word[0]) !== -1;
    }

    return (
        <div className="container" id="verb-conjugation-mobile-container">
            <div className="row">
                <div className="col">
                    ({Object.keys(verbArray[verbIndex])[3]} Tense)
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {startsWithVowelOrH(verbArray[verbIndex].Present.Je) 
                    ? <div>J'{verbArray[verbIndex].Present.Je}</div>
                    : <div>Je {verbArray[verbIndex].Present.Je}</div>}
                </div>
                <div className="col">
                    Nous {verbArray[verbIndex].Present.Nous}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Tu {verbArray[verbIndex].Present.Tu}
                </div>
                <div className="col">
                    Vous {verbArray[verbIndex].Present.Vous}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Il {verbArray[verbIndex].Present.Il}
                </div>
                <div className="col">
                    Ils {verbArray[verbIndex].Present.Ils}
                </div>
            </div>
        </div>
    )
}