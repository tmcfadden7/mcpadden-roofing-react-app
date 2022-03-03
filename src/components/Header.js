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
						<div className='d-flex justify-content-around align-items-center'>
							<h1 className='h1 p-2'>McPadden Roofing Inc</h1>
							<div>
								<p>
									<strong>Serving all of NY/FL</strong>
								</p>
								<p className='my-2'>
									<strong>Call now! 555-555-5555</strong>
								</p>
							</div>
						</div>

						<ul className='d-flex justify-content-around align-items-center'>
							<li className='nav-item d-none d-md-block p-3'>
								<a href='#home'>
									Home <FontAwesomeIcon icon={faHome} />
								</a>
							</li>
							<li className='nav-icon h3 d-md-none'>
								<a href='#home'>
									<FontAwesomeIcon icon={faHome} />
								</a>
							</li>
							<li className='nav-item d-none d-md-block p-3'>
								<a href='#services'>
									Services <FontAwesomeIcon icon={faWrench} />
								</a>
							</li>
							<li className='nav-icon h3 d-md-none'>
								<a href='#services'>
									<FontAwesomeIcon icon={faWrench} />
								</a>
							</li>
							<li className='nav-item d-none d-md-block p-3'>
								<a href='#about-us'>
									About Us <FontAwesomeIcon icon={faIdCard} />
								</a>
							</li>
							<li className='nav-icon h3 d-md-none'>
								<a href='#about-us'>
									<FontAwesomeIcon icon={faIdCard} />
								</a>
							</li>
							<li className='nav-item d-none d-md-block p-3'>
								<a href='#contact-us'>
									Contact Us <FontAwesomeIcon icon={faMailBulk} />
								</a>
							</li>
							<li className='nav-icon h3 d-md-none'>
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
