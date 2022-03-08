import React from 'react';

export const CallToAction = () => {
	return (
		<>
			<section className='contact-container px-1 py-5 p-sm-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md-6'>
							<h2 className='h2'>Free Estimates</h2>
							<ul className='list-group my-3'>
								<li className='list-group-item'>Roof restoration</li>
								<li className='list-group-item'>Gutter cleaning</li>
								<li className='list-group-item'>Shingle replacement</li>
								<li className='list-group-item'>Chimney repair</li>
							</ul>
							<button className='btn'>Call Us</button>
						</div>
						<div className='col-12 col-md-6'>
							<h2 className='h2 mb-3'>Sign up for more info</h2>
							<form>
								<div className='mb-3'>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Email address
									</label>
									<input
										type='email'
										className='form-control'
										id='exampleInputEmail1'
										aria-describedby='emailHelp'
									/>
									<div id='emailHelp' className='form-text'>
										We'll never share your email with anyone else.
									</div>
								</div>
								<button type='submit' className='btn'>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CallToAction;
