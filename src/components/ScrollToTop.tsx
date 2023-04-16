import { useEffect, PropsWithChildren } from "react"
import { useLocation } from "react-router-dom"



const ScrollToTop = (props: PropsWithChildren): JSX.Element => {

    const { children } = props

    const { pathname } = useLocation()

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" })

    }, [pathname])

    return <>{children}</>

}
export default ScrollToTop