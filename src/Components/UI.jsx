import { Link } from "react-router-dom"
import Home from "../Pages/Home"
import './UI.css'


const UI = () => {
    const handleClick = () => {
        window.location.reload();
    }
    return(
        <div className="Main">
            <h1 className="Name">Fori.inc</h1>
            <nav>
                <Link to={'/'} className="Links">Home</Link>
                <Link to={'/TaskList'} className="Links">TaskList</Link>
                <Link to={'/API'} className="Links">API</Link>
            </nav>
        </div>
    )

}

export default UI