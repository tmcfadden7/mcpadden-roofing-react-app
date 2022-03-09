import React from 'react';

export const Jumbotron = ({ bgImg }) => {
	return (
		<>
			<section
				className='jumbotron'
				style={{ backgroundImage: `url(${bgImg})` }}
			>
				<div className='container'></div>
			</section>
		</>
	);
};
