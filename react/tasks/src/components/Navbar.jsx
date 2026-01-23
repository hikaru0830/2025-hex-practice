import { Link } from 'react-router-dom'
import "./components.css"

function App() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">主線任務</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/week1">Week1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/week2">Week2</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default App