// *Indicative*
// Présent
// Imparfait
// Passé composé
// Futur Simple
// Passé Proche
// Futur Proche
// Plus-que-Parfait
// Futur Antérieur
// Passé Simple
// Passé Antérieur

// *Imperative*
// Présent
// Passé

// *Conditional*
// Présent
// Passé 1ière forme
// Passé 2ième forme

// *Subjunctive*
// Présent
// Passé
// Imparfait
// Plus-que-Parfait

// *Participle*
// Présent
// Passé

// *Gerund*
// Présent
// Passé

// *Infinitive*
// Présent
// Passé

export default function Temps() {
    return (
        <div className="container min-vh-100 text-begin pt-5 m-0">
            <div className="row py-5">
                <div className="col">
                    <div className="container bg-white rounded">
                        <div className="row fs-3 py-3">
                            <div className="col">
                                Présent (Present)
                            </div>
                        </div>
                        <div className="row fs-6">
                            <div className="col">
                                <ul>
                                    <li>facts and ongoing situations in the present</li>
                                    <li>actions that happen once, multiple times or never in the present</li>
                                    <li>a future action that is already planned or agreed upon</li>
                                    <li>the duration of actions that started in the past and are ongoing in the present</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row fs-3 py-3">
                            <div className="col">
                                Imparfait (Imperfect)
                            </div>
                        </div>
                        <div className="row fs-6">
                            <div className="col">
                                <ul>
                                    <li>to describe a situation in the past</li>
                                    <li>to describe a person, a property, a comment or an explanation in the past</li>
                                    <li>to talk about a repeated action in the past</li>
                                    <li>to talk about simultaneously occurring actions in the past</li>
                                    <li>to emphasise the duration of an action</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row fs-3 py-3">
                            <div className="col">
                                Passé composé (Compound Past)
                            </div>
                        </div>
                        <div className="row fs-6">
                            <div className="col">
                                <ul>
                                    <li>answer the question que s'est-il passé? - what happened?</li>
                                    <li>express a past action that happened on a specific occasion</li>
                                    <li>express a one-time past action</li>
                                    <li>list sequential past actions that happened one after another</li>
                                    <li>introduce a new past action that interrupted another that was already in progress</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row fs-3 py-3">
                            <div className="col">
                                Futur simple (Future)
                            </div>
                        </div>
                        <div className="row fs-6">
                            <div className="col">
                                <ul>
                                    <li>to talk about future intentions</li>
                                    <li>to make suppositions or predictions about the future</li>
                                    <li>in conditional sentences</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row fs-3 py-3">
                            <div className="col">
                                Conditionnel présent (Present Conditional)
                            </div>
                        </div>
                        <div className="row fs-6">
                            <div className="col">
                                <ul>
                                    <li>to express a wish, a possibility, or a hypothesis in the present</li>
                                    <li>as a tense to talk about the future from a past point of view</li>
                                    <li>in if-clauses</li>
                                    <li>to make polite requests</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row fs-3 py-3">
                            <div className="col">
                                Présent du subjonctif (Subjunctive Present)
                            </div>
                        </div>
                        <div className="row fs-6">
                            <div className="col">
                                <ul>
                                    <li>to talk about events that take place simultaneously</li>
                                    <li>in subordinate clauses that start with que and after certain verbs and conjunctions</li>
                                    <li>after conjunctions with que</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-white pt-5" style={{ minWidth: '95vw' }}>
                <div className="row fs-6 text-end pt-3">
                    <div className="col">
                        Data provided by<a className="badge badge-info" href="https://francais.lingolia.com/en" target="_blank" rel="noreferrer">francais.lingolia.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}