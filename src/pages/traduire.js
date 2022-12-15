//Rework eventually
import { useEffect, useState } from "react"
import SpeechButton from '../components/SpeechButton'

export default function Traduire() {

    const [width, setWidth] = useState(window.innerWidth)
    const [translatedTextResponse, setTranslatedTextResponse] = useState('')

    const isMobile = width <= 768

    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }

    function unescape(string) {
        return new DOMParser().parseFromString(string, 'text/html').querySelector('html').textContent
    }

    const checkEnterPress = (e) => {
        const translateButton = document.getElementById('translate-button')
        if (e.key === "Enter") {
            e.preventDefault();
            translateButton.click();
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    useEffect(() => {
        const input = document.getElementById('input-area')
        input.addEventListener("keypress", checkEnterPress)
        return () => {
            input.removeEventListener("keypress", checkEnterPress)
        }
    })

    const translateText = () => {
        const input = document.getElementById('input-area')

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': process.env.REACT_APP_TRANSLATEAPIKEY,
                'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
            },
            body: `{"q":"${input.value}","source":"en","target":"fr"}`
        }

        fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
            .then(response => response.json())
            .then(response => {
                setTranslatedTextResponse(unescape(response.data.translations.translatedText))
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="container min-vh-100 text-center pt-5 text-white fs-5">
            <div className="row pt-5 justify-content-center">
                <div className="col-lg-5">
                    <div className="form-group">
                        <label htmlFor="input-area" className="py-3">English:</label>
                        <textarea className="form-control" rows="4" id="input-area" placeholder="Type here"></textarea>
                    </div>
                </div>
                <div className="col-lg-5 py-3">
                    <p >French:</p>
                    <div className={`container p-4 bg-white h-${isMobile ? '100' : '75'} rounded text-black fs-6 text-start`}>
                        <div className="row pt-1">
                            <div className="col">
                                {translatedTextResponse}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-end" style={{ padding: `${isMobile ? '8% 0 0 0' : '0 8% 0 0'}` }}>
                <div className="col">
                    <SpeechButton word={translatedTextResponse} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col">
                    <button onClick={translateText} className="btn btn-primary" id="translate-button">Translate</button>
                </div>
            </div>
        </div>
    )
}