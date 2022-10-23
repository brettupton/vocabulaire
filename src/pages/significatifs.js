import NumberRow from '../components/rows/NumberRow'
import SimpleTable from '../components/SimpleTable'
import uparrow from '../images/icons/arrow-up-circle.svg'

export default function Significatifs() {

    return (
        <div id="top">
        <div id="tables-container">
            <div className="card text-black p-1" id="content-card">
                <div className="card-header">
                    <h5>Table des matières</h5>
                </div>
                <div className="card-body">
                    <div className="list-group">
                        <a href="#numeros" className="list-group-item list-group-item-action">Numéros (0 - 99)</a>
                        <a href="#questions" className="list-group-item list-group-item-action">Questions</a>
                        <a href="#colours" className="list-group-item list-group-item-action">Colours</a>
                        <a href="#mois" className="list-group-item list-group-item-action">Mois</a>
                        <a href="#jours" className="list-group-item list-group-item-action">Jours</a>
                        <a href="#corps" className="list-group-item list-group-item-action">Corps</a>
                    </div>
                </div>
            </div>
            <div id="numeros">
                <h5>Numéros (0 - 99)</h5>
                <table className="table table-striped table-hover text-center" id="numbers-table">
                    <thead>
                        <tr>
                            <th scope="col" id="row-hidden"></th>
                            <th scope="col">0</th>
                            <th scope="col">10</th>
                            <th scope="col">20</th>
                            <th scope="col">30</th>
                            <th scope="col">40</th>
                            <th scope="col">50</th>
                            <th scope="col">60</th>
                            <th scope="col">70</th>
                            <th scope="col">80</th>
                            <th scope="col">90</th>
                        </tr>
                    </thead>
                    <tbody>
                    <NumberRow index={0} />
                    <NumberRow index={1} />
                    <NumberRow index={2} />
                    <NumberRow index={3} />
                    <NumberRow index={4} />
                    <NumberRow index={5} />
                    <NumberRow index={6} />
                    <NumberRow index={7} />
                    <NumberRow index={8} />
                    <NumberRow index={9} />
                    </tbody>
                </table>
            </div>
            <SimpleTable array={'questions'} />
            <SimpleTable array={'colours'} />
            <SimpleTable array={'mois'} />
            <SimpleTable array={'jours'} />
            <SimpleTable array={'corps'} />
        </div>
            <div className="sticky-bottom" id="significant-footer">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-1">
                            <a className="btn" href="#top">
                                <img src={uparrow} height="40px" width="40px" id="footer-image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}