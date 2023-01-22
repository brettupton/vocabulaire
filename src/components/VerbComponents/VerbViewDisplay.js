import Spinner from "../Spinner"
import SpeechButton from "../SpeechButton"
import Alert from "../Alert"


export default function VerbViewDisplay(props) {

    const { isMobile, fetchingInitialData, isSubjunctive, verbUpdateSubmitted, verb, currentTenseSelected, viewModeDisplay,
        editModeDisplay, switchCurrentMode, handleSelectChange, handleInputChange, returnJeConjugation, returnIlOrElle } = props

    return (
        <div className="row justify-content-center">
            {fetchingInitialData
                ? <Spinner color="light" topOfPage={true} />
                :
                <div className={`col-${isMobile ? '12' : '5'}`}>
                    {verbUpdateSubmitted ? <Alert message={`${verb.Verb} a été mis à jour`} size={'12'} /> : ''}
                    {/* VIEW MODE */}
                    <div className={`card text-black text-start d-${viewModeDisplay} py-1`}>
                        <div className="card-header" style={{ fontSize: '13px' }}>
                            <ul className="nav nav-tabs card-header-tabs justify-content-end">
                                <li className="nav-item">
                                    <button className='nav-link active'>
                                        View
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" id="edit" onClick={switchCurrentMode}>
                                        Edit
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body fs-5">
                            <div className="row">
                                <div className="col">
                                    {verb.Verb} - {verb.Translation}
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col">
                                    {returnJeConjugation(verb[currentTenseSelected])}{verb[currentTenseSelected]['Je']}
                                </div>
                                <div className="col">
                                    {isSubjunctive ? 'Que nous' : 'Nous'} {verb[currentTenseSelected]['Nous']}
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col">
                                    {isSubjunctive ? 'Que tu' : 'Tu'} {verb[currentTenseSelected]['Tu']}
                                </div>
                                <div className="col">
                                    {isSubjunctive ? 'Que vous' : 'Vous'} {verb[currentTenseSelected]['Vous']}
                                </div>
                            </div>
                            {returnIlOrElle()}
                            <div className="row pt-4 justify-content-between">
                                <div className="col-6">
                                    <select className="form-select form-select-sm border border-0" onChange={handleSelectChange} defaultValue={currentTenseSelected}>
                                        <option value="Présent">Présent</option>
                                        <option value="Imparfait">Imparfait</option>
                                        <option value="PasséComposé">Passé Composé</option>
                                        <option value="FuturSimple">Futur Simple</option>
                                        <option value="ConditionnelPrésent">Conditionnel Présent</option>
                                        <option value="PrésentDuSubjonctif">Présent du Subjonctif</option>
                                    </select>
                                </div>
                                <div className="col-2">
                                    <SpeechButton word={verb.Verb} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* EDIT MODE */}
                    <div className={`card text-black text-start d-${editModeDisplay} py-1`}>
                        <div className="card-header" style={{ fontSize: '13px' }}>
                            <ul className="nav nav-tabs card-header-tabs justify-content-end">
                                <li className="nav-item">
                                    <button className="nav-link" id="view" onClick={switchCurrentMode}>
                                        View
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active">
                                        Edit
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className={`card-body fs-${isSubjunctive && isMobile ? '6' : '5'}`}>
                            <div className="row justify-content-start">
                                <div className="col-3">
                                    <div className="input-div">
                                        <input className="edit-input" value={verb.Verb} name="Verb" onChange={handleInputChange} />
                                        <span className="edit-input-border"></span>
                                    </div>
                                </div>
                                <div className={`col-${isMobile ? '5' : '4'}`}>
                                    <div className="input-div">
                                        <input className="edit-input" value={verb.Translation} name="Translation" onChange={handleInputChange} />
                                        <span className="edit-input-border"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col">
                                    {returnJeConjugation(verb[currentTenseSelected])}
                                </div>
                                <div className={`col${isMobile ? '-4' : ''}`}>
                                    <div className="input-group input-group-sm">
                                        <input className="form-control" value={verb[currentTenseSelected]['Je']} name='Je' onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="col">
                                    {isSubjunctive ? 'Que nous' : 'Nous'}
                                </div>
                                <div className={`col${isMobile ? '-4' : ''}`}>
                                    <div className="input-group input-group-sm">
                                        <input className="form-control" value={verb[currentTenseSelected]['Nous']} name='Nous' onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col">
                                    {isSubjunctive ? 'Que tu' : 'Tu'}
                                </div>
                                <div className={`col${isMobile ? '-4' : ''}`}>
                                    <div className="input-group input-group-sm">
                                        <input className="form-control" value={verb[currentTenseSelected]['Tu']} name='Tu' onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className='col'>
                                    {isSubjunctive ? 'Que vous' : 'Vous'}
                                </div>
                                <div className={`col${isMobile ? '-4' : ''}`}>
                                    <div className="input-group input-group-sm">
                                        <input className="form-control" value={verb[currentTenseSelected]['Vous']} name='Vous' onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>
                            {returnIlOrElle()}
                            <div className="row pt-4 justify-content-between">
                                <div className={`col-${isMobile ? '8' : '6'}`}>
                                    <select className="form-select form-select-sm border border-0" onChange={handleSelectChange} defaultValue={currentTenseSelected}>
                                        <option value="Présent">Présent</option>
                                        <option value="Imparfait">Imparfait</option>
                                        <option value="PasséComposé">Passé Composé</option>
                                        <option value="FuturSimple">Futur Simple</option>
                                        <option value="ConditionnelPrésent">Conditionnel Présent</option>
                                        <option value="PrésentDuSubjonctif">Présent du Subjonctif</option>
                                    </select>
                                </div>
                                <div className="col-2">
                                    <SpeechButton word={verb.Verb} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}