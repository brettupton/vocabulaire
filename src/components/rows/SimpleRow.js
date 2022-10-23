import significantList from "../../lists/significantlist"
import SpeechButton from "../SpeechButton"

export default function SimpleRow(props) {

    const {index, array} = props

    return (
        <td>{significantList[array][index]} <SpeechButton word={significantList[array][index]} /></td>
    )
}