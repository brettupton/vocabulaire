import significantList from "../lists/significantlist"
import NumberRow from '../components/rows/NumberRow'
import QuestionRow from '../components/rows/QuestionRow'
import ColorsRow from '../components/rows/ColorsRow'
import MonthRow from '../components/rows/MonthRow'
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
                    </div>
                </div>
            </div>
            <div id="numeros">
                <h5>Numéros (0 - 99)</h5>
                <table className="table table-striped table-hover" id="numbers-table">
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
            <div id="questions">
                <h5>Questions</h5>
                <table className="table table-striped table-hover w-50" id="numbers-table">
                    <thead>
                        <tr>
                            <th scope="col">Who</th>
                            <th scope="col">What</th>
                            <th scope="col">Where</th>
                            <th scope="col">When</th>
                            <th scope="col">Why</th>
                            <th scope="col">How</th>
                            <th scope="col">Which</th>
                            <th scope="col">How Many</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {Object.keys(significantList.questions).map((question) => {
                                return (<QuestionRow question={question} />)
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="colours">
                <h5>Colours</h5>
                <table className="table table-striped table-hover w-50" id="numbers-table">
                    <thead>
                        <tr>
                            <th scope="col">Black</th>
                            <th scope="col">White</th>
                            <th scope="col">Blue</th>
                            <th scope="col">Brown</th>
                            <th scope="col">Green</th>
                            <th scope="col">Gray</th>
                            <th scope="col">Orange</th>
                            <th scope="col">Pink</th>
                            <th scope="col">Purple</th>
                            <th scope="col">Red</th>
                            <th scope="col">Yellow</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {Object.keys(significantList.colors).map((color) => {
                                return (<ColorsRow color={color} />)
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="mois">
                <h5>Mois</h5>
                <table className="table table-striped table-hover w-50" id="numbers-table">
                    <thead>
                        <tr>
                            <th scope="col">January</th>
                            <th scope="col">Febuary</th>
                            <th scope="col">March</th>
                            <th scope="col">April</th>
                            <th scope="col">May</th>
                            <th scope="col">June</th>
                            <th scope="col">July</th>
                            <th scope="col">August</th>
                            <th scope="col">September</th>
                            <th scope="col">October</th>
                            <th scope="col">November</th>
                            <th scope="col">December</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {significantList.months.map((month, i) => {
                                return (<MonthRow index={i} />)
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
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