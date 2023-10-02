import { Outlet } from "react-router-dom";
import Header from "../components/Header"
import Footer from '../components/Footer'


function Layout() {
    return (
        <section className="Home">
<Header />
<Outlet />
<Footer />
        </section>
    )
}

export default Layout