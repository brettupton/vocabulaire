import significantList from "../../lists/significantlist"

export default function QuestionRow(props) {

    const {question} = props

    return (
            <td>{significantList.questions[question]}</td>
    )
}