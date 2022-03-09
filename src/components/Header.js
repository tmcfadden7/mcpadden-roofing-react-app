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
			<header>
				<section id='top-header' className='py-3'>
					<div className='container'>
						<div className='d-flex justify-content-around align-items-center'>
							<h1 className='text-center'>McPadden Roofing</h1>
							<div className='text-white'>
								<p className='lead'>
									<strong>Serving all of NY/FL</strong>
								</p>
								<p className='lead my-2'>
									<strong>Call 555-555-5555</strong>
								</p>
							</div>
						</div>
					</div>
				</section>
				<div className='container'>
					<nav>
						<ul className='d-flex justify-content-around align-items-center text-white'>
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
			<section className='jumbotron'>
				<div className='container'></div>
			</section>
		</>
	);
}

export default Header;
