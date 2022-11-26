
export default function NumberRow(props) {

    const { index, significantArray } = props

    const numbersArray = significantArray.numbers

    return (
        <tr>
            <th scope="row" className="px-3">{index}</th>
            <td>{numbersArray[index]}</td>
            <td>{numbersArray[index + 10]}</td>
            <td>{numbersArray[index + 20]}</td>
            <td>{numbersArray[index + 30]}</td>
            <td>{numbersArray[index + 40]}</td>
            <td>{numbersArray[index + 50]}</td>
            <td>{numbersArray[index + 60]}</td>
            <td>{numbersArray[index + 70]}</td>
            <td>{numbersArray[index + 80]}</td>
            <td>{numbersArray[index + 90]}</td>
        </tr>
    )
}