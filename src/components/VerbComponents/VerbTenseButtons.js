export default function VerbTenseButtons(props) {
    const { verbArray, verbIndex, isMobile, handleTenseChangeClick } = props

    return (
        <div className="container text-center d-flex flex-column align-items-center justify-content-center pt-3">
            <div className="row text-white">
                <div className="col">
                    {verbIndex + 1} / {verbArray.length}
                </div>
            </div>
            <div className={`row text-white w-${isMobile ? '100' : '75'} py-1`}>
                <div className="col">
                    <button className="type-button w-100" value='Présent' onClick={handleTenseChangeClick}>Présent</button>
                </div>
                <div className="col">
                    <button className="type-button w-100" value='Imparfait' onClick={handleTenseChangeClick}>Imparfait</button>
                </div>
            </div>
            <div className={`row text-white w-${isMobile ? '100' : '75'} py-1`}>
                <div className="col">
                    <button className="type-button w-100" value='PasséComposé' onClick={handleTenseChangeClick}>Passé composé</button>
                </div>
                <div className="col">
                    <button className="type-button w-100" value='FuturSimple' onClick={handleTenseChangeClick}>Futur simple</button>
                </div>
            </div>
            <div className={`row text-white w-${isMobile ? '100' : '75'} py-1`}>
                <div className="col">
                    <button className="type-button w-100" value='ConditionnelPrésent' onClick={handleTenseChangeClick}>Conditionnel présent</button>
                </div>
                <div className="col">
                    <button className="type-button w-100" value='PrésentDuSubjonctif' onClick={handleTenseChangeClick}>Présent du subjonctif</button>
                </div>
            </div>
        </div>
    )
}