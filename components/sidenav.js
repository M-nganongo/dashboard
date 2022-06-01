import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from 'next/link'

const Sidenav = () => {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <Link href="/">
                                <a className="nav-link">
                                    <div className="sb-nav-link-icon">
                                        <FontAwesomeIcon icon="fa-solid fa-gauge-high" />
                                    </div>
                                Dashboard
                                </a>
                            </Link>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                               data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon">
                                    <FontAwesomeIcon icon="fa-solid fa-table-columns" />
                                </div>
                                Layouts
                                <div className="sb-sidenav-collapse-arrow">
                                    <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                                </div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                                 data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link href="/layout-static">
                                        <a className="nav-link">Static Navigation</a>
                                    </Link>
                                    <Link href="/layout-sidenav-light">
                                        <a className="nav-link">Light Sidenav</a>
                                    </Link>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                               data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon">
                                    <FontAwesomeIcon icon="fa-solid fa-book-open" />
                                </div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow">
                                    <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                                </div>
                            </a>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo"
                                 data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                                       data-bs-target="#pagesCollapseAuth" aria-expanded="false"
                                       aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow">
                                            <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                                        </div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne"
                                         data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <Link href="/login">
                                                <a className="nav-link">Login</a>
                                            </Link>
                                            <Link href="/register">
                                                <a className="nav-link">Register</a>
                                            </Link>
                                            <Link href="/password">
                                                <a className="nav-link">Forgot Password</a>
                                            </Link>
                                        </nav>
                                    </div>
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                                       data-bs-target="#pagesCollapseError" aria-expanded="false"
                                       aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sb-sidenav-collapse-arrow">
                                            <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                                        </div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne"
                                         data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <Link href="/401">
                                                <a className="nav-link">401 Page</a>
                                            </Link>
                                            <Link href="/404">
                                                <a className="nav-link">404 Page</a>
                                            </Link>
                                            <Link href="/500">
                                                <a className="nav-link">500 Page</a>
                                            </Link>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Addons</div>
                            <Link href="/charts">
                                <a className="nav-link">
                                    <div className="sb-nav-link-icon">
                                        <FontAwesomeIcon icon="fa-solid fa-chart-area" />
                                    </div>
                                    Charts
                                </a>
                            </Link>
                            <Link href="/tables">
                                <a className="nav-link">
                                    <div className="sb-nav-link-icon">
                                        <FontAwesomeIcon icon="fa-solid fa-table" />
                                    </div>
                               Tables
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
    )
}

export default Sidenav