
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faIdCard, faMailBulk, faWrench } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <>
            <header>
                <div className="container">
                <nav>
                    <h1>McPadden Roofing Inc</h1>
                    <ul>
                        <li className='nav-item'><a href="#home">Home <FontAwesomeIcon icon={faHome} /></a></li>
                        <li className='nav-icon'><a href="#home"><FontAwesomeIcon icon={faHome} /></a></li>
                        <li className='nav-item'><a href="#home">Services <FontAwesomeIcon icon={faWrench} /></a></li>
                        <li className='nav-icon'><a href="#home"><FontAwesomeIcon icon={faWrench} /></a></li>
                        <li className='nav-item'><a href="#home">About Us <FontAwesomeIcon icon={faIdCard} /></a></li>
                        <li className='nav-icon'><a href="#home"><FontAwesomeIcon icon={faIdCard} /></a></li>
                        <li className='nav-item'><a href="#home">Contact Us <FontAwesomeIcon icon={faMailBulk} /></a></li>
                        <li className='nav-icon'><a href="#home"><FontAwesomeIcon icon={faMailBulk} /></a></li>
                    </ul>
                </nav>
                </div>
            </header>
        </>
    )
}

export default Header;