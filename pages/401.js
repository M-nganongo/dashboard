import Head from 'next/head'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

const error1 = () =>{
    return(
        <div>
            <div id="layoutError">
            <div id="layoutError_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="text-center mt-4">
                                    <h1 className="display-1">401</h1>
                                    <p className="lead">Unauthorized</p>
                                    <p>Access to this resource is denied.</p>
                                    <Link href="/">
                                        <a>
                                            <FontAwesomeIcon className="me-1" icon="fa-solid fa-arrow-left" />
                                            Return to Dashboard
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </div>
    )
}
export default error1;