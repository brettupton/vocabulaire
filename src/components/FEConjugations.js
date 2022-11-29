export default function FEConjugations(props) {
    const { currentVerb, currentTense, isMobile } = props

    const isSubjunctive = (currentTense === 'PrésentDuSubjonctif')

    function startsWithVowelOrH(word) {
        const vowels = ("aàâäæeèéêëhiîïoôœuùûü");
        return vowels.indexOf(word[0]) !== -1;
    }

    function currentTenseSplit() {
        const currentTenseSplitUpperCase = currentTense.split(/(?=[A-Z])/).join(' ').toLowerCase()
        const currentTenseSplitLowerCase = currentTenseSplitUpperCase[0].toUpperCase() + currentTenseSplitUpperCase.slice(1)
        return currentTenseSplitLowerCase
    }

    function returnJeConjugation(verb) {
        if (isSubjunctive) {
            if (startsWithVowelOrH(verb.Je)) {
                return 'Que j\''
            } else {
                return 'Que je '
            }
        } else {
            if (startsWithVowelOrH(verb.Je)) {
                return 'J\''
            } else {
                return 'Je '
            }
        }
    }

    const rowMarginTop = `row mt-${isMobile ? '2' : '1'}`

    return (
        <div className={`container fs-${isMobile ? '6' : '3'}`}>
            <div className="row">
                <div className="col">
                    {currentTenseSplit()}
                </div>
            </div>
            <div className={rowMarginTop}>
                <div className="col">
                    {returnJeConjugation(currentVerb[currentTense]) + currentVerb[currentTense].Je}
                </div>
                <div className={`col-${isMobile ? '7' : '6'}`}>
                    {isSubjunctive ? 'Que nous' : 'Nous'} {currentVerb[currentTense].Nous}
                </div>
            </div>
            <div className={rowMarginTop}>
                <div className="col">
                    {isSubjunctive ? 'Que tu' : 'Tu'} {currentVerb[currentTense].Tu}
                </div>
                <div className={`col-${isMobile ? '7' : '6'}`}>
                    {isSubjunctive ? 'Que vous' : 'Vous'} {currentVerb[currentTense].Vous}
                </div>
            </div>
            <div className={rowMarginTop}>
                <div className="col">
                    {isSubjunctive ? 'Qu\'il' : 'Il'} {currentVerb[currentTense].Il}
                </div>
                <div className={`col-${isMobile ? '7' : '6'}`}>
                    {isSubjunctive ? 'Qu\'ils' : 'Ils'} {currentVerb[currentTense].Ils}
                </div>
            </div>
        </div>
    )
}