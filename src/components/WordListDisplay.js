import WordRow from './rows/WordRow'

export default function WordListDisplay(props) {

    const { wordArray, isMobile } = props

    return (
        <div className="row px-0 pt-4">
            <div className="col">
                <div className="table-responsive">
                    <table className={`table table-sm table-hover table-bordered text-center ${isMobile ? '' : 'fs-3'}`}>
                        <thead>
                            <tr className="table-dark">
                                <th scope="col" className="d-none d-lg-table-cell">#</th>
                                <th scope="col">Français</th>
                                <th scope="col">Anglais</th>
                                <th scope="col">Sexe</th>
                                <th scope="col">Partie du discours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wordArray.map((word, key) => {
                                return <WordRow word={word} index={key} key={word._id} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}