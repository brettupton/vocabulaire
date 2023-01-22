import { useState, useEffect } from "react"
import { Modal } from "bootstrap"
import Login from "../Login"
import useToken from "../useToken"
import AddVerbDisplay from "./AddVerbDisplay"

export default function AddVerb() {

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

    const [newVerb, setNewVerb] = useState(
        {
            "Verb": "", "Translation": "",
            "Présent":
                { "Je": "", "Tu": "", "Il": "", "Nous": "", "Vous": "", "Ils": "" },
            "Imparfait":
                { "Je": "", "Tu": "", "Il": "", "Nous": "", "Vous": "", "Ils": "" },
            "PasséComposé":
                { "Je": "", "Tu": "", "Il": "", "Nous": "", "Vous": "", "Ils": "" },
            "FuturSimple":
                { "Je": "", "Tu": "", "Il": "", "Nous": "", "Vous": "", "Ils": "" },
            "ConditionnelPrésent":
                { "Je": "", "Tu": "", "Il": "", "Nous": "", "Vous": "", "Ils": "" },
            "PrésentDuSubjonctif":
                { "Je": "", "Tu": "", "Il": "", "Nous": "", "Vous": "", "Ils": "" }
        }
    )
    const [currentTenseSelected, setCurrentTenseSelected] = useState('Présent')
    const [postResponse, setPostResponse] = useState(
        {
            message: '',
            received: false
        }
    )
    const [verifyModal, setVerifyModal] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [newVerbSubmitted, setNewVerbSubmitted] = useState(false)

    const url = new URL('https://vocabulairehost.onrender.com/')
    const { token, setToken } = useToken()

    // Resets all values & sends success alert if valid postResponse
    useEffect(() => {
        if (postResponse.message === 'Success') {
            setNewVerbSubmitted(true)
            resetStateValues()
            setIsSubmitting(false)
            verifyModal.toggle()
        }
    }, [postResponse])

    function resetStateValues() {
        setPostResponse(
            {
                message: '',
                received: false
            }
        )
        setNewVerb(
            {
                "Verb": "", "Translation": "",
                "Présent":
                    { "Je": "", "Tu": "", "Il": "", "Nous": "", "Vous": "", "Ils": "" },
                "Imparfait":
                    { "Je": "", "Tu": "", "Il": "", "Nous": "", "Vous": "", "Ils": "" },
                "PasséComposé":
                    { "Je": "", "Tu": "", "Il": "", "Nous": "", "Vous": "", "Ils": "" },
                "FuturSimple":
                    { "Je": "", "Tu": "", "Il": "", "Nous": "", "Vous": "", "Ils": "" },
                "ConditionnelPrésent":
                    { "Je": "", "Tu": "", "Il": "", "Nous": "", "Vous": "", "Ils": "" },
                "PrésentDuSubjonctif":
                    { "Je": "", "Tu": "", "Il": "", "Nous": "", "Vous": "", "Ils": "" }
            }
        )
    }

    function handleSelectChange(e) {
        const { value } = e.target

        setCurrentTenseSelected(value)
    }

    // Handles both updating the original verb and translation and the values in the nested tense objects
    function handleInputChange(e) {
        const { id, value } = e.target

        if (id === "Verb" || id === "Translation") {
            setNewVerb(values => ({ ...values, [id]: value }))
        } else {
            setNewVerb(values => ({ ...values, [currentTenseSelected]: { ...values[currentTenseSelected], [id]: value } }))
        }
    }

    function handleVerbSubmit() {
        setIsSubmitting(true)

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newVerb)
        }

        fetch(url + 'verbs/new', options)
            .then(response => response.json())
            .then(data => {
                setPostResponse({
                    message: data.message,
                    received: true
                })
            })
            .catch(
                setPostResponse({
                    message: 'Failure',
                    recieved: true
                })
            )
    }

    // Verifies that a verb and a translation has been inputted
    // Doesn't create Modal until this requirement is met

    function handleVerifyButtonClick() {
        setNewVerbSubmitted(false)
        const verbInput = document.getElementById('Verb')
        const translationInput = document.getElementById('Translation')
        if (!verbInput.value) {
            verbInput.setCustomValidity('A verb is required')
            verbInput.reportValidity()
        } else if (!translationInput.value) {
            translationInput.setCustomValidity('A translation is required')
            translationInput.reportValidity()
        } else {
            lowerCaseObjectValues()
            const newVerifyModal = new Modal(document.getElementById('verify-modal'))
            newVerifyModal.toggle()
            setVerifyModal(newVerifyModal)
        }
    }

    // Returns only the tenses from the original new verb for iteration in display
    function filteredVerbArray() {
        return Object.keys(newVerb).filter((key) => key !== 'Translation' && key !== 'Verb')
    }

    // Lowercase the values in the conjugations so the JeConjugation function works correctly
    function lowerCaseObjectValues() {
        const tensesArray = filteredVerbArray()
        const newObj = {}

        for (let tense of tensesArray) {
            newObj[tense] = {}
            for (let key in newVerb[tense]) {
                newObj[tense][key] = newVerb[tense][key].toLowerCase()
            }
        }
        setNewVerb({ ...newVerb, ...newObj })
    }

    if (!token || token === 'undefined') {
        return <Login setToken={setToken} />
    }

    return (
        <AddVerbDisplay
            isMobile={isMobile}
            isSubmitting={isSubmitting}
            newVerb={newVerb}
            currentTenseSelected={currentTenseSelected}
            newVerbSubmitted={newVerbSubmitted}
            handleSelectChange={handleSelectChange}
            handleInputChange={handleInputChange}
            handleVerbSubmit={handleVerbSubmit}
            handleVerifyButtonClick={handleVerifyButtonClick}
            filteredVerbArray={filteredVerbArray} />
    )
}