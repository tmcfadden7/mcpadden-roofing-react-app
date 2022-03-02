import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faIdCard,
	faMailBulk,
	faWrench,
} from '@fortawesome/free-solid-svg-icons';

function Header() {
	return (
		<>
			<header className='jumbotron'>
				<div className='container'>
					<nav>
						<h1 className='h1'>McPadden Roofing Inc</h1>
						<ul>
							<li className='nav-item'>
								<a href='#home'>
									Home <FontAwesomeIcon icon={faHome} />
								</a>
							</li>
							<li className='nav-icon'>
								<a href='#home'>
									<FontAwesomeIcon icon={faHome} />
								</a>
							</li>
							<li className='nav-item'>
								<a href='#services'>
									Services <FontAwesomeIcon icon={faWrench} />
								</a>
							</li>
							<li className='nav-icon'>
								<a href='#services'>
									<FontAwesomeIcon icon={faWrench} />
								</a>
							</li>
							<li className='nav-item'>
								<a href='#about-us'>
									About Us <FontAwesomeIcon icon={faIdCard} />
								</a>
							</li>
							<li className='nav-icon'>
								<a href='#about-us'>
									<FontAwesomeIcon icon={faIdCard} />
								</a>
							</li>
							<li className='nav-item'>
								<a href='#contact-us'>
									Contact Us <FontAwesomeIcon icon={faMailBulk} />
								</a>
							</li>
							<li className='nav-icon'>
								<a href='#contact-us'>
									<FontAwesomeIcon icon={faMailBulk} />
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}

export default Header;
