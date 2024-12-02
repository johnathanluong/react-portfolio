import { useEffect, useRef, useState } from 'react';
import './index.scss';

const Slideshow = (images) => {
	const [index, setIndex] = useState(0);
	const timeoutRef = useRef(null);

	const imagesArr = Object.values(images)[0];

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() => setIndex((prevIndex) => (prevIndex === imagesArr.length - 1 ? 0 : prevIndex + 1)),
			4000
		);

		return () => {
			resetTimeout();
		};
	}, [index, imagesArr.length]);

	return (
		<div className='slideshow'>
			<div className='slideshowImages' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
				{imagesArr.map((image, idx) => {
					return (
						<div className='slide' key={idx}>
							<img className='slideImage' src={image} alt='' />
						</div>
					);
				})}
			</div>
			<div className='slideshowDots'>
				{imagesArr.map((_, idx) => {
					return (
						<div
							key={idx}
							className={`slideshowDot${index === idx ? ' active' : ''}`}
							onClick={() => {
								setIndex(idx);
							}}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default Slideshow;
