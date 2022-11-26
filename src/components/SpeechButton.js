const speech = new SpeechSynthesisUtterance()
const synth = window.speechSynthesis
const voice = speechSynthesis.getVoices()[88]
speech.voice = voice
speech.lang = "fr"

export default function SpeechButton(props) {
    const { word } = props

    const playSpeech = () => {
        speech.text = word
        synth.speak(speech)
    }

    return (
        <button className="btn" onClick={playSpeech}>
            <img id="play-icon" alt="Play Button" />
        </button>
    )
}