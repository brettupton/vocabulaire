export default function Alert(props) {
    const { message } = props

    return (
        <div className="row">
            <div className="col pt-5">
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    {message}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
    )
}