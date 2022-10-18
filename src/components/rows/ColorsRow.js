import significantList from "../../lists/significantlist"

export default function ColorsRow(props) {

    const {color} = props

    return (
            <td>{significantList.colors[color]}</td>
    )
}