import significantList from "../lists/significantlist"
import SimpleRow from './rows/SimpleRow'

export default function SimpleTable(props) {

    const {array} = props
    const objectIteration = significantList[array]

    return (
        <div id={array}>
                <h5>{array}</h5>
                <table className="table table-striped table-hover w-50 text-center" id="numbers-table">
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
                                return (<SimpleRow index={key} array={array}/>)
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}