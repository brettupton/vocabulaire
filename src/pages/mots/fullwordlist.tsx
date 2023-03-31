import { WordList } from "../../components/WordComponents/WordList"
import Cookies from 'js-cookie'
import { LogInToViewToast } from 'components/UserComponents/LogInToViewToast'

export const FullWordList = () => {

    const userToken = Cookies.get('token')
    if (!userToken) {
        return (
            <LogInToViewToast />
        )
    }

    return (
        <div className="container pt-5">
            <WordList />
        </div>
    )
}