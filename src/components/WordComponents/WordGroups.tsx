import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const WordGroups = () => {

    //@ts-ignore
    const [testWordGroups, setTestWordGroups] = useState(["All", "Nouns", "Adjectives"])

    const user = localStorage.getItem('user')
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/user/login')
        }
    }, [])

    return (
        <div className="container pt-5 text-white text-center">
            <div className="row py-5">
                <div className="col">
                    Hi {user}!
                </div>
            </div>
            <div className="row bg-white">
                <div className="col">

                </div>
            </div>
        </div>
    )
}