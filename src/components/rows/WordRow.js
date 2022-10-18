export default function WordRow(props) {
    return (
        <tr>
            <th scope="row" id="row-hidden">{props.index}</th>
            <td>{props.word.French}</td>
            <td>{props.word.English}</td>
            <td>{props.word.MascOrFemme}</td>
            <td>{props.word.GrammarType}</td>
        </tr>
    )
}