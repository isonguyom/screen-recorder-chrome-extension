
function Header() {
    return (
        <header className="Header">
            <a href='' className="brand"><img className="brand-icon" src="icons/icon-main.svg" /><h2 className="brand-name">HelpMeOut</h2></a>
            <ul className="top-nav">
                <li className="nav-item"><a className="nav-link" href="">Features</a></li>
                <li className="nav-item"><a className="nav-link" href="">How It Works</a></li>
            </ul>
            <a href='/register' className="header-btn btn">Get Started</a>
        </header>
    )
}

export default Header