
interface SpeechButtonProps {
    word: string
}

export const SpeechButton = (props: SpeechButtonProps) => {

    const speech = new SpeechSynthesisUtterance()
    const synth = window.speechSynthesis
    const voice = speechSynthesis.getVoices()[88]
    speech.voice = voice
    speech.lang = "fr"

    const { word } = props

    const playSpeech = () => {
        speech.text = word
        synth.speak(speech)
    }

    return (
        <button className="btn" onClick={playSpeech}>
            <img id="speech-icon" alt="Speech Button" />
        </button>
    )
}