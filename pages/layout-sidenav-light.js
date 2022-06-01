import Link from "next/link"

const LayoutSidenavLight = () => {
    return (
        <div>
            <main>
                <div className="container-fluid px-4">
                    <h1 className="mt-4">Sidenav Light</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item">
                            <Link href="/">
                                <a>Dashboard</a>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active">Sidenav Light</li>
                    </ol>
                    <div className="card mb-4">
                        <div className="card-body">
                            This page is an example of using the light side navigation option. By appending the
                            <code>.sb-sidenav-light</code>
                            class to the
                            <code>.sb-sidenav</code>
                            class, the side navigation will take on a light color scheme. The
                            <code>.sb-sidenav-dark</code>
                            is also available for a darker option.
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default LayoutSidenavLight