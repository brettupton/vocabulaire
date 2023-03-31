import { useNavigate } from "react-router-dom"


export const NoPage = () => {

    const navigate = useNavigate()

    return (
        <div className="container text-center fs-3 text-white pt-5">
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