import { AddWord } from "components/WordComponents/AddWord"
import { LogInToViewToast } from "components/UserComponents/LogInToViewToast"
import Cookies from "js-cookie"


export const AddWordPage = () => {

    const userToken = Cookies.get('token')

    if (!userToken) {
        return (
            <LogInToViewToast />
        )
    }

    return (
        <AddWord />
    )
}