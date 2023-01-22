export default function Alert(props) {
    const { message, size = '8' } = props

    return (
        <div className="row fs-5 justify-content-center">
            <div className={`col-${size} pt-5`}>
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    {message}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
    )
}