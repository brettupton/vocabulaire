import { useState, useEffect } from 'react'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export default function TestENV() {

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

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    })

    function handleKeyDown(e) {
        // Deleting the lastest character if the key pressed is Backspace
        // If not added, e.key being 'Backspace' adds the word to the input value
        if (e.key === "Backspace") {
            setInputValue(inputValue.slice(0, inputValue.length - 1))
            return
        }
        // Stops all input taken, mainly so holding down key doesn't repeat values
        e.preventDefault()
        // Checks if keypressed is an accent character, if so, chooses list based on pressed accent character
        if (['a', 'e', 'c', 'i', 'o', 'u'].includes(e.key)) {
            setCurrentAccentList(accentList[e.key])
            setAccentCharacterPressed(true)
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
            e.keyCode == 32 || e.keyCode == 222 || e.keyCode == 191) {
            setInputValue(prevValue => prevValue + e.key)
        }
    }

    useEffect(() => {
        // Stop the useEffect is timeLeft is equal to 0
        if (timeLeft === 0) return
        // Check first if the character pressed is an accent character before creating a timer
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
        // Adds a black border to the selected accent character and changes the cursor
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
        <div className="container min-vh-100 text-center pt-5 text-white">
            <div className="row">
                <div className="col">
                    Testing Environment
                </div>
            </div>
            <div className="row pt-5">
                <div className="col">
                    <input type="text" value={inputValue} onChange={handleKeyDown} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    inputValue: {inputValue}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    timeLeft: {timeLeft}
                </div>
            </div>
            <div className="row pb-5 bg-light text-black rounded">
                <div className='col'>
                    {timeLeft === 0
                        ? <div className="container">
                            <div className="row">
                                {currentAccentList.map((char, key) => {
                                    return (
                                        <div className="col" key={key} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{char}</div>
                                    )
                                }
                                )}
                            </div>
                        </div>
                        : '?'}
                </div>
            </div>
            <div className="row pt-5 justify-content-center">
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-light rounded">Nouns</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3>1</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-primary rounded">Nouns</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3>2</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <button className="btn text-white border border-white rounded">Nouns</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3>3</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-outline-light">Nouns</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3>4</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-success rounded">Nouns</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3>5</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-success">Nouns</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3>6</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                {/* <div className="row">
                    <div className="col">
                        {timeLeft === 0
                            ? <div className="container w-25 bg-light rounded text-black">
                                <div className="row">
                                    {currentAccentList.map((char, key) => {
                                        return (
                                            <div className="col" key={key} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{char}</div>
                                        )
                                    }
                                    )}
                                </div>
                            </div>
                            : <div className="container">
                                <div className="row">
                                    <div className="col">
                                        ㅤ
                                    </div>
                                </div>
                            </div>}
                    </div>
                </div> */}
                <OverlayTrigger
                    show={timeLeft === 0}
                    key='popover-list'
                    placement='top'
                    overlay={
                        <Popover>
                            <Popover.Body>
                                <div className="container fs-3 px-3">
                                    <div className="row">
                                        {currentAccentList.map((char, key) => {
                                            return (<div className="col" key={key} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{char}</div>)
                                        })}
                                    </div>
                                </div>
                            </Popover.Body>
                        </Popover>
                    }>
                    <input type="text" className="form-control form-control-sm" name="French" id="French" value={inputValue} onChange={handleKeyDown} autoComplete="off" />
                </OverlayTrigger>
            </div>
            <div className={`container w-${isMobile ? '100' : '25'}`}>
                <div className="row justify-content-end">
                    <div className="col-2">
                        <OverlayTrigger
                            trigger={['hover', 'focus']}
                            key="popover-hint"
                            placement='bottom'
                            overlay={
                                <Popover>
                                    <Popover.Body>
                                        To type an accent, press and hold the corresponding letter, hover over your selection, and release the key
                                    </Popover.Body>
                                </Popover>
                            }>
                            <img id="question-icon" alt="Question Icon" />
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </div>
    )
}