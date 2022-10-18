import significantList from "../../lists/significantlist"

export default function Month(props) {

    const {index} = props

    return (
            <td>{significantList.months[index]}</td>
    )
}