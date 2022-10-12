import { useEffect, useState } from "react"
import config from '../config'

const speech = new SpeechSynthesisUtterance()
const synth = window.speechSynthesis
const encodedParams = new URLSearchParams();
encodedParams.append("target", "en");
encodedParams.append("source", "fr");
speech.lang = "fr"

export default function Traduire() {

    const [inputtedValue, setInputtedValue] = useState('')
    const [translatedTextResponse, setTranslatedTextResponse] = useState('')


    const checkEnter = (e) => {
        const playButton = document.getElementById('play-button')
        if (e.key === "Enter") {
            e.preventDefault();
            playButton.click();
        }
    }

    useEffect(() => {
        const input = document.getElementById('input-field')
        input.addEventListener("keypress", checkEnter)
        return () => {
            input.removeEventListener("keypress", checkEnter)
        } 
    })

    const playSpeech = () => {
        const input = document.getElementById('input-field')
        setInputtedValue(input.value)
        speech.text = inputtedValue
        synth.speak(speech)

        encodedParams.append("q", inputtedValue);

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': config.REACT_APP_TRANSLATEAPIKEY,
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: encodedParams
        };
        
        fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    return (
        <div className="layout">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <label for="input-field">Que voudriez-vous que je dise ?</label>
                        <input type="text" id="input-field" name="input-field" className="mt-3" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {translatedTextResponse}
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <button onClick={playSpeech} className="btn btn-success" id="play-button">Play</button>
                    </div>
                </div>
            </div>
        </div>
    )
}