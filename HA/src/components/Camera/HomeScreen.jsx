import React, {
	useState,
	useEffect
} from 'react';
import './cam.css';
const HomeScreen = () => {

	return (
		<div className="container">
			<h1 className="heading">
				 Video Streaming
			</h1>
			<div className="video-preview">
				
			<iframe width="560" height="315" src="https://www.youtube.com/embed/BPHAr4QGGVE?si=cuZv-uVzfxa4gAqO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
						
			</div>
			<div>
			</div>
		</div>
	);
};
export default HomeScreen;
