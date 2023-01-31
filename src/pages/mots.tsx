
import { Outlet } from "react-router-dom"
import { ObjectId } from "mongodb"

export type Word = {
    _id?: ObjectId,
    French: string,
    English: string,
    Gender: string,
    Term: string
}

export const Mots = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}
