import { Link } from 'react-router-dom'

export default function Card(props) {

    const { imageSrc, header, link, isMobile } = props

    return (
        <Link to={link}>
            <button className="w-100 text-black bg-white rounded" id="card-container">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col">
                            <img src={imageSrc} height="100%" width={`${isMobile ? '95%' : '50%'}`} alt="Card Icon" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {header}
                        </div>
                    </div>
                </div>
            </button>
        </Link>
    )
}