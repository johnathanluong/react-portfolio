import './index.scss';
import Logo from '../../assets/images/logo_JL.png';
import LogoSubtitle from '../../assets/images/logo_subtitle.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faFolderOpen, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
	const [showNav, setShowNav] = useState(false);

	return (
		<div className='nav-bar'>
			<Link className='logo' to='/'>
				<img src={Logo} alt='logo' />
				<img className='sub-logo' src={LogoSubtitle} alt='logoSubtitle' />
			</Link>
			<nav className={showNav ? 'mobile-show' : ''}>
				<NavLink exact='true' activeclassname='active' to='/' onClick={() => setShowNav(false)}>
					<FontAwesomeIcon icon={faHome} color='#4d4d4e' />
				</NavLink>
				<NavLink
					exact='true'
					activeclassname='active'
					className='about-link'
					to='/about/'
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faUser} color='#4d4d4e' />
				</NavLink>
				<NavLink
					exact='true'
					activeclassname='active'
					className='portfolio-link'
					to='/portfolio/'
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faFolderOpen} color='#4d4d4e' />
				</NavLink>
				<NavLink
					exact='true'
					activeclassname='active'
					className='contact-link'
					to='/contact/'
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
				</NavLink>
				<FontAwesomeIcon
					className='closeIcon'
					icon={faClose}
					color='$primary-color'
					size='3x'
					onClick={() => setShowNav(false)}
				/>
			</nav>
			<ul className={showNav ? 'mobile-show' : ''}>
				<li>
					<a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/johnathan-luong/'>
						<FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
					</a>
				</li>
				<li>
					<a target='_blank' rel='noreferrer' href='https://github.com/johnathanluong'>
						<FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
					</a>
				</li>
			</ul>
			<FontAwesomeIcon
				className='barsIcon'
				icon={faBars}
				color='$primary-color'
				size='3x'
				onClick={() => setShowNav(true)}
			/>
		</div>
	);
};

export default Sidebar;
