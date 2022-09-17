import { vocabList } from "../vocablist"

export function WordTranslation(props) {
    return (
        <div className="App-div">
        <div className="container" id="translation-container">
          <div className="row">
            <div className="col">
              <h5>French:</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {vocabList[props.index].GrammarType === 'Noun' 
              ? <p>{props.gender}{vocabList[props.index].French.toLowerCase()}</p> 
              : <p>{props.gender}{vocabList[props.index].French}</p>}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>English:</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>{vocabList[props.index].English}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-primary" onClick={props.handleClick}>New Word</button>
            </div>
          </div>
        </div>
      </div>
    )
}