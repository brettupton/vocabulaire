
import { Outlet } from "react-router-dom"
import { ObjectId } from "mongodb"

export type DefinitionObject = {
    Definition: string,
    Gender: string
}

export type Word = {
    _id?: ObjectId,
    Word: string,
    Definitions: DefinitionObject[],
    hasTwoForms: boolean,
    Forms: {
        Masculine: string,
        Feminine: string
    },
    GrammarTerm: string,
    Plural: string,
    dateAdded: string,
    lastUpdate: string
}

export const Mots = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}
