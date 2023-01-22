export default function FEConjugations(props) {
    const { currentVerb, currentTense, isMobile, isFlashcard = false } = props

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

    const rowMarginTopClassName = `row mt-${isMobile ? '2' : '1'}`
    const colSizeClassName = `col-${isMobile ? '7' : '6'} p-0`

    return (
        <div className={`container fs-${isMobile ? '6' : '4'}`}>
            <div className="row">
                <div className={`col ${isFlashcard ? 'pb-4' : ''} fst-italic fs-4`}>
                    {currentTenseSplit()}
                </div>
            </div>
            <div className={rowMarginTopClassName}>
                <div className="col p-0">
                    {returnJeConjugation(currentVerb[currentTense]) + currentVerb[currentTense].Je}
                </div>
                <div className={colSizeClassName}>
                    {isSubjunctive ? 'Que nous' : 'Nous'} {currentVerb[currentTense].Nous}
                </div>
            </div>
            <div className={rowMarginTopClassName}>
                <div className="col p-0">
                    {isSubjunctive ? 'Que tu' : 'Tu'} {currentVerb[currentTense].Tu}
                </div>
                <div className={colSizeClassName}>
                    {isSubjunctive ? 'Que vous' : 'Vous'} {currentVerb[currentTense].Vous}
                </div>
            </div>
            <div className={rowMarginTopClassName}>
                <div className="col p-0">
                    {isSubjunctive ? 'Qu\'il' : 'Il'} {currentVerb[currentTense].Il}
                </div>
                <div className={colSizeClassName}>
                    {isSubjunctive ? 'Qu\'ils' : 'Ils'} {currentVerb[currentTense].Ils}
                </div>
            </div>
        </div>
    )
}