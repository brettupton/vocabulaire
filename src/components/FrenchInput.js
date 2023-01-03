import { useState, useEffect } from 'react'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


export default function FrenchInput(props) {

    // Mobile Check
    const [width, setWidth] = useState(window.innerWidth)
    const isMobile = width <= 768

    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    // New Input Component
    const [inputValue, setInputValue] = useState('')
    const [currentAccentList, setCurrentAccentList] = useState([])
    const [timeLeft, setTimeLeft] = useState(1)
    const [accentCharacterPressed, setAccentCharacterPressed] = useState(false)
    const [selectedAccentCharacter, setSelectedAccentCharacter] = useState('')

    const accentList = {
        a: ['a', 'à', 'â', 'ä', 'æ'],
        e: ['e', 'è', 'é', 'ê', 'ë'],
        c: ['c', 'ç'],
        i: ['i', 'î', 'ï'],
        o: ['o', 'ô', 'œ'],
        u: ['u', 'ù', 'û', 'ü']
    }

    const { handleChange } = props

    useEffect(() => {
        if (!isMobile) {
            const inputElement = document.getElementById('French')
            inputElement.addEventListener('keydown', handleKeyDown)
            inputElement.addEventListener('keyup', handleKeyUp)

            return () => {
                inputElement.removeEventListener('keydown', handleKeyDown)
                inputElement.removeEventListener('keyup', handleKeyUp)
            }
        }
    })

    function handleKeyDown(e) {
        // Deleting the lastest character if the key pressed is Backspace
        // If not added, e.key being 'Backspace' adds the word to the input value
        if (e.key === "Backspace") {
            setInputValue(inputValue.slice(0, inputValue.length - 1))
            return
        } else if (e.key === "Tab") {
            return
        }
        // Stops all input taken, mainly so holding down key doesn't repeat values
        e.preventDefault()
        // Checks if keypressed is an accent character, if so, chooses list based on pressed accent character
        if (['a', 'e', 'c', 'i', 'o', 'u'].includes(e.key)) {
            setCurrentAccentList(accentList[e.key])
            setAccentCharacterPressed(true)
            return
        }
    }

    function handleKeyUp(e) {
        // Get rid of the list of accent characters, reset the timer, and set the new input value
        setAccentCharacterPressed(false)
        setTimeLeft(1)
        if (selectedAccentCharacter) {
            setInputValue(prevValue => prevValue + selectedAccentCharacter)
            setSelectedAccentCharacter('')
            return
        }
        // Only allow lower and uppercase letters, spaces, single quotations, and question marks
        if ((e.keyCode >= 65 && e.keyCode <= 90) ||
            (e.keyCode >= 97 && e.keyCode <= 122) ||
            e.keyCode === 32 || e.keyCode === 222 || e.keyCode === 191) {
            setInputValue(prevValue => prevValue + e.key)
            return
        }
    }

    useEffect(() => {
        if (timeLeft === 0) return
        if (accentCharacterPressed) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1)
            }, 400)

            return () => {
                clearInterval(timer)
            }
        }
    }, [timeLeft, accentCharacterPressed])

    function handleMouseEnter(e) {
        e.target.style.cursor = 'pointer'
        const className = e.target.className
        e.target.className = className + ' border border-dark rounded'
        setSelectedAccentCharacter(e.target.textContent)
    }

    function handleMouseLeave(e) {
        // Removes the border from handleMouseEnter
        e.target.className = 'col'
        setSelectedAccentCharacter('')
    }


    return (
        <>
            <OverlayTrigger
                show={timeLeft === 0}
                key='popover-list'
                placement='top'
                overlay={
                    <Popover>
                        <Popover.Body>
                            <div className="container fs-6 px-3">
                                <div className="row">
                                    {currentAccentList.map((char, key) => {
                                        return (<div className="col" key={key} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{char}</div>)
                                    })}
                                </div>
                            </div>
                        </Popover.Body>
                    </Popover>
                }>
                <input type="text"
                    className="form-control form-control-sm"
                    name="French" id="French"
                    placeholder="Français"
                    {...(isMobile ? {} : { value: inputValue })}
                    onChange={isMobile ? handleChange : handleKeyDown}
                    autoComplete="off" />
            </OverlayTrigger>
            <div className={`container w-75 d-${isMobile ? 'none' : 'block'}`}>
                <div className="row justify-content-end">
                    <div className="col-2">
                        <OverlayTrigger
                            trigger={['hover', 'focus']}
                            key="popover-hint"
                            placement='bottom'
                            overlay={
                                <Popover>
                                    <Popover.Body>
                                        To type an accent, hold down the key, hover over your selection, and release the key
                                    </Popover.Body>
                                </Popover>
                            }>
                            <img id="question-icon" alt="Question Icon" />
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </>
    )
}