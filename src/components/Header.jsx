function Header() {
    return (
        <header className="Header">
            <div className="brand"><img className="brand-icon" src="icons/icon-main.svg" /><h2 className="brand-name">HelpMeOut</h2></div>
            <ul className="top-nav">
                <li className="nav-item"><a className="nav-link" href="">Features</a></li>
                <li className="nav-item"><a className="nav-link" href="">How It Works</a></li>
            </ul>
            <button className="header-btn">Get Started</button>
        </header>
    )
}

export default Header