import { Link } from 'react-router-dom'
import pencil from '../../images/icons/pencil.svg'

export default function WordRow(props) {

    const { word, index } = props

    return (
        <tr className="table-secondary">
            <th scope="row" className="d-none d-lg-table-cell">{index + 1}</th>
            <td>{word.French}</td>
            <td>{word.English}</td>
            <td>{word.MascOrFemme}</td>
            <td>{word.GrammarType}</td>
        </tr>
    )
}