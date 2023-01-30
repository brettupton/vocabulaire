type Word = {
    French: string,
    English: string,
}

export default function TestEnv() {

    const word: Word = {
        French: 'Bonjour',
        English: 'Hello'
    }

    return (
        <div className="container text-white text-center">
            <div className="row py-4">
                <div className="col">
                    {word.French}
                </div>
            </div>
        </div>
    )
}