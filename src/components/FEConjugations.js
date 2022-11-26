export default function FEConjugations(props) {
    const { verbArray, verbIndex, currentTense, isMobile } = props

    function startsWithVowelOrH(word) {
        const vowels = ("aàâäæeèéêëhiîïoôœuùûü");
        return vowels.indexOf(word[0]) !== -1;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    ({currentTense} Tense)
                </div>
            </div>
            <div className="row mt-1">
                <div className="col">
                    {startsWithVowelOrH(verbArray[verbIndex][currentTense].Je) 
                    ? <div>J'{verbArray[verbIndex][currentTense].Je}</div>
                    : <div>Je {verbArray[verbIndex][currentTense].Je}</div>}
                </div>
                <div className={`col-${isMobile ? '7' : '6'}`}>
                    Nous {verbArray[verbIndex][currentTense].Nous}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Tu {verbArray[verbIndex][currentTense].Tu}
                </div>
                <div className={`col-${isMobile ? '7' : '6'}`}>
                    Vous {verbArray[verbIndex][currentTense].Vous}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Il {verbArray[verbIndex][currentTense].Il}
                </div>
                <div className={`col-${isMobile ? '7' : '6'}`}>
                    Ils {verbArray[verbIndex][currentTense].Ils}
                </div>
            </div>
        </div>
    )
}