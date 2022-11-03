import { Link } from 'react-router-dom'

export default function Card(props) {

    const { image, header, link, imageHeight, imageWidth } = props

    return (
        <Link to={link}>
            <button className="mt-5" id="card-container">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col">
                            <img src={image} height={imageHeight} width={imageWidth} />
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