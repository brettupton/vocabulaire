import { Link, Outlet, useLocation } from 'react-router-dom'

function WordQuizHome() {
    return (
        <div className="layout">
            <div className="container" id="word-quiz-container">
                <div className="row">
                    <div className="col">
                        Bonne chance !
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="start" className="btn btn-success mt-4">Quiz</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function WordQuiz() {
    const location = useLocation()
    
    return (
        <div>
            {location.pathname === "/lesmots/quiz" 
            ? <WordQuizHome />
            : <Outlet />}
        </div>
    )
}