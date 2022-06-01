import Footer from "./footer";
import Navbar from "./navbar";
import Sidenav from "./sidenav";
import Script from "next/script";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                   <Sidenav/>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
        </>
    )
}

export default Layout