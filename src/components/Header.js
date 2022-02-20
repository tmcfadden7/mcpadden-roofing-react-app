
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
                        <li>Home </li>
                        <li>Services <FontAwesomeIcon icon={faWrench} /></li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
                </div>
            </header>
        </>
    )
}

export default Header;