import { Link } from 'react-router-dom'

interface CardProps {
    imageSrc: string,
    header: string,
    link: string
}

export default function Card(props: CardProps) {

    const { imageSrc, header, link } = props

    return (
        <Link to={link}>
            <button className="w-100 text-black bg-white rounded" id="card-container">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col">
                            <img src={imageSrc} alt="Card Icon" />
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