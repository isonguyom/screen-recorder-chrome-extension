import { Link } from "react-router-dom"
import iconMain from '/icons/icon-main.svg'

function Header() {
    return (
        <header className="Header">
            <a href='' className="brand"><img className="brand-icon" src={iconMain} /><h2 className="brand-name">HelpMeOut</h2></a>
            <ul className="top-nav">
                <li className="nav-item"><a className="nav-link" href="">Features</a></li>
                <li className="nav-item"><a className="nav-link" href="">How It Works</a></li>
            </ul>
            <Link to='register' className="header-btn btn">Get Started</Link>
        </header>
    )
}

export default Header