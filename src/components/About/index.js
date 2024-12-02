import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faUnity } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
	const [letterClass, setLetterClass] = useState('text-animate');

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass('text-animate-hover');
		}, 3000);
	}, []);

	return (
		<>
			<div className='container about-page'>
				<div className='text-zone'>
					<h1>
						<AnimatedLetters letterClass={letterClass} strArray={'About me'.split('')} idx={8} />
					</h1>
					<div className='about-p'>
						<p>
							Hi there! I'm Johnathan Tuong Luong, a computer science graduate from the University of Central Florida.
							My academic background and hands-on projects have helped me develop a strong foundation in development,
							and I’m excited about the constant innovation in technology. I’m eager to contribute to building solutions
							that make a real difference in the world.
						</p>
						<p>
							I’m currently seeking a role at a company where I can learn from experienced professionals and continue
							growing my skills. I love tackling new challenges, learning different technologies, and improving my
							coding practices. I'm committed to delivering high-quality work and adapting to new tools and frameworks
							as needed.
						</p>
						<p>
							While my technical skills are certainly important, I also bring a creative approach to problem-solving.
							I’m passionate about building solutions that are not only functional but impactful. I’d love the
							opportunity to bring my skills, passion, and dedication to your team.
						</p>
					</div>
				</div>

				<div className='stage-cube-cont'>
					<div className='cubespinner'>
						<div className='face1'>
							<FontAwesomeIcon icon={faUnity} color='#222C37' />
						</div>
						<div className='face2'>
							<FontAwesomeIcon icon={faHtml5} color='#F06529' />
						</div>
						<div className='face3'>
							<FontAwesomeIcon icon={faCss3} color='#28A4D9' />
						</div>
						<div className='face4'>
							<FontAwesomeIcon icon={faReact} color='#5ED4F4' />
						</div>
						<div className='face5'>
							<FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
						</div>
						<div className='face6'>
							<FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
						</div>
					</div>
				</div>
			</div>
			<Loader type='cube-transition' />
		</>
	);
};

export default About;
