function Footer() {
    return (
        <footer className="Footer">
            <div className="brand"><img className="brand-icon" src="icons/icon-white.svg" /><h2 className="brand-name">HelpMeOut</h2></div>
            <div className="footer-links-grid">
                <div className="footer-links-wrapper">
                <p className="footer-links-title">Menu</p>
                <a className="footer-link" href="">Home</a>
                <a className="footer-link" href="">Converter</a>
                <a className="footer-link" href="">How it Works</a>
                </div>
                <div className="footer-links-wrapper">
                <p className="footer-links-title">About us</p>
                <a className="footer-link" href="">About</a>
                <a className="footer-link" href="">Contact Us</a>
                <a className="footer-link" href="">Privacy Policy</a>
                </div>
                <div className="footer-links-wrapper">
                <p className="footer-links-title">Screen Record</p>
                <a className="footer-link" href="">Browser Window</a>
                <a className="footer-link" href="">Desktop</a>
                <a className="footer-link" href="">Application</a>
                </div>
            </div>
        </footer>
    )
}


export default Footer