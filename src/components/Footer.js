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
					<nav className='p-2'>
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
					<div className='row text-center p-2'>
						<div className='col-12'>
							<p>
								&copy; 2022 <span>McPadden Roofing Inc</span>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
