import React from 'react';

export const Jumbotron = ({ bgImg, bgImgClass }) => {
	return (
		<>
			<section
				className={`jumbotron ${bgImgClass}`}
				style={{ backgroundImage: `url(${bgImg})` }}
			></section>
		</>
	);
};
