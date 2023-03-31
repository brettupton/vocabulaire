import { useState, useEffect } from 'react'
import { Spinner } from 'components/Spinner'
import { ObjectId } from 'mongodb'

type GroupsObject = {
    [key: string]: ObjectId[]
}

export const TestEnv = () => {

    const [userWordGroups, setUserWordGroups] = useState<GroupsObject>({})
    const [newWordGroup, setNewWordGroup] = useState('')
    const [wordToBeAddedId, setWordToBeAddedId] = useState('')
    const [selectedGroup, setSelectedGroup] = useState('')

    const user = localStorage.getItem('user') || 'master'

    useEffect(() => {
        fetchUserGroups()
    }, [])

    const fetchUserGroups = () => {
        fetch('http://localhost:5000/users/groups/' + user, {
            method: "GET"
        })
            .then((response) => {
                if (!response.ok) {
                    console.error(response)
                    return
                }
                return response.json()
            })
            .then((data) => {
                setUserWordGroups(data.groups)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const handleGroupInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget

        // If new group is more than one word, creates an array of words and loops through to capitalize each word
        // Joins the array back into one string before setting
        const groupNameArray = value.split(" ")
        for (const index in groupNameArray) {
            groupNameArray[index] = (groupNameArray[index].charAt(0).toUpperCase() + groupNameArray[index].slice(1))
        }
        const formattedGroupName = groupNameArray.join("")

        setNewWordGroup(formattedGroupName)
    }

    const addNewWordGroup = () => {
        fetch('http://localhost:5000/users/groups/' + user + '/' + newWordGroup, {
            method: 'PUT',
        })
            .then((response) => {
                if (!response.ok) {
                    console.error(response)
                    return
                }
                console.log('good')
            })
    }

    const handleAddNewId = () => {
        fetch('http://localhost:5000/words/groups/' + user, {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ wordId: wordToBeAddedId, group: selectedGroup })
        })
            .then((response) => {
                if (!response.ok) {
                    console.error(response)
                    return
                }
            })
    }

    const handleWordIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget

        setWordToBeAddedId(value)
    }

    const handleSelectedGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.currentTarget

        setSelectedGroup(value)
    }

    if (!userWordGroups["All"]) {
        return (
            <div className="container pt-5 text-center">
                <div className="row pt-5">
                    <div className="col">
                        <Spinner color="light" buttonSpinner={false} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container pt-5 text-white text-center">
            <div className="row pt-5">
                <div className="col">
                    TestEnv
                </div>
            </div>
            <div className="row pt-5">
                <div className="col">
                    Groupes
                </div>
            </div>
            <div className="row pt-5">
                {Object.keys(userWordGroups).map((group, index) => {
                    return (
                        <div className="col" key={index}>
                            {group.split(/(?=[A-Z])/).join(" ")}
                            <div className="container">
                                {userWordGroups[group].map((word, index) => {
                                    return (
                                        <div className="row" key={index}>{word.toString()}</div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="row pt-5">
                <div className="col">
                    <input className="form-control" placeholder="New group" onChange={handleGroupInputChange} />
                </div>
            </div>
            <div className="row pt-1">
                <div className="col">
                    <button className='btn btn-primary' onClick={addNewWordGroup}>Add</button>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col">
                    <input className="form-control" placeholder="Word Id" onChange={handleWordIdInputChange} />
                </div>
            </div>
            <div className="row pt-5">
                <div className="col">
                    <select className="form-control" onChange={handleSelectedGroupChange}>
                        {Object.keys(userWordGroups).map((group, index) => {
                            return (
                                <option key={index}>{group}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="row pt-1">
                <div className="col">
                    <button className='btn btn-primary' onClick={handleAddNewId}>Add</button>
                </div>
            </div>
        </div>
    )
}