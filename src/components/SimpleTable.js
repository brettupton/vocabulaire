import SpeechButton from "./SpeechButton"

export default function SimpleTable(props) {

    const { significantArray, object } = props
    const objectIteration = significantArray[object]

    return (
        <div>
            <table className="table table-dark table-sm table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        {Object.keys(objectIteration).map((key) => {
                            return (<th scope="col">{key}</th>)
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {Object.keys(objectIteration).map((key) => {
                            return (
                                <td>{objectIteration[key]}</td>
                            )
                        })}
                    </tr>
                    <tr className="table-secondary">
                        {Object.keys(objectIteration).map((key) => {
                            return (
                                <td><SpeechButton word={objectIteration[key]} /></td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}