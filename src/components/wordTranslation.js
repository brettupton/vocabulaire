import './layout.css';
import vocabList from "../vocablist"


export default function WordTranslation(props) {
    const {handleClick, index, gender} = props

    return (
        <div className="layout">
            <div className="lesmots-div">
                <div className="container" id="translation-container">
                    <div className="row">
                        <div className="col">
                            <h5>French:</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {vocabList[index].GrammarType === 'Noun'
                                ? <p>{gender}{vocabList[index].French.toLowerCase()}</p>
                                : <p>{gender}{vocabList[index].French}</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h5>English:</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{vocabList[index].English}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Random Word</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}