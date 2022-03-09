import React from 'react';

export const Jumbotron = ({ bgImg, bgImgId2 }) => {
	return (
		<>
			<section
				className='jumbotron'
				id={bgImgId2}
				style={{ backgroundImage: `url(${bgImg})` }}
			></section>
		</>
	);
};
