import significantList from "../../lists/significantlist"

export default function NumberRow({index}) {

    const numbersArray = significantList.numbers

    return (
        <tr>
            <th scope="row" style={{paddingRight: "20px"}} id="row-hidden">{index}</th>
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