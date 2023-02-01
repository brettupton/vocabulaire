
type SpinnerProps = {
    color: string,
    topOfPage: boolean,
    size?: string
}

export default function Spinner(props: SpinnerProps) {
    const { color, topOfPage, size } = props

    return (
        topOfPage ?
            <div className="container text-center pt-5">
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