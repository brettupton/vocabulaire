export default function Spinner(props) {
    const { color, topOfPage, size } = props

    return (
        topOfPage ?
            <div className="container min-vh-100 text-center pt-5 mt-3">
                <div className={`spinner-border text-${color}`} role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
            :
            <div>
                <div className={`spinner-border text-${color} spinner-border${size}`} role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
    )

}