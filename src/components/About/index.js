import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={"About me".split("")} idx={15}/>
                </h1>
                <p>
                    Hello! I'm Johnathan Luong, a passionate computer science student currently enrolled at the University of Central Florida. 
                    My academic pursuits and coding projects have equipped me with a robust set of skills in development.
                    I strive to make a meaningful impact in development of the always evolving technologies that drive our lives.

                </p>
                <p>
                    I'm looking for a role in an established company so to gain the opportunity to work with talented individuals.
                    Learning new technologies and developement skills is an exciting challenge that I am dedicated to pursuing.
                    My commitment to excellence is evident in my approach to coding and my ability to adapt to new languages and frameworks.
                </p>
                <p>
                    Beyond technical ability, I bring a creative mindset to innovation and a commitment to creating solutions that make a real impact.
                    I am eager to bring my passion, skills, and dedication to your team!              
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About