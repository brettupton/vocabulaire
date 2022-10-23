const speech = new SpeechSynthesisUtterance()
const synth = window.speechSynthesis
speech.lang = "fr"

export default function SpeechButton({word}) {
    const playSpeech = () => {
        speech.text = word
        synth.speak(speech)
    }
    
    return (
        <button className="btn p-1 mb-1" onClick={playSpeech} id="speech-button" >
            <img id="play-icon" />
        </button>
    )
}