import NumberRow from '../components/rows/NumberRow'
import SimpleTable from '../components/SimpleTable'
import uparrow from '../images/icons/arrow-up-circle.svg'
import { useState, useEffect } from 'react'
import significantList from '../lists/significantlist'

export default function Significatifs() {

    const [width, setWidth] = useState(window.innerWidth)

    const isMobile = (width <= 768)

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }

    return (
        <div className="container min-vh-100 fs-5 mx-0 min-vw-100" id="top" style={{ paddingTop: `${isMobile ? '20%' : '7%'}` }}>
            <div className="row text-center align-content-start">
                <div className={`col-${isMobile ? '12' : '4'}`}>
                    <div className="container bg-white rounded">
                        <div className="row border border-dark">
                            <div className="col">
                                Table des matières
                            </div>
                        </div>
                        <div className="row border border-dark">
                            <div className="col">
                                <a className="btn" href="#numeros">Numéros (0 - 99)</a>
                            </div>
                        </div>
                        <div className="row border border-dark">
                            <div className="col">
                                <a className="btn" href="#questions">Questions</a>
                            </div>
                        </div>
                        <div className="row border border-dark">
                            <div className="col">
                                <a className="btn" href="#mois">Mois</a>
                            </div>
                        </div>
                        <div className="row border border-dark">
                            <div className="col">
                                <a className="btn" href="#jours">Jours</a>
                            </div>
                        </div>
                        <div className="row border border-dark">
                            <div className="col">
                                <a className="btn" href="#colours">Colours</a>
                            </div>
                        </div>
                        <div className="row border border-dark">
                            <div className="col">
                                <a className="btn" href="#corps">Corps</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center py-5" id="numeros">
                <div className="col">
                    <div class="table-responsive">
                        <table class="table table-dark table-sm table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
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
                                <NumberRow
                                    index={0}
                                    significantArray={significantList} />
                                <NumberRow
                                    index={1}
                                    significantArray={significantList} />
                                <NumberRow
                                    index={2}
                                    significantArray={significantList} />
                                <NumberRow
                                    index={3}
                                    significantArray={significantList} />
                                <NumberRow
                                    index={4}
                                    significantArray={significantList} />
                                <NumberRow
                                    index={5}
                                    significantArray={significantList} />
                                <NumberRow
                                    index={6}
                                    significantArray={significantList} />
                                <NumberRow
                                    index={7}
                                    significantArray={significantList} />
                                <NumberRow
                                    index={8}
                                    significantArray={significantList} />
                                <NumberRow
                                    index={9}
                                    significantArray={significantList} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row text-center pb-5" id="questions">
                <div className="col">
                    <div class="table-responsive">
                        <SimpleTable
                            significantArray={significantList}
                            object={'questions'} />
                    </div>
                </div>
            </div>
            <div className="row text-center pb-5" id="mois">
                <div className="col">
                    <div class="table-responsive">
                        <SimpleTable
                            significantArray={significantList}
                            object={'mois'} />
                    </div>
                </div>
            </div>
            <div className="row text-center pb-5" id="jours">
                <div className="col">
                    <div class="table-responsive">
                        <SimpleTable
                            significantArray={significantList}
                            object={'jours'} />
                    </div>
                </div>
            </div>
            <div className="row text-center pb-5" id="colours">
                <div className="col">
                    <div class="table-responsive">
                        <SimpleTable
                            significantArray={significantList}
                            object={'colours'} />
                    </div>
                </div>
            </div>
            <div className="row text-center pb-5" id="corps">
                <div className="col">
                    <div class="table-responsive">
                        <SimpleTable
                            significantArray={significantList}
                            object={'corps'} />
                    </div>
                </div>
            </div>
            <div className="row pb-3">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className={`col-${isMobile ? '3' : '1'}`}>
                            <a className="btn" href="#top">
                                <img src={uparrow} alt="uparrow" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}