import { Link, useParams } from 'react-router-dom';
import './portItem.scss';
import Loader from 'react-loaders';
import portfolioData from '../../data/portfolio.json';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Slideshow from '../Slideshow';

const PortItem = () => {
	const { item } = useParams();
	const [SelectedPort, setSelectedPort] = useState({});
	const [letterClass, setLetterClass] = useState('text-animate');

	// finds the portfolio item based on param
	useEffect(() => {
		if (portfolioData.portfolio.length > 0 && item) {
			const foundItem = portfolioData.portfolio.find((portfolioItem) => portfolioItem.portLink === item);
			if (foundItem) {
				setSelectedPort(foundItem);
			}
		}
	}, [item]);

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass('text-animate-hover');
		}, 3000);
	}, []);

	return (
		<>
			<div className='container portItem-page'>
				<h1 className='page-title'>
					<AnimatedLetters letterClass={letterClass} strArray={`${SelectedPort.title}`.split('')} idx={10} />
				</h1>
				<div className='description-zone'>
					<div className='description-text' dangerouslySetInnerHTML={{ __html: SelectedPort.detailedDescription }} />
					{SelectedPort.images && (
						<div className='slideshow-container'>
							<Slideshow images={SelectedPort.images} />
						</div>
					)}
				</div>
				<div className='buttons-zone'>
					{SelectedPort.url && (
						<Link className='portUrl' to={SelectedPort.url} target='_blank'>
							Visit
						</Link>
					)}

					<Link className='backButton' to='/portfolio/'>
						Back
					</Link>
				</div>
			</div>
			<Loader type='cube-transition' />
		</>
	);
};

export default PortItem;
