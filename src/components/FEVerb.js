export default function FEVerb(props) {
    const { verbArray, verbIndex } = props

    return (
        <div className="container" style={{marginTop: "84px"}}>
            <div className="row">
                <div className="col">
                    {verbArray[verbIndex].Verb}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {verbArray[verbIndex].Translation}
                </div>
            </div>
        </div>
    )
}