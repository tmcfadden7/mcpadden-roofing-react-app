
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
                        <li className='nav-item'>Home <FontAwesomeIcon icon={faHome} /></li>
                        <li className='nav-icon'><FontAwesomeIcon icon={faHome} /></li>
                        <li className='nav-item'>Services <FontAwesomeIcon icon={faWrench} /></li>
                        <li className='nav-icon'><FontAwesomeIcon icon={faWrench} /></li>
                        <li className='nav-item'>About Us <FontAwesomeIcon icon={faIdCard} /></li>
                        <li className='nav-icon'><FontAwesomeIcon icon={faIdCard} /></li>
                        <li className='nav-item'>Contact Us <FontAwesomeIcon icon={faMailBulk} /></li>
                        <li className='nav-icon'><FontAwesomeIcon icon={faMailBulk} /></li>
                    </ul>
                </nav>
                </div>
            </header>
        </>
    )
}

export default Header;