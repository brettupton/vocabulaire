import { Link } from 'react-router-dom'
import pencil from '../../images/icons/pencil.svg'

export default function WordRow(props) {

    const { word, index, searched, isMobile } = props

    return (
        <tr className="table-secondary">
            <th scope="row" className="d-none d-lg-table-cell">{index + 1}</th>
            <td>{word.French}</td>
            <td>{word.English}</td>
            <td>{word.MascOrFemme}</td>
            <td>{word.GrammarType}</td>
            {searched ?
                <td>
                    <Link to={`/mots/editword/${word._id}`}>
                        <img src={pencil} height="30px" width="30px" />
                    </Link>
                </td>
                : null
            }
        </tr>
    )
}