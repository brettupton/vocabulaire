import { useContext } from "react"
import { MobileContext } from "pages/layout"
import notredame from '../../images/notre-dame.png'
import triomphe from '../../images/triomphe.png'
import moulin from '../../images/moulin.png'
import nimes from '../../images/nimes.png'
import mots from '../../images/mots.png'
import frlogo from '../../images/frlogo.png'
import Card from '../../components/Card'

export const MotsHome = () => {

    const isMobile = useContext(MobileContext)

    return (
        <div className="container min-vh-100 text-center pt-5">
            <div className="row pt-5">
                <div className="col">
                    <img src={isMobile ? frlogo : mots} height="60%" alt="Page Title" />
                </div>
            </div>
            <div className="row pb-5">
                <div className="col-sm">
                    <Card imageSrc={notredame} header={"Flashcards"} link={"flashcards"} />
                </div>
                <div className="col-sm">
                    <Card imageSrc={triomphe} header={"Significatifs"} link={"significatifs"} />
                </div>
                <div className="col-sm">
                    <Card imageSrc={moulin} header={"Liste de mots"} link={"liste"} />
                </div>
                <div className="col-sm">
                    <Card imageSrc={nimes} header={"Ajouter"} link={"ajouter"} />
                </div>
            </div>
        </div>
    )
}