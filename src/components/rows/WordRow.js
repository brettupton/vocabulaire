import { useNavigate } from 'react-router-dom'

export default function WordRow(props) {

    const { word, index } = props
    const navigate = useNavigate()

    function handleRowClick() {
        navigate(`/mots/vue/${word._id}`)
    }

    function handleMouseEnter(e) {
        e.target.style.cursor = 'pointer'
    }

    return (
        <tr className="table-secondary" onClick={handleRowClick} onMouseEnter={handleMouseEnter}>
            <th scope="row" className="d-none d-lg-table-cell">{index + 1}</th>
            <td>{word.French}</td>
            <td>{word.English}</td>
            <td>{word.Gender}</td>
            <td>{word.Term}</td>
        </tr>
    )
}