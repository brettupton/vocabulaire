import SpeechButton from "./SpeechButton"

export default function SimpleTable(props) {

    const { significantArray, object, isMobile } = props
    const objectIteration = significantArray[object]

    return (
        <div>
            <table className={`table table-dark table-sm table-hover table-striped table-bordered ${isMobile ? '' : 'fs-4'}`}>
                <thead>
                    <tr>
                        {Object.keys(objectIteration).map((key, index) => {
                            return (<th scope="col">{key}</th>)
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {Object.keys(objectIteration).map((key, index) => {
                            return (
                                <td>{objectIteration[key]}</td>
                            )
                        })}
                    </tr>
                    {!isMobile &&
                        <tr className="table-secondary">
                            {Object.keys(objectIteration).map((key, index) => {
                                return (
                                    <td><SpeechButton word={objectIteration[key]} /></td>
                                )
                            })}
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}