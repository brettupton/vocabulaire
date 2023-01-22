import Alert from "../Alert"
import Spinner from "../Spinner"
import FEConjugations from "./FEConjugations"

export default function AddVerbDisplay(props) {

    const { isMobile, isSubmitting, newVerb, currentTenseSelected, newVerbSubmitted, handleSelectChange,
        handleInputChange, handleVerbSubmit, handleVerifyButtonClick, filteredVerbArray } = props

    return (
        <>
            <div className="row justify-content-center">
                <div className={`col-${isMobile ? '12' : '8'}`}>
                    {newVerbSubmitted && <Alert message={'Nouveau verbe ajouté'} />}
                    <form autoComplete="off">
                        <div className="card text-black">
                            <div className="card-body fs-6">
                                <div className="card-text">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className={`col-${isMobile ? '8' : '6'}`}>
                                                <label htmlFor="Verb">Verbe</label>
                                                <input type="text" className="form-control form-control-sm" id="Verb" value={newVerb.Verb} onChange={handleInputChange} required />
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className={`col-${isMobile ? '8' : '6'}`}>
                                                <label htmlFor="Translation">Traduction</label>
                                                <input type="text" className="form-control form-control-sm" id="Translation" value={newVerb.Translation} onChange={handleInputChange} required />
                                            </div>
                                        </div>
                                        <div className="row justify-content-around pt-1">
                                            <div className={`col-${isMobile ? '6' : '3'}`}>
                                                <label htmlFor="Je">Je</label>
                                                <input type="text" className="form-control form-control-sm" id="Je" value={newVerb[currentTenseSelected]['Je']} onChange={handleInputChange} />
                                            </div>
                                            <div className={`col-${isMobile ? '6' : '3'}`}>
                                                <label htmlFor="Nous">Nous</label>
                                                <input type="text" className="form-control form-control-sm" id="Nous" value={newVerb[currentTenseSelected]['Nous']} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="row justify-content-around pt-1">
                                            <div className={`col-${isMobile ? '6' : '3'}`}>
                                                <label htmlFor="Tu">Tu</label>
                                                <input type="text" className="form-control form-control-sm" id="Tu" value={newVerb[currentTenseSelected]['Tu']} onChange={handleInputChange} />
                                            </div>
                                            <div className={`col-${isMobile ? '6' : '3'}`}>
                                                <label htmlFor="Vous">Vous</label>
                                                <input type="text" className="form-control form-control-sm" id="Vous" value={newVerb[currentTenseSelected]['Vous']} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="row justify-content-around pt-1">
                                            <div className={`col-${isMobile ? '6' : '3'}`}>
                                                <label htmlFor="Il">Il/Elle</label>
                                                <input type="text" className="form-control form-control-sm" id="Il" value={newVerb[currentTenseSelected]['Il']} onChange={handleInputChange} />
                                            </div>
                                            <div className={`col-${isMobile ? '6' : '3'}`}>
                                                <label htmlFor="Ils">Ils/Elles</label>
                                                <input type="text" className="form-control form-control-sm" id="Ils" value={newVerb[currentTenseSelected]['Ils']} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="row justify-content-center pt-3">
                                            <div className="col-10">
                                                <select className="form-select form-select-sm" onChange={handleSelectChange}>
                                                    <option value="Présent" defaultValue={"Présent"}>Présent</option>
                                                    <option value="Imparfait">Imparfait</option>
                                                    <option value="PasséComposé">Passé Composé</option>
                                                    <option value="FuturSimple">Futur Simple</option>
                                                    <option value="ConditionnelPrésent">Conditionnel Présent</option>
                                                    <option value="PrésentDuSubjonctif">Présent du Subjonctif</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row pt-3">
                <div className="col">
                    <button className="btn btn-primary" onClick={handleVerifyButtonClick}>Vérifier</button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="modal fade text-black fs-5" tabIndex="-1" id="verify-modal">
                        <div className="modal-dialog modal-dialog-scrollable modal-lg">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col fs-4">
                                            {newVerb.Verb}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col fs-6">
                                            {newVerb.Translation}
                                        </div>
                                    </div>
                                    {filteredVerbArray().map((key, index) => {
                                        return (
                                            <div className="container py-2 my-2 rounded" key={index} style={{ border: 'medium double #000' }}>
                                                <FEConjugations currentVerb={newVerb} currentTense={key} isMobile={isMobile} />
                                            </div>
                                        )
                                    })}
                                    <button className="btn btn-primary mt-2" onClick={handleVerbSubmit} disabled={isSubmitting}>
                                        {isSubmitting ?
                                            <Spinner color={'light'} topOfPage={false} size={'sm'} />
                                            : 'Soumettre'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}