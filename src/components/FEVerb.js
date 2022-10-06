import verbList from '../verblist'

export default function FEVerb(props) {
    const {verbIndex} = props

    return (
        <div className="container" style={{marginTop: "84px"}}>
            <div className="row">
                <div className="col">
                    {verbList[verbIndex].Verb}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {verbList[verbIndex].Translation}
                </div>
            </div>
        </div>
    )
}