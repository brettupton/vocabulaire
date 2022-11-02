export default function WordRow(props) {

    const {word, index} = props

    return (
        <tr>
            <th scope="row" id="row-hidden">{index + 1}</th>
            <td>{word.French}</td>
            <td>{word.English}</td>
            <td>{word.MascOrFemme}</td>
            <td>{word.GrammarType}</td>
        </tr>
    )
}