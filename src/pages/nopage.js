import { useNavigate } from "react-router-dom"


export default function NoPage() {

    const navigate = useNavigate()

    return (
        <div className="container pt-5 text-center fs-3 text-white">
            <div className="row pt-5">
                <div className="col">
                    Page not found
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
                </div>
            </div>
        </div>
    )
}