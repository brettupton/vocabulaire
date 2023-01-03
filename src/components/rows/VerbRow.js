export default function VerbRow(props) {
    const { verb, currentTense, index } = props

    return (
        <tr className="table-secondary">
            <th scope="row" className="d-none d-lg-table-cell">{index + 1}</th>
            <td>{verb.Verb}</td>
            <td>{verb.Translation}</td>
            <td className="d-none d-lg-table-cell">{verb[currentTense].Je}</td>
            <td className="d-none d-lg-table-cell">{verb[currentTense].Tu}</td>
            <td className="d-none d-lg-table-cell">{verb[currentTense].Il}</td>
            <td className="d-none d-lg-table-cell">{verb[currentTense].Nous}</td>
            <td className="d-none d-lg-table-cell">{verb[currentTense].Vous}</td>
            <td className="d-none d-lg-table-cell">{verb[currentTense].Ils}</td>
        </tr>
    )
}