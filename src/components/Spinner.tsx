type SpinnerProps = {
    color: string,
    buttonSpinner: boolean
}

export const Spinner = (props: SpinnerProps) => {
    const { color, buttonSpinner } = props

    return (
        (!buttonSpinner) ?
            <div className="container text-center pt-5">
                <div className={`spinner-border text-${color}`} role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
            :
            <div>
                <div className={`spinner-border text-${color} spinner-border-sm`} role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
    )
}