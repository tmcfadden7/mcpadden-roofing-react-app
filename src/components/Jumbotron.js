import React from 'react';

export const Jumbotron = ({ bgImg, bgImgClass }) => {
	console.log(bgImgClass);
	return (
		<>
			<section
				className={`jumbotron ${bgImgClass ? bgImgClass : ''}`}
				style={{ backgroundImage: `url(${bgImg})` }}
			></section>
		</>
	);
};
