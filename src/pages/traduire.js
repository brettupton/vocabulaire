import { useEffect, useState } from "react"

const speech = new SpeechSynthesisUtterance()
const synth = window.speechSynthesis
speech.lang = "fr"

export default function Traduire() {

    const [translatedTextResponse, setTranslatedTextResponse] = useState('')

    function unescape(string) {
        return new DOMParser().parseFromString(string,'text/html').querySelector('html').textContent;
      }

    const checkEnterPress = (e) => {
        const translateButton = document.getElementById('translate-button')
        if (e.key === "Enter") {
            e.preventDefault();
            translateButton.click();
        }
    }

    useEffect(() => {
        const input = document.getElementById('input-area')
        input.addEventListener("keypress", checkEnterPress)
        return () => {
            input.removeEventListener("keypress", checkEnterPress)
        } 
    })

    const playSpeech = () => {
        speech.text = translatedTextResponse
        synth.speak(speech)
        
    }

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
        };
        
        fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
            .then(response => response.json())
            .then(response => {
                setTranslatedTextResponse(unescape(response.data.translations.translatedText))
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="layout">
            <div className="container flex" id="translation-main-container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="form-group">
                                <label htmlFor="input-area" style={{fontSize: "24px"}}>English:</label>
                                <textarea className="form-control" rows="4" id="input-area" placeholder="Type here"></textarea>
                            </div>
                        </div>
                    <div className="col-lg-5">
                        <span style={{fontSize: "24px"}}>French:</span> 
                        <div className="container" id="translation-translate-container">
                            <div className="row align-items-start pt-1">
                                <div className="col-auto">
                                    {translatedTextResponse && 
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    {translatedTextResponse} 
                                                    <button className="btn p-1 mb-1" onClick={playSpeech}>
                                                        <img id="play-icon" alt="Play Button Icon"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <button onClick={translateText} className="btn btn-primary" id="translate-button">Translate to French</button>
                    </div>
                </div>
            </div>
        </div>
    )
}