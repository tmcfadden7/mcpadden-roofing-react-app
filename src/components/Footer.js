import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faIdCard,
	faMailBulk,
	faWrench,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<>
			<footer className='p-4'>
				<div className='container'>
					<nav>
						<ul className='d-flex'>
							<li>
								<a href='#home'>
									Home <FontAwesomeIcon icon={faHome} />
								</a>
							</li>
							<li>
								<a href='#home'>Home</a>
							</li>
							<li>
								<a href='#home'>Home</a>
							</li>
							<li>
								<a href='#home'>Home</a>
							</li>
						</ul>
					</nav>
					<div className='row'>
						<div className='col-12 col-md-6'>
							<h1>McPadden Roofing Inc</h1>
						</div>
						<div className='col-12 col-md-6'></div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
