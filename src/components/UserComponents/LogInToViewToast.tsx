import { ToastContainer, toast } from "react-toastify"

export const LogInToViewToast = () => {
    toast.error('Log in to see content', {
        position: "top-center",
        theme: "dark",
        toastId: "View"
    })
    return (
        <div className="container">
            <ToastContainer style={{ fontSize: '17px' }} />
        </div>
    )
}