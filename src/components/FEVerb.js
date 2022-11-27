export default function FEVerb(props) {
    const { currentVerb } = props

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {currentVerb.Verb}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {currentVerb.Translation}
                </div>
            </div>
        </div>
    )
}