import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

const error2 = () =>{
    return(
        <div>
            <div id="layoutError">
            <div id="layoutError_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="text-center mt-4">
                                    <img className="mb-4 img-error" src="assets/img/error-404-monochrome.svg" />
                                    <p className="lead">This requested URL was not found on this server.</p>
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
export default error2;