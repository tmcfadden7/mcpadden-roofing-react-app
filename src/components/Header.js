
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <>
            <header>
                <div className="container">
                <nav>
                    <h1>McPadden Roofing Inc</h1>
                    <ul>
                        <li className='nav-items'>Home </li>
                        <li className='nav-items'>Services <FontAwesomeIcon icon={faWrench} /></li>
                        <li className='nav-icons'><FontAwesomeIcon icon={faWrench} /></li>
                        <li className='nav-items'>About Us</li>
                        <li className='nav-items'>Contact Us</li>
                    </ul>
                </nav>
                </div>
            </header>
        </>
    )
}

export default Header;