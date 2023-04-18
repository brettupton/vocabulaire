import Cookies from "js-cookie"
import { ObjectId } from "mongodb"
import { Word } from "pages/mots"
import { useEffect, useState } from "react"
import plus from '../../images/icons/plus-circle.svg'

type WordGroupsObject = {
    [key: string]: ObjectId[]
}

export const WordGroups = () => {

    const [userWordGroupsArray, setUserWordGroupsArray] = useState<string[]>([])
    const [userWordGroups, setUserWordGroups] = useState<WordGroupsObject>({})
    const [currentWordGroup, setCurrentWordGroup] = useState("")
    const [wordsArray, setWordsArray] = useState<Word[]>([])
    const [isHovering, setIsHovering] = useState(false)

    const user = localStorage.getItem('user')
    const userToken = Cookies.get('token')

    useEffect(() => {
        fetchUserWordGroups()
    }, [])

    useEffect(() => {
        let timer: NodeJS.Timeout

        if (isHovering) {
            timer = setTimeout(() => {
                fetchCurrentGroup()
            }, 1000)
        }

        return () => clearTimeout(timer)
    }, [isHovering])

    const fetchUserWordGroups = () => {
        fetch('https://vocabulairehost.onrender.com/users/groups/' + user, {
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
                setUserWordGroupsArray(Object.keys(data.groups))
                setUserWordGroups(data.groups)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const fetchCurrentGroup = () => {
        fetch('https://vocabulairehost.onrender.com/users/database', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + userToken
            },
            body: JSON.stringify(userWordGroups[currentWordGroup])
        })
            .then((response) => {
                if (!response.ok) {
                    console.error(response)
                    return
                }
                return response.json()
            })
            .then((data) => {
                setWordsArray(data.wordArray)
            })
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const group = e.currentTarget.id
        setCurrentWordGroup(group)

        setIsHovering(true)

        e.currentTarget.style.cursor = 'pointer'
        e.currentTarget.style.backgroundColor = '#cccccc'
    }

    const handleMouseExit = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.cursor = 'default'
        e.currentTarget.style.backgroundColor = '#fff'

        setIsHovering(false)
    }

    const handleMouseClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const group = e.currentTarget.id

        setCurrentWordGroup(group)

        fetchCurrentGroup()
    }

    return (
        <>
            <div className="container pt-5 text-white min-vw-100 text-center">
                <div className="row py-5">
                    {user &&
                        <div className="col">
                            Hi {user}!
                        </div>
                    }
                </div>
            </div>
            <div className="container min-vw-100 text-white">
                <div className="row text-decoration-underline">
                    <div className="col">
                        Groups
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        {userWordGroupsArray.length > 0 && userWordGroupsArray.map((group, index) => {
                            return (
                                <div className="row text-black rounded border border-black w-50 text-center fs-4 my-1" id={group} key={index} style={{ backgroundColor: "#fff" }}
                                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} onClick={handleMouseClick}>
                                    <div className="col">
                                        {group}
                                    </div>
                                </div>
                            )
                        })}
                        <div className="row text-black rounded border border-black w-50 text-center fs-4 my-1">
                            <div className="col">
                                <img src={plus} alt="Plus Button" />
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="container bg-white fs-4 text-black rounded border border-dark">
                            <div className="row text-center p-2">
                                {wordsArray.length > 0 && wordsArray.map((word, index) => {
                                    return (
                                        <div className="col-2 border border-dark rounded" key={index}>
                                            {word.Word}
                                        </div>
                                    )
                                })}
                                <div className="col-2" >
                                    <img src={plus} alt="Plus Button" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}