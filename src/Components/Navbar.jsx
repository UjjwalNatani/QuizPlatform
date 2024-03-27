import Logo from "./Images/Logo.png";
import {Link} from 'react-router-dom';

export function Navbar() {
    return (
        <div className="nav navbar navbar-expand-lg fixed-top">
            <a href="/#home"><img className="nav-logo" src={Logo} alt="logo" title="QuizWise" /></a>
            <h3>QuizWise</h3>
            <div className="navlinks">
                <Link to="/#Home" title="Home" className="navbar-brand">Home</Link>
                <Link to="/Myquiz" title="My Quiz" className="navbar-brand">My Quiz</Link>
            </div>
        </div>
    )
}