import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faIdCard, faMailBulk, faWrench } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h1>McPadden Roofing Inc</h1>
                        </div>
                        <div className="col-12 col-md-6">
                            <ul class="list-group">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#home">Home <FontAwesomeIcon icon={faHome} /></a>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <a href="#home">Home</a>
                                    <span class="badge bg-primary rounded-pill">2</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#home">Home</a>
                                    <span class="badge bg-primary rounded-pill">1</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#home">Home</a>
                                    <span class="badge bg-primary rounded-pill">1</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;