import verbList from '../lists/verblist'

export default function FEConjugations(props) {
    const {verbIndex} = props

    function startsWithVowelOrH(word) {
        const vowels = ("aàâäæeèéêëhiîïoôœuùûü");
        return vowels.indexOf(word[0]) !== -1;
    }

    return (
        <div className="container" id="verb-conjugation-mobile-container">
            <div className="row">
                <div className="col">
                    ({verbList[verbIndex].Tense} Tense)
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {startsWithVowelOrH(verbList[verbIndex].Je) 
                    ? <div>J'{verbList[verbIndex].Je}</div>
                    : <div>Je {verbList[verbIndex].Je}</div>}
                </div>
                <div className="col">
                    Nous {verbList[verbIndex].Nous}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Tu {verbList[verbIndex].Tu}
                </div>
                <div className="col">
                    Vous {verbList[verbIndex].Vous}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Il {verbList[verbIndex].Il}
                </div>
                <div className="col">
                    Ils {verbList[verbIndex].Ils}
                </div>
            </div>
        </div>
    )
}