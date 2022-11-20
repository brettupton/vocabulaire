import { Link } from 'react-router-dom'

export default function Card(props) {

    const { imageSrc, header, link, imageWidth } = props

    return (
        <Link to={link}>
            <button className="w-100" id="card-container">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col">
                            <img src={imageSrc} width={imageWidth} alt="Card Icon"/>
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